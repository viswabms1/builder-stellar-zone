import { useState } from "react";
import { MapPin, Phone, Mail, Navigation, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CampusLocationsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const campuses = [
    {
      name: "DSU Main Campus",
      address: "Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112",
      phone: "+91-80-2797-1000",
      email: "info@dsu.edu.in",
      schools: [
        "School of Engineering",
        "School of Health Sciences",
        "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
      ],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5554269548903!2d77.5236!3d12.7539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3a8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sDevarakaggalahalli%2C%20Harohalli%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.app.goo.gl/GhhwYuELs9kFdEwXA",
      color: "brand-blue",
    },
    {
      name: "DSU City Innovation Campus",
      address: "Kudlu Gate, Hosur Road, Bengaluru - 560 114",
      phone: "+91-80-2797-2000",
      email: "admissions@dsu.edu.in",
      schools: [
        "School of Computer Applications",
        "School of Law",
        "School of Commerce & Management",
        "School of Basic & Applied Sciences",
        "School of Design & Digital Trans-Media",
        "School of Arts, Design & Humanities",
        "Online Degree Programs",
      ],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9847558046286!2d77.6312!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1581c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sKudlu%20Gate%2C%20Hosur%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.app.goo.gl/KudluGateCampus",
      color: "brand-blue",
    },
  ];

  const activeCampus = campuses[activeTab];

  return (
    <section className="px-3 py-10 md:py-16 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-1 w-8 bg-white rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              Visit Us
            </span>
            <div className="h-1 w-8 bg-white rounded-full"></div>
          </div>
          <h2 className="headline-2 mb-6">
            <span className="text-foreground">Visit Our </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Campuses
            </span>
          </h2>
        </div>

        {/* Campus Tabs */}
        <div className="flex gap-0 mb-8 border-b-2 border-foreground/10 max-w-3xl mx-auto">
          {campuses.map((campus, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 border-b-2 -mb-[2px] text-center text-lg ${
                activeTab === index
                  ? "text-brand-blue border-b-brand-blue"
                  : "text-foreground/60 border-b-transparent hover:text-foreground/80"
              }`}
            >
              {campus.name}
            </button>
          ))}
        </div>

        {/* Campus Content - Tab View */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden border-2 border-brand-blue/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-brand-blue/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/20"
          >
            {/* Map Container */}
            <div className="relative h-96 w-full overflow-hidden bg-foreground/5">
              <iframe
                title={`${activeCampus.name} Map`}
                src={activeCampus.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Campus Info */}
            <div className="p-6 md:p-8 space-y-5">
              {/* Campus Name */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-2 hover:text-brand-blue transition-colors">
                  {activeCampus.name}
                </h3>
                <div className="h-1 w-12 bg-brand-blue rounded-full" />
              </div>

              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground/70 font-body leading-relaxed">
                    {activeCampus.address}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2 border-t border-foreground/10">
                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <a
                    href={`tel:${activeCampus.phone}`}
                    className="text-sm text-foreground/80 hover:text-brand-blue transition-colors font-medium"
                  >
                    {activeCampus.phone}
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <a
                    href={`mailto:${activeCampus.email}`}
                    className="text-sm text-foreground/80 hover:text-brand-blue transition-colors font-medium"
                  >
                    {activeCampus.email}
                  </a>
                </div>
              </div>

              {/* Schools */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-brand-blue" />
                  <span className="text-xs font-semibold text-foreground/60 uppercase tracking-widest">
                    Schools Located Here
                  </span>
                </div>
                <div className="space-y-2">
                  {activeCampus.schools.map((school, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-foreground/85 p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                    >
                      <span className="text-brand-blue font-bold mt-0.5">•</span>
                      <span className="font-medium">{school}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 pt-4">
                <a
                  href={activeCampus.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold gap-2 transition-all">
                    Get Directions
                    <Navigation className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href={`mailto:${activeCampus.email}`}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full text-foreground hover:text-brand-blue hover:border-brand-blue border-brand-blue/30 transition-all"
                  >
                    Contact
                    <Mail className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
