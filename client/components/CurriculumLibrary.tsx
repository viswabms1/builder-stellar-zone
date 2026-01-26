import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type CurriculumProgram } from "@/lib/content-manager";
import {
  ChevronDown,
  Download,
  CalendarDays,
  Zap,
} from "lucide-react";

interface CurriculumLibraryProps {
  programs: CurriculumProgram[];
  themeColor?: "blue" | "magenta" | "orange" | "green";
  showCurrentBadge?: boolean;
  description?: string;
}

const themeConfig = {
  blue: {
    borderClass: "border-brand-blue/30",
    badgeClass: "bg-brand-blue/15 text-brand-blue border-brand-blue/20",
    buttonClass: "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20",
    shadowClass: "hover:shadow-brand-blue/10",
  },
  magenta: {
    borderClass: "border-brand-magenta/30",
    badgeClass: "bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20",
    buttonClass: "bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20",
    shadowClass: "hover:shadow-brand-magenta/10",
  },
  orange: {
    borderClass: "border-brand-orange/30",
    badgeClass: "bg-brand-orange/15 text-brand-orange border-brand-orange/20",
    buttonClass: "bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20",
    shadowClass: "hover:shadow-brand-orange/10",
  },
  green: {
    borderClass: "border-brand-green/30",
    badgeClass: "bg-brand-green/15 text-brand-green border-brand-green/20",
    buttonClass: "bg-brand-green/10 text-brand-green hover:bg-brand-green/20",
    shadowClass: "hover:shadow-brand-green/10",
  },
};

export function CurriculumLibrary({
  programs,
  themeColor = "blue",
  showCurrentBadge = true,
  description,
}: CurriculumLibraryProps) {
  const [openProgram, setOpenProgram] = useState<string | null>(null);
  const theme = themeConfig[themeColor];

  if (programs.length === 0) {
    return (
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-foreground/60 py-8">
            No curriculum data available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Curriculum </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              {description ||
                "Access comprehensive curriculum documentation, course structures, learning outcomes, and downloadable syllabus for your program."}
            </p>
          </div>
          {programs[0]?.batches[0]?.year && (
            <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
              {programs[0].batches[0].year}
            </Badge>
          )}
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;
            const levelBadgeText = program.meta?.level || "Program";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${theme.borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl ${theme.shadowClass} hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className={`rounded-full border ${theme.badgeClass}`}>
                      {levelBadgeText}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">
                      {program.label}
                    </h3>
                    <p className="text-sm text-foreground/80 font-body">
                      {program.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className={`w-full border-${themeColor}-300 ${theme.buttonClass} text-${themeColor}-600 hover:text-${themeColor}-600`}
                    onClick={() => setOpenProgram(isOpen ? null : program.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isOpen ? "Hide" : "View"} Curriculum
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </Button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 border-t border-border/20 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {program.batches.map((batch, batchIdx) => (
                        <div
                          key={`${program.id}-${batch.year}`}
                          className="rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-blue/40"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {showCurrentBadge && batch.current && (
                                <Badge className="rounded-full bg-brand-blue/20 text-brand-blue border-brand-blue/30 border text-xs">
                                  <Zap className="h-3 w-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">
                            {batch.summary}
                          </p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                              asChild
                            >
                              <a
                                href={batch.documentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                Download Curriculum PDF
                              </a>
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
