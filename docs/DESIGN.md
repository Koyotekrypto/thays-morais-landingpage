# Design System: Thays Morais - Obsidian Elite
**Project ID:** thays-morais-landingpage

## 1. Visual Theme & Atmosphere
Aesthetic is best described as "Obsidian Elite" - deeply technical, exclusive, and highly engineered. The mood is reminiscent of a high-end command center or a futuristic operating system. The generous use of deep space backgrounds anchors the design, creating a stark, high-contrast environment where neon typography and glowing modules become focal points. It screams "cinematic authority."

## 2. Color Palette & Roles
* **Deep Space Obsidian (#020617):** The primary background color. Extremely dark, anchoring the layout and allowing neon accents to pop.
* **Neon Cyan (#00B4D8):** Primary action color. Used for crucial CTA buttons, glowing active states, and technical typography highlights to signify energy and interactive states.
* **Deep Ocean Blue (#0096C7 / #03045E):** Secondary support colors. Used for gradients in text, borders, and subtle glowing background blobs that provide depth without overwhelming the foreground content.
* **Starlight White (#FFFFFF):** High-contrast primary text color used for headlines and critical readability.
* **Muted Slate (#94A3B8 / #64748B):** Secondary text. Used for descriptions and supporting copy to maintain hierarchy without straining the eye against the dark background.
* **Destructive Crimson (#EF4444):** Reserved strictly for critical warnings or error validations (e.g., inside form validations).

## 3. Typography Rules
* **Headings (Display):** `Montserrat` (sans-serif), typically Black (900) or Bold (700) weights. Heavy, geometric, and authoritative. Often uppercase and tightly tracked to resemble engineering blueprints.
* **Body/UI Elements (Body):** `Inter` (sans-serif), Regular (400) or Medium (500). Highly legible at small sizes, optimal for dense technical information and UI controls.
* **Accents (Drama):** `Instrument Serif` (serif), Italic. Used sparingly alongside the heavy Montserrat to create sophisticated, high-end tension (e.g., "Engenharia *Elite*").

## 4. Component Stylings
* **Buttons:**
    * **Primary (Neon):** Pill-shaped (`rounded-full`). Dark background with strong Neon Cyan text. Employs a literal outer and inner drop-shadow glow (`shadow-neon-glow`) to simulate real light emission.
    * **Secondary (Outline):** Pill-shaped. Subtle 10% white borders (`border-white/10`) with hover states that slightly fill the background while maintaining a ghost-button appearance.
* **Cards/Containers (Glass Panels):** Generously rounded corners (`rounded-[2rem]`). Deep background layer with high translucency (`backdrop-blur-2xl`, `bg-card/40`). They sit above the background with fine, low-opacity borders (`border-primary/5`) that illuminate upon hover.
* **Inputs/Forms:** Dark, slightly elevated backgrounds (`bg-slate-900/50`) with sharp, glowing outlines on focus (`focus:ring-primary`, `border-slate-800`). Precision is key.

## 5. Layout Principles
* **Structure:** Highly structured and deliberate. Uses maximum legible widths (`max-w-[1920px]`) but centers critical content in highly legible, narrower columns (e.g., `max-w-4xl` for Hero text).
* **Whitespace:** Expansive. Padding and margins are heavily multiplied (e.g., `py-24`, `mb-16`) to let the glowing elements "breathe" and avoid visual clutter.
* **Depth (Z-Axis):** Makes intense use of layers. Backgrounds are purely structural (e.g., grid patterns on `z-0`), glass panels float in the middle, and text/icons pop out the front. Parallax and hover-lift behaviors enforce this Z-axis structure.
