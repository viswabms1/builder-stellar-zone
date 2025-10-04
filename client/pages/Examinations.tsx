import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const APPLICATION_DOCUMENTS: ExamDocument[] = [
  {
    title: "Application for Migration Certificate",
    description: "Request a migration certificate when you plan to transfer from DSU to another institution.",
    href: "https://www.dsu.edu.in/images/PDF/Migration-Certificate.pdf",
    icon: FileText,
    tag: "Form",
  },
  {
    title: "PDC Application for UG/PG",
    description: "Apply for your provisional degree certificate after completing undergraduate or postgraduate studies.",
    href: "https://www.dsu.edu.in/images/PDF/PDC-Applicaton.pdf",
    icon: ScrollText,
    tag: "Certificate",
  },
  {
    title: "Application for Transfer Certificate",
    description: "Submit this form to obtain your transfer certificate when discontinuing from DSU.",
    href: "https://www.dsu.edu.in/images/PDF/TC-Applicaton-format.pdf",
    icon: ClipboardList,
    tag: "Form",
  },
  {
    title: "Application for Duplicate Grade Card / Degree Certificate",
    description: "Use this application to request duplicate copies of grade cards or the degree certificate.",
    href: "https://www.dsu.edu.in/images/PDF/Duplicate_Grade_Card.pdf",
    icon: FileText,
    tag: "Records",
  },
  {
    title: "Application for Backlog / Repeat Examination",
    description: "Register for backlog or repeat examinations for courses requiring an additional attempt.",
    href: "https://www.dsu.edu.in/images/PDF/Application_For_Backlog_SEE.pdf",
    icon: ClipboardList,
    tag: "Examination",
  },
  {
    title: "Application for Re-valuation / Photocopy of Answer Booklet",
    description: "Request a re-valuation or photocopy of your evaluated answer booklet within the notified timelines.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Re_val_appln_Form.pdf",
    icon: ClipboardList,
    tag: "Revaluation",
  },
  {
    title: "PDC Application for Ph.D",
    description: "Apply for the provisional degree certificate after the successful completion of doctoral requirements.",
    href: "https://www.dsu.edu.in/images/PDF/PDC_Applicaton_for_PhD.pdf",
    icon: ScrollText,
    tag: "Certificate",
  },
  {
    title: "Application for Transcript",
    description: "Request official academic transcripts for employment or higher education needs.",
    href: "https://www.dsu.edu.in/images/PDF/Application_for_Transcript_2019-20.pdf",
    icon: FileText,
    tag: "Transcript",
  },
  {
    title: "Application for Name Correction in Grade Card / Degree Certificate",
    description: "Submit this form to correct spelling or personal details in official academic records.",
    href: "https://www.dsu.edu.in/images/PDF/Name_Correction_in_Grade_or_Marks_Card.pdf",
    icon: FileText,
    tag: "Correction",
  },
];

const CIRCULAR_DOCUMENTS: ExamDocument[] = [
  {
    title: "Timetable for MCA (2024 Batch) Summer Term Examinations - October 2025",
    description: "Detailed schedule covering first and second semester summer term examinations for MCA 2024 batch.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Sept_25/23092025_MCA_ST_T.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title: "Circular for B.Tech 1st & 2nd Semester Summer Term Examinations - Aug/Sep 2025",
    description: "Official circular outlining guidelines for B.Tech summer term examinations for 1st and 2nd semesters.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Sept_25/23092025_BTech_ST_C.pdf",
    icon: Megaphone,
    tag: "Circular",
  },
  {
    title: "Timetable for B.Voc 5th & 6th Semester Summer Term Examinations - September 2025",
    description: "Summer term examination timetable for B.Voc programmes delivered in partnership with NTTF.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Sept_25/17092025_BVoc_ST_T.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title: "Circular for M.Pharm, B.Pharm Summer Term and Pharm.D Makeup Examinations - September 2025",
    description: "Instructions and reporting details for pharmacy summer term and makeup examinations.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Aug_25/21082025_Pharm_C.pdf",
    icon: Megaphone,
    tag: "Circular",
  },
  {
    title: "Time Table for B.Tech (2024 Batch) 1st & 2nd Semester Summer Term Examinations",
    description: "Check dates and session slots for B.Tech 2024 batch summer term examinations.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Aug_25/07_BTech_ST_24B.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title: "Timetable for M.Tech (2024 Batch) Even Semester End Examinations - August 2025",
    description: "Schedule for even semester end examinations for the M.Tech 2024 cohort.",
    href: "https://www.dsu.edu.in/images/PDF/TT/Aug_25/29_MTech_24B.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title: "Revaluation Circular for B.Tech 2nd Semester Examinations - June/July 2025",
    description: "Revaluation and photocopy process for B.Tech 2nd semester summer term examinations.",
    href: "https://www.dsu.edu.in/images/PDF/TT/July_25/30_BTech_24B.pdf",
    icon: Megaphone,
    tag: "Circular",
  },
  {
    title: "Timetable for M.Sc Summer Term Theory Examinations - July/August 2025",
    description: "Theory examination schedule for M.Sc programmes conducted during July and August 2025.",
    href: "https://www.dsu.edu.in/images/PDF/TT/July_25/21072025_Msc.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
  {
    title: "Timetable for MBA Summer Term Examinations - July 2025",
    description: "MBA summer term examination time table with slot-wise details for July 2025.",
    href: "https://www.dsu.edu.in/images/PDF/TT/July_25/04072025_T.pdf",
    icon: CalendarClock,
    tag: "Timetable",
  },
];

const RESULT_DOCUMENTS: ExamDocument[] = [
  {
    title: "Ph.D Provisional List of Selected Candidates – July 2025",
    description: "Review the provisional selection list for the Ph.D intake published in July 2025.",
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
    anchor: "#applications",
    title: "Download Forms",
    description: "Access migration, PDC, transcript, and revaluation applications instantly.",
    icon: FileText,
  },
  {
    anchor: "#circulars",
    title: "Exam Timetables",
    description: "Review circulars and timetables for upcoming examinations across programmes.",
    icon: CalendarClock,
  },
  {
    anchor: "#results",
    title: "Results Desk",
    description: "Check the newest results and official examination notifications.",
    icon: GraduationCap,
  },
  {
    anchor: "https://ums.mydsi.org/Login.aspx/DSU",
    title: "Student ERP",
    description: "Login to the ERP portal for hall tickets, fee payment, and attendance records.",
    icon: ExternalLink,
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
    lines: [
      "School of Engineering",
      "School of Health Sciences & MBBS",
    ],
    phones: ["+91 9606022151", "+91 9606022147"],
  },
  {
    title: "City Innovation Campus",
    icon: MapPin,
    lines: [
      "Kudlu Gate, Hosur Road",
      "Bengaluru – 560 068, Karnataka",
    ],
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
      <ResourceSections />
      <GuidelinesSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
          Examination Services Portal
        </span>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          Access Official <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Examination Resources</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Download forms, view circulars, and preview examination documents instantly. Each PDF opens in an on-page viewer so you can skim the content before downloading.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-white">
            Explore Resources
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500/10" asChild>
            <a href="https://ums.mydsi.org/Login.aspx/DSU" target="_blank" rel="noreferrer">
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
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Quick Access</h2>
          <p className="text-muted-foreground md:text-lg">
            Jump directly to the section you need or launch the ERP portal for hall tickets and personalised updates.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((item) => (
            <Card
              key={item.title}
              className="group border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{item.description}</CardDescription>
                <Button variant="ghost" className="w-full justify-between text-orange-500 hover:bg-orange-500/10" asChild>
                  <a href={item.anchor} target={item.anchor.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
                    Open
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

function ResourceSections() {
  return (
    <section className="bg-gradient-to-b from-orange-500/5 to-transparent px-6 py-20">
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
    <div id={section.id} className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-3xl font-bold md:text-4xl">{section.title}</h3>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">{section.summary}</p>
        </div>
        <Badge variant="secondary" className="self-start rounded-xl px-4 py-2 text-sm">
          {section.documents.length} document{section.documents.length > 1 ? "s" : ""}
        </Badge>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
    <Card className="group border border-border/50 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {document.title}
            </CardTitle>
            <Badge variant="outline" className="mt-2 border-orange-500/40 text-xs uppercase tracking-wide text-orange-500">
              {document.tag}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
          {document.description}
        </CardDescription>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
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
          <Button variant="ghost" size="sm" className="text-orange-500 hover:bg-orange-500/10" asChild>
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

function GuidelinesSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How to Use These Resources</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Follow these best practices to stay organised during the examination process.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full divide-y divide-border/40 rounded-3xl border border-border/40 bg-card/50 backdrop-blur">
          {GUIDELINES.map((item, index) => (
            <AccordionItem key={item.title} value={`guideline-${index}`}> 
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground md:text-base">
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
    <section className="bg-gradient-to-r from-orange-500/5 via-red-600/5 to-pink-500/5 px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Need Assistance?</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Connect with the examination department between 9:00 AM and 4:00 PM for support on applications, schedules, and results.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <CardContent className="space-y-3 text-sm text-muted-foreground">
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
          <CardContent className="flex flex-col gap-4 rounded-3xl p-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:text-base">
            <div>
              <span className="font-semibold text-foreground">Submission Window:</span> Forms and requests are accepted on working days between 9:00 AM and 4:00 PM.
            </div>
            <Button variant="ghost" className="text-orange-500 hover:bg-orange-500/10" asChild>
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

function cnBadge(className?: string) {
  return cn("rounded-xl px-4 py-2 text-sm", className);
}
