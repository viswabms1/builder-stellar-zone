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
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Placements() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const testimonials = [
    {
      name: "Janamruth U",
      branch: "Mechanical Engineering",
      company: "Continental AG",
      quote: "I can positively say that Dayananda Sagar University has been the best part of my life and I have made some of the best friends a person could have. The most I admire is the support that I received from DSU especially from the Department of Mechanical Engineering. I'm also grateful to the Training and Placement Department.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Janamruth.jpg",
    },
    {
      name: "Aishwarya K S",
      branch: "Computer Science & Engineering",
      company: "Accenture and Infosys",
      quote: "DSU has helped me in moulding and establishing my career. DSU offers unique combination of learning and self development. University has provided us a very enhanced and efficient platform for the exposure by training and placement department. I am very grateful to the university for providing us the best of placement opportunities.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Aishwarya.png",
    },
    {
      name: "Aashna Bhaskaran",
      branch: "Electronics & Communication Engineering",
      company: "Cognizant and Accenture",
      quote: "The placement department was extremely helpful in training us both on the interpersonal and technical fronts with career oriented workshops and seminars starting from the third year itself. The sheer amount of efforts put in by the placement cell at DSU remains unparalleled and unchallenged.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Aashna.png",
    },
    {
      name: "Jayanth T M",
      branch: "Mechanical Engineering",
      company: "Quest Global",
      quote: "DSU has been a wonderful platform for learning and experimenting new ideas. The faculties here have helped me in shaping my life starting from a student to a professional.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Jayanth.jpg",
    },
    {
      name: "Pavithra S R",
      branch: "Electronics & Communication Engineering",
      company: "Accenture and Infosys",
      quote: "It has been a great experience to be part of 'Dayananda Sagar University'. I am thankful to all my faculties and placement department for guiding and leading my path towards excellence.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/pavithra.jpg",
    },
    {
      name: "Ashritha R Reddy",
      branch: "Computer Science & Engineering",
      company: "Accenture and Infosys",
      quote: "DSU has given me a joyous and fun-filled experience, where I have learnt to nurture my dreams and fulfill my ambitions. It has provided me a lot of exposure to various MNC's of which I have succeeded in being placed in Accenture and Infosys.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Ashritha.png",
    },
    {
      name: "Divya M Kannur",
      branch: "Electronics & Communication Engineering",
      company: "Ernst Young",
      quote: "Dayananda Sagar University has helped us to get quality education and prepared us for industrial culture by exposing us to various projects, hackathons and other competitions. Faculty were always supportive and helped us to publish papers.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Divya.png",
    },
    {
      name: "Teena Varghese",
      branch: "Computer Science & Engineering",
      company: "Accenture and Infosys",
      quote: "My life at Dayananda Sagar University made me stronger and took me a step ahead of being an independent woman. The infrastructure at Dayananda Sagar University is excellent.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/teena.jpg",
    },
    {
      name: "Lavanya S",
      branch: "Computer Science & Engineering",
      company: "Infosys and Accenture",
      quote: "My experience at DSU has been best journey, full of learning opportunities that were filled with fun and frolic. The management and staff are always available to help us and their suggestions helped me in my overall development.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Lavanya.png",
    },
    {
      name: "Nithin S",
      branch: "Computer Science & Engineering",
      company: "Infosys",
      quote: "Dayananda Sagar University has given me an amazing platform for my overall growth and development. I had countless opportunities to develop analytical and problem solving skills as well as leadership qualities.",
      image: "https://www.dsu.edu.in/images/Testimonial/placements/Nithin.jpg",
    },
  ];

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [autoScroll, testimonials.length]);

  const nextTestimonial = () => {
    setAutoScroll(false);
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoScroll(false);
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const [expandedSchools, setExpandedSchools] = useState<Record<string, boolean>>({});
  const [expandedRecruiters, setExpandedRecruiters] = useState<Record<string, boolean>>({
    engineering: true,
    commerce: true,
    sciences: true,
    health: true,
    arts: true,
    computer: true,
    international: true,
  });

  const toggleSchool = (schoolKey: string) => {
    setExpandedSchools((prev) => ({
      ...prev,
      [schoolKey]: !prev[schoolKey],
    }));
  };

  const toggleRecruiter = (recruiterKey: string) => {
    setExpandedRecruiters((prev) => ({
      ...prev,
      [recruiterKey]: !prev[recruiterKey],
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

  const recruiterData = [
    {
      key: "engineering",
      name: "School of Engineering",
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
        { name: "TCS", logo: "https://logo.clearbit.com/tcs.co.in" },
        { name: "Tata Elxsi", logo: "https://logo.clearbit.com/tataelxsi.com" },
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
        { name: "CGI", logo: "https://logo.clearbit.com/cgi.com" },
        { name: "J.P. Morgan", logo: "https://logo.clearbit.com/jpmorganchase.com" },
        { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
        { name: "Mahindra Comviva", logo: "https://logo.clearbit.com/comviva.com" },
      ],
    },
    {
      key: "commerce",
      name: "School of Commerce & Management Studies",
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
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
      ],
    },
    {
      key: "sciences",
      name: "School of Basic & Applied Sciences",
      recruiters: [
        { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
        { name: "TCS", logo: "https://logo.clearbit.com/tcs.co.in" },
        { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
        { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
        { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
        { name: "Google", logo: "https://logo.clearbit.com/google.com" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
        { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
        { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
        { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
      ],
    },
    {
      key: "health",
      name: "School of Health Sciences",
      subCategories: [
        {
          name: "Pharmacy",
          recruiters: [
            { name: "Cipla", logo: "https://logo.clearbit.com/cipla.com" },
            { name: "Lupin", logo: "https://logo.clearbit.com/lupin.com" },
            { name: "Aurobindo Pharma", logo: "https://logo.clearbit.com/aurobindogroup.com" },
            { name: "Cadila Healthcare", logo: "https://logo.clearbit.com/cdhc.co.in" },
            { name: "Glenmark", logo: "https://logo.clearbit.com/glenmarkpharma.com" },
            { name: "Alembic Pharma", logo: "https://logo.clearbit.com/alembicgroup.com" },
            { name: "Pfizer India", logo: "https://logo.clearbit.com/pfizer.com" },
            { name: "GSK", logo: "https://logo.clearbit.com/gsk.com" },
          ],
        },
        {
          name: "Nursing",
          recruiters: [
            { name: "Apollo Hospitals", logo: "https://logo.clearbit.com/apollohospitals.com" },
            { name: "Fortis Healthcare", logo: "https://logo.clearbit.com/fortishealthcare.com" },
            { name: "Max Healthcare", logo: "https://logo.clearbit.com/maxhealthcare.com" },
            { name: "Manipal Hospitals", logo: "https://logo.clearbit.com/manipalhospitals.com" },
            { name: "Narayana Health", logo: "https://logo.clearbit.com/narayanahealth.org" },
            { name: "Kims Hospital", logo: "https://logo.clearbit.com/kimshospitals.com" },
            { name: "Aster Hospitals", logo: "https://logo.clearbit.com/asterhospitals.com" },
            { name: "Columbia Asia", logo: "https://logo.clearbit.com/columbiaasiahospitals.com" },
          ],
        },
        {
          name: "Physiotherapy",
          recruiters: [
            { name: "Apollo Hospitals", logo: "https://logo.clearbit.com/apollohospitals.com" },
            { name: "Fortis Healthcare", logo: "https://logo.clearbit.com/fortishealthcare.com" },
            { name: "Max Healthcare", logo: "https://logo.clearbit.com/maxhealthcare.com" },
            { name: "Sports Authority of India", logo: "https://logo.clearbit.com/sai.nic.in" },
            { name: "Aravind Eye Care", logo: "https://logo.clearbit.com/aravind.org" },
            { name: "Manipal Hospitals", logo: "https://logo.clearbit.com/manipalhospitals.com" },
            { name: "Narayana Health", logo: "https://logo.clearbit.com/narayanahealth.org" },
          ],
        },
      ],
    },
    {
      key: "arts",
      name: "School of Arts, Design & Humanities",
      recruiters: [
        { name: "Times Network", logo: "https://logo.clearbit.com/timesnetwork.com" },
        { name: "Aaj Tak", logo: "https://logo.clearbit.com/aajtak.in" },
        { name: "NDTV", logo: "https://logo.clearbit.com/ndtv.com" },
        { name: "Republic TV", logo: "https://logo.clearbit.com/republicworld.com" },
        { name: "India Today", logo: "https://logo.clearbit.com/indiatoday.in" },
        { name: "Hindustan Times", logo: "https://logo.clearbit.com/hindustantimes.com" },
        { name: "The Hindu", logo: "https://logo.clearbit.com/thehindu.com" },
        { name: "TOI", logo: "https://logo.clearbit.com/timesofindia.com" },
        { name: "Deccan Herald", logo: "https://logo.clearbit.com/deccanherald.com" },
        { name: "Mint", logo: "https://logo.clearbit.com/livemint.com" },
        { name: "Business Standard", logo: "https://logo.clearbit.com/business-standard.com" },
        { name: "Economic Times", logo: "https://logo.clearbit.com/economictimes.com" },
      ],
    },
    {
      key: "computer",
      name: "School of Computer Application",
      recruiters: [
        { name: "Google", logo: "https://logo.clearbit.com/google.com" },
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
        { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
        { name: "TCS", logo: "https://logo.clearbit.com/tcs.co.in" },
        { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
        { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
        { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
        { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
        { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
        { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
        { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
        { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
        { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com" },
      ],
    },
    {
      key: "international",
      name: "International Placements",
      recruiters: [
        { name: "Google", logo: "https://logo.clearbit.com/google.com" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
        { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
        { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
        { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
        { name: "PWC", logo: "https://logo.clearbit.com/pwc.com" },
        { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
        { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
        { name: "J.P. Morgan", logo: "https://logo.clearbit.com/jpmorganchase.com" },
        { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-600/15 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-orange-400/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

          {/* Grid pattern overlay */}
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

          {/* Geometric shapes */}
          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-orange-500/20 rounded-3xl transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-red-500/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Badge Background */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-full border border-orange-500/40 mb-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Briefcase className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-sm font-semibold text-orange-300">
              Career Development
            </span>
          </div>

          {/* Main Heading with Background */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 bg-clip-text text-transparent inline-block px-2">
                Launch Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent inline-block px-2">
                Dream Career
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
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

      {/* Student Testimonials Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Student Success Stories
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Hear directly from our graduates about their DSU experience and career journey
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:border-orange-500/30 transition-all duration-300">
              {/* Student Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-orange-500/20">
                  <img
                    src={testimonials[testimonialIndex].image}
                    alt={testimonials[testimonialIndex].name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 relative min-h-64 md:min-h-56 flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-0 opacity-10">
                  <Quote className="w-16 h-16 text-orange-500" />
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl leading-relaxed text-foreground italic mb-8 relative z-10">
                  "{testimonials[testimonialIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border/30 pt-6 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {testimonials[testimonialIndex].name}
                      </h4>
                      <p className="text-sm text-foreground/70 mb-2">
                        {testimonials[testimonialIndex].branch}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full">
                        <Briefcase className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-500">
                          {testimonials[testimonialIndex].company}
                        </span>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                      <button
                        onClick={prevTestimonial}
                        onMouseEnter={() => setAutoScroll(false)}
                        onMouseLeave={() => setAutoScroll(true)}
                        className="w-10 h-10 rounded-full bg-orange-500/10 hover:bg-orange-500/20 flex items-center justify-center text-orange-500 transition-all duration-300"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        onMouseEnter={() => setAutoScroll(false)}
                        onMouseLeave={() => setAutoScroll(true)}
                        className="w-10 h-10 rounded-full bg-orange-500/10 hover:bg-orange-500/20 flex items-center justify-center text-orange-500 transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === testimonialIndex
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-border hover:bg-orange-500/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Esteemed Recruiters Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Esteemed Recruiters
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Leading organizations across industries actively recruiting our talented graduates
            </p>
          </div>

          <div className="space-y-6">
            {recruiterData.map((school) => (
              <div key={school.key} className="border border-border/50 rounded-2xl overflow-hidden bg-card/30">
                <button
                  onClick={() => toggleRecruiter(school.key)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-orange-500/5 transition-colors text-left"
                >
                  <h3 className="text-base font-bold text-foreground uppercase tracking-wide">{school.name}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      expandedRecruiters[school.key] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedRecruiters[school.key] && (
                  <div className="border-t border-border/30 px-6 py-8 bg-gradient-to-b from-orange-500/5 to-transparent">
                    {school.subCategories ? (
                      <div className="space-y-8">
                        {school.subCategories.map((subCategory, subIdx) => (
                          <div key={subIdx}>
                            <h4 className="text-sm font-semibold text-foreground mb-4">{subCategory.name}</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                              {subCategory.recruiters.map((recruiter, recruiterIdx) => (
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
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
                    )}
                  </div>
                )}
              </div>
            ))}
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
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                World-Class Facilities
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto mb-12">
              Explore our state-of-the-art infrastructure supporting placements and training
            </p>

            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl transition-all duration-300"
              >
                Take a Virtual Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
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
