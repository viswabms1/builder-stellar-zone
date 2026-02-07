import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  ScrollText,
  ChevronLeft,
  ChevronRight,
  Calendar,
  HelpCircle,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExamDocument = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tag: string;
};

type ExamSection = {
  id: string;
  title: string;
  summary: string;
  documents: ExamDocument[];
};

type QuickLink = {
  anchor: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type ContactCard = {
  title: string;
  icon: LucideIcon;
  lines: string[];
  phones?: string[];
  emails?: string[];
};

type Guideline = {
  title: string;
  points: string[];
};

type CalendarEvent = {
  date: string;
  title: string;
  type: "theory" | "practical" | "internal";
};

type ResultItem = {
  title: string;
  date: string;
  status: "declared" | "awaiting" | "correction";
  href: string;
};

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const APPLICATION_DOCUMENTS: ExamDocument[] = [
  {
    title: "Application for Migration Certificate",
    description:
      "Request a migration certificate when you plan to transfer from DSU to another institution.",
    href: "https://www.dsu.edu.in/images/PDF/Migration-Certificate.pdf",
    icon: FileText,
    tag: "Form",
  },
  {
    title: "PDC Application for UG/PG",
    description:
      "Apply for your provisional degree certificate after completing undergraduate or postgraduate studies.",
    href: "https://www.dsu.edu.in/images/PDF/PDC-Applicaton.pdf",
    icon: ScrollText,
    tag: "Certificate",
  },
  {
    title: "Application for Transfer Certificate",
    description:
      "Submit this form to obtain your transfer certificate when discontinuing from DSU.",
    href: "https://www.dsu.edu.in/images/PDF/TC-Applicaton-format.pdf",
    icon: ClipboardList,
    tag: "Form",
  },
  {
    title: "Application for Duplicate Grade Card / Degree Certificate",
    description:
      "Use this application to request duplicate copies of grade cards or the degree certificate.",
    href: "https://www.dsu.edu.in/images/PDF/Duplicate_Grade_Card.pdf",
    icon: FileText,
    tag: "Records",
  },
  {
    title: "Application for Backlog / Repeat Examination",
    description:
      "Register for backlog or repeat examinations for courses requiring an additional attempt.",
    href: "https://www.dsu.edu.in/images/PDF/Application_For_Backlog_SEE.pdf",
    icon: ClipboardList,
    tag: "Examination",
  },
  {
    title: "Application for Re-valuation / Photocopy of Answer Booklet",
    description:
      "Request a re-valuation or photocopy of your evaluated answer booklet within the notified timelines.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Re_val_appln_Form.pdf",
    icon: ClipboardList,
    tag: "Revaluation",
  },
  {
    title: "PDC Application for Ph.D",
    description:
      "Apply for the provisional degree certificate after the successful completion of doctoral requirements.",
    href: "https://www.dsu.edu.in/images/PDF/PDC_Applicaton_for_PhD.pdf",
    icon: ScrollText,
    tag: "Certificate",
  },
  {
    title: "Application for Transcript",
    description:
      "Request official academic transcripts for employment or higher education needs.",
    href: "https://www.dsu.edu.in/images/PDF/Application_for_Transcript_2019-20.pdf",
    icon: FileText,
    tag: "Transcript",
  },
  {
    title: "Application for Name Correction in Grade Card / Degree Certificate",
    description:
      "Submit this form to correct spelling or personal details in official academic records.",
    href: "https://www.dsu.edu.in/images/PDF/Name_Correction_in_Grade_or_Marks_Card.pdf",
    icon: FileText,
    tag: "Correction",
  },
];

const CIRCULAR_DOCUMENTS: ExamDocument[] = [
  {
    title:
      "Timetable for MCA (2024 Batch) Summer Term Examinations - October 2025",
    description:
      "Detailed schedule covering first and second semester summer term examinations for MCA 2024 batch.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Sept_25/23092025_MCA_ST_T.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title:
      "Circular for B.Tech 1st & 2nd Semester Summer Term Examinations - Aug/Sep 2025",
    description:
      "Official circular outlining guidelines for B.Tech summer term examinations for 1st and 2nd semesters.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Sept_25/23092025_BTech_ST_C.pdf",
    icon: Megaphone,
    tag: "Circular",
  },
  {
    title:
      "Timetable for B.Voc 5th & 6th Semester Summer Term Examinations - September 2025",
    description:
      "Summer term examination timetable for B.Voc programmes delivered in partnership with NTTF.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Sept_25/17092025_BVoc_ST_T.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title:
      "Circular for M.Pharm, B.Pharm Summer Term and Pharm.D Makeup Examinations - September 2025",
    description:
      "Instructions and reporting details for pharmacy summer term and makeup examinations.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Aug_25/21082025_Pharm_C.pdf",
    icon: Megaphone,
    tag: "Circular",
  },
  {
    title:
      "Time Table for B.Tech (2024 Batch) 1st & 2nd Semester Summer Term Examinations",
    description:
      "Check dates and session slots for B.Tech 2024 batch summer term examinations.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Aug_25/07_BTech_ST_24B.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title:
      "Timetable for M.Tech (2024 Batch) Even Semester End Examinations - August 2025",
    description:
      "Schedule for even semester end examinations for the M.Tech 2024 cohort.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Aug_25/29_MTech_24B.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title:
      "Revaluation Circular for B.Tech 2nd Semester Examinations - June/July 2025",
    description:
      "Revaluation and photocopy process for B.Tech 2nd semester summer term examinations.",
    href: "https://www.dsu.edu.in/images/PDF/TT/July_25/30_BTech_24B.pdf",
    icon: Megaphone,
    tag: "Circular",
  },
  {
    title:
      "Timetable for M.Sc Summer Term Theory Examinations - July/August 2025",
    description:
      "Theory examination schedule for M.Sc programmes conducted during July and August 2025.",
    href: "https://www.dsu.edu.in/images/PDF/TT/July_25/21072025_Msc.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title: "Timetable for MBA Summer Term Examinations - July 2025",
    description:
      "MBA summer term examination time table with slot-wise details for July 2025.",
    href: "https://www.dsu.edu.in/images/PDF/TT/July_25/04072025_T.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
];

const RESULT_DOCUMENTS: ExamDocument[] = [
  {
    title: "Ph.D Provisional List of Selected Candidates – July 2025",
    description:
      "Review the provisional selection list for the Ph.D intake published in July 2025.",
    href: "https://www.dsu.edu.in/images/research/31072025_phd.pdf",
    icon: GraduationCap,
    tag: "Result",
  },
];

const EXAM_SECTIONS: ExamSection[] = [
  {
    id: "applications",
    title: "Applications & Forms",
    summary:
      "Download frequently used examination forms including migration, PDC, transcripts, revaluation requests, and more in a single place.",
    documents: APPLICATION_DOCUMENTS,
  },
  {
    id: "circulars",
    title: "Circulars & Timetables",
    summary:
      "Stay up to date with the latest circulars and detailed timetables for semester examinations, summer term sessions, and programme-specific schedules.",
    documents: CIRCULAR_DOCUMENTS,
  },
  {
    id: "results",
    title: "Results & Notifications",
    summary:
      "View authoritative notifications and results released by the Controller of Examinations.",
    documents: RESULT_DOCUMENTS,
  },
];

const QUICK_LINKS: QuickLink[] = [
  {
    anchor: "#calendar",
    title: "📅 Exam Timetables",
    description:
      "Access detailed schedules for theory, practical, and internal examinations.",
    icon: CalendarClock,
  },
  {
    anchor: "#applications",
    title: "📝 Forms & Applications",
    description:
      "Download revaluation, photocopy, hall ticket, and eligibility forms.",
    icon: FileText,
  },
  {
    anchor: "#circulars",
    title: "🧾 Regulations & Guidelines",
    description:
      "Review credit system, GPA rules, and examination policies.",
    icon: ScrollText,
  },
  {
    anchor: "#results",
    title: "📈 Results & Circulars",
    description:
      "Check latest results and official examination notifications.",
    icon: GraduationCap,
  },
  {
    anchor: "#applications",
    title: "📋 Hall Tickets & Instructions",
    description:
      "Print your hall ticket and review exam day guidelines.",
    icon: ClipboardList,
  },
  {
    anchor: "#faqs",
    title: "💬 Student FAQs",
    description:
      "Find answers to common questions about exams and processes.",
    icon: HelpCircle,
  },
];

const CALENDAR_EVENTS: CalendarEvent[] = [
  { date: "2025-01-25", title: "B.Tech 1st Semester Theory Exams Begin", type: "theory" },
  { date: "2025-02-10", title: "Internal Assessment Deadline", type: "internal" },
  { date: "2025-02-15", title: "M.Tech Practical Examinations", type: "practical" },
  { date: "2025-03-01", title: "MBA Theory Examinations", type: "theory" },
  { date: "2025-03-15", title: "Results Declaration Window", type: "theory" },
];

const RESULT_ITEMS: ResultItem[] = [
  {
    title: "B.Tech 2nd Sem End Exam Results",
    date: "Declared on Jan 20, 2025",
    status: "declared",
    href: "#results",
  },
  {
    title: "M.Tech 1st Sem Revaluation Results",
    date: "Expected by Feb 5, 2025",
    status: "awaiting",
    href: "#results",
  },
  {
    title: "MBA 1st Sem Grade Correction Notice",
    date: "Updated on Jan 18, 2025",
    status: "correction",
    href: "#results",
  },
  {
    title: "Ph.D Entrance Exam Shortlist",
    date: "Declared on Jan 15, 2025",
    status: "declared",
    href: "#results",
  },
  {
    title: "B.Voc 3rd Sem Supplementary Results",
    date: "Expected by Feb 10, 2025",
    status: "awaiting",
    href: "#results",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do I apply for revaluation?",
    answer:
      "Download the revaluation application form, fill in your course details and semester information, and submit it to the examination office within the notified deadline with the prescribed fee. Original hall ticket is mandatory.",
    category: "Revaluation",
  },
  {
    question: "When will results be declared?",
    answer:
      "Results are typically declared 30-45 days after the examination concludes. You can track the expected declaration date in the examination circular released before the exam. Updates are sent to your registered email and DSU portal.",
    category: "Results",
  },
  {
    question: "What is the late fee for forms?",
    answer:
      "Late submission of examination forms typically incurs a fee of ₹500 to ₹2,000 depending on the form type. Exact amounts are mentioned in the respective examination circular. Payment must be made through the DSU portal.",
    category: "Fees",
  },
  {
    question: "How do I request a photocopy of my answer booklet?",
    answer:
      "Submit the photocopy request form with your hall ticket and course details to the examination office. Processing takes 7-10 working days. You can view the photocopy at the examination office or request a scanned copy.",
    category: "Revaluation",
  },
  {
    question: "What documents do I need for the hall ticket?",
    answer:
      "Hall tickets are generated automatically in the DSU student ERP portal after form submission. You need to log in with your enrollment number and password, verify your details, and download the PDF. Bring a printed copy to the examination hall.",
    category: "Hall Ticket",
  },
  {
    question: "Can I apply for supplementary examinations?",
    answer:
      "Yes, eligible students can apply for supplementary examinations if they have failed or wish to improve their grades. Applications are invited only during the notified window. Check the examination circular for eligibility and deadline details.",
    category: "Supplementary",
  },
  {
    question: "How is GPA/CGPA calculated?",
    answer:
      "GPA is calculated based on the grades obtained in your courses weighted by their credits. The formula is: GPA = (Sum of Credit × Grade Point) / Total Credits. CGPA is the cumulative GPA across all semesters. Detailed rules are available in the academic regulations.",
    category: "Grading",
  },
  {
    question: "What happens if I miss the exam?",
    answer:
      "Absence from examinations may be marked as 'AB' (absence). You can apply for a make-up examination if you have valid medical or emergency documentation. Apply within 7 days of missing the exam with supporting certificates.",
    category: "Absences",
  },
];

const CONTACT_CARDS: ContactCard[] = [
  {
    title: "Controller of Examinations",
    icon: MapPin,
    lines: [
      "DSU Main Campus",
      "Devarakaggalahalli, Harohalli",
      "Kanakapura Road, Ramanagara Dt.",
      "Bengaluru – 562 112, Karnataka",
    ],
    emails: ["coe@dsu.edu.in"],
  },
  {
    title: "Examination Department Contacts",
    icon: Phone,
    lines: ["School of Engineering", "School of Health Sciences & MBBS"],
    phones: ["+91 9606022151", "+91 9606022147"],
  },
  {
    title: "City Innovation Campus",
    icon: MapPin,
    lines: ["Kudlu Gate, Hosur Road", "Bengaluru – 560 068, Karnataka"],
    phones: ["080 4909 2979", "080 4909 2978"],
  },
];

const GUIDELINES: Guideline[] = [
  {
    title: "Submitting Applications",
    points: [
      "Complete the relevant form, attach the required documents, and submit it at the Controller of Examinations office or via the notified submission channel.",
      "Keep digital copies of the filled form and payment receipts for future reference.",
      "Track acknowledgements or clarifications through your DSU email ID.",
    ],
  },
  {
    title: "Tracking Exam Timetables",
    points: [
      "Review the circulars section regularly; new releases are added chronologically with the latest at the top.",
      "Confirm venue and seating details through the Student ERP portal ahead of the exam date.",
      "If timetable updates occur, the revised PDF replaces the earlier version with the same link.",
    ],
  },
  {
    title: "Revaluation and Result Updates",
    points: [
      "Submit revaluation applications within the deadline mentioned in the respective circular.",
      "Monitor the results section and your registered email for status updates and revised marks, if any.",
      "Reach out to the examination department helpline for clarifications on delayed results.",
    ],
  },
];

export default function Examinations() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <QuickLinksSection />
      <CalendarSection />
      <ResourceSections />
      <ResultsCarousel />
      <FAQSection />
      <GuidelinesSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-28 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-slate-900 dark:via-black dark:to-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-magenta/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
          Examination Services Portal
        </span>
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
          Examination Resources.{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Transparent. Accessible.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground md:text-xl">
          Find circulars, timetables, results, forms, and guidelines for all DSU
          examinations in one place.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground animate-gradient bg-[length:200%_auto]"
            asChild
          >
            <a href="#calendar">
              View Exam Calendar
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-brand-blue/30 text-brand-blue hover:text-brand-magenta hover:bg-brand-blue/10"
            asChild
          >
            <a
              href="https://ums.mydsi.org/Login.aspx/DSU"
              target="_blank"
              rel="noreferrer"
            >
              Open Student ERP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function QuickLinksSection() {
  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Quick Access</span>
          </h2>
          <p className="text-foreground md:text-lg">
            Jump directly to the section you need or launch the ERP portal for
            hall tickets and personalized updates.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((item) => (
            <Card
              key={item.title}
              className="group border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10"
            >
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{item.description}</CardDescription>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-brand-blue hover:text-brand-magenta hover:bg-transparent transition-colors"
                  asChild
                >
                  <a
                    href={item.anchor}
                    target={
                      item.anchor.startsWith("http") ? "_blank" : "_self"
                    }
                    rel="noreferrer"
                  >
                    Access
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarSection() {
  return (
    <section
      id="calendar"
      className="bg-gradient-to-b from-brand-blue/5 via-brand-magenta/5 to-transparent dark:from-brand-magenta/5 dark:via-brand-blue/5 dark:to-transparent px-3 py-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Exam Calendar</span>
          </h2>
          <p className="text-foreground md:text-lg">
            Upcoming examination dates and events across all programmes.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CALENDAR_EVENTS.map((event, index) => {
            const typeColors = {
              theory: "bg-brand-blue/10 border-brand-blue/30 text-brand-blue",
              practical: "bg-brand-green/10 border-brand-green/30 text-brand-green",
              internal: "bg-brand-magenta/10 border-brand-magenta/30 text-brand-magenta",
            };
            return (
              <Card
                key={index}
                className={`border ${typeColors[event.type]} backdrop-blur-sm`}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Calendar className="h-5 w-5" />
                    <Badge variant="outline" className="capitalize">
                      {event.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 rounded-2xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-magenta/5 p-6">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> Calendar events are indicative and subject to
            change. Always refer to official circulars for confirmed dates. New
            dates and updates are announced through the examination cell and
            student ERP portal.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResourceSections() {
  return (
    <section className="bg-gradient-to-b from-brand-magenta/5 via-brand-blue/5 to-transparent dark:from-brand-magenta/5 dark:via-brand-blue/5 dark:to-transparent px-3 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        {EXAM_SECTIONS.map((section) => (
          <ExamResourceSection key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

function ExamResourceSection({ section }: { section: ExamSection }) {
  return (
    <div id={section.id} className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            <span className="bg-brand-gradient bg-clip-text text-transparent">{section.title}</span>
          </h3>
          <p className="mt-2 max-w-2xl text-base text-foreground md:text-lg">
            {section.summary}
          </p>
        </div>
        <Badge
          variant="secondary"
          className="self-start rounded-xl px-4 py-2 text-sm"
        >
          {section.documents.length} document
          {section.documents.length > 1 ? "s" : ""}
        </Badge>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {section.documents.map((doc) => (
          <ExamDocumentCard key={doc.href} document={doc} />
        ))}
      </div>
    </div>
  );
}

function ExamDocumentCard({ document }: { document: ExamDocument }) {
  const Icon = document.icon;

  return (
    <Card className="group border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {document.title}
            </CardTitle>
            <Badge
              variant="outline"
              className="mt-2 border-brand-blue/40 text-xs uppercase tracking-wide text-brand-blue"
            >
              {document.tag}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed text-foreground">
          {document.description}
        </CardDescription>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground animate-gradient bg-[length:200%_auto]"
              >
                View PDF
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-[92vw]">
              <DialogHeader>
                <DialogTitle>{document.title}</DialogTitle>
                <DialogDescription>{document.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex h-[70vh] items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-muted">
                <iframe
                  src={document.href}
                  title={document.title}
                  className="h-full w-full"
                />
              </div>
              <DialogFooter className="mt-4">
                <Button variant="outline" asChild>
                  <a href={document.href} target="_blank" rel="noreferrer">
                    Download PDF
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            variant="ghost"
            size="sm"
            className="text-brand-blue hover:text-brand-magenta hover:bg-transparent transition-colors"
            asChild
          >
            <a href={document.href} target="_blank" rel="noreferrer">
              Open in New Tab
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ResultsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % RESULT_ITEMS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) =>
      prev === 0 ? RESULT_ITEMS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % RESULT_ITEMS.length);
  };

  const statusStyles = {
    declared: {
      icon: CheckCircle,
      color: "text-brand-blue",
      bg: "bg-brand-blue/10",
      badge: "bg-brand-blue/20 text-brand-blue",
    },
    awaiting: {
      icon: Clock,
      color: "text-brand-magenta",
      bg: "bg-brand-magenta/10",
      badge: "bg-brand-magenta/20 text-brand-magenta",
    },
    correction: {
      icon: AlertCircle,
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      badge: "bg-brand-orange/20 text-brand-orange",
    },
  };

  return (
    <section className="px-3 py-10 bg-gradient-to-b from-background via-brand-blue/5 to-brand-magenta/5 dark:from-black dark:via-brand-blue/5 dark:to-brand-magenta/5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Results & Notifications</span>
          </h2>
          <p className="text-foreground md:text-lg">
            Latest examination results, status updates, and official
            notifications.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-orange-500/20">
            <div className="flex">
              {RESULT_ITEMS.map((item, index) => {
                const style = statusStyles[item.status];
                const StatusIcon = style.icon;
                return (
                  <div
                    key={index}
                    className={`min-w-full transition-transform duration-500 ease-out ${
                      index === currentSlide ? "translate-x-0" : ""
                    }`}
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%)`,
                    }}
                  >
                    <Card
                      className={`m-3 border-0 ${style.bg} backdrop-blur-sm`}
                    >
                      <CardHeader className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className={`h-12 w-12 rounded-xl ${style.bg} flex items-center justify-center`}>
                            <StatusIcon className={`h-6 w-6 ${style.color}`} />
                          </div>
                          <Badge className={style.badge}>
                            {item.status.charAt(0).toUpperCase() +
                              item.status.slice(1)}
                          </Badge>
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {item.title}
                          </CardTitle>
                          <p className="mt-2 text-sm text-foreground/70">
                            {item.date}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-500 hover:bg-transparent"
                          asChild
                        >
                          <a href={item.href}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 rounded-full bg-orange-500/20 p-2 text-orange-600 transition hover:bg-orange-500/30"
            aria-label="Previous result"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 rounded-full bg-orange-500/20 p-2 text-orange-600 transition hover:bg-orange-500/30"
            aria-label="Next result"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {RESULT_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentSlide(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "h-3 w-8 bg-orange-500"
                    : "w-2 bg-orange-500/40 hover:bg-orange-500/60"
                }`}
                aria-label={`Go to result ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));
  const filteredFAQs =
    selectedCategory === null
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="faqs" className="px-3 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Student FAQs</h2>
          <p className="mt-3 text-foreground md:text-lg">
            Find answers to common questions about examinations, forms, and
            processes.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ? "default" : "outline"
              }
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-border/40 rounded-3xl border border-border/40 bg-card/50 backdrop-blur"
        >
          {filteredFAQs.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-foreground md:text-base leading-relaxed ml-8">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
          <p className="text-sm text-foreground">
            <strong>Didn't find your answer?</strong> Contact the examination
            department at{" "}
            <a href="mailto:coe@dsu.edu.in" className="text-orange-600 hover:underline font-semibold">
              coe@dsu.edu.in
            </a>{" "}
            or call us at{" "}
            <a href="tel:+919606022151" className="text-orange-600 hover:underline font-semibold">
              +91 9606 022 151
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function GuidelinesSection() {
  return (
    <section className="px-3 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            How to Use These Resources
          </h2>
          <p className="mt-3 text-foreground md:text-lg">
            Follow these best practices to stay organised during the examination
            process.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-border/40 rounded-3xl border border-border/40 bg-card/50 backdrop-blur"
        >
          {GUIDELINES.map((item, index) => (
            <AccordionItem key={item.title} value={`guideline-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 list-disc space-y-2 text-sm text-foreground md:text-base">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500/5 via-red-600/5 to-pink-500/5 px-3 py-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Need Assistance?</h2>
          <p className="mt-3 text-foreground md:text-lg">
            Connect with the examination department between 9:00 AM and 4:00 PM
            for support on applications, schedules, and results.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {CONTACT_CARDS.map((contact) => (
            <Card
              key={contact.title}
              className="border border-border/40 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <CardHeader className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <contact.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground">
                <div className="space-y-1">
                  {contact.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                {contact.phones && (
                  <div className="space-y-1">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-2 text-orange-500 hover:underline"
                      >
                        <Phone className="h-4 w-4" />
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
                {contact.emails && (
                  <div className="space-y-1">
                    {contact.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-orange-500 hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        {email}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border border-orange-500/30 bg-card/70 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-4 rounded-3xl p-6 text-sm text-foreground md:flex-row md:items-center md:justify-between md:text-base">
            <div>
              <span className="font-semibold text-foreground">
                Submission Window:
              </span>{" "}
              Forms and requests are accepted on working days between 9:00 AM
              and 4:00 PM.
            </div>
            <Button
              variant="ghost"
              className="text-orange-500 hover:bg-transparent"
              asChild
            >
              <a href="mailto:coe@dsu.edu.in">
                Email the Controller of Examinations
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
