import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Beaker, BookOpen, Building, ChevronRight, Cpu, FlaskConical, GraduationCap, MapPin, Microscope, Network, Shield, TrendingUp } from "lucide-react";

export default function Engineering() {
  const ugPrograms = [
    "B.Tech",
    "BCA",
    "BBA",
    "B.Com",
    "B.Sc Biological Sciences",
    "B.Sc Data Science",
    "B.Sc Allied Health Science",
    "B.Sc Nursing",
    "B.Pharm",
    "BPT",
    "B.Design",
    "B.A (JMC)",
    "B.Voc",
    "B.B.A., LL.B.",
    "B.A., LL.B.",
    "LL.B."
  ];

  const pgPrograms = [
    "M.Tech",
    "MCA",
    "MBA",
    "M.Sc Biological Sciences",
    "M.Sc Data Science",
    "M.Sc Nursing",
    "M.Pharm",
    "MPT",
    "Pharm.D"
  ];

  const highlights = [
    {
      icon: Award,
      title: "INNOVATE. CREATE. DEVELOP.",
      desc: "Science & Technology education that builds high-caliber engineers for industry and research organizations.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: Microscope,
      title: "Research Culture",
      desc: "Knowledge-based curriculum with strong emphasis on research, skill development, and lifelong learning.",
      image: "https://images.unsplash.com/photo-1584467735871-4f1bbf89ff2a?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: Network,
      title: "Industry Partnerships",
      desc: "Collaborations with leading companies and centers of excellence for real-world exposure and projects.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      desc: "State-of-the-art labs, studios, and innovation spaces that power hands-on learning.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  const innovationLabs = [
    "IBM Software Lab for Emerging Technologies",
    "NVIDIA – Boston Innovation Lab",
    "GE Advanced Healthcare Simulation Lab",
    "Aerospace Engineering Lab",
    "Automotive Systems Lab",
    "Automation Technologies",
    "Design & Innovation Centre",
    "VMware IT Academy",
    "IBM Centre of Excellence"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <img
            src="https://www.dsu.edu.in/images/Engineering/engg-landing.jpg"
            alt="DSU School of Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-6">
              <FlaskConical className="w-4 h-4 text-brand-magenta mr-2" />
              <span className="text-sm font-medium text-brand-magenta font-gilroy">School of Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight mb-4 font-gilroy">Innovate. Create. Develop.</h1>
            <p className="subheadline text-white/90 max-w-2xl font-graphik">
              Science & Technology based education that develops high-caliber engineers for industry and scientific organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://dsu.edu.in/virtual-tour/#SchoolOfEngineering_03,-1.3,1.1,75,4" target="_blank" rel="noreferrer">
                <Button className="bg-brand-gradient text-white">Virtual Tour</Button>
              </a>
              <a href="https://www.dsu.edu.in/engineering/programs-engineering" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">Programs @ DSU</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights with images */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-2"><span className="text-foreground">Why </span><span className="bg-brand-gradient bg-clip-text text-transparent">DSU Engineering</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((f, i) => (
              <Card key={i} className="group relative overflow-hidden h-72 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-magenta/10 transition-all duration-500">
                <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-white text-xs">
                  <f.icon className="w-4 h-4" /> Feature
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1 font-gilroy">{f.title}</h3>
                  <p className="text-white/80 text-sm font-graphik">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="headline-3 mb-4 font-gilroy">Undergraduate Programs</h3>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {ugPrograms.map((p, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-brand-magenta mr-2" /> {p}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="headline-3 mb-4 font-gilroy">Postgraduate Programs</h3>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {pgPrograms.map((p, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-brand-magenta mr-2" /> {p}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Labs */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="headline-3 font-gilroy">Innovation & Labs</h3>
            <a href="https://www.dsu.edu.in/innovation" target="_blank" rel="noreferrer" className="text-sm text-brand-magenta hover:underline font-graphik">See all</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationLabs.map((lab, i) => (
              <Card key={i} className="border border-border/40 bg-card/40 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-brand-magenta/10 text-brand-magenta text-xs w-fit">
                    <Beaker className="w-3.5 h-3.5" /> Lab
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-base font-gilroy">{lab}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Contact */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-2 overflow-hidden border border-border/50 bg-card/50">
            <div className="relative h-56">
              <img src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1600&auto=format&fit=crop" alt="Engineering Leadership" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="font-gilroy">Leadership</CardTitle>
              <CardDescription className="font-graphik">Guidance that drives excellence in engineering education and research.</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 pt-0">
              <div>
                <div className="text-sm text-muted-foreground">Dean (Engineering)</div>
                <div className="font-medium">dean-engg@dsu.edu.in</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">+91-80-49092933</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="font-gilroy">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 font-graphik text-sm">
              <a href="https://www.dsu.edu.in/engineering/usp-engineering" target="_blank" rel="noreferrer" className="hover:text-brand-magenta">USP</a>
              <a href="https://www.dsu.edu.in/engineering/dean-engineering" target="_blank" rel="noreferrer" className="hover:text-brand-magenta">Dean’s Message</a>
              <a href="https://www.dsu.edu.in/engineering/coe-engineering" target="_blank" rel="noreferrer" className="hover:text-brand-magenta">Calendar of Events</a>
              <a href="https://www.dsu.edu.in/engineering/weekly-newsletter-soe" target="_blank" rel="noreferrer" className="hover:text-brand-magenta">Weekly Newsletter</a>
              <a href="https://www.dsu.edu.in/engineering/soe-library" target="_blank" rel="noreferrer" className="hover:text-brand-magenta">Library</a>
              <a href="https://dsu.acm.org/" target="_blank" rel="noreferrer" className="hover:text-brand-magenta">DSU ACM Chapter</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-10 border border-brand-magenta/20 bg-brand-magenta/5">
            <h3 className="headline-3 mb-3 font-gilroy">Ready to shape the future?</h3>
            <p className="text-muted-foreground mb-6 font-graphik">Explore programs, take a virtual tour, and start your journey at DSU School of Engineering.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">Apply Now<GraduationCap className="w-4 h-4 ml-2" /></Button>
              </Link>
              <a href="https://dsu.edu.in/virtual-tour/#SchoolOfEngineering_03,-1.3,1.1,75,4" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">Virtual Tour</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
