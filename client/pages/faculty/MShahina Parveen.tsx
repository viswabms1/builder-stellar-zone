import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShahinaParveenPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-12">
        <div className="mx-auto max-w-4xl px-3">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/40">
                <div className="aspect-square w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 flex items-center justify-center">
                  <Award className="h-20 w-20 text-brand-orange/60" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <Badge className="mb-3 bg-brand-orange/15 text-brand-orange border-brand-orange/30">Chairperson</Badge>
                <h1 className="text-4xl font-bold font-display mb-2">Dr M Shahina Parveen</h1>
                <p className="text-xl text-foreground/80 mb-4">Professor & Chairperson</p>
                <p className="text-foreground/60">Department of Computer Science & Technology</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Award className="h-5 w-5 text-brand-orange" />
                  <span><strong>Qualification:</strong> Ph.D</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <BookOpen className="h-5 w-5 text-brand-orange" />
                  <span><strong>Department:</strong> Computer Science & Technology</span>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button className="gap-2 bg-brand-orange/20 text-brand-orange hover:bg-brand-orange/30">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
                <Link to="/academics/engineering/computer-technology/faculty" asChild>
                  <Button variant="outline">Back to Faculty</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    Dr M Shahina Parveen is the Professor and Chairperson of the Department of Computer Science & Technology. With extensive experience in academic leadership and technical expertise, she guides the department's vision and mission.
                  </p>
                  <p>
                    Her focus is on fostering excellence in teaching, research, and industry collaboration to prepare students for successful careers in computer technology and information systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40">
                <CardHeader>
                  <CardTitle className="font-display">Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Computer Technology</Badge>
                    <Badge variant="outline">Software Systems</Badge>
                    <Badge variant="outline">Academic Leadership</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <Card className="border border-border/40 bg-card/40 sticky top-24">
                <CardHeader>
                  <CardTitle className="font-display">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Title</p>
                    <p className="font-semibold">Professor & Chairperson</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Qualification</p>
                    <p className="font-semibold">Ph.D</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Department</p>
                    <p className="font-semibold">Computer Science & Technology</p>
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
