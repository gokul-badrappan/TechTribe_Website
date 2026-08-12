import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BUTTONS, EVENTS, FOUNDERS, SOCIALS, TEAM } from "@/config/site-links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechTribe — India's Tech Community" },
      {
        name: "description",
        content:
          "TechTribe is an independent tech community bridging academic learning and industry expectations through speaker sessions, hackathons and expert-led sessions.",
      },
      { property: "og:title", content: "TechTribe — India's Tech Community" },
      {
        property: "og:description",
        content:
          "Join 1,800+ builders. Speaker sessions, hackathons and expert talks that turn learning into industry-ready skill.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TechTribe — India's Tech Community" },
      {
        name: "twitter:description",
        content:
          "Join 1,800+ builders. Speaker sessions, hackathons and expert talks that turn learning into industry-ready skill.",
      },
    ],
  }),
  component: Index,
});

const NAV = ["HOME", "MEMBERS", "EVENTS", "JOIN"];

const STATS = [
  { n: "1,800+", l: "ACTIVE MEMBERS" },
  { n: "5+", l: "EVENTS CONDUCTED" },
  { n: "10+", l: "COLLAB EVENTS" },
  { n: "50+", l: "VOLUNTEERS & CONTRIBUTORS" },
];

const VALUES = [
  {
    i: "01",
    t: "MISSION",
    e: "📢",
    d: "Empowering members through technology to create a vibrant ecosystem where they can explore, learn, and innovate.",
  },
  {
    i: "02",
    t: "VISION",
    e: "👁️",
    d: "Building tomorrow's tech leaders by being the premier community that bridges the gap between learning and industry.",
  },
  {
    i: "03",
    t: "VALUES",
    e: "⭐",
    d: "Fostering innovation through collaboration, continuous learning, inclusivity, and ethical tech practices.",
  },
  {
    i: "04",
    t: "IMPACT",
    e: "💡",
    d: "Creating real-world opportunities by equipping members with practical skills and industry exposure.",
  },
];

const PARTNERS = [
  "Thoughtworks",
  "Grafana Labs",
  "Fetch.ai",
  "Aya Community",
  "QuantCraft Hackathon",
  "BuilderBase",
  "Nexido",
  "CT University (Ludhiana)",
  "MLSA MIET (Meerut)",
  "OppSkills",
  "DRC Delhi",
  "OSEN",
  "OpsTree",
];


function Tag({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-primary">{children}</p>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
            [ TechTribe ]
          </a>
          <nav className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n}
                href="#top"
                className="link-underline text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {n}
              </a>
            ))}
          </nav>
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
            ONLINE · 1,800+ COMMUNITY NODES
          </span>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-4xl px-6 pt-44 pb-28 text-center md:pt-52 md:pb-36">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground">
              EST. 2025 — INDIA'S TECH COMMUNITY
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-8 font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
              WELCOME TO
              <br />
              TECHTRIBE
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-xl text-sm tracking-[0.08em] text-muted-foreground md:text-base">
              EMPOWERING TECH ENTHUSIASTS IN INNOVATION
            </p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={BUTTONS.join}
                className="rounded-full bg-primary px-7 py-3 font-mono text-xs tracking-[0.15em] text-primary-foreground transition-transform duration-200 hover:scale-[1.04]"
              >
                JOIN THE TRIBE
              </a>
              <a
                href={BUTTONS.viewEvents}
                className="rounded-full border border-border px-7 py-3 font-mono text-xs tracking-[0.15em] transition-transform duration-200 hover:scale-[1.04] hover:border-foreground"
              >
                VIEW EVENTS
              </a>
              <a
                href={BUTTONS.upcomingEvents}
                className="rounded-full border border-border px-7 py-3 font-mono text-xs tracking-[0.15em] transition-transform duration-200 hover:scale-[1.04] hover:border-foreground"
              >
                UPCOMING EVENTS
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 inline-flex max-w-full items-center gap-2 rounded-full border border-border px-5 py-2.5">
              <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                🎤 LATEST HIGHLIGHTS: AGENT TO INSIGHT
                <span className="text-primary"> // </span>
                Exploring AI agents with industry speakers
              </span>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Tag>// ABOUT_US</Tag>
            </Reveal>
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-20">
              <Reveal>
                <h2 className="font-serif text-5xl leading-[1] md:text-6xl">WHO WE ARE</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                  TechTribe is an independent tech community that aims to bridge the gap
                  between academic learning and industry expectations. We empower members
                  by organizing dynamic speaker sessions, hackathons, and expert-led
                  sessions that foster innovation, collaboration, and career growth.
                </p>
              </Reveal>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.l} delay={i * 80}>
                  <div className="h-full bg-background px-6 py-10">
                    <p className="font-serif text-5xl md:text-6xl">{s.n}</p>
                    <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.15em] text-muted-foreground">
                      {s.l}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Tag>// CORE_VALUES</Tag>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.i} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border p-8 transition-colors duration-300 hover:border-foreground/40 md:p-10">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                        {v.i} / {v.t}
                      </p>
                      <span aria-hidden className="text-lg">
                        {v.e}
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {v.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="border-t border-border">
          <div className="py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <Tag>// NETWORK</Tag>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-serif text-5xl md:text-6xl">OUR COLLABORATION NETWORK</h2>
              </Reveal>
            </div>
            <div className="mt-16 overflow-hidden">
              <div className="flex w-max animate-marquee gap-16 pr-16">
                {[...PARTNERS, ...PARTNERS].map((p, i) => (
                  <span
                    key={`${p}-${i}`}
                    className="font-mono text-xl tracking-[0.15em] whitespace-nowrap text-muted-foreground/60"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Tag>// COMMUNITY</Tag>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-5xl md:text-6xl">THE TRIBE</h2>
            </Reveal>

            <p className="mt-16 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
              FOUNDERS
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {FOUNDERS.map((f, i) => (
                <Reveal key={f.name} delay={i * 100}>
                  <div className="rounded-2xl border border-border p-8 md:p-10">
                    <div className="h-20 w-20 rounded-full border border-border bg-secondary" />
                    <div className="mt-8 flex items-center gap-4">
                      <p className="font-serif text-4xl">{f.name}</p>
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${f.name} on LinkedIn`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Linkedin size={20} strokeWidth={1.5} />
                      </a>
                    </div>
                    <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      FOUNDER
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-20 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
              TEAM
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={i * 60}>
                  <div className="flex h-full items-center gap-4 bg-background px-6 py-7 transition-colors duration-300 hover:bg-secondary">
                    <div className="h-10 w-10 shrink-0 rounded-full border border-border bg-secondary" />
                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-2xl leading-none">{m.name}</p>
                      <p className="mt-2 font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                        {m.role}
                      </p>
                    </div>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Tag>// HIGHLIGHTS</Tag>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-5xl md:text-6xl">OF OUR PAST EVENTS</h2>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {EVENTS.map((e, i) => (
                <Reveal key={e.title} delay={i * 90}>
                  <article className="group">
                    <div className="overflow-hidden rounded-2xl border border-border">
                      <img
                        src={e.img}
                        alt={`${e.title} — ${e.sub}`}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      {e.tag}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.sub}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section id="join" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Tag>// ACCESS_GRANTED</Tag>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-6xl md:text-7xl">JOIN THE TRIBE</h2>
            </Reveal>
            <ul className="mt-16 border-t border-border">
              {SOCIALS.map((s, i) => (
                <Reveal as="li" key={s.name} delay={i * 60}>
                  <a
                    href={s.url}
                    target={s.url.startsWith("#") ? undefined : "_blank"}
                    rel={s.url.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between border-b border-border px-2 py-7 transition-colors duration-300 hover:bg-secondary md:px-6"
                  >
                    <span className="flex flex-wrap items-baseline gap-3">
                      <span className="font-serif text-3xl md:text-4xl">{s.name}</span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                        // {s.meta}
                      </span>
                    </span>
                    <span className="font-mono text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs">[ TechTribe ]</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                © 2026 — INDIA'S TECH COMMUNITY
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
