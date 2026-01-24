import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, AlertCircle } from "lucide-react";

interface ClosingDate {
  program: string;
  lastDate: string;
  academicYear: string;
}

const closingDates: ClosingDate[] = [
  { program: "B.Design", lastDate: "June 25th, 2025", academicYear: "2025-26" },
  { program: "BCA", lastDate: "June 25th, 2025", academicYear: "2025-26" },
  { program: "BA JMC", lastDate: "June 25th, 2025", academicYear: "2025-26" },
  { program: "BBA", lastDate: "June 25th, 2025", academicYear: "2025-26" },
  { program: "B.Com", lastDate: "June 25th, 2025", academicYear: "2025-26" },
  { program: "Law", lastDate: "June 25th, 2025", academicYear: "2025-26" },
  {
    program: "B.Sc Basic Sciences",
    lastDate: "June 25th, 2025",
    academicYear: "2025-26",
  },
  { program: "B.Tech", lastDate: "July 1st, 2025", academicYear: "2025-26" },
];

export default function AdmissionClosingDates() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-3 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-brand-magenta/15 text-brand-magenta mb-4">
              Important Dates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Admission Closing Dates
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Mark your calendars with the last dates for admission to various
              programs at Dayananda Sagar University for the 2025-26 academic
              year.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Dates Table Section */}
      <section className="px-3 py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="border-b border-border/30 pb-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-6 h-6 text-brand-magenta" />
                <CardTitle className="text-2xl">
                  2025-26 Admission Timeline
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              {/* Alert Box */}
              <div className="mb-8 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Important Notice
                  </p>
                  <p className="text-sm text-amber-800">
                    Apply before the closing date to secure your seat. Late
                    applications may not be accepted. Please verify details with
                    the admissions office for any updates.
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/30 hover:bg-transparent">
                      <TableHead className="font-semibold text-foreground w-1/3">
                        Program
                      </TableHead>
                      <TableHead className="font-semibold text-foreground w-1/3">
                        Last Date of Admission
                      </TableHead>
                      <TableHead className="font-semibold text-foreground w-1/3">
                        Academic Year
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {closingDates.map((item, index) => (
                      <TableRow
                        key={index}
                        className="border-border/20 hover:bg-brand-magenta/5 transition-colors"
                      >
                        <TableCell className="font-medium text-foreground">
                          {item.program}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-brand-blue/10 border-brand-blue/30 text-brand-blue"
                          >
                            {item.lastDate}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-foreground/70">
                          {item.academicYear}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Key Points Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                  Engineering Programs (B.Tech)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-3">
                  Extended deadline for engineering programs to accommodate
                  counseling processes.
                </p>
                <p className="font-semibold text-lg text-brand-blue">
                  July 1st, 2025
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                  Other Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-3">
                  All non-engineering undergraduate and design programs follow
                  an earlier deadline.
                </p>
                <p className="font-semibold text-lg text-brand-magenta">
                  June 25th, 2025
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Need Help Section */}
          <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-brand-magenta/5 to-brand-blue/5 border border-brand-magenta/20">
            <h3 className="text-xl font-semibold mb-3">
              Need Help with Admissions?
            </h3>
            <p className="text-foreground/80 mb-4">
              Contact our admissions team for any queries regarding closing
              dates, application procedures, or program eligibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-2 bg-brand-magenta text-white rounded-lg hover:bg-brand-magenta/90 transition-colors"
              >
                Start Application
              </a>
              <a
                href="/admissions"
                className="inline-block px-6 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-colors"
              >
                View All Admissions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
