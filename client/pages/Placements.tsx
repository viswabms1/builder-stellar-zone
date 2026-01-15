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
  Code,
  Brain,
  Handshake,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function Placements() {
  const [expandedSchools, setExpandedSchools] = useState<Record<string, boolean>>({});
  const [expandedSector, setExpandedSector] = useState<Record<string, boolean>>({
    soe: true,
    cms: true,
    sbas: false,
    sohs: false,
    soadh: false,
    intl: false,
    mou: false,
  });

  const { elementRef: statsRef, isVisible: statsVisible } = useScrollTrigger();
  const { elementRef: outcomesRef, isVisible: outcomesVisible } = useScrollTrigger();
  const { elementRef: pillarsRef, isVisible: pillarsVisible } = useScrollTrigger();
  const { elementRef: storiesRef, isVisible: storiesVisible } = useScrollTrigger();
  const { elementRef: recruitersRef, isVisible: recruitersVisible } = useScrollTrigger();

  const toggleSchool = (schoolKey: string) => {
    setExpandedSchools((prev) => ({
      ...prev,
      [schoolKey]: !prev[schoolKey],
    }));
  };

  const toggleSector = (sectorKey: string) => {
    setExpandedSector((prev) => ({
      ...prev,
      [sectorKey]: !prev[sectorKey],
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

  const recruitersBySchool = {
    soe: {
      name: "School of Engineering",
      icon: Building2,
      recruiters: [
        { name: "Mercedes-Benz", logo: "https://logo.clearbit.com/mercedes-benz.de" },
        { name: "ABB", logo: "https://logo.clearbit.com/abb.com" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Bosch", logo: "https://logo.clearbit.com/bosch.com" },
        { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
        { name: "PWC", logo: "https://logo.clearbit.com/pwc.com" },
        { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
        { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
        { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
        { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
        { name: "Tata Elxsi", logo: "https://logo.clearbit.com/tataelxsi.com" },
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
        { name: "CGI", logo: "https://logo.clearbit.com/cgi.com" },
        { name: "J.P. Morgan", logo: "https://logo.clearbit.com/jpmorganchase.com" },
        { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
        { name: "Mahindra Comviva", logo: "https://logo.clearbit.com/comviva.com" },
        { name: "General Aeronautics", logo: "https://logo.clearbit.com/generalaeronautics.com" },
        { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
        { name: "Informatica", logo: "https://logo.clearbit.com/informatica.com" },
        { name: "Quest Global", logo: "https://logo.clearbit.com/quest-global.com" },
        { name: "Happiest Minds", logo: "https://logo.clearbit.com/happiestminds.com" },
        { name: "Societe Generale", logo: "https://logo.clearbit.com/societegenerale.com" },
        { name: "TCL", logo: "https://logo.clearbit.com/tcl.com" },
        { name: "EXL", logo: "https://logo.clearbit.com/exlservice.com" },
        { name: "LSEG", logo: "https://logo.clearbit.com/lseg.com" },
        { name: "Sunrise Systems", logo: "https://logo.clearbit.com/sunrisesys.com" },
        { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
        { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
        { name: "TEKsystems", logo: "https://logo.clearbit.com/teksystems.com" },
        { name: "DXC Technology", logo: "https://logo.clearbit.com/dxc.technology" },
        { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
        { name: "Nokia", logo: "https://logo.clearbit.com/nokia.com" },
        { name: "Kantar", logo: "https://logo.clearbit.com/kantar.com" },
        { name: "Continental", logo: "https://logo.clearbit.com/continental.com" },
        { name: "The MathCompany", logo: "https://logo.clearbit.com/themathcompany.com" },
      ],
    },
    cms: {
      name: "School of Commerce & Management Studies",
      icon: Briefcase,
      recruiters: [
        { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
        { name: "PWC", logo: "https://logo.clearbit.com/pwc.com" },
        { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
        { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
        { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
        { name: "Morgan Stanley", logo: "https://logo.clearbit.com/morganstanley.com" },
        { name: "ICICI Bank", logo: "https://logo.clearbit.com/icicibank.com" },
        { name: "HDFC Bank", logo: "https://logo.clearbit.com/hdfcbank.com" },
        { name: "Axis Bank", logo: "https://logo.clearbit.com/axisbank.com" },
        { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
        { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      ],
    },
    sbas: {
      name: "School of Basic & Applied Sciences",
      icon: Code,
      recruiters: [
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
        { name: "Anand Diagnostic Laboratory", logo: "https://logo.clearbit.com/anandlab.com" },
        { name: "Anderson Diagnostics", logo: "https://logo.clearbit.com/andersondiagnostics.com" },
        { name: "Anthem BioSciences", logo: "https://logo.clearbit.com/anthembio.com" },
        { name: "ARTECH", logo: "https://logo.clearbit.com/artech.co.in" },
        { name: "AugMedix", logo: "https://logo.clearbit.com/augmedix.com" },
        { name: "Bencos", logo: "https://logo.clearbit.com/bencos.com" },
        { name: "Bionova", logo: "https://logo.clearbit.com/bionova.com" },
        { name: "Bioneeds", logo: "https://logo.clearbit.com/bioneeds.com" },
        { name: "BYJU'S", logo: "https://logo.clearbit.com/byjus.com" },
        { name: "Canopus", logo: "https://logo.clearbit.com/canopus.co.in" },
        { name: "Carelon", logo: "https://logo.clearbit.com/carelon.com" },
        { name: "Celegence", logo: "https://logo.clearbit.com/celegence.com" },
        { name: "Cerner", logo: "https://logo.clearbit.com/cerner.com" },
        { name: "CIIRC", logo: "https://logo.clearbit.com/ciirc.org" },
        { name: "Clarivate", logo: "https://logo.clearbit.com/clarivate.com" },
        { name: "Codeyoung", logo: "https://logo.clearbit.com/codeyoung.com" },
        { name: "Covance", logo: "https://logo.clearbit.com/covance.com" },
        { name: "Eli Lilly", logo: "https://logo.clearbit.com/lilly.com" },
        { name: "Episource", logo: "https://logo.clearbit.com/episource.com" },
        { name: "Ferticare", logo: "https://logo.clearbit.com/ferticare.com" },
        { name: "FibroHeal", logo: "https://logo.clearbit.com/fibroheal.com" },
        { name: "GHA", logo: "https://logo.clearbit.com/gha.org.in" },
        { name: "GROWTHhub", logo: "https://logo.clearbit.com/growththub.io" },
        { name: "GSK", logo: "https://logo.clearbit.com/gsk.com" },
        { name: "HealthPlix", logo: "https://logo.clearbit.com/healthplix.com" },
        { name: "HealthMinds", logo: "https://logo.clearbit.com/healthminds.in" },
        { name: "HGS", logo: "https://logo.clearbit.com/hgs.com" },
        { name: "ICMR", logo: "https://logo.clearbit.com/icmr.gov.in" },
        { name: "Immensphere", logo: "https://logo.clearbit.com/immensphere.com" },
        { name: "ImpactGuru", logo: "https://logo.clearbit.com/impactguru.com" },
        { name: "Indo-MIM", logo: "https://logo.clearbit.com/indomim.com" },
      ],
    },
    sohs: {
      name: "School of Health Sciences",
      icon: Building2,
      recruiters: [
        { name: "Apollo Hospitals", logo: "https://logo.clearbit.com/apollohospitals.com" },
        { name: "Fortis Healthcare", logo: "https://logo.clearbit.com/fortishealthcare.com" },
        { name: "Max Healthcare", logo: "https://logo.clearbit.com/maxhealthcare.in" },
        { name: "Manipal Hospitals", logo: "https://logo.clearbit.com/manipalhospitals.com" },
        { name: "Aravind Eye Care", logo: "https://logo.clearbit.com/aravind.org" },
        { name: "Narayana Health", logo: "https://logo.clearbit.com/narayanahealth.org" },
        { name: "Cipla", logo: "https://logo.clearbit.com/cipla.com" },
        { name: "Dr. Reddy's Labs", logo: "https://logo.clearbit.com/drreddys.com" },
        { name: "Lupin Limited", logo: "https://logo.clearbit.com/lupin.com" },
        { name: "Biocon", logo: "https://logo.clearbit.com/biocon.com" },
      ],
    },
    soadh: {
      name: "School of Arts, Design & Humanities",
      icon: Lightbulb,
      recruiters: [
        { name: "Google Creative", logo: "https://logo.clearbit.com/google.com" },
        { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
        { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
        { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
        { name: "Times Internet", logo: "https://logo.clearbit.com/timesinternet.com" },
        { name: "Ogilvy", logo: "https://logo.clearbit.com/ogilvy.com" },
        { name: "Publicis", logo: "https://logo.clearbit.com/publicis.com" },
        { name: "Wavemaker", logo: "https://logo.clearbit.com/wavemaker.com" },
        { name: "BBDO India", logo: "https://logo.clearbit.com/bbdo.com" },
      ],
    },
    intl: {
      name: "International Placements",
      icon: Globe,
      recruiters: [
        { name: "Google", logo: "https://logo.clearbit.com/google.com" },
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
        { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
        { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
        { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
        { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
      ],
    },
    mou: {
      name: "MoU Partners",
      icon: Handshake,
      recruiters: [
        { name: "Tata Elxsi", logo: "https://logo.clearbit.com/tataelxsi.com" },
        { name: "Quest Global", logo: "https://logo.clearbit.com/questglobal.com" },
        { name: "Mahindra Comviva", logo: "https://logo.clearbit.com/comviva.com" },
        { name: "Continental AG", logo: "https://logo.clearbit.com/continental.com" },
        { name: "J.P. Morgan", logo: "https://logo.clearbit.com/jpmorganchase.com" },
        { name: "Morgan Stanley", logo: "https://logo.clearbit.com/morganstanley.com" },
      ],
    },
  };

  const statsCards = [
    { label: "500+", description: "Recruiting Partners", icon: Building2 },
    { label: "95%+", description: "Placement Rate", icon: TrendingUp },
    { label: "₹60+ LPA", description: "Highest Package", icon: Award },
    { label: "8+", description: "Sectors", icon: Globe },
  ];

  const outcomeCards = [
    {
      title: "AI-Enabled Curriculum",
      outcome: "→ AI/Data/Core Tech Roles",
      description: "NVIDIA-powered academics prepare graduates for premium technical roles at top tech companies",
      icon: Brain,
    },
    {
      title: "Industry Projects",
      outcome: "→ Faster Employability",
      description: "Real-world problem solving accelerates job readiness and reduces time-to-productivity",
      icon: Target,
    },
    {
      title: "Research Exposure",
      outcome: "→ Higher-Order Roles",
      description: "Published research and innovation experience qualify graduates for leadership and R&D positions",
      icon: Lightbulb,
    },
  ];

  const skillPillars = [
    {
      title: "Industry-Aligned Skills",
      description: "Technical expertise directly mapped to recruiter needs",
      icon: Code,
    },
    {
      title: "AI & Technology Readiness",
      description: "NVIDIA-powered education ensuring cutting-edge technical competency",
      icon: Brain,
    },
    {
      title: "Professional & Leadership Development",
      description: "Soft skills, communication, and management capabilities for career progression",
      icon: Users,
    },
  ];

  const successStories = [
    {
      name: "Aishwarya K S",
      program: "Computer Science & Engineering",
      role: "Software Engineer",
      company: "Accenture & Infosys",
      achievement: "AI-based projects and industry mentoring helped transition into software engineering role",
    },
    {
      name: "Janamruth U",
      program: "Mechanical Engineering",
      role: "Design Engineer",
      company: "Continental AG",
      achievement: "Industry-aligned curriculum and placement support secured position in automotive innovation",
    },
    {
      name: "Aashna Bhaskaran",
      program: "Electronics & Communication Engineering",
      role: "Systems Engineer",
      company: "Cognizant & Accenture",
      achievement: "Technical training and workshops from 3rd year enabled faster career progression",
    },
  ];

  const placementServices = [
    {
      title: "Campus Placements",
      description: "Year-round on-campus recruitment driving placements across all schools",
      icon: Building2,
    },
    {
      title: "Industry-Linked Training",
      description: "Technical and soft skills aligned with recruiter expectations",
      icon: Zap,
    },
    {
      title: "Mentorship & Alumni Connect",
      description: "Career guidance and networking with successful alumni across industries",
      icon: Handshake,
    },
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-10 lg:py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-600/15 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-orange-400/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-orange-500/20 rounded-3xl transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-red-500/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="inline-flex items-center px-3 py-3 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-full border border-orange-500/40 mb-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-sm font-semibold text-orange-300">
              Career Outcomes Powered by AI-First Education
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 bg-clip-text text-transparent inline-block px-2">
              DSU Graduates
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent inline-block px-2">
              Securing Premium Roles
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            DSU graduates secure career-defining roles across technology, engineering, management, finance, and research through AI-integrated education, industry mentorship, and research excellence.
          </p>
        </div>
      </section>

      {/* ===== PLACEMENT OUTCOMES SNAPSHOT (4 STAT CARDS) ===== */}
      <section ref={statsRef} className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                    statsVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      {stat.label}
                    </div>
                    <CardTitle className="text-foreground text-sm font-semibold">
                      {stat.description}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUTCOME-DRIVEN ADVANTAGES ===== */}
      <section ref={outcomesRef} className="px-3 py-10 lg:py-16 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Why DSU Graduates Excel
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Direct connection between academic excellence and career outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {outcomeCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                    outcomesVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground text-lg">{card.title}</CardTitle>
                    <p className="text-sm font-semibold text-orange-500 mt-2">{card.outcome}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THREE SKILL PILLARS ===== */}
      <section ref={pillarsRef} className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Three Pillars of Career Readiness
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {skillPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 group ${
                    pillarsVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUTCOME-FOCUSED SUCCESS STORIES ===== */}
      <section ref={storiesRef} className="px-3 py-10 lg:py-16 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Graduate Success Stories
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Real outcomes from real graduates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                  storiesVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <h3 className="text-lg font-bold text-foreground mb-1">{story.name}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{story.program}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full w-fit">
                    <Briefcase className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-orange-500">{story.role}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground mb-3">{story.company}</p>
                  <p className="text-sm text-foreground italic border-l-2 border-orange-500 pl-3">
                    "{story.achievement}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECRUITERS BY SECTOR ===== */}
      <section ref={recruitersRef} className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Top Recruiting Partners
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Global leaders actively recruiting DSU graduates
            </p>
          </div>

          <div className="space-y-4">
            {Object.entries(recruitersBySchool).map(([key, school]) => {
              const SchoolIcon = school.icon;
              return (
                <div key={key} className="border border-border/50 rounded-2xl overflow-hidden bg-card/30">
                  <button
                    onClick={() => toggleSector(key)}
                    className="w-full px-4 py-6 flex items-center justify-between hover:bg-orange-500/5 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <SchoolIcon className="w-5 h-5 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">{school.name}</h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                        expandedSector[key] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedSector[key] && (
                    <div className="border-t border-border/30 px-4 py-8 bg-gradient-to-b from-orange-500/5 to-transparent">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {school.recruiters.map((recruiter, recruiterIdx) => (
                          <div
                            key={recruiterIdx}
                            className="border-2 border-slate-400 dark:border-slate-600 rounded-lg p-4 flex items-center justify-center min-h-32 hover:border-orange-500 hover:shadow-md transition-all duration-300 bg-white dark:bg-card/50"
                          >
                            <img
                              src={recruiter.logo}
                              alt={recruiter.name}
                              className="max-w-full max-h-20 object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling?.classList.remove("hidden");
                              }}
                            />
                            <span className="hidden text-center font-semibold text-foreground text-xs">
                              {recruiter.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THREE PLACEMENT SERVICES ===== */}
      <section className="px-3 py-10 lg:py-16 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Placement Support
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {placementServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BATCH-WISE PLACEMENT DATA (DASHBOARD STYLE) ===== */}
      <section className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Placement Data by School
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive year-wise placement statistics
            </p>
          </div>

          <div className="space-y-4">
            {placementData.map((school) => (
              <div key={school.key} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                <button
                  onClick={() => toggleSchool(school.key)}
                  className="w-full px-4 py-6 flex items-center justify-between hover:bg-orange-500/5 transition-colors"
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
                  <div className="border-t border-border/30 px-4 py-6 bg-gradient-to-b from-orange-500/5 to-transparent">
                    {school.subCategories ? (
                      <div className="space-y-6">
                        {school.subCategories.map((subCategory, subIdx) => (
                          <div key={subIdx}>
                            <h4 className="text-base font-semibold text-foreground mb-4">{subCategory.name}</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
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

      {/* ===== CONTACT SECTION (COMPACT) ===== */}
      <section className="px-3 py-10 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Reach our placement team for recruitment and partnership opportunities
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  {section.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {section.contacts.map((contact, contactIdx) => (
                    <div
                      key={contactIdx}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {contact.name}
                      </h4>
                      <p className="text-xs text-foreground mb-3">{contact.title}</p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-xs text-foreground hover:text-orange-500 transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-xs text-foreground hover:text-orange-500 transition-colors break-all"
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

      {/* ===== FINAL CTA ===== */}
      <section className="px-3 py-10 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Begin Your Success Story
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join DSU and access opportunities with 500+ global recruiters committed to your career growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
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
