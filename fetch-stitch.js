const fs = require("fs");
const { execSync } = require("child_process");

const PROJECT_ID = "6226505574339480181";
const SCREEN_ID = "66e66214e56048c1a7ec687d63bd3f0b";
const URL = `https://stitch.googleapis.com/mcp`;

async function run() {
    console.log("Getting OAuth token from gcloud...");
    let token = "";
    try {
        token = execSync("gcloud auth print-access-token").toString().trim();
    } catch (e) {
        console.error("Failed to get gcloud token");
        return;
    }

    console.log("Calling get_screen via MCP...");
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "x-goog-user-project": "whatsappagent-3f531",
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "1",
            method: "tools/call",
            params: {
                name: "get_screen",
                arguments: {
                    name: `projects/${PROJECT_ID}/screens/${SCREEN_ID}`,
                    projectId: PROJECT_ID,
                    screenId: SCREEN_ID
                }
            }
        })
    });

    if (!res.ok) {
        console.error("Failed to fetch screen via MCP", res.status, res.statusText);
        const text = await res.text();
        console.error(text);
        return;
    }

    const data = await res.json();
    console.log("MCP Response arrived.");
    fs.writeFileSync("screen-mcp-response.json", JSON.stringify(data, null, 2));

    if (data.error) {
        console.error("MCP Error:", data.error);
        return;
    }

    const result = data.result;
    if (result && result.content) {
        const textContent = result.content.find(c => c.type === 'text');
        if (textContent) {
            try {
                const screenData = JSON.parse(textContent.text);
                fs.writeFileSync("screen.json", JSON.stringify(screenData, null, 2));
                console.log("Parsed and saved screen.json");
                
                // Try to download assets
                if (screenData.screenshot && screenData.screenshot.downloadUrl) {
                    console.log("Downloading screenshot from", screenData.screenshot.downloadUrl);
                    const imgRes = await fetch(screenData.screenshot.downloadUrl);
                    const buffer = await imgRes.arrayBuffer();
                    fs.writeFileSync("screenshot.png", Buffer.from(buffer));
                    console.log("Saved screenshot.png");
                }

                if (screenData.htmlCode && screenData.htmlCode.downloadUrl) {
                    console.log("Downloading HTML code from", screenData.htmlCode.downloadUrl);
                    const htmlRes = await fetch(screenData.htmlCode.downloadUrl);
                    const text = await htmlRes.text();
                    fs.writeFileSync("index.html", text);
                    console.log("Saved index.html");
                }                
            } catch (e) {
                console.error("Failed to parse inner JSON", e);
            }
        }
    }
}

run().catch(console.error);
