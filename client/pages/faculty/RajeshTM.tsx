import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function RajeshTMPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12">
        <div className="mx-auto max-w-4xl px-3">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Profile Image */}
            <div className="md:col-span-1">
              <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/40">
                <div className="aspect-square w-full bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/5 flex items-center justify-center">
                  <Award className="h-20 w-20 text-brand-magenta/60" />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <Badge className="mb-3 bg-brand-magenta/15 text-brand-magenta border-brand-magenta/30">Chairperson</Badge>
                <h1 className="text-4xl font-bold font-display mb-2">Dr. Rajesh T M</h1>
                <p className="text-xl text-foreground/80 mb-4">Associate Professor & Chairperson</p>
                <p className="text-foreground/60">Department of Computer Science and Medical Engineering</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Award className="h-5 w-5 text-brand-magenta" />
                  <span><strong>Qualification:</strong> Ph.D</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <BookOpen className="h-5 w-5 text-brand-magenta" />
                  <span><strong>Department:</strong> Computer Science & Medical Engineering</span>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button className="gap-2 bg-brand-magenta/20 text-brand-magenta hover:bg-brand-magenta/30">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
                <Link to="/academics/engineering/cs-medical-engineering/faculty" asChild>
                  <Button variant="outline">Back to Faculty</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-3 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card className="border border-border/40 bg-card/40">
                <CardHeader>
                  <CardTitle className="font-display">About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80">
                  <p>
                    Dr. Rajesh T M serves as the Associate Professor and Chairperson of the Computer Science and Medical Engineering department. With extensive expertise in biomedical systems and medical devices, he leads the department's initiatives in integrating engineering principles with healthcare innovation.
                  </p>
                  <p>
                    His research interests span across biomedical device design, medical imaging systems, and healthcare technology applications. He is committed to fostering a learning environment that emphasizes practical applications and real-world problem-solving.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40">
                <CardHeader>
                  <CardTitle className="font-display">Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Biomedical Devices</Badge>
                    <Badge variant="outline">Medical Imaging</Badge>
                    <Badge variant="outline">Healthcare Technology</Badge>
                    <Badge variant="outline">Biomaterials</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40">
                <CardHeader>
                  <CardTitle className="font-display">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-magenta mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">Email</p>
                      <p className="text-foreground">rajesh.tm@dsu.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-magenta mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">Phone</p>
                      <p className="text-foreground">080-4909xxxx</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-magenta mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">Office</p>
                      <p className="text-foreground">Department of Computer Science and Medical Engineering, School of Engineering</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="border border-border/40 bg-card/40 sticky top-24">
                <CardHeader>
                  <CardTitle className="font-display">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Title</p>
                    <p className="font-semibold">Associate Professor & Chairperson</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Qualification</p>
                    <p className="font-semibold">Ph.D</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Department</p>
                    <p className="font-semibold">Computer Science & Medical Engineering</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
