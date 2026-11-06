# Thryve Youth — componentized React + Vite project

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Structure
- `src/components/`: reusable UI components (Navbar, Footer, LogoMark, Reveal, SectionHeading).
- `src/sections/`: page sections (Hero, Marquee, Mission, FocusAreas, Pathway, MembershipForm, FAQ, FinalCTA).
- `src/data/`: content arrays and shared animation transition.
- `src/styles.css`: original stylesheet, preserved without visual redesign.
- `src/main.jsx`: application entry point; imports `styles.css`.

## Important implementation notes
- The original stylesheet is preserved as supplied.
- The source archive did not import `styles.css` from `main.jsx`. This componentized version adds that import; without it, the page's layout, colors, responsive rules and CSS animations will not apply.
- Membership form currently displays a local success state only. It does not transmit or persist submissions; connect a backend or form provider before production.
- Confirm the contact email, location, social URL and organization copy before launch.
