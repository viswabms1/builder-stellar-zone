import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Mail, Phone } from "lucide-react";

export default function ManjodthKaurProfile() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/academics/chemistry/faculty"><Button variant="ghost" className="mb-4"><ChevronLeft className="w-4 h-4 mr-2" />Back to Faculty</Button></Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden border border-border/50"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" alt="Dr. Manjodh Kaur" className="w-full h-full object-cover" /></div>
              <div className="mt-6"><Card className="border border-border/50 bg-card/50"><CardHeader className="pb-3"><CardTitle className="text-sm font-display">Contact</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><div className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-orange" /><a href="mailto:manjodh@dsu.edu.in" className="hover:text-brand-orange">manjodh@dsu.edu.in</a></div><div className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-orange" /><span>080-4909-2936</span></div></CardContent></Card></div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div><Badge className="mb-3 bg-brand-orange/20 text-brand-orange border-brand-orange/30">Assistant Professor</Badge><h1 className="headline-2 font-display mb-2">Dr. Manjodh Kaur</h1><p className="text-foreground/80">Department of Chemistry</p></div>
              <Card className="border border-border/50 bg-card/50"><CardHeader><CardTitle className="font-display">Qualifications</CardTitle></CardHeader><CardContent><ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="text-brand-orange">•</span><span><strong>Ph.D.</strong> in Chemistry</span></li></ul></CardContent></Card>
              <Card className="border border-border/50 bg-card/50"><CardHeader><CardTitle className="font-display">About</CardTitle></CardHeader><CardContent className="space-y-4 text-sm leading-relaxed"><p>Dr. Manjodh Kaur is an Assistant Professor with expertise and dedication to advancing chemistry education and research.</p></CardContent></Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
