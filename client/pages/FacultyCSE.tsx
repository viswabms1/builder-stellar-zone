import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cseFaculty } from "@/data/cse-faculty";
import { Search, GraduationCap, ChevronRight } from "lucide-react";

export default function FacultyCSE() {
  const list = cseFaculty;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-14 bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="headline-2 font-gilroy">CSE Faculty</h1>
            <p className="text-muted-foreground font-graphik">Meet the people behind DSU Computer Science & Engineering</p>
          </div>
          <Link to="/academics/engineering/computer-science">
            <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
              <GraduationCap className="w-4 h-4 mr-2" /> Back to Department
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search faculty by name or title" className="pl-9" onChange={(e)=>{
              const q = e.target.value.toLowerCase();
              const cards = document.querySelectorAll('[data-faculty]');
              cards.forEach((el)=>{
                const name = (el.getAttribute('data-name')||'').toLowerCase();
                const title = (el.getAttribute('data-title')||'').toLowerCase();
                (el as HTMLElement).style.display = name.includes(q) || title.includes(q) ? '' : 'none';
              })
            }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((f) => (
              <Link key={f.slug} to={`/academics/engineering/computer-science/faculty/${f.slug}`} data-faculty data-name={f.name} data-title={f.title}>
                <Card className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all">
                  <img src={f.image} alt={f.name} className="h-56 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <div className="text-white text-sm opacity-80">{f.title}</div>
                    <div className="text-white font-semibold text-lg font-gilroy flex items-center">
                      {f.name}
                      <ChevronRight className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
