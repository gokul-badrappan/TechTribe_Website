# Central links file

## Goal
One file to edit for every link and image on the site — LinkedIn profiles, event images, CTA buttons, and social links — so the page code never has to be touched again for a URL change.

## What gets created
`src/config/site-links.ts` — a single, heavily commented file holding:

- **Founders** — name + LinkedIn URL
- **Team** — name + role + LinkedIn URL
- **Events** — title, subtitle, tag, image path (`/images/event-1.jpg` …)
- **Buttons** — Join the Tribe, View Events, Upcoming Events links
- **Socials** — WhatsApp, Instagram, LinkedIn, Twitter/X, each with its real URL

Each entry has a short comment marking placeholders still needing a real URL, e.g.

```text
// TODO: replace with real profile
{ name: "Gokul", role: "Director", linkedin: "https://linkedin.com/in/PLACEHOLDER-gokul" },
```

## What changes in the page
`src/routes/index.tsx` drops its inline `FOUNDERS`, `TEAM`, `EVENTS`, `SOCIALS` arrays and imports them from the new config file. The social links and the three hero buttons become real `href` values from the config instead of `#join` / `#upcoming-events` placeholders. Layout, styling, and copy stay exactly as they are.

## Result
To change any link or swap an event image, edit only `src/config/site-links.ts`.
