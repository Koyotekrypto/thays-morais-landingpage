const fs = require("fs");

const API_KEY = "AQ.Ab8RN6KBVo9QPFXy7YdsIPwGVa3zlrb_k2JczxtNM3Rgln_Pqw";
const PROJECT_ID = "15320651215612586174";
const URL = `https://stitch.googleapis.com/v1/projects/${PROJECT_ID}/screens`;

const prompt = `Design a high-fidelity desktop landing page for 'CONECTADEV', a premium software development agency in Brazil focused on SMEs (PMEs).

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first
- Theme: Dark, Boutique Tech — sophisticated, trustworthy, futuristic but accessible
- Background: Deep Navy (#0D1B2A)
- Surface: Midnight Panel (#1B2838) for cards with glassmorphism
- Primary Accent: Electric Cyan (#00B4D8) for CTAs and interactive highlights
- Text Primary: Clean White (#FFFFFF)
- Text Secondary: Silver Steel (#E0E1DD)
- Typography: Montserrat (headings, bold/extrabold), Inter (body, regular/medium)
- Containers: Generously rounded (16px), subtle glassmorphism (backdrop-blur: 10px)
- Shadows: Soft cyan glow (0 0 20px rgba(0,180,216,0.15)) on hover

**Page Structure:**
1. **Sticky Navigation**: Logo 'CONECTADEV', links: Serviços, Processo, Cases, primary CTA button 'Falar com Especialista'
2. **Hero Section**: Placeholder headline and subheadline area
3. **Empty sections below**: Spacers for future content`;

async function createScreen() {
    try {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "X-Goog-Api-Key": API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "CONECTADEV V2.0 - Fase 1 Foundation",
                prompt: prompt,
                deviceType: "DESKTOP"
            })
        });

        if (!res.ok) {
            console.error("HTTP ERROR:", res.status);
            console.error(await res.text());
            return;
        }

        const data = await res.json();
        console.log("SCREEN CREATED:", JSON.stringify(data, null, 2));

        fs.writeFileSync("screen.json", JSON.stringify(data, null, 2));
        console.log("Saved metadata to screen.json");
        console.log("WAIT 10-15s FOR GENERATION TO COMPLETE, THEN RUN fetch-stitch.js WITH NEW SCREEN ID");
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

createScreen();
