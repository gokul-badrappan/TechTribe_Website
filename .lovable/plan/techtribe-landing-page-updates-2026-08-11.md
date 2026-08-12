# TechTribe landing page updates

## 1. Member count: 1,500 → 1,800+

Updated in both places it appears:

- Stats grid: "1,500+ ACTIVE MEMBERS" → "1,800+ ACTIVE MEMBERS"
- Navbar status text: "ONLINE · 1,500+ NODES" → "ONLINE · 1,800+ NODES"

## 2. Workshop → Speaker Session

The "Cyber Chaos" event card currently reads "🛡️ WORKSHOP / Cybersecurity Workshop". It becomes "🎤 SPEAKER SESSION / Cybersecurity Speaker Session". And change the word to workshop to speaker session wherever it occurs in the site.

## 3. LinkedIn links for every member

Each founder card and team card gets a small LinkedIn icon button (lucide `Linkedin`) placed next to the name, opening that person's profile in a new tab.

Each person entry in the code gains a `linkedin` field with a clearly marked placeholder URL, e.g.:

```text
{ name: "Gokul", role: "Director", linkedin: "https://linkedin.com/in/PLACEHOLDER-gokul" }
```

You replace each placeholder with the real profile URL. Styling stays in the existing muted-to-charcoal hover language, no new colors.

## 4. Local event images with numbered placeholders

A new `public/images/` folder is created with a short README noting the expected filenames. The four event cards switch from Unsplash URLs to local paths:

```text
public/images/event-1.jpg   → SecureVerse
public/images/event-2.jpg   → DevAIx
public/images/event-3.jpg   → Agent to Insight
public/images/event-4.jpg   → Cyber Chaos
```

In code the `img` values become `/images/event-1.jpg` … `/images/event-4.jpg`. Drop your images into `public/images/` with exactly those names and they appear automatically. Until then the cards show empty image frames (layout stays intact via the fixed 16:10 aspect ratio).

If you'd rather use `.png`, say so and the extensions change.

## Technical notes

- Only `src/routes/index.tsx` changes, plus the new `public/images/` folder.
- `lucide-react` is already available; no new dependencies.
- LinkedIn links use `target="_blank" rel="noopener noreferrer"` and an accessible label per person.