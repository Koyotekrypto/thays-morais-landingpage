import fs from "fs";

const API_KEY = "AQ.Ab8RN6KBVo9QPFXy7YdsIPwGVa3zlrb_k2JczxtNM3Rgln_Pqw";
const PROJECT_ID = "15320651215612586174";
const SCREEN_ID = "99632eb95079473e8589c325979aa4f5";
const URL = `https://stitch.googleapis.com/v1/projects/${PROJECT_ID}/screens/${SCREEN_ID}`;

async function run() {
    const res = await fetch(URL, {
        headers: {
            "X-Goog-Api-Key": API_KEY,
        },
    });
    if (!res.ok) {
        console.error("Failed to fetch screen", res.status, res.statusText);
        const text = await res.text();
        console.error(text);
        return;
    }
    const data = await res.json();
    fs.writeFileSync("screen.json", JSON.stringify(data, null, 2));
    console.log("Saved screen.json");

    // The code usually comes from a separate download link, or maybe an export endpoint.
    // Wait, does the payload have a 'code' field or a file URL?

    if (data.screenshot && data.screenshot.downloadUrl) {
        console.log("Downloading screenshot from", data.screenshot.downloadUrl);
        const imgRes = await fetch(data.screenshot.downloadUrl);
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync("screenshot.png", Buffer.from(buffer));
        console.log("Saved screenshot.png");
    }

    if (data.htmlCode && data.htmlCode.downloadUrl) {
        console.log("Downloading HTML code from", data.htmlCode.downloadUrl);
        const htmlRes = await fetch(data.htmlCode.downloadUrl);
        const text = await htmlRes.text();
        fs.writeFileSync("index.html", text);
        console.log("Saved index.html");
    }
}

run().catch(console.error);
