export const site = {
  name: "Lucas",
  handle: "0xLuZ",
  domain: "folio.dev",
  email: "lucas.maret11@gmail.com",
  location: "Paris, France · Remote",
  socials: {
    github: { label: "github.com/lumrt", url: "https://github.com/lumrt" },
    linkedin: {
      label: "linkedin.com/in/lucas-m",
      url: "https://www.linkedin.com/in/lucas-m-99a09829a/",
    },
    x: { label: "@0xLuZz", url: "https://x.com/0xLuZz" },
    calendar: {
      label: "30 min · google cal",
      url: "https://cal.com/",
    },
  },
  /** rotating quote, kept short and punchy */
  motto: "Experiment. Ship. Grow.",
};

export const lab = {
  loc: "Paris (EU)",
  status: "Available",
};

export type ChartType =
  | "line"
  | "scatter"
  | "bell"
  | "bars"
  | "vault"
  | "network"
  | "quantum";

export type Project = {
  code: string;
  title: string;
  blurb: string;
  metric: { label: string; value: string; trend: "up" | "down" };
  tags: string[];
  chart: ChartType;
  year: string;
  url?: string;
};

export const projects: Project[] = [
  {
    code: "P-01",
    title: "Kovault",
    blurb:
      "Multisig vault with Ledger clear-signing on XRPL — built & shipped at hackathon.",
    metric: { label: "on AI track", value: "1st place", trend: "up" },
    tags: ["XRPL", "Multisig", "Ledger"],
    chart: "vault",
    year: "2025",
    url: "https://kovault.xyz",
  },
  {
    code: "P-02",
    title: "Discord · Solana Bot",
    blurb:
      "Smoother crypto transactions inside a Discord server — no pubkey copy-paste, just usernames.",
    metric: { label: "for discord servers", value: "Community tool", trend: "up" },
    tags: ["TypeScript", "Solana", "Discord"],
    chart: "network",
    year: "2026",
    url: "https://github.com/lumrt/discord-solana",
  },
  {
    code: "P-03",
    title: "Emojimarket",
    blurb:
      "Permissionless precision-market & community battle arena on Solana — one topic, many emojis, the crowd votes & wins the pot.",
    metric: { label: "on solana", value: "live", trend: "up" },
    tags: ["Solana", "React", "On-chain"],
    chart: "bell",
    year: "2026",
    url: "https://emojimarket.xyz",
  },
  {
    code: "R-01",
    title: "Post-Quantum Intent Enforcement",
    blurb:
      "Research with Ledger: ML-DSA hardware signatures to authorize high-value Solana txs, and BAM as a future enforcement / scheduling layer.",
    metric: { label: "ledger · research", value: "WIP", trend: "up" },
    tags: ["Solana", "ML-DSA", "BAM", "Research"],
    chart: "quantum",
    year: "2026",
  },
];

export type StackGroup = {
  label: string;
  caption: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    label: "backend",
    caption: "runtime · APIs",
    items: [
      "Node.js · TypeScript · Fastify",
      "Python · FastAPI · Django",
      "Go",
    ],
  },
  {
    label: "frontend",
    caption: "interfaces",
    items: ["React · Svelte · Astro"],
  },
  {
    label: "data",
    caption: "storage · queries",
    items: ["PostgreSQL"],
  },
  {
    label: "infra",
    caption: "ops · ci/cd",
    items: ["Docker · Kubernetes", "Vercel · GitHub Actions"],
  },
];

export const tools = [
  "TypeScript",
  "Python",
  "Go",
  "Solana",
  "XRPL",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Vercel",
  "GitHub",
];

export const services = [
  {
    code: "01",
    title: "Platform / Website",
    blurb: "Production-grade web platforms — TypeScript stack, scalable, clean code.",
  },
  {
    code: "02",
    title: "Solana Programs",
    blurb: "On-chain Solana programs from spec to mainnet, audited & monitored.",
  },
  {
    code: "03",
    title: "MVP Sprint",
    blurb: "Validated prototype shipped in 2–4 weeks. Build → measure → iterate.",
  },
  {
    code: "04",
    title: "Product Advisory",
    blurb: "Fractional CTO / PM — product, data, growth & strategy.",
  },
  {
    code: "05",
    title: "Sales / Closing",
    blurb: "Closing for early-stage products — discovery, pipeline, conversion.",
  },
];

export const current = {
  title: "Post-Quantum Intent Enforcement",
  subtitle: "Research · Ledger · Solana",
  status: "In research",
  progress: 38,
  notes: [
    "ML-DSA hardware signatures to authorize high-value Solana txs",
    "BAM explored as a future enforcement / scheduling layer",
    "Threat model: post-quantum adversary + hardware co-signer",
  ],
};

export const availability = {
  shortMissions: {
    label: "Short missions (< 1 month)",
    state: "open" as const,
    eta: "Start in 1–2 weeks",
  },
  longTerm: {
    label: "Full-time remote",
    state: "open" as const,
    eta: "Open to the right team",
  },
};

export type EducationItem = {
  code: string;
  kind: "school" | "cert";
  title: string;
  org: string;
  period: string;
  blurb: string;
  url?: string;
};

export const education: EducationItem[] = [
  {
    code: "E-01",
    kind: "school",
    title: "École 42 Paris",
    org: "Computer Science",
    period: "2022 — current",
    blurb:
      "Peer-learning, project-based engineering school. C, networking, systems, web & graphics from the ground up.",
    url: "https://42.fr/",
  },
  {
    code: "C-01",
    kind: "cert",
    title: "Go (Basic)",
    org: "HackerRank",
    period: "2025",
    blurb:
      "Verified certification — Go fundamentals, idiomatic patterns, concurrency primitives.",
    url: "https://www.hackerrank.com/",
  },
];
