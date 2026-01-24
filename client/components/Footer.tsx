import { Link as RouterLink } from "react-router-dom";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";
import { footerTranslations } from "@/lib/i18n-extended";
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
      { label: "School of Design & Digital Trans-Media", href: "/academics/design/bdesign" },
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
        label: "Placements",
        href: "https://www.dsu.edu.in/placements",
        external: true,
      },
      {
        label: "IQAC",
        href: "/iqac",
      },
      {
        label: "Contact",
        href: "/about",
      },
    ],
  },
];

const CONTACT_LOCATIONS = [
  {
    title: "DSU Main Campus",
    address: [
      "Devarakaggalahalli, Harohalli",
      "Kanakapura Road, Bengaluru South Dt.",
      "Karnataka 562 112, India",
    ],
    phones: [
      { label: "Registrar", value: "080 4909 2910 / 11" },
      { label: "Dean (Engineering)", value: "+91 80 4909 2986 / 32 / 33" },
      { label: "Dean (MBA)", value: "080 4909 2931" },
      { label: "EMBA Enquiry", value: "080 4909 2930" },
      { label: "Research Cell", value: "080 4909 2912" },
    ],
  },
  {
    title: "DSU City Innovation Campus",
    address: [
      "Administrative & Main Admissions Office",
      "Kudlu Gate, Hosur Road",
      "Bengaluru - 560 114",
    ],
    phones: [
      { label: "Admissions Helpline", value: "080 4646 1800 / 080 4909 2800" },
      { label: "Mobile", value: "+91 77609 64277 / 82963 16737 / 63668 85507" },
    ],
  },
  {
    title: "DSU City Admissions Office",
    address: [
      "Gate 2, 6th Floor, University Building",
      "Dental Block, Kumaraswamy Layout",
      "Bengaluru - 560 111",
    ],
    phones: [
      { label: "Admissions Helpline", value: "080 4646 1800 / 080 4909 2800" },
    ],
  },
];

const CONTACT_EMAILS = [
  { label: "Admissions", value: "admissions@dsu.edu.in" },
  { label: "General Enquiry", value: "enquiry@dsu.edu.in" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Dayanandasagaruniversitybangalore/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dayanandasagaruniversityblr",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/school/dayananda-sagar-university-bangalore/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DayanandaSagarUniversity",
    icon: Youtube,
  },
];

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const footerTrans =
    footerTranslations[language as keyof typeof footerTranslations] ||
    footerTranslations.en;

  return (
    <footer
      className="relative mt-8 border-t border-white/10 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 3, 17, 0.85), rgba(7, 3, 17, 0.85)), url('https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5f8a1874869042e2af0199cc47745f77?format=webp&width=1200')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-brand-magenta/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-3 py-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <RouterLink
              to="/"
              className="inline-flex items-center gap-3 text-left text-white"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0caf0bf29be6421997005f26cdaae0ed?format=webp&width=800"
                alt="Dayananda Sagar University Logo"
                className="h-16 w-auto object-contain mix-blend-mode-lighten"
                style={{ mixBlendMode: "lighten" }}
              />
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
                  {footerTrans.sections.contact === "Contact"
                    ? "Apply Now"
                    : footerTrans.links.admissions}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </RouterLink>
              </Button>
              <a
                href="https://dsu.edu.in/virtual-tour"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                Take a virtual tour
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 font-body sm:flex sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3 text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="text-white/70">Helpline</span>
                <a
                  href="tel:+918046461800"
                  className="font-medium text-white/85 transition hover:text-white"
                >
                  +91 80 4646 1800
                </a>
                <span className="hidden text-white/40 sm:inline">/</span>
                <a
                  href="tel:+918049092800"
                  className="font-medium text-white/85 transition hover:text-white"
                >
                  +91 80 4909 2800
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {CONTACT_EMAILS.map((email) => (
                  <a
                    key={email.value}
                    href={`mailto:${email.value}`}
                    aria-label={`${email.label} email ${email.value}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80 transition hover:text-white"
                  >
                    <Mail className="h-3 w-3" aria-hidden="true" />{" "}
                    {email.label}
                  </a>
                ))}
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
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                            <ArrowUpRight
                              className="h-3 w-3"
                              aria-hidden="true"
                            />
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

        <div
          className="mt-16 grid gap-4 w-full"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {CONTACT_LOCATIONS.map((location, index) => (
            <div
              key={location.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-50px_rgba(255,255,255,0.6)]"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {location.title}
              </div>
              <div className="mt-3 space-y-1 text-sm text-white/80 font-body">
                {location.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/75 font-body">
                {location.phones.map((phone) => {
                  const sanitised = phone.value.replace(/[^+0-9]/g, "");
                  const isSingleNumber =
                    !/[\/|]/.test(phone.value) && sanitised.length > 6;
                  return (
                    <p
                      key={`${location.title}-${phone.label}-${phone.value}`}
                      className="flex flex-wrap items-center gap-2"
                    >
                      <span className="text-white/50">{phone.label}:</span>
                      {isSingleNumber ? (
                        <a
                          href={`tel:${sanitised}`}
                          className="text-white/80 transition hover:text-white"
                        >
                          {phone.value}
                        </a>
                      ) : (
                        <span className="text-white/80">{phone.value}</span>
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-6 text-sm text-white/60 font-body sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          <p>
            © 2026 Dayananda Sagar University.{" "}
            {language === "en"
              ? "All rights reserved."
              : language === "kn"
                ? "ಎಲ್ಲಾ ಅಧಿಕಾರಗಳು ಸಂರಕ್ಷಿತ."
                : "सर्वाधिकार सुरक्षित."}
          </p>
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
