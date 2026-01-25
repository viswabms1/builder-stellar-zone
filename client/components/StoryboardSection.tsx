import { Link } from "react-router-dom";
import { ArrowRight, Zap, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoryboardSection() {
  const stories = [
    {
      icon: Zap,
      title: "AI-First Innovation",
      description:
        "Explore how NVIDIA's AI architecture powers every aspect of education, research, and campus life at DSU.",
      cta: "Explore AI Architecture",
      link: "/nvidia-ai-architecture",
      color: "brand-blue",
      bgColor: "bg-brand-blue/10",
      borderColor: "border-brand-blue/30",
      hoverColor: "hover:border-brand-blue/60",
    },
    {
      icon: Heart,
      title: "Why DSU Stands Out",
      description:
        "Discover what makes DSU special—from world-class faculty and centers of excellence to industry partnerships and transformative student experiences.",
      cta: "Learn Our Story",
      link: "/about",
      color: "brand-blue",
      bgColor: "bg-brand-blue/10",
      borderColor: "border-brand-blue/30",
      hoverColor: "hover:border-brand-blue/60",
    },
    {
      icon: BookOpen,
      title: "Life at DSU",
      description:
        "Experience vibrant campus life with student clubs, events, facilities, and a thriving community that fosters personal growth and lasting friendships.",
      cta: "Discover Campus Life",
      link: "/campus-life",
      color: "brand-blue",
      bgColor: "bg-brand-blue/10",
      borderColor: "border-brand-blue/30",
      hoverColor: "hover:border-brand-blue/60",
    },
  ];

  return (
    <section className="px-3 py-10 md:py-16 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="h-1 w-8 bg-white rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              Our Story
            </span>
            <div className="h-1 w-8 bg-white rounded-full"></div>
          </div>
          <h2 className="headline-2 mb-6">
            <span className="text-foreground">What Makes </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              DSU Special
            </span>
          </h2>
          <p className="subheadline text-foreground max-w-2xl mx-auto">
            Three stories that define who we are and why students choose DSU
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            const isInternal = story.link.startsWith("/");

            const cardContent = (
              <div
                className={`group h-full rounded-2xl p-8 border-2 transition-all duration-500 ${story.bgColor} ${story.borderColor} ${story.hoverColor} hover:shadow-2xl hover:-translate-y-2 flex flex-col`}
              >
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue mb-6 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-display group-hover:text-transparent group-hover:bg-brand-gradient group-hover:bg-clip-text transition-all duration-300">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-foreground/80 font-body mb-8 flex-grow leading-relaxed">
                  {story.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-6" />

                {/* CTA Button */}
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold gap-2 transition-all group/btn">
                  {story.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );

            return (
              <div key={index}>
                {isInternal ? (
                  <Link to={story.link}>{cardContent}</Link>
                ) : (
                  <a href={story.link} target="_blank" rel="noreferrer">
                    {cardContent}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-brand-blue/10 rounded-2xl p-8 md:p-12 border border-brand-blue/20 text-center">
          <h3 className="headline-2 mb-6 text-foreground">
            Ready to Be Part of Our Story?
          </h3>
          <p className="subheadline text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have chosen DSU to transform their
            futures through AI-integrated education.
          </p>
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 font-bold gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
