/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: ["class", "class"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				display: [
					'Montserrat',
					'sans-serif'
				],
				body: [
					'Inter',
					'sans-serif'
				],
				drama: [
					'Instrument Serif',
					'serif'
				]
			},
			boxShadow: {
				'neon-cyan': '0 0 15px rgba(0, 180, 216, 0.3)',
				'neon-blue': '0 0 15px rgba(0, 150, 199, 0.3)',
				'neon-glow': '0 0 20px rgba(0, 180, 216, 0.4), 0 0 60px rgba(0, 180, 216, 0.1)',
				'cyan-glow': '0 0 30px rgba(0, 180, 216, 0.2), 0 0 80px rgba(0, 180, 216, 0.08)',
				'inner-glow': 'inset 0 0 20px rgba(0, 180, 216, 0.05)',
				'module-hover-primary': '0 0 25px rgba(0, 180, 216, 0.2), inset 0 0 15px rgba(0, 180, 216, 0.1)',
				'glow-container': '0 0 40px rgba(0, 180, 216, 0.15), inset 0 0 20px rgba(0, 150, 199, 0.1)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
				'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
				'3d': '0 10px 30px -10px rgba(0,0,0,0.1), 0 20px 20px -10px rgba(0,0,0,0.05)',
				'3d-hover': '0 20px 40px -10px rgba(0,0,0,0.15), 0 30px 30px -15px rgba(0,0,0,0.1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				}
			},
			animation: {
				"fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
