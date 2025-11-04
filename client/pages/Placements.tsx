import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Building2,
  Target,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Zap,
  Lightbulb,
  ChevronDown,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function Placements() {
  const [expandedSchools, setExpandedSchools] = useState<Record<string, boolean>>({});

  const toggleSchool = (schoolKey: string) => {
    setExpandedSchools((prev) => ({
      ...prev,
      [schoolKey]: !prev[schoolKey],
    }));
  };

  const placementData = [
    {
      key: "soe",
      name: "School of Engineering",
      programs: "BE/B.Tech, M.Tech",
      batches: [
        { year: "2025", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2025_RP.pdf" },
        { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2024.pdf" },
        { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2023_1.pdf" },
        { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2022.pdf" },
        { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2021.pdf" },
        { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2020.pdf" },
        { year: "2019", link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2019.pdf" },
      ],
    },
    {
      key: "cms",
      name: "School of Commerce & Management Studies",
      programs: "BBA, MBA, B.Com, M.Com",
      batches: [
        { year: "2025", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/Campus_placement_website_2025_School_of_Commerce__Mgt.pdf" },
        { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/Campus_placement_website_2024_School_of_Commerce__Mgt.pdf" },
        { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2023.pdf" },
        { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2022.pdf" },
        { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2021.pdf" },
        { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2020.pdf" },
        { year: "2019", link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2019.pdf" },
      ],
    },
    {
      key: "sbas",
      name: "School of Basic & Applied Sciences",
      programs: "B.Sc, M.Sc",
      batches: [
        { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2024.pdf" },
        { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2023.pdf" },
        { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2022.pdf" },
        { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2021.pdf" },
        { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2020.pdf" },
        { year: "2019", link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2019.pdf" },
      ],
    },
    {
      key: "sohs",
      name: "School of Health Sciences",
      programs: "Nursing, Pharmacy, Physiotherapy",
      subCategories: [
        {
          name: "Nursing",
          batches: [
            { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2024_CONS.pdf" },
            { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2023_CONS.pdf" },
            { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2022_CONS.pdf" },
            { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/nursing_2021.pdf" },
            { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/nursing_2020.pdf" },
            { year: "2019", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/nursing_2019.pdf" },
          ],
        },
        {
          name: "Pharmacy",
          batches: [
            { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website__COPS_2024.pdf" },
            { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2023.pdf" },
            { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2022.pdf" },
            { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2021.pdf" },
            { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2020.pdf" },
            { year: "2019", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2019.pdf" },
          ],
        },
        {
          name: "Physiotherapy",
          batches: [
            { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2024__PHYSIOTHERAPY.pdf" },
            { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2023.pdf" },
            { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2022.pdf" },
            { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2021.pdf" },
            { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2020.pdf" },
            { year: "2019", link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2019.pdf" },
          ],
        },
      ],
    },
    {
      key: "soadh",
      name: "School of Arts, Design & Humanities",
      programs: "BA (JMC), B.Design",
      batches: [
        { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2024.pdf" },
        { year: "2023", link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2023.pdf" },
        { year: "2022", link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2022.pdf" },
        { year: "2021", link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2021.pdf" },
        { year: "2020", link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2020.pdf" },
      ],
    },
    {
      key: "soca",
      name: "School of Computer Application",
      programs: "BCA, MCA",
      batches: [
        { year: "2025", link: "https://www.dsu.edu.in/images/placements/Hiring/SOCA/soca_2025.pdf" },
        { year: "2024", link: "https://www.dsu.edu.in/images/placements/Hiring/SOCA/soca_2024.pdf" },
      ],
    },
  ];

  const highlights = [
    {
      label: "Recruiting Organizations",
      value: "500+",
      icon: Building2,
      description: "Reputed organizations across sectors",
    },
    {
      label: "Career Programs",
      value: "8+",
      icon: Award,
      description: "BE/B.Tech, M.Tech, B.Sc, M.Sc, MBA, BCA, MCA, BAJMC",
    },
    {
      label: "Comprehensive Support",
      value: "100%",
      icon: Users,
      description: "Technical & soft skills training",
    },
  ];

  const supportAreas = [
    {
      title: "Technical Training",
      description: "Industry-relevant technical skill development",
      icon: Zap,
    },
    {
      title: "Soft Skills",
      description: "Communication, leadership, and professional development",
      icon: Target,
    },
    {
      title: "Industry Bridge",
      description: "Direct connections with leading organizations",
      icon: Lightbulb,
    },
  ];


  const facilities = [
    "Boardroom",
    "Boys Common Room",
    "Computer Lab 1",
    "Computer Lab 2",
    "Computer Lab 3",
    "Digital Library",
    "GD Room",
    "Girls Common Room",
    "Interview Cabin",
    "Interview Cabin 2",
    "Interview Panel Rooms",
    "Lecture Hall",
    "Library",
    "Lobby",
    "Theatre Gallery",
    "Theatre Screen",
  ];

  const contactInfo = [
    {
      category: "Fresher's Hiring",
      contacts: [
        {
          name: "M N Guruvenkatesh",
          title: "Senior Vice President - Placements & Skill Development",
          phone: "+91 98441 65956",
          email: "gm-cr@dayanandasagar.edu",
        },
        {
          name: "Vijay Kumar S",
          title: "Director - Training & Corporate Relations",
          phone: "+91 98863 94532",
          email: "placements@dsu.edu.in",
        },
      ],
    },
    {
      category: "MBA Hiring",
      contacts: [
        {
          name: "Prof. Sanjay K",
          title: "Director (Corporate Relations & Placement) Management Schools",
          phone: "+91 98802 83123",
          email: "sanjay.k@dsu.edu.in",
        },
        {
          name: "Prof. Darpana Singh",
          title: "Manager - Placement",
          phone: "+91 98451 08664",
          email: "darpana@dsu.edu.in",
        },
      ],
    },
  ];

  const programs = [
    { name: "Campus Placements", description: "On-campus recruitment and job placements" },
    { name: "CIL Training", description: "Corporate Industry Institute Linked training programs" },
    { name: "Soft Skills Development", description: "Communication and professional development" },
    { name: "Technical Training", description: "Industry-relevant technical skill enhancement" },
    { name: "Mentorship Programs", description: "Career guidance and alumni mentorship" },
    { name: "Placement Announcements", description: "Regular updates on opportunities" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <Briefcase className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Career Development
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Launch Your Dream Career
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            The Training and Placement Cell acts as a bridge between academia and industry, empowering every student to acquire the necessary skills, knowledge, and industry exposure to secure meaningful and successful careers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
              <p className="text-foreground text-lg leading-relaxed">
                To enable and empower every student to acquire the necessary skills, knowledge, and industry exposure to secure meaningful and successful careers. We focus on academic excellence combined with holistic development to prepare students for dynamic professional demands.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Our Vision</h3>
              <p className="text-foreground text-lg leading-relaxed">
                To foster a culture of excellence and integrity, empowering students with the skills and opportunities to create a significant impact in the professional world and become industry leaders across global organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Why Choose DSU for Your Career
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-orange-500 mb-1">
                      {highlight.value}
                    </div>
                    <CardTitle className="text-foreground text-sm font-semibold">
                      {highlight.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Areas of Focus
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive development across technical and professional dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs by School - Expandable */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Placements Across All Schools
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Click on any school to view batch-wise placement data and statistics
            </p>
          </div>

          <div className="space-y-4">
            {placementData.map((school) => (
              <div key={school.key} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                <button
                  onClick={() => toggleSchool(school.key)}
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-orange-500/5 transition-colors"
                >
                  <div className="flex items-start gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{school.name}</h3>
                      <p className="text-sm text-foreground">{school.programs}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      expandedSchools[school.key] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSchools[school.key] && (
                  <div className="border-t border-border/30 px-6 py-6 bg-gradient-to-b from-orange-500/5 to-transparent">
                    {school.subCategories ? (
                      <div className="space-y-6">
                        {school.subCategories.map((subCategory, subIdx) => (
                          <div key={subIdx}>
                            <h4 className="text-base font-semibold text-foreground mb-3">{subCategory.name}</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {subCategory.batches.map((batch, batchIdx) => (
                                <a
                                  key={batchIdx}
                                  href={batch.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/30 rounded-xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group"
                                >
                                  <FileText className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-orange-500 transition-colors">
                                    {batch.year} Batch
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {school.batches.map((batch, batchIdx) => (
                          <a
                            key={batchIdx}
                            href={batch.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/30 rounded-xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group"
                          >
                            <FileText className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground group-hover:text-orange-500 transition-colors">
                              {batch.year} Batch
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Services & Programs */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Placement Services
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive programs and services for career success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <CardTitle className="text-foreground">{program.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                World-Class Facilities
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              State-of-the-art infrastructure supporting placements and training
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex items-center justify-center hover:border-orange-500/30 transition-all duration-300 text-center min-h-24"
              >
                <span className="text-sm font-semibold text-foreground">
                  {facility}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Contact our placement team for any queries and support
            </p>
          </div>

          <div className="space-y-12">
            {contactInfo.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 text-orange-500">
                  {section.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.contacts.map((contact, contactIdx) => (
                    <div
                      key={contactIdx}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {contact.name}
                      </h4>
                      <p className="text-sm text-foreground mb-4">{contact.title}</p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-sm text-foreground hover:text-orange-500 transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-sm text-foreground hover:text-orange-500 transition-colors break-all"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Journey to Success
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join Dayananda Sagar University and become part of our thriving alumni network achieving remarkable success in leading global organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/academics">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
