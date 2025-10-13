import { useState } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookMarked,
  BookOpen,
  Building,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  Globe2,
  Handshake,
  Home,
  Info,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

const SIDE_NAV: NavItem[] = [
  { label: "Home", icon: Home, href: "#home" },
  {
    label: "About",
    icon: Info,
    href: "#about",
    children: [
      { label: "Objective", href: "#objective" },
      { label: "Key Benefits", href: "#key-benefits" },
      { label: "IQAC Constitution", href: "#iqac-constitution" },
      { label: "University Organogram", href: "#university-organogram" },
      { label: "IQAC Team", href: "#iqac-team" },
      { label: "Initiatives & Outcomes", href: "#initiatives-outcomes" },
      { label: "Minutes of IQAC Meeting", href: "#iqac-minutes" },
    ],
  },
  { label: "NAAC", icon: ShieldCheck, href: "#naac" },
  { label: "NIRF", icon: LineChart, href: "#nirf" },
  { label: "The Impact Ranking", icon: Globe2, href: "#impact-ranking" },
  { label: "QS Sustainability Ranking", icon: Leaf, href: "#qs-sustainability" },
  { label: "AISHE", icon: Building, href: "#aishe" },
  { label: "MHW Ranking 2025", icon: Activity, href: "#mhw-ranking" },
  { label: "Affiliations/Rankings", icon: BadgeCheck, href: "#affiliations" },
  { label: "IDP", icon: BarChart3, href: "#idp" },
  {
    label: "Institutional Excellence",
    icon: Award,
    href: "#institutional-excellence",
    children: [
      { label: "Institutional Distinctiveness", href: "#institutional-distinctiveness" },
      { label: "Best Practices", href: "#best-practices" },
      { label: "MoUs", href: "#mous" },
      { label: "Outreach Programs", href: "#outreach" },
    ],
  },
  {
    label: "Reports",
    icon: FileText,
    href: "#reports",
    children: [
      { label: "Gender Audit Reports", href: "#gender-audit" },
      { label: "Green Audit Reports", href: "#green-audit" },
      { label: "University Annual Reports", href: "#annual-reports" },
      { label: "IQAC Annual Reports", href: "#aqars" },
    ],
  },
  {
    label: "Policies and Manuals",
    icon: BookOpen,
    href: "#policies",
    children: [
      { label: "University Policies", href: "#university-policies" },
      { label: "Manuals", href: "#manuals" },
    ],
  },
  { label: "University Committees", icon: Users2, href: "#committees" },
  { label: "Forms and Formats", icon: ClipboardList, href: "#forms" },
  { label: "Feedback", icon: MessageCircle, href: "#feedback" },
  { label: "Value Added Courses", icon: BookMarked, href: "#value-added" },
  { label: "SGT Event Calendar", icon: CalendarDays, href: "#event-calendar" },
];

const HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1620&q=80";

const STAT_CARDS = [
  {
    label: "Academic & Support Units Engaged",
    value: "18",
    description: "Faculties, schools, and divisions aligned with IQAC benchmarks.",
    icon: Building2,
  },
  {
    label: "Quality Enhancement Initiatives",
    value: "42",
    description: "Process improvements completed through annual QA cycles.",
    icon: Sparkles,
  },
  {
    label: "Capacity Building Touchpoints",
    value: "120+",
    description: "Workshops and clinics strengthening outcome-based academics.",
    icon: Users2,
  },
  {
    label: "Policy & Compliance Audits",
    value: "30+",
    description: "Structured reviews spanning academics, research, and governance.",
    icon: ShieldCheck,
  },
];

const ABOUT_SECTIONS = [
  {
    id: "objective",
    title: "Objective",
    summary:
      "Institutionalise a participative quality management system that sustains academic excellence, learner success, and societal impact across Dayananda Sagar University.",
    points: [
      "Embed evidence-based planning for teaching, research, innovation, and outreach in every school.",
      "Guard academic integrity through continuous benchmarking with national and global standards.",
      "Provide an integrated platform for monitoring progress on accreditation recommendations.",
    ],
  },
  {
    id: "key-benefits",
    title: "Key Benefits",
    summary:
      "IQAC enables DSU to respond swiftly to stakeholder expectations while maintaining compliance readiness and future-focused curricula.",
    points: [
      "Unified dashboards capture programme outcomes, satisfaction indices, and employability metrics.",
      "Quality circles catalyse faculty collaboration on innovative pedagogy and assessments.",
      "Transparent action tracking ensures timely closure of feedback and audit observations.",
    ],
  },
  {
    id: "iqac-constitution",
    title: "IQAC Constitution",
    summary:
      "Leadership, academic experts, industry advisors, alumni, and student representatives co-create DSU’s quality roadmap.",
    points: [
      "Chairperson: Hon’ble Vice Chancellor guiding strategic directions.",
      "Internal members: Deans, registrars, and quality champions from key support units.",
      "External experts: National accreditation assessors and innovation mentors providing independent insights.",
    ],
  },
  {
    id: "university-organogram",
    title: "University Organogram",
    summary:
      "Structured governance connects the Board of Management, academic councils, schools, centres, and quality task forces for agile decision-making.",
    points: [
      "Quality cells operate within each school and report to IQAC coordinators.",
      "Functional committees (curriculum, research, student affairs) align with IQAC review cycles.",
      "Digital workflow tools ensure seamless escalation and approval pathways.",
    ],
  },
  {
    id: "iqac-team",
    title: "IQAC Team",
    summary:
      "Dedicated coordinators drive documentation standards, analytics, and capacity-building across the university.",
    points: [
      "Domain coordinators manage academics, research, student support, and community engagement portfolios.",
      "Quality data stewards curate programme files, evidence repositories, and review calendars.",
      "Faculty mentors and student ambassadors champion quality conversations at the departmental level.",
    ],
  },
  {
    id: "initiatives-outcomes",
    title: "Initiatives & Outcomes",
    summary:
      "Multi-year initiatives translate DSU’s mission into measurable outcomes for learners and the community.",
    points: [
      "Outcome-Based Education adoption across all programmes with rubrics, attainment analytics, and redesign sprints.",
      "Research facilitation hubs enabling interdisciplinary grant proposals and patent filings.",
      "Community immersion programmes showcasing DSU’s impact through healthcare, skilling, and sustainability projects.",
    ],
  },
  {
    id: "iqac-minutes",
    title: "Minutes of IQAC Meeting",
    summary:
      "Decisions and action plans are archived digitally with role-based access for transparency and follow-through.",
    points: [
      "Minutes capture agenda outcomes, owner assignments, timelines, and measurable success indicators.",
      "Implementation dashboards provide colour-coded progress and documentation links.",
      "Annual reviews highlight closed-loop improvements and strategic way forward for each school.",
    ],
  },
];

const ALIGNMENT_SECTIONS = [
  {
    id: "naac",
    title: "NAAC",
    description:
      "IQAC synchronises DSU’s quality benchmarks with NAAC criteria through meticulously curated evidence and periodic mock reviews.",
    highlights: [
      "Automated templates for metric-wise documentation and data validation.",
      "Cross-functional task forces address every recommendation with measurable deliverables.",
      "Capacity-building series on the revised accreditation framework and outcome articulation.",
    ],
  },
  {
    id: "nirf",
    title: "NIRF",
    description:
      "Data stewardship teams compile research, teaching, graduation outcomes, outreach, and perception indicators for NIRF submissions.",
    highlights: [
      "Live dashboards track faculty qualifications, sponsored research, and innovation pipelines.",
      "Graduate employability and higher education trends feed into ranking analytics.",
      "Gap analysis reports inform annual strategic objectives for every discipline.",
    ],
  },
  {
    id: "impact-ranking",
    title: "The Impact Ranking",
    description:
      "DSU maps SDG-aligned initiatives, partnerships, and measurable societal outcomes to sustain position in global impact rankings.",
    highlights: [
      "Evidence repository linking community clinics, rural entrepreneurship, and sustainability labs to SDGs.",
      "Impact measurement rubrics co-created with outreach centres and partner NGOs.",
      "Annual showcase highlighting student innovations that improve quality of life.",
    ],
  },
  {
    id: "qs-sustainability",
    title: "QS Sustainability Ranking",
    description:
      "Campus-wide sustainability practices, energy dashboards, and green mobility pilots are documented for QS submissions.",
    highlights: [
      "Carbon footprint tracker covering energy, water, and waste streams across campuses.",
      "Biodiversity conservation projects spearheaded by student eco-clubs.",
      "Green curriculum infusion and SDG-focused research fellowships.",
    ],
  },
  {
    id: "aishe",
    title: "AISHE",
    description:
      "IQAC coordinates the submission of All India Survey on Higher Education datasets with validated academic and infrastructure statistics.",
    highlights: [
      "Centralised AISHE data mart integrating admissions, faculty, finances, and student services.",
      "Compliance calendar reminders ensure audit trails and approvals are in place.",
      "Year-on-year comparative insights support policy advocacy and institutional planning.",
    ],
  },
  {
    id: "mhw-ranking",
    title: "MHW Ranking 2025",
    description:
      "Holistic well-being initiatives – from wellness centres to mental health helplines – underpin DSU’s MHW ranking submissions.",
    highlights: [
      "Dedicated counsellor network with anonymised case tracking and resolution metrics.",
      "Well-being curriculum components embedded within foundation courses.",
      "Annual happiness index surveys guiding student support innovations.",
    ],
  },
  {
    id: "affiliations",
    title: "Affiliations & Rankings",
    description:
      "The IQAC maintains a consolidated ledger of approvals, memberships, and recognitions to support transparency and stakeholder trust.",
    highlights: [
      "Accreditation validity tracker with proactive renewal alerts.",
      "Strategic alliances with professional bodies to update syllabi and skill benchmarks.",
      "Public disclosures that highlight DSU’s standing across national and global platforms.",
    ],
  },
];

const DISTINCTIVENESS_STORIES = [
  {
    title: "Smart Campus Living Lab",
    description:
      "IoT-integrated labs monitor air quality, energy consumption, and occupancy analytics to enrich experiential learning.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Healthcare Innovation Corridor",
    description:
      "Medical, dental, and allied health schools deliver interdisciplinary clinics serving urban and rural communities.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Translational Research Studios",
    description:
      "Student and faculty innovators co-create prototypes with industry mentors and startup accelerators on campus.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
];

const BEST_PRACTICES = [
  {
    title: "Design Thinking for Curriculum Renewal",
    narrative:
      "Academic teams adopt a five-stage design thinking sprint to reimagine syllabi, integrate industry briefs, and align assessments with graduate attributes.",
    outcomes: [
      "Faster curriculum refresh cycles with mapped programme outcomes.",
      "Learner journey blueprints co-created with student focus groups.",
    ],
  },
  {
    title: "Community Immersion Credits",
    narrative:
      "All students undertake structured immersion programmes in rural and urban communities, translating classroom learning into measurable social impact.",
    outcomes: [
      "Service-learning portfolios documenting problem statements, interventions, and reflections.",
      "Mentorship pairings between faculty, alumni, and students to scale impactful ideas.",
    ],
  },
];

const MOU_LIST = [
  {
    partner: "Siemens Centre of Excellence",
    focus: "Advanced manufacturing, mechatronics, and smart factory simulations.",
    year: "2024",
  },
  {
    partner: "Karnataka State Biofuel Development Board",
    focus: "Sustainable energy research, biofuel prototyping, and rural deployment.",
    year: "2023",
  },
  {
    partner: "NASSCOM FutureSkills Prime",
    focus: "Upskilling in AI, cybersecurity, cloud, and product management for students and faculty.",
    year: "2022",
  },
];

const OUTREACH_PROGRAMS = [
  {
    title: "Village Entrepreneurship Accelerator",
    location: "Kanakapura Taluk",
    impact:
      "Guided 120 households in developing agritech adoption plans, resulting in 26% increase in seasonal income.",
  },
  {
    title: "Healthcare on Wheels",
    location: "Bidadi Industrial Zone",
    impact:
      "Multidisciplinary mobile clinics delivered preventive diagnostics and wellness counselling to 5,000 beneficiaries.",
  },
  {
    title: "STEM for Her Initiative",
    location: "Government PU Colleges, Bengaluru",
    impact:
      "Mentorship, coding bootcamps, and scholarship navigation for 300 girl students aspiring for engineering careers.",
  },
];

const REPORT_GROUPS = [
  {
    id: "gender-audit",
    title: "Gender Audit Reports",
    description:
      "Independent audits evaluate campus policies, infrastructure, and engagement programmes promoting gender equity.",
    entries: [
      {
        title: "Gender Audit AY 2023-24",
        period: "June 2024",
        summary: "Highlights inclusive infrastructure upgrades, leadership mentoring cohorts, and grievance redressal response times.",
      },
      {
        title: "Gender Audit AY 2022-23",
        period: "June 2023",
        summary: "Documents sensitisation drives, peer advocacy networks, and zero-tolerance policy outcomes.",
      },
    ],
  },
  {
    id: "green-audit",
    title: "Green Audit Reports",
    description:
      "Environmental audits benchmark energy, water, biodiversity, and waste management performance across campuses.",
    entries: [
      {
        title: "Green Audit AY 2023-24",
        period: "May 2024",
        summary: "Records water reuse initiatives, electric mobility pilots, and rooftop solar expansion roadmap.",
      },
      {
        title: "Green Audit AY 2022-23",
        period: "May 2023",
        summary: "Highlights plastic-free campus campaigns and tree canopy enhancement goals.",
      },
    ],
  },
  {
    id: "annual-reports",
    title: "University Annual Reports",
    description:
      "Comprehensive narrative of achievements, governance updates, financial stewardship, and strategic vision.",
    entries: [
      {
        title: "DSU Annual Report 2023-24",
        period: "July 2024",
        summary: "Captured transformative initiatives in academics, research, innovation, and societal outreach.",
      },
      {
        title: "DSU Annual Report 2022-23",
        period: "July 2023",
        summary: "Documented institutional milestones, partnerships, and performance indicators.",
      },
    ],
  },
  {
    id: "aqars",
    title: "IQAC Annual Quality Assurance Reports",
    description:
      "Annual submissions demonstrate compliance, quality benchmarks, and action taken report consolidation.",
    entries: [
      {
        title: "AQAR 2023-24",
        period: "September 2024",
        summary: "Showcases attainment metrics, best practices, and institutional distinctiveness outcomes.",
      },
      {
        title: "AQAR 2022-23",
        period: "September 2023",
        summary: "Highlights faculty development analytics, curriculum innovations, and stakeholder feedback closures.",
      },
    ],
  },
];

const POLICY_SETS = [
  {
    id: "university-policies",
    title: "University Policies",
    description:
      "Foundational policies that govern academic, research, and administrative integrity across the university.",
    items: [
      "Quality Assurance Policy",
      "Academic Governance & Curriculum Review Policy",
      "Research Integrity, Ethics & Plagiarism Policy",
      "Data Protection and Information Security Policy",
    ],
  },
  {
    id: "manuals",
    title: "Manuals",
    description:
      "Operational manuals guiding process consistency, audit preparedness, and stakeholder satisfaction.",
    items: [
      "Outcome-Based Education Implementation Manual",
      "Internal & External Academic Audit Manual",
      "Laboratory Safety & Compliance Manual",
      "Student Support & Grievance Redressal Handbook",
    ],
  },
];

const COMMITTEES = [
  {
    name: "Curriculum Innovation Committee",
    focus: "Coordinates programme revision cycles, skill infusion, and outcome mapping.",
    contact: "curriculum.iqac@dsu.edu.in",
  },
  {
    name: "Research, Consultancy & IPR Committee",
    focus: "Enables grant proposals, industry partnerships, and patent facilitation services.",
    contact: "research.iqac@dsu.edu.in",
  },
  {
    name: "Student Support & Wellbeing Committee",
    focus: "Monitors learner satisfaction, counselling services, scholarships, and inclusion programmes.",
    contact: "studentsupport.iqac@dsu.edu.in",
  },
  {
    name: "Community Engagement Committee",
    focus: "Designs outreach programmes, impact assessments, and SDG-aligned initiatives.",
    contact: "outreach.iqac@dsu.edu.in",
  },
];

const FORM_TEMPLATES = [
  {
    title: "Programme Outcome Review Template",
    usage: "Semester-end evaluation of course outcomes, attainment analytics, and improvement plans.",
    access: "mailto:iqac@dsu.edu.in?subject=Request%20for%20Programme%20Outcome%20Review%20Template",
  },
  {
    title: "Faculty Development Proposal Form",
    usage: "Submit workshops, certifications, and immersion programmes for IQAC-supported funding.",
    access: "mailto:iqac@dsu.edu.in?subject=Faculty%20Development%20Proposal",
  },
  {
    title: "Community Outreach Documentation Kit",
    usage: "Capture need assessment, intervention design, beneficiary testimonials, and sustainability plan.",
    access: "mailto:iqac@dsu.edu.in?subject=Outreach%20Documentation%20Kit",
  },
  {
    title: "Best Practice Dossier Format",
    usage: "Document institutional best practices with objectives, execution, resources, and evidence of success.",
    access: "mailto:iqac@dsu.edu.in?subject=Best%20Practice%20Dossier%20Format",
  },
];

const VALUE_ADDED_OFFERINGS = [
  {
    name: "AI for Responsible Innovation",
    summary: "Interdisciplinary certification covering ethical AI, data stewardship, and industry case studies.",
    duration: "40 hours blended, co-certified with industry partner.",
    outcome: "Learners develop deployable prototypes aligned with social impact goals.",
  },
  {
    name: "Healthcare Design Sprint",
    summary: "Collaborative studio for health sciences students to co-create digital diagnostics with engineering peers.",
    duration: "6-week sprint culminating in jury presentations.",
    outcome: "Multi-disciplinary teams pitch prototypes for incubation support.",
  },
  {
    name: "Sustainability Entrepreneurship Lab",
    summary: "Immersive programme on circular economy, green finance, and scalable impact ventures.",
    duration: "Credit-bearing module with field immersion and mentor hours.",
    outcome: "Pitch readiness to external investors and social innovation grants.",
  },
];

const EVENT_SCHEDULE = [
  {
    date: "07 April 2025",
    title: "IQAC Colloquium on Emerging Pedagogies",
    description: "Masterclass on adaptive learning design, competency-based evaluation, and AI augmentation.",
    category: "Academic Excellence",
  },
  {
    date: "19 April 2025",
    title: "DSU Quality Conclave",
    description: "Annual showcase of departmental best practices, policy innovations, and learner success stories.",
    category: "Institutional Excellence",
  },
  {
    date: "06 May 2025",
    title: "NAAC Evidence Readiness Drive",
    description: "Documentation sprint aligning criterion repositories, course files, and stakeholder feedback logs.",
    category: "Compliance",
  },
  {
    date: "24 May 2025",
    title: "Outcome Mapping Workshop",
    description: "Hands-on clinic for programme coordinators on rubric design and attainment analytics.",
    category: "Capacity Building",
  },
];

function SideNavigation() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    SIDE_NAV.reduce<Record<string, boolean>>((acc, item) => {
      if (item.children) {
        acc[item.label] = true;
      }
      return acc;
    }, {}),
  );

  return (
    <aside className="sticky top-28 hidden h-[calc(100vh-8rem)] w-72 shrink-0 lg:block">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur">
        <nav className="space-y-4 overflow-y-auto pr-2 text-sm text-white/70">
          {SIDE_NAV.map((item) => {
            const isExpanded = item.children ? expanded[item.label] : false;
            const ContentTag = item.href ? "a" : "button";

            return (
              <div key={item.label} className="space-y-3">
                <div className="flex items-center gap-2">
                  <ContentTag
                    {...(item.href
                      ? {
                          href: item.href,
                        }
                      : { type: "button" })}
                    className="flex flex-1 items-center gap-3 rounded-2xl border border-transparent px-3 py-2 text-left text-white/75 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                  >
                    <item.icon className="h-4 w-4 text-white/60" aria-hidden="true" />
                    <span>{item.label}</span>
                  </ContentTag>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [item.label]: !prev[item.label],
                        }))
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:text-white"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition ${isExpanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
                {item.children && isExpanded && (
                  <ul className="space-y-2 pl-9 text-xs text-white/60">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                          <span className="h-1 w-1 rounded-full bg-white/50" aria-hidden="true" />
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-32 rounded-3xl border border-white/10 bg-slate-950/80 text-white shadow-[0_40px_140px_-80px_rgba(255,255,255,0.7)]"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${HERO_BACKGROUND})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />
        <div className="relative flex flex-col gap-12 px-8 py-20 lg:flex-row lg:items-center lg:px-12">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
              Internal Quality Assurance Cell
            </span>
            <h1 className="text-4xl font-display leading-tight sm:text-5xl lg:text-6xl">
              We thrive for Quality, Excellence, Integrity, Innovation
            </h1>
            <p className="max-w-2xl text-lg text-white/80 font-body">
              The IQAC at Dayananda Sagar University orchestrates continuous improvement through evidence-based planning, collaborative reviews, and future-ready assurance systems aligned with NAAC, NIRF, and global benchmarks.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-brand-gradient text-white shadow-lg shadow-brand-magenta/20 hover:opacity-90"
              >
                <a href="mailto:iqac@dsu.edu.in" className="gap-2">
                  Connect with IQAC
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <a
                href="https://www.naac.gov.in/images/docs/iqac/saac_iqac_guideline_1.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                Explore NAAC framework
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">Mandate in Action</p>
              <ul className="mt-6 space-y-4 text-sm text-white/80 font-body">
                <li className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-brand-yellow" aria-hidden="true" />
                  Sustain a culture of quality by integrating reflective practice across academic and administrative processes.
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-brand-yellow" aria-hidden="true" />
                  Translate peer review recommendations into measurable action plans with evidence-backed dashboards.
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-brand-yellow" aria-hidden="true" />
                  Showcase institutional distinctiveness through stories of innovation, inclusion, and community impact.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="scroll-mt-32" aria-labelledby="quality-stats">
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <div
            key={card.label}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            <div className="absolute -top-12 right-0 h-32 w-32 rounded-full bg-brand-gradient blur-3xl opacity-0 transition group-hover:opacity-60" />
            <div className="relative space-y-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/80">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-3xl font-semibold text-white">{card.value}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                {card.label}
              </p>
              <p className="text-sm text-white/75 font-body">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32 space-y-10">
      <header className="space-y-4 text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          About IQAC
        </span>
        <h2 className="text-3xl font-display sm:text-4xl">Foundation for quality assurance at DSU</h2>
        <p className="max-w-3xl text-base text-white/75 font-body">
          IQAC provides the governance structure, data ecosystem, and collaborative energy required to sustain excellence across academics, research, innovation, and community engagement.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {ABOUT_SECTIONS.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-32 rounded-3xl border border-white/10 bg-white/5 p-8 text-white"
          >
            <h3 className="text-xl font-semibold text-white">{section.title}</h3>
            <p className="mt-4 text-sm text-white/75 font-body">{section.summary}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80 font-body">
              {section.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function AlignmentSection() {
  return (
    <section className="scroll-mt-32 space-y-10">
      <header className="space-y-4 text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Quality Alignment
        </span>
        <h2 className="text-3xl font-display sm:text-4xl">National and global ranking preparedness</h2>
        <p className="max-w-3xl text-base text-white/75 font-body">
          IQAC coordinates submissions to national frameworks and international rankings through validated data, impact narratives, and stakeholder collaboration.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {ALIGNMENT_SECTIONS.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-32 rounded-3xl border border-white/10 bg-white/5 p-8 text-white"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm text-white/75 font-body">{item.description}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80 font-body">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function IDPSection() {
  return (
    <section id="idp" className="scroll-mt-32 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Institutional Development Plan (IDP)
          </span>
          <h2 className="text-2xl font-semibold text-white">Roadmap for future-ready academic excellence</h2>
          <p className="text-sm text-white/75 font-body">
            The IDP charts DSU’s five-year trajectory across curriculum innovation, research intensity, learner success, infrastructure, and societal engagement. IQAC anchors plan execution through measurable indicators, quarterly reviews, and stakeholder showcases.
          </p>
        </div>
        <Button
          asChild
          variant="secondary"
          className="bg-white/10 text-white hover:bg-white/20"
        >
          <a href="mailto:iqac@dsu.edu.in?subject=Request%20for%20Institutional%20Development%20Plan" className="gap-2">
            Request IDP summary
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
      <ul className="grid gap-4 text-sm text-white/80 font-body lg:grid-cols-2">
        <li className="flex items-start gap-2 rounded-3xl border border-white/10 bg-white/5 p-5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
          <span>Digital twins of classrooms and labs enable simulation-based learning and research prototyping.</span>
        </li>
        <li className="flex items-start gap-2 rounded-3xl border border-white/10 bg-white/5 p-5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
          <span>Inclusive learner pathways integrate bridge modules, mentoring pods, and talent acceleration tracks.</span>
        </li>
        <li className="flex items-start gap-2 rounded-3xl border border-white/10 bg-white/5 p-5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
          <span>Innovation corridors connect incubation, industry partners, and research clusters for translational outcomes.</span>
        </li>
        <li className="flex items-start gap-2 rounded-3xl border border-white/10 bg-white/5 p-5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
          <span>Green campus blueprint integrates carbon neutrality goals, smart mobility, and resilient infrastructure.</span>
        </li>
      </ul>
    </section>
  );
}

function InstitutionalExcellenceSection() {
  return (
    <section id="institutional-excellence" className="scroll-mt-32 space-y-12 text-white">
      <header className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Institutional Excellence
        </span>
        <h2 className="text-3xl font-display sm:text-4xl">Distinctive initiatives shaping DSU’s identity</h2>
        <p className="max-w-3xl text-base text-white/75 font-body">
          IQAC documents the hallmarks that define DSU’s learning ecosystem – from campus distinctiveness and best practices to collaborative agreements and outreach programmes.
        </p>
      </header>
      <div id="institutional-distinctiveness" className="scroll-mt-32 space-y-6">
        <h3 className="text-2xl font-semibold text-white">Institutional Distinctiveness</h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DISTINCTIVENESS_STORIES.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img
                src={story.image}
                alt={story.title}
                className="h-48 w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <h4 className="text-lg font-semibold text-white">{story.title}</h4>
                <p className="text-sm text-white/75 font-body">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div id="best-practices" className="scroll-mt-32 space-y-6">
        <h3 className="text-2xl font-semibold text-white">Best Practices</h3>
        <div className="grid gap-6 lg:grid-cols-2">
          {BEST_PRACTICES.map((practice) => (
            <article
              key={practice.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h4 className="text-lg font-semibold text-white">{practice.title}</h4>
              <p className="mt-3 text-sm text-white/75 font-body">{practice.narrative}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/80 font-body">
                {practice.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div id="mous" className="scroll-mt-32 space-y-6">
        <h3 className="text-2xl font-semibold text-white">Memoranda of Understanding</h3>
        <div className="grid gap-4 text-sm text-white/80 font-body lg:grid-cols-3">
          {MOU_LIST.map((mou) => (
            <article
              key={mou.partner}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                <Handshake className="h-4 w-4" aria-hidden="true" />
                {mou.year}
              </div>
              <h4 className="mt-3 text-lg font-semibold text-white">{mou.partner}</h4>
              <p className="mt-2">{mou.focus}</p>
            </article>
          ))}
        </div>
      </div>
      <div id="outreach" className="scroll-mt-32 space-y-6">
        <h3 className="text-2xl font-semibold text-white">Outreach Programs</h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {OUTREACH_PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 font-body"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{program.location}</p>
              <h4 className="mt-3 text-lg font-semibold text-white">{program.title}</h4>
              <p className="mt-3">{program.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportsSection() {
  return (
    <section id="reports" className="scroll-mt-32 space-y-10 text-white">
      <header className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Reports & Documentation
        </span>
        <h2 className="text-3xl font-display sm:text-4xl">Transparent reporting for accountability</h2>
        <p className="max-w-3xl text-base text-white/75 font-body">
          IQAC curates annual reports, audits, and quality submissions that demonstrate compliance, celebrate achievements, and illuminate improvement plans.
        </p>
      </header>
      <div className="space-y-8">
        {REPORT_GROUPS.map((group) => (
          <article key={group.id} id={group.id} className="scroll-mt-32 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
            <p className="text-sm text-white/75 font-body">{group.description}</p>
            <div className="grid gap-4 lg:grid-cols-2">
              {group.entries.map((entry) => (
                <div
                  key={entry.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-white/80 font-body"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{entry.period}</p>
                  <h4 className="mt-3 text-lg font-semibold text-white">{entry.title}</h4>
                  <p className="mt-3">{entry.summary}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PoliciesSection() {
  return (
    <section id="policies" className="scroll-mt-32 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Policies & Manuals
        </span>
        <h2 className="text-2xl font-semibold text-white">Frameworks that anchor quality systems</h2>
        <p className="text-sm text-white/75 font-body">
          Policy stewardship ensures consistency, accountability, and continuous alignment with statutory requirements and institutional ambitions.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {POLICY_SETS.map((set) => (
          <article key={set.id} id={set.id} className="scroll-mt-32 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-white/80 font-body">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {set.title}
            </div>
            <p className="mt-4">{set.description}</p>
            <ul className="mt-4 space-y-2">
              {set.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CommitteesSection() {
  return (
    <section id="committees" className="scroll-mt-32 space-y-6 text-white">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          University Committees
        </span>
        <h2 className="text-2xl font-semibold text-white">Quality governance through specialised committees</h2>
        <p className="text-sm text-white/75 font-body">
          Cross-functional committees translate policy into practice, nurture innovation, and provide focused support to academic and administrative units.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {COMMITTEES.map((committee) => (
          <article
            key={committee.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 font-body"
          >
            <h3 className="text-lg font-semibold text-white">{committee.name}</h3>
            <p className="mt-3">{committee.focus}</p>
            <p className="mt-4 text-white/60">
              Contact: {" "}
              <a
                href={`mailto:${committee.contact}`}
                className="font-medium text-white transition hover:text-brand-magenta"
              >
                {committee.contact}
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormsSection() {
  return (
    <section id="forms" className="scroll-mt-32 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Forms & Formats
        </span>
        <h2 className="text-2xl font-semibold text-white">Templates for consistent documentation</h2>
        <p className="text-sm text-white/75 font-body">
          Access structured templates that simplify reporting, enable comparable analytics, and ensure accreditation-ready records.
        </p>
      </header>
      <div className="space-y-4">
        {FORM_TEMPLATES.map((form) => (
          <article
            key={form.title}
            className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-white/80 font-body"
          >
            <h3 className="text-lg font-semibold text-white">{form.title}</h3>
            <p className="mt-2">{form.usage}</p>
            <a
              href={form.access}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Request editable copy
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValueAddedSection() {
  return (
    <section id="value-added" className="scroll-mt-32 space-y-6 text-white">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Value Added Courses
        </span>
        <h2 className="text-2xl font-semibold text-white">Future-oriented certifications curated by IQAC</h2>
        <p className="text-sm text-white/75 font-body">
          Interdisciplinary modules expand learner competencies and complement core curricula with industry-aligned skills.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {VALUE_ADDED_OFFERINGS.map((course) => (
          <article
            key={course.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 font-body"
          >
            <h3 className="text-lg font-semibold text-white">{course.name}</h3>
            <p className="mt-3">{course.summary}</p>
            <p className="mt-3 text-white/60">{course.duration}</p>
            <p className="mt-3">Outcome: {course.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EventCalendarSection() {
  return (
    <section id="event-calendar" className="scroll-mt-32 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          SGT Event Calendar
        </span>
        <h2 className="text-2xl font-semibold text-white">Upcoming IQAC-led programmes</h2>
        <p className="text-sm text-white/75 font-body">
          Stay updated on conclaves, workshops, and documentation drives facilitated by IQAC throughout the academic year.
        </p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {EVENT_SCHEDULE.map((event) => (
          <article
            key={event.title}
            className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-white/80 font-body"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {event.date}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{event.title}</h3>
            <p className="mt-2 text-white/60">{event.category}</p>
            <p className="mt-3">{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section id="feedback" className="scroll-mt-32 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <header className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Feedback & Support
        </span>
        <h2 className="text-2xl font-semibold text-white">Partner with the IQAC office</h2>
        <p className="text-sm text-white/75 font-body">
          Departments, students, alumni, and industry collaborators are encouraged to share insights that further strengthen DSU’s quality journey.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4 text-sm text-white/80 font-body">
          <p>
            Email <a href="mailto:iqac@dsu.edu.in" className="font-medium text-white transition hover:text-brand-magenta">iqac@dsu.edu.in</a> with improvement ideas, collaboration requests, or documentation needs. Every submission receives acknowledgement within two working days.
          </p>
          <p>
            For in-person discussions, visit the IQAC Office at the Innovation Campus, Kudlu Gate, Hosur Road, Bengaluru – 560 114.
          </p>
          <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
            <MapPin className="h-5 w-5 text-brand-magenta" aria-hidden="true" />
            <p className="text-sm text-white/70 font-body">
              Monday to Friday, 9:00 AM – 5:30 PM (appointments via email recommended).
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-white/80 font-body">
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-1 h-5 w-5 text-brand-magenta" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white">Submit feedback</p>
              <p className="mt-1">Share commendations, suggestions, or concerns to inform IQAC action plans.</p>
              <Button
                asChild
                variant="secondary"
                className="mt-4 bg-white/10 text-white hover:bg-white/20"
              >
                <a href="mailto:iqac@dsu.edu.in?subject=Feedback%20for%20IQAC" className="gap-2">
                  Email feedback
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users2 className="mt-1 h-5 w-5 text-brand-magenta" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white">Request facilitation</p>
              <p className="mt-1">Invite IQAC facilitators for quality audits, NAAC preparedness workshops, or policy clarifications.</p>
              <p className="mt-3 text-white/70">
                Email <a href="mailto:iqac@dsu.edu.in?subject=IQAC%20Facilitation%20Request" className="font-medium text-white transition hover:text-brand-magenta">iqac@dsu.edu.in</a> with the proposed agenda and timelines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-brand-magenta" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white">Document access</p>
              <p className="mt-1">Request authenticated copies of policies, audits, or reports for departmental dissemination.</p>
              <Link
                to="/research"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                Explore research ecosystem
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IQAC() {
  return (
    <main className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl gap-8 px-4 pb-24 pt-12 lg:px-6">
        <SideNavigation />
        <div className="flex-1 space-y-24">
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <AlignmentSection />
          <IDPSection />
          <InstitutionalExcellenceSection />
          <ReportsSection />
          <PoliciesSection />
          <CommitteesSection />
          <FormsSection />
          <ValueAddedSection />
          <EventCalendarSection />
          <FeedbackSection />
        </div>
      </div>
    </main>
  );
}
