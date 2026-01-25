import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

export default function InternationalAffairs() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-background">
        <div className="absolute inset-0">
          <img
            src="https://dsu.edu.in/images/StuExchange.jpeg"
            alt="DSU Student Exchange"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="headline-1 mb-4">
              Dayananda Sagar University
            </h1>
            <p className="subheadline text-foreground/80">
              International Affairs
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1: TEDxDSU */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Badge className="mb-4 bg-blue-500/20 text-blue-600">
              Spotlight Story
            </Badge>
            <h2 className="headline-2 mb-6">TEDxDSU</h2>
            <p className="body-lg text-foreground/80 mb-4">
              TEDx DSU is a full-day event, curated by a passionate team at DSU, 
              and will take place at our Main Campus in Harohalli. Our Pro-Chancellor, 
              Dr. D Premachandra Sagar, has a deep commitment to advancing DSU to new 
              heights of excellence and innovation in education.
            </p>
            <p className="body-lg text-foreground/80 mb-6">
              The event will feature talks on diverse topics, sparking conversations 
              that encourage wonder, curiosity, and change by Consulates from various 
              countries and prominent personalities from various fields.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500"
            >
              <a href="https://forms.gle/YsxnNt59pS3kYsvDA" target="_blank" rel="noreferrer">
                RSVP for TEDx DSU!
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://dsu.edu.in/images/homepage/2024/tedxposter.png"
              alt="TEDxDSU"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Campaign Section: Bootcamp */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-background">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://dsu.edu.in/images/Boot-camp.jpg"
            alt="Bootcamp for Innovators"
            className="w-full rounded-xl shadow-xl mb-8"
          />
          <div className="text-center">
            <h2 className="headline-3 mb-4">
              Explore Opportunities: Bootcamp for Innovators
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500"
            >
              <a href="https://forms.gle/WXwc39ETqt1k19528" target="_blank" rel="noreferrer">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature 2: Internationalization */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://dsu.edu.in/images/homepage/2024/designer1400x1400.jpg"
              alt="Internationalization at DSU"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div>
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-600">
              International Programs
            </Badge>
            <h2 className="headline-2 mb-8">
              Internationalization at DSU
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="title-lg font-bold mb-2">
                  <Link to="#" className="hover:text-blue-500 transition-colors">
                    Master's Desk
                  </Link>
                </h3>
                <p className="body-md text-foreground/80">
                  Discover opportunities with Collaborated Universities for your master's abroad.
                </p>
              </div>
              
              <div>
                <h3 className="title-lg font-bold mb-2">
                  <Link to="#" className="hover:text-blue-500 transition-colors">
                    Student Exchange
                  </Link>
                </h3>
                <p className="body-md text-foreground/80">
                  Study a semester abroad with student exchange opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-2 mb-12 text-center">Initiatives</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Bootcamp for Innovators",
                image: "https://dsu.edu.in/images/BootcampForInnovators.jpg",
                link: "#",
              },
              {
                title: "International Conferences",
                image: "https://dsu.edu.in/images/internationalconference.jpg",
                link: "#",
              },
              {
                title: "International Robotics Initiative",
                image: "https://dsu.edu.in/images/InternationalRoboticsInitative.jpg",
                link: "#",
              },
              {
                title: "International Events",
                image: "https://dsu.edu.in/images/imun.jpg",
                link: "#",
              },
            ].map((initiative, idx) => (
              <Link key={idx} to={initiative.link} className="group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <CardHeader className="absolute bottom-0 w-full text-white">
                    <CardTitle className="title-sm">{initiative.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About DSU */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 md:p-12 border border-blue-500/20">
            <h2 className="headline-3 mb-6">About Dayananda Sagar University</h2>
            <p className="body-lg text-foreground/80 leading-relaxed mb-6">
              Dayananda Sagar Institutions was founded in the 1960s, and Dayananda Sagar 
              University (DSU) was established in 2014. DSU is renowned for its world-class 
              interdisciplinary programs, including Medicine, Engineering, Business, Design, 
              Computing, Law, and Science. It has also been accredited with a NAAC A+ rating.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-gray-500/5 to-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-foreground/70 hover:text-blue-500 transition-colors">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-blue-500 transition-colors">
                  Collaborations
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-blue-500 transition-colors">
                  News Release
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-foreground/70 hover:text-blue-500 transition-colors">
                  Alumni
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-blue-500 transition-colors">
                  International & Resources
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-blue-500 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold mb-4">Contact & Social</h3>
            <p className="body-sm text-foreground/70 mb-4">
              Dayananda Sagar University<br />
              Devarakaggalahalli, Harohalli<br />
              Kanakapura Road, Ramanagara<br />
              Karnataka 562112<br />
              <a href="mailto:international-relations@dsu.edu.in" className="hover:text-blue-500">
                international-relations@dsu.edu.in
              </a><br />
              +91 9606022150
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DSUint" target="_blank" rel="noreferrer" 
                 className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/dsu_media" target="_blank" rel="noreferrer"
                 className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/96291393" target="_blank" rel="noreferrer"
                 className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Dayanandasagaruniversityint" target="_blank" rel="noreferrer"
                 className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dsu_int_affairs/" target="_blank" rel="noreferrer"
                 className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-foreground/10">
          <p className="text-center text-foreground/60 body-sm">
            © {new Date().getFullYear()} Dayananda Sagar University. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
