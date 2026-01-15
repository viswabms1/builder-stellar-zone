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
  },
  {
    name: "Anti Drug Committee",
    email: "antidrug-committee@dsu.edu.in",
    chairperson: "Prof. (Capt) Nagaraj Subbarao",
    phone: "9986321964",
    chairEmail: "dean-cee@dsu.edu.in",
  },
];

const COMMITTEE_LINKS = [
  "Anti Ragging Committee Details",
  "Anti Ragging Cell",
  "Caste Based Discrimination Committee Details",
  "Students Grievance Redressal Committee",
  "Gender Champions Committee",
  "Constitute of Anti Ragging Squad Committee",
  "Constitution of Ombudsman Committee",
  "Constitute of Anti Drug Committee",
  "Students Grievance Redressal Mechanism",
  "Internal Complaint Committee",
  "Equal Opportunity Cell",
  "Socio-Economically Disadvantaged Groups Cell",
  "UGC e-Samadhaan",
  "Red Cross Committee",
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
    <section className="relative overflow-hidden py-10 lg:py-28 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
          Support & Grievance
        </span>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          Contacts for{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
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
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {COMMITTEE_LINKS.map((link, index) => (
            <Card
              key={index}
              className="group border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-start text-left text-sm font-semibold text-foreground hover:text-orange-600 p-0"
                  asChild
                >
                  <a href="#details">
                    {link}
                    <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <Badge variant="outline" className="w-fit text-xs border-orange-500/40 text-orange-600">
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
              className="flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium"
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
              className="flex items-start gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium break-all"
            >
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{committee.email}</span>
            </a>
          )}
          {committee.chairEmail && (
            <a
              href={`mailto:${committee.chairEmail}`}
              className="flex items-start gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium break-all"
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
      </CardContent>
    </Card>
  );
}
