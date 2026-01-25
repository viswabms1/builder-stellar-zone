import { ArrowRight, ArrowLeft, Building, Users, Award, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryCorporateMembership() {
  const benefits = [
    {
      icon: Globe,
      title: "Digital Access",
      description: "Access to online databases and e-resources",
    },
    {
      icon: BookOpen,
      title: "Extensive Collection",
      description: "Browse over 5 lakh volumes of resources",
    },
    {
      icon: Users,
      title: "Training Support",
      description: "Library orientation and research guidance",
    },
    {
      icon: Award,
      title: "Priority Service",
      description: "Dedicated support and priority processing",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      price: "Custom",
      duration: "1 Year",
      features: [
        "Up to 5 employee registrations",
        "Library card issuance",
        "Access to digital library",
        "Email support",
      ],
    },
    {
      name: "Professional Package",
      price: "Custom",
      duration: "1 Year",
      features: [
        "Up to 15 employee registrations",
        "Library card issuance",
        "Full digital access",
        "Research support",
        "Training sessions",
        "Priority assistance",
      ],
    },
    {
      name: "Enterprise Package",
      price: "Custom",
      duration: "1 Year",
      features: [
        "Unlimited employee registrations",
        "Library card issuance",
        "Full digital access",
        "Dedicated research support",
        "Custom training programs",
        "On-campus orientation",
        "Customized resource collection",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Corporate Membership
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Empower your organization with access to DSU library resources
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Corporate Membership</h2>
          <p className="text-lg text-foreground/70">
            Unlock comprehensive library resources for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="p-3 rounded-lg bg-cyan-500/10 w-fit mb-4">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Membership Packages */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Membership Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`border-none shadow-lg hover:shadow-xl transition-all ${idx === 1 ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-cyan-600">
                    {pkg.price}
                  </CardDescription>
                  <p className="text-sm text-foreground/70 mt-2">{pkg.duration}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700">
                    <Link to="/library/contact">
                      Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <Card className="border-none shadow-lg bg-cyan-50 dark:bg-cyan-950/30">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <Building className="h-8 w-8 text-cyan-600" />
              Why Partner With DSU Library?
            </CardTitle>
            <CardDescription className="text-lg">
              Choose a trusted partner for your information needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Access to over 5 lakh volumes and comprehensive digital resources</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>24/7 access to digital library and online databases</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Personalized research support and consultation services</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Flexible membership options tailored to organization needs</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Professional staff dedicated to member success</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Regular training and skill development programs</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Competitive pricing and flexible payment options</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription>
              Contact our Corporate Membership team to discuss your organization's needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
              <Link to="/library/contact">
                Contact Corporate Membership <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
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
