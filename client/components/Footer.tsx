import { Link as RouterLink } from "react-router-dom";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const FOOTER_LINK_GROUPS = [
  {
    title: "Explore DSU",
    links: [
      { label: "Academics", href: "/academics" },
      { label: "Admissions", href: "/admissions" },
      { label: "Research", href: "/research" },
      { label: "Campus Life", href: "/campus-life" },
    ],
  },
  {
    title: "Schools",
    links: [
      { label: "Engineering", href: "/academics/engineering" },
      { label: "Management Studies", href: "/academics/management-studies" },
      { label: "Health Sciences", href: "/academics/health-sciences" },
      { label: "Design & Media", href: "/academics/design/bdesign" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Student Portal",
        href: "https://ums.mydsi.org/Login.aspx/DSU",
        external: true,
      },
      {
        label: "Examinations",
        href: "/examinations",
      },
      {
        label: "Builder.io Projects",
        href: "https://www.dsu.edu.in",
        external: true,
      },
      {
        label: "Contact",
        href: "/about",
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dsuofficial",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dayanandasagaruniversity",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/dayanandasagaruniversity/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DayanandaSagarUniversity",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/50 bg-gradient-to-br from-background via-background/95 to-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-brand-magenta/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_minmax(0,1fr)]">
          <div className="space-y-8">
            <RouterLink
              to="/"
              className="inline-flex items-center gap-3 text-left text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-lg font-semibold">
                DSU
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Dayananda Sagar University
                </p>
                <h2 className="mt-1 text-2xl font-display text-white">
                  Future-ready education for a world in motion
                </h2>
              </div>
            </RouterLink>

            <p className="max-w-xl text-sm leading-relaxed text-white/70 font-body">
              A multidisciplinary university in Bengaluru nurturing innovators,
              leaders and change makers through a blend of academics, research
              and hands-on learning.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-brand-gradient text-white shadow-lg shadow-brand-magenta/20 hover:shadow-xl hover:shadow-brand-magenta/30"
              >
                <RouterLink to="/admissions" className="gap-2">
                  Apply Now
                  <ArrowUpRight className="h-4 w-4" />
                </RouterLink>
              </Button>
              <a
                href="https://dsu.edu.in/virtual-tour"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                Take a virtual tour
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3 text-sm text-white/80 font-body">
                <div className="inline-flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4" />
                  Main Campus
                </div>
                <p className="text-white/70">
                  Shavige Malleshwara Hills, Kumaraswamy Layout,
                  <br />
                  Bengaluru, Karnataka 560111, India
                </p>
              </div>
              <div className="space-y-3 text-sm text-white/80 font-body">
                <div className="inline-flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4" />
                  +91 80 4646 1800 / 1810
                </div>
                <a
                  href="mailto:admissions@dsu.edu.in"
                  className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
                >
                  <Mail className="h-4 w-4" /> admissions@dsu.edu.in
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {FOOTER_LINK_GROUPS.map((group) => (
              <nav key={group.title} className="space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/70">
                  {group.title}
                </h3>
                <ul className="space-y-3 text-sm text-white/70 font-body">
                  {group.links.map((link) => {
                    if (link.external) {
                      return (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 transition hover:text-white"
                          >
                            {link.label}
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={link.label}>
                        <RouterLink
                          to={link.href}
                          className="transition hover:text-white"
                        >
                          {link.label}
                        </RouterLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-6 text-sm text-white/60 font-body sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dayananda Sagar University. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.dsu.edu.in/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.dsu.edu.in/terms"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Terms of Use
            </a>
            <RouterLink to="/about" className="transition hover:text-white">
              About DSU
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
