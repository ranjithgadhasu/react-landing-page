import {
  Zap,
  ShieldCheck,
  BarChart3,
  Workflow,
  Users,
  Globe,
} from "lucide-react";

export const features = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Drag, drop and automate. Build complex multi-step workflows in minutes — no code required.",
    tag: "Automate",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live dashboards, conversion funnels and revenue insights that update the second things happen.",
    tag: "Insights",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Comment, assign and review together. Every stakeholder stays in sync with shared workspaces.",
    tag: "Collaborate",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "120+ Integrations",
    description: "Connect Slack, Stripe, HubSpot, Notion and 120+ tools with one-click native integrations.",
    tag: "Connect",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade Security",
    description: "SOC 2 Type II, SSO, audit logs and end-to-end encryption keep your data bulletproof.",
    tag: "Secure",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "99.99% uptime SLA with sub-50ms responses in 30+ regions. Fast for everyone, everywhere.",
    tag: "Scale",
    gradient: "from-blue-600 to-indigo-600",
  },
];

export const steps = [
  {
    step: "01",
    title: "Connect your tools",
    description: "Link your stack in one click. We auto-import contacts, pipelines and history.",
    points: ["One-click OAuth", "CSV & API import", "Auto data mapping"],
  },
  {
    step: "02",
    title: "Design your workflow",
    description: "Use 200+ templates or start blank. Drag blocks, set triggers and go live.",
    points: ["200+ templates", "Conditional logic", "A/B test branches"],
  },
  {
    step: "03",
    title: "Automate & collaborate",
    description: "Assign owners, set approvals and let Nexova run the busywork for you.",
    points: ["Smart assignments", "Approval chains", "Slack alerts"],
  },
  {
    step: "04",
    title: "Measure & optimize",
    description: "Track every metric live, spot bottlenecks and double down on what works.",
    points: ["Live dashboards", "Weekly digest", "AI suggestions"],
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    quote: "Nexova cut our manual reporting time by 80%. What used to take my team three days now happens automatically overnight. Absolute game-changer.",
    rating: 5,
    initials: "SM",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "James Rodriguez",
    role: "Founder & CEO",
    company: "StartupXYZ",
    quote: "We scaled from 10 to 120 people without hiring a single ops manager. The workflow automation paid for itself within the first week.",
    rating: 5,
    initials: "JR",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Emily Chen",
    role: "Head of Marketing",
    company: "GrowthLabs",
    quote: "The analytics alone are worth it. We finally see the full customer journey in one place. Campaign ROI is up 240% since switching.",
    rating: 5,
    initials: "EC",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Michael Thompson",
    role: "CTO",
    company: "DataSync",
    quote: "Security review took one call. SOC 2, SSO, audit logs — everything enterprise IT needs, but with a UI my team actually loves using.",
    rating: 5,
    initials: "MT",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Aisha Patel",
    role: "Product Lead",
    company: "InnovateCo",
    quote: "Setup took an afternoon, not a quarter. The template library is incredible — we launched our first automated pipeline the same day.",
    rating: 5,
    initials: "AP",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "David Kim",
    role: "COO",
    company: "ScaleUp",
    quote: "Customer support responds in minutes, not days. And the platform itself? Rock solid. Zero downtime in 14 months of daily use.",
    rating: 5,
    initials: "DK",
    color: "from-indigo-500 to-blue-600",
  },
];

export const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small teams getting started",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    popular: false,
    features: ["Up to 5 team members", "10 active workflows", "1,000 runs / month", "Basic analytics", "Community support"],
  },
  {
    name: "Professional",
    tagline: "For growing teams that need power",
    monthly: 29,
    yearly: 24,
    cta: "Start 14-day trial",
    popular: true,
    features: [
      "Unlimited team members",
      "Unlimited workflows",
      "50,000 runs / month",
      "Advanced analytics + AI insights",
      "120+ integrations",
      "Priority support (2h response)",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Security & scale for large orgs",
    monthly: 99,
    yearly: 79,
    cta: "Talk to sales",
    popular: false,
    features: ["Everything in Professional", "Unlimited runs", "SSO & audit logs", "Dedicated success manager", "99.99% uptime SLA", "Custom contracts"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export const brandLogos = ["Vertex", "Quantia", "Lumina", "Hexalab", "Nimbus", "Orbital", "Framerly", "Klarheit"];
