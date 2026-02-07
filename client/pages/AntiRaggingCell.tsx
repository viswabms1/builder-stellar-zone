import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink, AlertCircle } from "lucide-react";

type CommitteeMember = {
  slNo: number;
  name: string;
  designation: string;
  role: string;
  phone: string;
  email: string;
};

const COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    slNo: 1,
    name: "Dr. Pushpa Sarkar",
    designation: "Dean - School of Health Sciences",
    role: "Chairperson",
    phone: "+91 9342189677",
    email: "dean-sahs@dsu.edu.in",
  },
  {
    slNo: 2,
    name: "Dr. Udaya Kumar K R",
    designation: "Dean - School of Engineering",
    role: "Member",
    phone: "+91 9980144184",
    email: "dean-engg@dsu.edu.in",
  },
  {
    slNo: 3,
    name: "Dr. Sai Prasad K",
    designation: "Dean - School of Arts & Humanities",
    role: "Member",
    phone: "+91 9844338458",
    email: "dean-cjmc@dsu.edu.in",
  },
  {
    slNo: 4,
    name: "Dr. Truptha Shankar",
    designation: "Dean - School of Commerce and Management (UG)",
    role: "Member",
    phone: "+91 9632830655",
    email: "dean-scms@dsu.edu.in",
  },
  {
    slNo: 5,
    name: "Dr. Sunil S More",
    designation: "In charge Dean - School of Basic & Applied Sciences",
    role: "Member",
    phone: "+91 9481787729",
    email: "dean-sbas@dsu.edu.in",
  },
  {
    slNo: 6,
    name: "Dr. Kiran Gardner",
    designation: "Dean - School of Law",
    role: "Member",
    phone: "+91 9898715106",
    email: "dean-law@dsu.edu.in",
  },
  {
    slNo: 7,
    name: "Dr. Y C Mayur",
    designation: "Principal - College of Pharmacy",
    role: "Member",
    phone: "+91 9920036717",
    email: "ppl-pharmacy@dsu.edu.in",
  },
  {
    slNo: 8,
    name: "Dr. Martin Lucas A",
    designation: "Prof & HOD, Dept of Anatomy",
    role: "Member",
    phone: "+91 9496135350",
    email: "drmartinlucas@gmail.com",
  },
  {
    slNo: 9,
    name: "Dr. Jamuna",
    designation: "Associate Professor - College of Nursing Sciences",
    role: "Member",
    phone: "+91 9901600987",
    email: "drjamuna.nsg@dsu.edu.in",
  },
  {
    slNo: 10,
    name: "Dr. Vinod Kumar K C",
    designation: "Associate Prof - COPT",
    role: "Member",
    phone: "+91 9036200878",
    email: "vinod-mpt@dsu.edu.in",
  },
  {
    slNo: 11,
    name: "Prof. Komala",
    designation: "Asst Prof - B Design",
    role: "Member",
    phone: "+91 8951708801",
    email: "komala-des@dsu.edu.in",
  },
  {
    slNo: 12,
    name: "Sri Harish A S",
    designation: "General Manager (Admn)",
    role: "Member",
    phone: "+91 9880888366",
    email: "gmfacilities@dsu.edu.in",
  },
  {
    slNo: 13,
    name: "Mr. Manu Thimmegowda",
    designation: "Dy Registrar",
    role: "Member",
    phone: "+91 9591715566",
    email: "dy.registrar.ac@dsu.edu.in",
  },
  {
    slNo: 14,
    name: "Mr. Nataraju C",
    designation: "Dy Registrar",
    role: "Member",
    phone: "+91 8971957765",
    email: "dy.registrar2@dsu.edu.in",
  },
  {
    slNo: 15,
    name: "Mrs. Shyamantha Suryaprakash",
    designation: "Dy Dir - Students Affair",
    role: "Member",
    phone: "+91 8971599031",
    email: "dydir-studentaffairs@dsu.edu.in",
  },
  {
    slNo: 16,
    name: "Mr. Chandrashekar",
    designation: "Chief Warden - S Residence",
    role: "Member",
    phone: "+91 8919096471",
    email: "chandu23113@gmail.com",
  },
  {
    slNo: 17,
    name: "Mrs. Rukmini K",
    designation: "Warden - Girls Warden",
    role: "Member",
    phone: "+91 7760478904",
    email: "ghwcdsimer@dsu.edu.in",
  },
];

const NODAL_OFFICER = {
  name: "Dr. Pramod Kumar Naik",
  title: "Nodal Officer & Chairman, Dept. of Robotics & AI",
  phone: "8105895179",
  email: "ar-com@dsu.edu.in",
};

export default function AntiRaggingCell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <IntroductionSection />
      <AffidavitSection />
      <CommitteeSection />
      <NodalOfficerSection />
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
          Student Safety & Welfare
        </span>
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
          Anti Ragging{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Cell
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground md:text-xl">
          DSU is committed to maintaining a safe, inclusive, and respectful
          campus environment free from ragging and all forms of harassment.
        </p>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="px-3 py-10">
      <div className="mx-auto max-w-4xl">
        <Card className="border border-brand-blue/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <CardTitle className="text-2xl font-display">
                  <span className="bg-brand-gradient bg-clip-text text-transparent">What is Ragging?</span>
                </CardTitle>
                <CardDescription className="mt-2 text-base">
                  Understanding the issue and DSU's stance
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Ragging is a social evil that can cause severe psychological and
              physical effects on students. It creates an unsafe environment
              that contradicts our institutional values of respect, dignity, and
              inclusion.
            </p>
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4">
              <p className="font-semibold text-foreground mb-2">
                DSU's Commitment:
              </p>
              <p className="text-foreground leading-relaxed">
                There is no ragging at DSU campus. The administration has taken
                comprehensive steps to curb ragging and indiscipline. In
                accordance with the University Grants Commission Act, 1956
                (Section 26, clause g) and AICTE notification (F. No.
                37-3/legal/AICTE/2009 dated 25/03/2009), all regulations are
                followed strictly to root out ragging in all its forms.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function AffidavitSection() {
  return (
    <section className="px-3 py-10 bg-gradient-to-b from-brand-blue/5 via-brand-magenta/5 to-transparent dark:from-brand-magenta/5 dark:via-brand-blue/5 dark:to-transparent">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Anti Ragging Affidavit</span>
          </h2>
          <p className="mt-3 text-foreground md:text-lg">
            All students must complete the online anti-ragging affidavit as per
            regulatory requirements.
          </p>
        </div>

        <Card className="border border-brand-blue/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm">
          <CardContent className="pt-6 space-y-4">
            <p className="text-foreground">
              <strong>Dear Students,</strong> please fill in the online Anti
              Ragging Affidavit by clicking the link below:
            </p>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground animate-gradient bg-[length:200%_auto]"
              asChild
            >
              <a
                href="https://antiragging.in/affidavit_university_form.php"
                target="_blank"
                rel="noreferrer"
              >
                Open Online Anti Ragging Affidavit Form
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-foreground/70">
              This is a mandatory requirement. Please ensure you complete and
              submit the affidavit at the earliest.
            </p>
          </CardContent>
        </Card>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Step-by-Step Guide:</h3>
          <Button
            variant="outline"
            className="border-brand-blue/30 text-brand-blue hover:text-brand-magenta hover:bg-brand-blue/10"
            asChild
          >
            <a href="#" target="_blank" rel="noreferrer">
              How to Fill Online Anti Ragging Undertaking
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CommitteeSection() {
  return (
    <section className="px-3 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Anti Ragging Committee</span>
          </h2>
          <p className="mt-3 text-foreground md:text-lg">
            Comprehensive committee with representation from all schools and
            administrative departments.
          </p>
          <Button
            variant="outline"
            className="mt-6 border-brand-blue/30 text-brand-blue hover:text-brand-magenta hover:bg-brand-blue/10"
            asChild
          >
            <a
              href="https://www.dsu.edu.in/images/Committee/Anti_Ragging_Committee_25052024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Committee Details (PDF)
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Committee Table */}
        <div className="overflow-x-auto rounded-xl border border-brand-blue/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-orange-500/20 bg-orange-500/5">
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Sl.No
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Designation
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Role
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {COMMITTEE_MEMBERS.map((member, index) => (
                <tr
                  key={index}
                  className={`border-b border-border/30 ${
                    member.role === "Chairperson"
                      ? "bg-orange-500/10"
                      : "hover:bg-background/50"
                  }`}
                >
                  <td className="px-4 py-3 text-foreground font-medium">
                    {member.slNo}
                  </td>
                  <td className="px-4 py-3 text-foreground font-medium">
                    {member.name}
                  </td>
                  <td className="px-4 py-3 text-foreground text-xs md:text-sm">
                    {member.designation}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant={
                        member.role === "Chairperson" ? "default" : "secondary"
                      }
                      className={
                        member.role === "Chairperson"
                          ? "bg-orange-600 text-white"
                          : ""
                      }
                    >
                      {member.role}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs md:text-sm space-y-1">
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      <Phone className="h-3 w-3" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium break-all"
                    >
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      {member.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function NodalOfficerSection() {
  return (
    <section className="px-3 py-10 bg-gradient-to-b from-background to-orange-500/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Nodal Officer</h2>
          <p className="mt-3 text-foreground md:text-lg">
            Primary point of contact for anti-ragging matters
          </p>
        </div>

        <Card className="border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">{NODAL_OFFICER.name}</CardTitle>
            <CardDescription className="text-base font-medium text-foreground">
              {NODAL_OFFICER.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground/70">
                  Phone
                </p>
                <a
                  href={`tel:${NODAL_OFFICER.phone}`}
                  className="flex items-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700"
                >
                  <Phone className="h-5 w-5" />
                  {NODAL_OFFICER.phone}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground/70">
                  Email
                </p>
                <a
                  href={`mailto:${NODAL_OFFICER.email}`}
                  className="flex items-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700 break-all"
                >
                  <Mail className="h-5 w-5" />
                  {NODAL_OFFICER.email}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            National Anti Ragging Helpline
          </h3>
          <p className="text-foreground mb-4">
            If you experience ragging or need immediate assistance, contact the
            national helpline:
          </p>
          <a
            href="tel:1800-180-5522"
            className="inline-flex items-center gap-2 text-xl font-bold text-orange-600 hover:text-orange-700"
          >
            <Phone className="h-6 w-6" />
            1800-180-5522
          </a>
          <p className="mt-3 text-sm text-foreground/70">
            Available 24/7 for anonymous complaints and support.
          </p>
        </div>
      </div>
    </section>
  );
}
