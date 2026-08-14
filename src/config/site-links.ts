/**
 * SITE LINKS — single source of truth.
 *
 * Edit URLs and image paths ONLY here. The landing page reads everything below.
 * Anything marked "TODO" is still a placeholder and needs a real link.
 */

/* ---------------------------------------------------------------------------
 * FOUNDERS — name + LinkedIn profile
 * ------------------------------------------------------------------------ */
export const FOUNDERS = [
  {
    name: "Jai Lakshmi",
    img: "/images/members/jailakshmi.jpeg",
    linkedin: "https://www.linkedin.com/in/jai-lakshmi/",
  },
  {
    name: "Ram Pravesh Bharti",
    img: "/images/members/ram-pravesh-bharti.jpeg",
    linkedin: "https://www.linkedin.com/in/ram-pravesh-bharti/",
  },
];

/* ---------------------------------------------------------------------------
 * TEAM — name + role + LinkedIn profile
 * ------------------------------------------------------------------------ */
export const TEAM = [
  {
    name: "Gokul",
    role: "Director",
    img: "/images/members/gokul.jpg",
    linkedin: "https://www.linkedin.com/in/gokulbadrappan/",
  },
  {
    name: "Harshith",
    role: "Designer Lead",
    img: "/images/members/harshith.png",
    linkedin: "https://www.linkedin.com/in/harshithkolaparthi/",
  },
  {
    name: "Ayush",
    role: "Event Management Lead",
    img: "/images/members/ayush.jpeg",
    linkedin: "https://www.linkedin.com/in/ayush-aman-a21743258/",
  },
  {
    name: "Rishab",
    role: "Social Media Lead",
    img: "/images/members/rishab.png",
    linkedin: "https://www.linkedin.com/in/rishabh-wasan/",
  },
  {
    name: "Arpan",
    role: "Video Editing Lead",
    img: "/images/members/arpan.svg",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Nameesh",
    role: "R&D Lead",
    img: "/images/members/nameesh.png",
    linkedin: "https://www.linkedin.com/in/nameesh-kj/",
  },
];

/* ---------------------------------------------------------------------------
 * EVENTS — image lives in public/images/, so "/images/event-1.jpg" = public/images/event-1.jpg
 * ------------------------------------------------------------------------ */
export const EVENTS = [
  {
    img: "/images/event-1.jpg",
    tag: "🔐 CYBERSECURITY",
    title: "SecureVerse",
    sub: "Cybersecurity Challenge",
  },
  {
    img: "/images/event-2.jpg",
    tag: "🎤 SPEAKER SESSION",
    title: "DevAIx",
    sub: "AI-Powered Development",
  },
  {
    img: "/images/event-3.jpg",
    tag: "🎤 SPEAKER SESSION",
    title: "Agent to Insight",
    sub: "AI Agents & Applied Insight",
  },
  {
    img: "/images/event-4.jpg",
    tag: "🎤 SPEAKER SESSION",
    title: "Cyber Chaos",
    sub: "Cybersecurity Speaker Session",
  },
];

/* ---------------------------------------------------------------------------
 * HERO BUTTONS — "#join" / "#events" scroll on the page; swap for a full URL any time.
 * ------------------------------------------------------------------------ */
export const BUTTONS = {
  // TODO: replace with the real join link (WhatsApp invite, form, etc.)
  join: "#join",
  viewEvents: "#events",
  // TODO: replace with the real upcoming-events link (Luma, Meetup, etc.)
  upcomingEvents: "#upcoming-events",
};

/* ---------------------------------------------------------------------------
 * SOCIALS — shown in the "Join the Tribe" list
 * ------------------------------------------------------------------------ */
export const SOCIALS = [
  // TODO: replace with the real WhatsApp group invite
  { name: "WhatsApp", meta: "PRIMARY CHANNEL", url: "https://chat.whatsapp.com/Dnh8uOdLxXR0BQyNjLpc32?s=cl&p=i&ilr=2" },
  // TODO: replace with the real Instagram profile
  { name: "Instagram", meta: "@techtribe", url: "https://instagram.com/techtribe.connect" },
  // TODO: replace with the real LinkedIn page
  { name: "LinkedIn", meta: "PROFESSIONAL NETWORK", url: "https://www.linkedin.com/company/techtribeconnect/" },
  // TODO: replace with the real X profile
  { name: "Twitter / X", meta: "@techtribe", url: "https://x.com/TechTribe_Com" },
];
