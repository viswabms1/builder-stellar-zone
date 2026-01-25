import {
  ArrowRight,
  ArrowLeft,
  FileText,
  Clock,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

export default function LibraryRulesRegulations() {
  const rules = [
    {
      title: "Membership & Registration",
      content:
        "All students, faculty, and staff of DSU are entitled to library membership upon registration. Members are issued library cards which must be presented for borrowing materials and accessing services.",
    },
    {
      title: "Borrowing Privileges",
      content:
        "Undergraduate students can borrow up to 5 books for 14 days. Postgraduate students and research scholars can borrow up to 10 books for 21 days. Faculty members can borrow up to 15 books for one month.",
    },
    {
      title: "Renewal & Returns",
      content:
        "Books can be renewed once for the same period if not required by another user. Books must be returned by the due date. Overdue charges apply at Rs. 1 per day per book.",
    },
    {
      title: "Reference Materials",
      content:
        "Reference books, journals, and special collections are available for in-library use only and cannot be borrowed. They must be returned to the reference desk before closing.",
    },
    {
      title: "Conduct & Decorum",
      content:
        "Users are expected to maintain silence and decorum within the library. Eating, drinking, and smoking are strictly prohibited. Mobile phones should be on silent mode.",
    },
    {
      title: "Damage & Loss",
      content:
        "Users are responsible for materials borrowed under their name. In case of damage or loss, replacement charges will be levied. Deliberate damage to library property is a serious offense.",
    },
    {
      title: "Digital Resources",
      content:
        "Digital resources are for authorized institutional use only. Sharing login credentials or unauthorized distribution of copyrighted materials is prohibited.",
    },
    {
      title: "Library Hours",
      content:
        "Library operates Monday to Saturday, 8:00 AM to 6:00 PM. During examinations and special periods, extended hours may be available.",
    },
  ];

  const feeStructure = [
    { item: "Overdue Fine", amount: "Rs. 1 per book per day" },
    { item: "Lost Book Replacement", amount: "Book cost + processing fee" },
    { item: "Damaged Book Repair", amount: "Assessed on case-by-case basis" },
    { item: "Library Card Replacement", amount: "Rs. 50" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-500/10 via-gray-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/10 dark:bg-slate-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gray-600/10 dark:bg-gray-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Rules & Regulations
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Library policies and guidelines for all users
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/library">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Library Guidelines
          </h2>
          <p className="text-lg text-foreground/70">
            Important rules to ensure a productive and respectful library
            environment
          </p>
        </div>

        {/* Rules & Regulations */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              Library Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {rules.map((rule, idx) => (
                <AccordionItem key={idx} value={`rule-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {rule.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/70 pt-4">
                    {rule.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Fee Structure */}
        <Card className="border-none shadow-lg bg-orange-50 dark:bg-slate-800 mb-8">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              Fee Structure
            </CardTitle>
            <CardDescription className="text-lg">
              Charges and penalties for library services
            </CardDescription>
          </CardHeader>
          <CardContent style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Item</th>
                    <th className="text-left py-3 px-4 font-semibold">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, idx) => (
                    <tr
                      key={idx}
                      className="border-b last:border-b-0 hover:bg-white/50 dark:hover:bg-orange-900/20"
                    >
                      <td className="py-3 px-4">{fee.item}</td>
                      <td className="py-3 px-4 font-semibold">{fee.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Borrowing Guide */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-green-600" />
              Borrowing Guidelines
            </CardTitle>
            <CardDescription className="text-lg">
              How to borrow materials from the library
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg dark:border-slate-700">
                <h4 className="font-semibold text-lg mb-3">
                  Undergraduate Students
                </h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Maximum 5 books per transaction</li>
                  <li>• Loan period: 14 days</li>
                  <li>• Renewal: Once (if no holds)</li>
                  <li>• Fine: Re. 1/day/book</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg dark:border-slate-700">
                <h4 className="font-semibold text-lg mb-3">
                  Postgraduate & Research Scholars
                </h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Maximum 10 books per transaction</li>
                  <li>• Loan period: 21 days</li>
                  <li>• Renewal: Once (if no holds)</li>
                  <li>• Fine: Re. 1/day/book</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg dark:border-slate-700 md:col-span-2">
                <h4 className="font-semibold text-lg mb-3">Faculty Members</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Maximum 15 books per transaction</li>
                  <li>• Loan period: 30 days</li>
                  <li>• Renewal: Unlimited (if no holds)</li>
                  <li>• Fine: Re. 1/day/book</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours of Operation */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <Clock className="h-8 w-8 text-purple-600" />
              Hours of Operation
            </CardTitle>
            <CardDescription className="text-lg">
              Library access timings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Regular Hours</h4>
                <p className="text-foreground/70">
                  Monday - Saturday
                  <br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">
                  Examination Period
                </h4>
                <p className="text-foreground/70">
                  Extended hours available
                  <br />
                  Check notice board for details
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-none shadow-lg border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-600" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground/70">
              • Violation of library rules may result in temporary or permanent
              suspension of library privileges
            </p>
            <p className="text-foreground/70">
              • Library staff reserves the right to inspect bags and materials
              during exit
            </p>
            <p className="text-foreground/70">
              • Reserved books and materials requested by other users must be
              returned on time
            </p>
            <p className="text-foreground/70">
              • Users are responsible for any damage to borrowed materials
              beyond normal wear and tear
            </p>
            <p className="text-foreground/70">
              • For queries, contact the library staff or send an email to
              library@dsu.edu.in
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-slate-600 hover:bg-slate-700">
            <Link to="/library">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
