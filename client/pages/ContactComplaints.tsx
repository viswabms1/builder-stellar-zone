import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

type Committee = {
  name: string;
  email?: string;
  chairperson?: string;
  phone?: string;
  chairEmail?: string;
  helpline?: string;
  pdfUrl?: string;
};

type CommitteeLink = {
  label: string;
  path: string;
  external?: boolean;
};

const COMMITTEES: Committee[] = [
  {
    name: "Anti Ragging Committee",
    email: "AR-Com@dsu.edu.in",
    chairperson: "Dr. Pushpa Sarkar",
    phone: "9342189677",
    chairEmail: "dean-sahs@dsu.edu.in",
    helpline: "National Anti Ragging Cell HelpLine: 1800-180-5522",
  },
  {
    name: "Prevention of Caste Based Discrimination (SC/ST/OBC)",
    email: "cb-dis@dsu.edu.in",
    chairperson: "Prof. Rakesh S Katarey",
    phone: "9663063388",
    chairEmail: "prof.rakesh@dsu.edu.in",
    pdfUrl: "https://www.dsu.edu.in/images/Committee/pcbdc_20012023.pdf",
  },
  {
    name: "Anti-sexual Harassment Committee (ICC)",
    email: "sh-com@dus.edu.in",
    chairperson: "Dr. Shaila S G",
    phone: "8884560635",
    chairEmail: "shaila-cse@dsu.edu.in",
  },
  {
    name: "Students Grievance Redressal Committee",
    email: "nodalofficer.grc@dsu.edu.in",
    chairperson: "Dr. Puttamadappa C",
    phone: "9845716228",
    chairEmail: "registrar@dsu.edu.in",
    pdfUrl: "https://www.dsu.edu.in/images/Committee/Grievance_Redressal_02022024.pdf",
  },
  {
    name: "Anti Drug Committee",
    email: "antidrug-committee@dsu.edu.in",
    chairperson: "Prof. (Capt) Nagaraj Subbarao",
    phone: "9986321964",
    chairEmail: "dean-cee@dsu.edu.in",
  },
];

const COMMITTEE_LINKS: CommitteeLink[] = [
  { label: "Anti Ragging Cell", path: "/anti-ragging-cell" },
  { label: "Caste Based Discrimination Committee Details", path: "#details" },
  { label: "Students Grievance Redressal Committee", path: "#details" },
  { label: "Gender Champions Committee", path: "https://www.dsu.edu.in/images/Committee/Gender_Championship_Committee_26022024.pdf", external: true },
  { label: "Constitute of Anti Ragging Squad Committee", path: "https://www.dsu.edu.in/images/Committee/Anti_Ragging_Squad_25052024.pdf", external: true },
  { label: "Constitution of Ombudsman Committee", path: "https://www.dsu.edu.in/images/Committee/Ombudsperson_22092023.pdf", external: true },
  { label: "Constitute of Anti Drug Committee", path: "https://www.dsu.edu.in/images/Committee/Anti_Drug_Committee_2023.pdf", external: true },
  { label: "Students Grievance Redressal Mechanism", path: "https://www.dsu.edu.in/images/Grievance_Redressal_Mechanism-compressed.pdf", external: true },
  { label: "Internal Complaint Committee", path: "https://www.dsu.edu.in/images/Committee/ICC_21072025.pdf", external: true },
  { label: "Equal Opportunity Cell", path: "https://www.dsu.edu.in/images/Committee/Equal_opporunity_Cell.pdf", external: true },
  { label: "Socio-Economically Disadvantaged Groups Cell", path: "https://www.dsu.edu.in/images/Committee/SEDG.pdf", external: true },
  { label: "UGC e-Samadhaan", path: "https://samadhaan.ugc.ac.in/Home/Index", external: true },
  { label: "Red Cross Committee", path: "https://www.dsu.edu.in/images/Committee/Red_Cross_Wing_Committee.pdf", external: true },
];

export default function ContactComplaints() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <CommitteeLinksSection />
      <CommitteeDetailsSection />
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
          Support & Grievance
        </span>
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
          Contacts for{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Complaints & Grievances
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground md:text-xl">
          Access contact information for all DSU committees dedicated to student
          support, grievance redressal, safety, and institutional oversight.
        </p>
      </div>
    </section>
  );
}

function CommitteeLinksSection() {
  return (
    <section className="px-3 py-10 bg-gradient-to-b from-orange-500/5 to-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Committee Details</h2>
          <p className="mt-3 text-foreground md:text-lg">
            Quick access to detailed information about DSU support committees.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max">
          {COMMITTEE_LINKS.map((link, index) => (
            <Card
              key={index}
              className="group border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 h-full"
            >
              <CardContent className="p-4 flex flex-col">
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-start text-left text-sm font-semibold text-foreground hover:text-amber-400 active:text-white p-0 whitespace-normal"
                  asChild
                >
                  <a href={link.path} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})} className="flex items-start justify-between gap-2">
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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

function CommitteeDetailsSection() {
  return (
    <section id="details" className="px-3 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Committee Contacts</h2>
          <p className="mt-3 text-foreground md:text-lg">
            Detailed contact information for all DSU committees and support cells.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMMITTEES.map((committee, index) => (
            <CommitteeCard key={index} committee={committee} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitteeCard({ committee }: { committee: Committee }) {
  const isAntiRaggingCell = committee.name === "Anti Ragging Committee";

  return (
    <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10 flex flex-col">
      <CardHeader className="space-y-3">
        <CardTitle className="text-lg md:text-xl text-foreground leading-snug">
          {committee.name}
        </CardTitle>
        {committee.helpline && (
          <Badge variant="outline" className="w-fit text-xs border-orange-500/40 text-white">
            {committee.helpline}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        {committee.chairperson && (
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Chairperson</p>
            <p className="text-sm text-foreground/80">{committee.chairperson}</p>
          </div>
        )}

        {committee.phone && (
          <div className="space-y-2">
            <a
              href={`tel:${committee.phone}`}
              className="flex items-center gap-2 text-sm text-white hover:text-amber-300 font-medium"
            >
              <Phone className="h-4 w-4" />
              {committee.phone}
            </a>
          </div>
        )}

        <div className="space-y-2 border-t border-border/30 pt-3">
          {committee.email && (
            <a
              href={`mailto:${committee.email}`}
              className="flex items-start gap-2 text-sm text-white hover:text-amber-300 font-medium break-all"
            >
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{committee.email}</span>
            </a>
          )}
          {committee.chairEmail && (
            <a
              href={`mailto:${committee.chairEmail}`}
              className="flex items-start gap-2 text-sm text-white hover:text-amber-300 font-medium break-all"
            >
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{committee.chairEmail}</span>
            </a>
          )}
        </div>

        {isAntiRaggingCell && (
          <Button
            className="mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold w-full"
            asChild
          >
            <a href="/anti-ragging-cell">
              View Cell Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}

        {committee.pdfUrl && (
          <Button
            variant="outline"
            className="mt-4 border-orange-500/40 text-white hover:text-amber-300 w-full"
            asChild
          >
            <a href={committee.pdfUrl} target="_blank" rel="noreferrer">
              Download Details (PDF)
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
