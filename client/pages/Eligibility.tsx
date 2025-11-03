import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Globe,
  GraduationCap,
  IndianRupee,
  Layers,
  Mail,
  MapPin,
  PenTool,
  PhoneCall,
  ScrollText,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeeDetail = {
  label: string;
  amount: string;
};

type Program = {
  name: string;
  level: "UG" | "PG" | "Professional";
  eligibility: string;
  fees: FeeDetail[];
  specializations?: string[];
  notes?: string[];
  scholarships?: string;
};

type Category = {
  title: string;
  description?: string;
  programs: Program[];
  footnotes?: string[];
};

type School = {
  name: string;
  tagline: string;
  icon: LucideIcon;
  categories: Category[];
  disclaimers?: string[];
};

type BrochureResource = {
  title: string;
  href: string;
};

type ContactLocation = {
  name: string;
  address: string;
  email: string;
  phones: string[];
};

type HelplineGroup = {
  title: string;
  entries: string[];
};

type RegionalContact = {
  label: string;
  phone: string;
};

const schools: School[] = [
  {
    name: "School of Engineering",
    tagline:
      "Yearly fee structure 2025-26 with DSAT, Comed-K, Uni-GAUGE, CET, and direct admission pathways.",
    icon: Layers,
    categories: [
      {
        title: "Undergraduate Programs",
        description:
          "All B.Tech applicants must qualify with Physics and Mathematics alongside a science or technical elective, achieving 45% aggregate (40% for SC/ST & OBC).",
        programs: [
          {
            name: "B.Tech - Computer Science & Engineering",
            level: "UG",
            specializations: [
              "Computer Science & Engineering",
              "Computer Science & Engineering (Data Sciences)",
              "Computer Science & Engineering (Cyber Security)",
              "Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
              "Computer Science & Engineering (AI & Data Science)",
              "Computer Science and Medical Engineering",
              "AI & Robotics",
              "Computer Science & Technology",
            ],
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects, securing at least 45% marks (40% for SC/ST & OBC).",
            fees: [
              { label: "Tuition Fee (Annual)", amount: "₹3,92,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹4,72,000" },
            ],
            notes: [
              "Applicable for DSAT, Comed-K (Code: E182), Uni-GAUGE (Code: UNI-010), CET (Code: DSU-E240), PGCET lateral entry, and direct counseling.",
              "Merit-based scholarships and DSAT performance incentives are available for top-ranking applicants.",
            ],
          },
          {
            name: "B.Tech - Core Engineering Streams",
            level: "UG",
            specializations: [
              "Electronics & Communication Engineering",
              "Mechanical Engineering",
              "Aerospace Engineering",
            ],
            eligibility:
              "Pass in PUC / 10+2 with Physics, Mathematics, and one science / technical elective with a minimum of 45% aggregate (40% for SC/ST & OBC).",
            fees: [
              { label: "Tuition Fee (Annual)", amount: "₹3,02,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹3,92,000" },
            ],
            notes: [
              "Admissions supported through DSAT merit, Comed-K counseling, Uni-GAUGE, CET seat allotments, and institutional quota.",
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2025-26 academic year and will align with any subsequent government revisions.",
        ],
      },
      {
        title: "Postgraduate Programs",
        description:
          "Minimum of 50% in the qualifying bachelor’s degree (45% for SC/ST & OBC) with eligible backgrounds as specified.",
        programs: [
          {
            name: "M.Tech - Computer Science & Engineering",
            level: "PG",
            eligibility:
              "B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics, or related circuit branches with minimum 50% marks (45% for SC/ST & OBC).",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,62,000" },
            ],
            notes: [
              "PGCET Code: T970. Scholarships considered for GATE-qualified and high-scoring DSAT graduates.",
            ],
          },
          {
            name: "M.Tech - Embedded System",
            level: "PG",
            eligibility:
              "B.Tech in electronics, computer science, instrumentation, telecommunications, electrical, or allied circuit branches with 50% aggregate (45% for SC/ST & OBC).",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,62,000" },
            ],
            notes: [
              "Includes advanced labs for FPGA, IoT, and real-time system design.",
            ],
          },
          {
            name: "M.Tech - Design Engineering",
            level: "PG",
            eligibility:
              "B.Tech in Mechanical, Industrial Engineering & Management, Aerospace, Aeronautical, Automobile, or related disciplines with minimum 50% marks (45% for SC/ST & OBC).",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,62,000" },
            ],
            notes: [
              "Focus areas include CAD/CAE, design thinking, and advanced manufacturing.",
            ],
          },
        ],
        footnotes: [
          "PGCET and DSAT merit lists determine counseling order and scholarship eligibility.",
        ],
      },
    ],
    disclaimers: [
      "Any variation in the fee structure due to revision by the Government will accordingly be applicable.",
    ],
  },
  {
    name: "School of Computer Applications",
    tagline:
      "Undergraduate and postgraduate programs in computing, analytics, and data science.",
    icon: ClipboardList,
    categories: [
      {
        title: "Undergraduate Programs",
        description:
          "Strong foundation in programming, analytics, and applied computing with industry projects.",
        programs: [
          {
            name: "BCA - Bachelor of Computer Applications",
            level: "UG",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent examination with a minimum of 45% aggregate in any stream.",
            fees: [
              { label: "Term I", amount: "₹1,04,500" },
              { label: "Term II", amount: "₹92,500" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,97,000" },
            ],
            notes: [
              "Curriculum covers full-stack development, cloud-native applications, and internships with DSU innovation labs.",
            ],
          },
          {
            name: "B.Sc in Data Science",
            level: "UG",
            eligibility:
              "10+2 or equivalent qualification with Mathematics/Statistics preferred; minimum 45% aggregate.",
            fees: [
              { label: "Term I", amount: "₹82,000" },
              { label: "Term II", amount: "₹70,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,52,000" },
            ],
            notes: [
              "Includes projects in machine learning, business analytics, and visualization with industry mentorship.",
            ],
          },
        ],
      },
      {
        title: "Postgraduate Programs",
        description:
          "Advanced computing degrees aligned with industry certifications and research opportunities.",
        programs: [
          {
            name: "MCA - Master of Computer Applications",
            level: "PG",
            eligibility:
              "Bachelor’s degree in BCA / B.Sc (CS or IT) or any degree with Mathematics at 10+2 or graduation level. Non-CS graduates complete mandatory bridge courses. Minimum 50% aggregate (45% for SC/ST & OBC).",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹3,32,000" },
            ],
            notes: [
              "Curriculum includes advanced software engineering, cloud deployment, and capstone with industry partners.",
            ],
          },
          {
            name: "M.Sc in Data Science",
            level: "PG",
            eligibility:
              "B.Sc in Life Science or related fields such as Biotechnology, Microbiology, Genetics, Zoology, Botany, Biochemistry, Bioinformatics, Statistics, or Computer Science with minimum 50% aggregate.",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,32,000" },
            ],
            notes: [
              "Focus on AI-driven analytics, big data pipelines, and research-led problem solving.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "School of Law",
    tagline:
      "Integrated legal programs with DSAT and CLAT pathways, curated clinics, and moot court training.",
    icon: FileText,
    categories: [
      {
        title: "Undergraduate Programs",
        programs: [
          {
            name: "B.A. LL.B (Hons.)",
            level: "UG",
            eligibility:
              "10+2 or equivalent examination with minimum 50% aggregate (45% for SC/ST & OBC). DSU considers scores from CLAT, DSAT, and other national law entrance tests.",
            fees: [
              { label: "Tuition Fee (Annual)", amount: "₹1,92,000" },
              { label: "Other Fees & Library Deposit", amount: "₹50,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹2,42,000" },
            ],
            scholarships:
              "Scholarships are available for top performers in CLAT, DSAT, and academic excellence.",
          },
          {
            name: "B.B.A. LL.B (Hons.)",
            level: "UG",
            eligibility:
              "10+2 or equivalent with minimum 50% aggregate (45% for SC/ST & OBC). Applicants may apply through CLAT, DSAT, or DSU direct admissions.",
            fees: [
              { label: "Tuition Fee (Annual)", amount: "₹1,92,000" },
              { label: "Other Fees & Library Deposit", amount: "₹50,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹2,42,000" },
            ],
            scholarships:
              "Merit scholarships offered based on admission test performance and academic record.",
          },
          {
            name: "LL.B (3-Year)",
            level: "UG",
            eligibility:
              "Graduation or equivalent degree in any discipline with minimum 50% aggregate (45% for SC/ST & OBC).",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,67,000" },
            ],
          },
        ],
      },
      {
        title: "Postgraduate Program",
        programs: [
          {
            name: "LL.M (1 Year)",
            level: "PG",
            eligibility:
              "Bachelor’s degree in Law (LL.B or equivalent) with at least 50% marks (40% for SC/ST). Valid scores from CLAT, AILET, or DSU entrance exams.",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,35,000" },
            ],
            notes: [
              "Tracks include Corporate & Commercial Law, Intellectual Property Rights, and Human Rights Law.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "School of Basic & Applied Sciences",
    tagline:
      "Life science programs blending lab research, internships, and interdisciplinary electives.",
    icon: Stethoscope,
    categories: [
      {
        title: "Undergraduate Programs",
        programs: [
          {
            name: "B.Sc - Life Science Combinations",
            level: "UG",
            specializations: [
              "Biotechnology, Biochemistry, and Genetics",
              "Biotechnology, Chemistry, and Microbiology",
              "Microbiology, Genetics, and Biochemistry",
            ],
            eligibility:
              "10+2 with Physics, Chemistry, and English plus Biology, Biotechnology, Mathematics, or related subjects; minimum 45% aggregate (40% for SC/ST & OBC).",
            fees: [
              { label: "Term I", amount: "₹97,000" },
              { label: "Term II", amount: "₹75,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,72,000" },
            ],
            notes: [
              "Industry internships with biotech labs and interdisciplinary research projects in genomics, proteomics, and bioinformatics.",
            ],
          },
        ],
      },
      {
        title: "Postgraduate Programs",
        programs: [
          {
            name: "M.Sc Biochemistry",
            level: "PG",
            eligibility:
              "B.Sc in Biochemistry or allied life science disciplines (MBBS, BDS, Nursing, Pharmaceutical Sciences, etc.) with minimum 50% aggregate.",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,82,000" },
            ],
          },
          {
            name: "M.Sc Biotechnology",
            level: "PG",
            eligibility:
              "B.Sc with life science subjects such as Biotechnology, Microbiology, Genetics, Biochemistry, or related programs with minimum 50% aggregate.",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,82,000" },
            ],
          },
          {
            name: "M.Sc Microbiology",
            level: "PG",
            eligibility:
              "B.Sc in science with life science subjects covering Microbiology, Biotechnology, Biochemistry, Zoology, or related specializations.",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,82,000" },
            ],
          },
          {
            name: "M.Sc Human Genetics",
            level: "PG",
            eligibility:
              "B.Sc with relevant life science background, including Genetics, Biotechnology, Biochemistry, Microbiology, or allied programs.",
            fees: [
              { label: "Total (Incl. Library Deposit)", amount: "₹1,82,000" },
            ],
          },
        ],
        footnotes: [
          "Advanced instrumentation labs support research in molecular biology, genomic diagnostics, and translational sciences.",
        ],
      },
    ],
  },
  {
    name: "School of Commerce & Management",
    tagline:
      "Industry-driven commerce, business, and management programs with professional certifications.",
    icon: Users,
    categories: [
      {
        title: "Undergraduate Programs",
        programs: [
          {
            name: "BBA",
            level: "UG",
            specializations: [
              "Regular",
              "Banking, Financial Services & Insurance (BFSI)",
              "Aviation Electives",
            ],
            eligibility:
              "10+2 or equivalent examination with minimum 50% aggregate (45% for SC/ST & OBC).",
            fees: [{ label: "Program Total (Annual)", amount: "₹2,02,000" }],
            notes: [
              "Includes global immersion modules, analytics certification, and incubation support via DSU Innovation campus.",
            ],
          },
          {
            name: "B.Com",
            level: "UG",
            specializations: [
              "Regular",
              "ACCA Integrated",
              "CMA Integrated",
              "With CA Coaching",
            ],
            eligibility:
              "Pre-University course with Business Studies and Accountancy; minimum 50% aggregate (45% for SC/ST & OBC).",
            fees: [
              { label: "B.Com Regular (Annual Total)", amount: "₹1,47,000" },
              {
                label: "B.Com ACCA / CMA / CA Coaching (Annual Total)",
                amount: "₹1,77,000",
              },
            ],
            notes: [
              "Professional coaching for ACCA, CMA, and CA integrated within the timetable.",
            ],
          },
        ],
      },
      {
        title: "Postgraduate Program",
        programs: [
          {
            name: "MBA",
            level: "PG",
            eligibility:
              "Bachelor’s degree of three years in any stream with minimum 50% aggregate (45% for SC/ST & OBC). Entrance scores from DSAT, KMAT, CAT, MAT, or equivalent are accepted.",
            fees: [
              { label: "Year I Tuition Fee", amount: "₹1,72,000" },
              { label: "Year I Other Fees", amount: "₹1,60,000" },
              { label: "Annual Total", amount: "₹3,32,000" },
              { label: "Program Total (Two Years)", amount: "₹6,02,000" },
            ],
            notes: [
              "Dual specialization options covering Business Analytics, Finance, Marketing, HR, and Operations.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "School of Health Sciences",
    tagline:
      "Allied health, pharmaceutical, nursing, public health, and physiotherapy programs with clinical immersion.",
    icon: Stethoscope,
    categories: [
      {
        title: "College of Allied Health Sciences",
        description:
          "Applicant must have English as a principal subject with Physics, Chemistry, Biology, or allied subjects at 10+2 level.",
        programs: [
          {
            name: "B.Sc Allied Health Programs",
            level: "UG",
            specializations: [
              "Radiology and Imaging Technology",
              "Medical Laboratory Technology",
              "Anesthesia and Operation Theatre Technology",
              "Emergency & Trauma Care Technology",
              "Cardiac Care Technology",
            ],
            eligibility:
              "Two-year Pre-University or equivalent with Physics, Chemistry, Biology, and English; alternative pathways include Pre-Degree with the same combination.",
            fees: [{ label: "Program Total (Annual)", amount: "₹1,42,000" }],
            notes: [
              "Clinical postings at DSU teaching hospitals with simulation lab training.",
            ],
          },
          {
            name: "Master of Public Health (MPH)",
            level: "PG",
            eligibility:
              "MBBS, BDS, BAMS, B.Sc Nursing, BPT, B.Pharm, or relevant health science degree with minimum 50% aggregate (40% for SC/ST).",
            fees: [{ label: "Program Total (Annual)", amount: "₹1,42,000" }],
            notes: [
              "Focus areas include epidemiology, health policy, and data-driven community health projects.",
            ],
          },
        ],
      },
      {
        title: "College of Pharmaceutical Sciences",
        programs: [
          {
            name: "B.Pharm",
            level: "UG",
            eligibility:
              "10+2 with Physics, Chemistry, and English plus Mathematics/Biology/Biotechnology/Computer Science. Lateral entry available for Diploma in Pharmacy graduates from PCI-recognized institutions.",
            fees: [
              { label: "CET / DSAT Annual Total", amount: "₹2,52,000" },
              { label: "Other Admissions Annual Total", amount: "₹2,82,000" },
            ],
            notes: [
              "PCI-approved program with industrial training and research projects.",
            ],
          },
          {
            name: "Pharm.D",
            level: "Professional",
            eligibility:
              "10+2 with Physics, Chemistry, Biology or Mathematics and English, or a Diploma in Pharmacy from a PCI-recognized institute.",
            fees: [{ label: "Program Total (Annual)", amount: "₹4,17,000" }],
            notes: [
              "Six-year professional program with clinical rotations and hospital internships.",
            ],
          },
        ],
      },
      {
        title: "College of Nursing Sciences",
        programs: [
          {
            name: "B.Sc Nursing",
            level: "UG",
            eligibility:
              "10+2 with Physics, Chemistry, Biology, and English; minimum 45% aggregate (40% for SC/ST).",
            fees: [{ label: "Program Total (Annual)", amount: "₹1,42,000" }],
          },
          {
            name: "Post Basic B.Sc Nursing",
            level: "UG",
            eligibility:
              "General Nursing and Midwifery (GNM) with minimum 50% aggregate and registered nurse status with any State Nurses Registration Council.",
            fees: [{ label: "Program Total (Annual)", amount: "₹92,000" }],
          },
          {
            name: "M.Sc Nursing",
            level: "PG",
            eligibility:
              "B.Sc Nursing / Post Basic B.Sc Nursing with at least 55% aggregate and one-year experience preferred; registered with State Nursing Council.",
            fees: [{ label: "Program Total (Annual)", amount: "₹1,42,000" }],
          },
        ],
      },
      {
        title: "College of Physiotherapy",
        programs: [
          {
            name: "Bachelor of Physiotherapy (BPT)",
            level: "UG",
            eligibility:
              "10+2 with Physics, Chemistry, Biology, and English securing minimum 40% aggregate (passing marks for SC/ST).",
            fees: [{ label: "Program Total (Annual)", amount: "₹1,97,000" }],
          },
          {
            name: "Master of Physiotherapy (MPT)",
            level: "PG",
            eligibility:
              "BPT degree with minimum 50% aggregate and completion of internship or internship in progress.",
            fees: [{ label: "Program Total (Annual)", amount: "₹2,52,000" }],
          },
        ],
      },
    ],
    disclaimers: [
      "Clinical postings are scheduled in DSU hospitals; medical fitness compliance is mandatory.",
      "Any changes in regulatory guidelines from statutory councils will be immediately adopted.",
    ],
  },
  {
    name: "School of Arts, Design & Humanities",
    tagline:
      "Creative programs combining storytelling, digital media, and field journalism.",
    icon: BookOpen,
    categories: [
      {
        title: "Undergraduate Program",
        programs: [
          {
            name: "B.A. Journalism and Mass Communication",
            level: "UG",
            eligibility:
              "10+2 or equivalent examination with minimum 45% aggregate; preference for Arts and Humanities backgrounds.",
            fees: [
              { label: "Term I", amount: "₹77,000" },
              { label: "Term II", amount: "₹65,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,42,000" },
            ],
            notes: [
              "Includes newsroom simulations, digital production labs, and internships with media houses.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "School of Design & Digital Trans-Media",
    tagline:
      "Studio-based design program with immersive projects in product, UX, and trans-media storytelling.",
    icon: PenTool,
    categories: [
      {
        title: "Undergraduate Program",
        programs: [
          {
            name: "B.Design",
            level: "UG",
            eligibility:
              "50% aggregate in Class XII from Science, Commerce, or Arts streams. Portfolio review and design aptitude assessment are part of the selection process.",
            fees: [
              { label: "Tuition Fee (Annual)", amount: "₹2,07,000" },
              { label: "Other Fees & Studio Resources", amount: "₹45,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹2,52,000" },
            ],
            notes: [
              "Access to design studios, fabrication labs, and collaborative projects with industry partners.",
            ],
          },
        ],
      },
    ],
  },
];

const brochureResources: BrochureResource[] = [
  {
    title: "City Innovation Campus Programs 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/DSU_City_innovation_Campus_Programs_2025.pdf",
  },
  {
    title: "Main Campus Programs 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf",
  },
  {
    title: "School of Engineering Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/SoE_Brochure_2025.pdf",
  },
  {
    title: "B.Sc Data Science Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BSC_DS_2025.pdf",
  },
  {
    title: "M.Sc Data Science Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/MSC_DS_2025.pdf",
  },
  {
    title: "Mechanical Engineering Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/mechanical_engg_2025.pdf",
  },
  {
    title: "Aerospace Engineering Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/aerospace_engg_2025.pdf",
  },
  {
    title: "Electronics & Communication Engineering Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/ece_2025.pdf",
  },
  {
    title: "M.Tech Programs Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/mtech_2025.pdf",
  },
  {
    title: "BCA Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BCA_brochure_2025.pdf",
  },
  {
    title: "MCA Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/MCA_brochure_2025.pdf",
  },
  {
    title: "B.Sc & M.Sc Basic Science Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BSc_MSc_Basic_Science_brochure_2025.pdf",
  },
  {
    title: "M.Pharm Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/mpharma_2025.pdf",
  },
  {
    title: "B.Pharm Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/bpharma_2025.pdf",
  },
  {
    title: "Pharm.D Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/pharm_d_2025.pdf",
  },
  {
    title: "MPT Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/mpt_2025.pdf",
  },
  {
    title: "BPT Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/bpt_2025.pdf",
  },
  {
    title: "B.Sc & M.Sc Nursing Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/bsc_msc_nursing_2025.pdf",
  },
  {
    title: "Allied Health Sciences Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/allied_health_sciences_2025.pdf",
  },
  {
    title: "School of Law Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/SoL_Brochure.pdf",
  },
  {
    title: "MBA Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/MBA_brochure_2025.pdf",
  },
  {
    title: "BBA Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BBA_Brochure_2025.pdf",
  },
  {
    title: "B.Com Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BCom_Brochure.pdf",
  },
  {
    title: "Journalism & Mass Communication Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BA_JMC_brochure_2025.pdf",
  },
  {
    title: "B.Design Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BDesign_brochure.pdf",
  },
  {
    title: "LL.M Brochure",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/LLM_brochure_2025.pdf",
  },
];

const contactLocations: ContactLocation[] = [
  {
    name: "DSU Main Campus",
    address:
      "Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South District – 562 112",
    email: "admissions@dsu.edu.in",
    phones: ["080 2861 1000"],
  },
  {
    name: "DSU City Innovation Campus",
    address:
      "Administrative & Main Admission Office, Kudlu Gate, Hosur Road, Bengaluru – 560 114",
    email: "dsat@dsu.edu.in",
    phones: ["080 4646 1800", "080 4909 2800"],
  },
  {
    name: "City Admissions Office",
    address:
      "Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru – 560 111",
    email: "enquiry@dsu.edu.in",
    phones: ["+91 77609 64277", "+91 82963 16737", "+91 63668 85507"],
  },
];

const helplineGroups: HelplineGroup[] = [
  {
    title: "Admissions Helpline",
    entries: [
      "080 4646 1800",
      "080 4909 2800",
      "+91 77609 64277",
      "+91 82963 16737",
      "+91 63668 85507",
    ],
  },
  {
    title: "Registrar Office",
    entries: ["080 4909 2910", "080 4909 2911"],
  },
  {
    title: "Dean – Engineering",
    entries: ["080 4909 2986", "080 4909 2932", "080 4909 2933"],
  },
  {
    title: "Dean – MBA",
    entries: ["080 4909 2931"],
  },
  {
    title: "EMBA Enquiries",
    entries: ["080 4909 2930"],
  },
  {
    title: "Research Cell",
    entries: ["080 4909 2912"],
  },
];

const regionalContacts: RegionalContact[] = [
  { label: "East Region", phone: "82402 16553" },
  { label: "West Region", phone: "97414 88001" },
  { label: "North Region", phone: "74889 83636" },
  { label: "South Region", phone: "99628 35358" },
  { label: "International Admissions", phone: "+91 96060 22152" },
  { label: "International Support", phone: "+91 96060 22150" },
  { label: "International Support (Alternate)", phone: "+91 96060 22149" },
];

const importantNotes = [
  "Admissions are subject to eligibility verification and submission of original documents during counseling.",
  "Fee payments can be made online through the DSU admissions portal or at the admissions office counters.",
  "Library deposits are refundable as per university policy on completion of the program.",
  "All statutory reservations and relaxation norms from Government of Karnataka are applied.",
  "International applicants must furnish equivalence certificates and passport/visa documentation before enrollment.",
];

export default function Eligibility() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <SchoolsSection />
      <BrochureSection />
      <ContactSection />
      <NotesSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-background py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-12 -left-16 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
          <BadgeCheck className="h-4 w-4" />
          Programs, Eligibility &amp; Fees 2025-26
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          Plan Your Dayananda Sagar University Journey
        </h1>
        <p className="mt-6 text-lg text-white md:text-xl">
          Explore program-wise eligibility criteria, entrance codes, and
          comprehensive fee structures across every DSU school. Choose the path
          that aligns with your academic goals and career ambitions.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:shadow-xl"
            asChild
          >
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-2 border-orange-500 px-8 py-6 text-lg font-semibold text-orange-500"
            asChild
          >
            <a href="/admissions">
              Visit Admissions Overview
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          <HeroHighlight
            icon={GraduationCap}
            title="Multiple Admission Channels"
            description="DSAT | Comed-K E182 | Uni-GAUGE UNI-010 | CET DSU-E240 | PGCET T970 (M.Tech) | B365MB (MBA) | C520MC (MCA)"
          />
          <HeroHighlight
            icon={IndianRupee}
            title="Transparent Fee Structure"
            description="Annual tuition, other fees, and refundable deposits clearly listed for every program."
          />
          <HeroHighlight
            icon={ClipboardList}
            title="Eligibility at a Glance"
            description="Degree-specific subject prerequisites and percentage benchmarks for UG, PG, and professional courses."
          />
        </div>
      </div>
    </section>
  );
}

type HeroHighlightProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function HeroHighlight({ icon: Icon, title, description }: HeroHighlightProps) {
  return (
    <div className="rounded-2xl border border-orange-500/20 bg-background/80 p-6 text-left shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function SchoolsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Program Directory by School
          </h2>
          <p className="mt-3 text-lg text-white">
            Expand each school to review eligibility checkpoints,
            specializations, yearly fees, and counseling codes. All values
            include the latest library deposit and ancillary components.
          </p>
        </div>
        <Accordion type="multiple" className="space-y-6">
          {schools.map((school) => (
            <AccordionItem
              key={school.name}
              value={school.name}
              className="overflow-hidden rounded-3xl border border-orange-500/20 bg-card/70 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-semibold text-foreground">
                <div className="flex w-full items-center gap-3 text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-500">
                    <school.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <span>{school.name}</span>
                      <Badge className="bg-orange-500/15 text-orange-500">
                        2025-26
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm font-normal text-white">
                      {school.tagline}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-10">
                  {school.categories.map((category) => (
                    <div
                      key={`${school.name}-${category.title}`}
                      className="space-y-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Badge className="rounded-full bg-orange-500/15 px-4 py-2 text-orange-500">
                            {category.title}
                          </Badge>
                          {category.description && (
                            <p className="text-sm text-white">
                              {category.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        {category.programs.map((program) => (
                          <ProgramCard
                            key={`${category.title}-${program.name}`}
                            program={program}
                          />
                        ))}
                      </div>
                      {category.footnotes && (
                        <ul className="list-disc space-y-2 pl-5 text-xs text-white">
                          {category.footnotes.map((note) => (
                            <li key={`${category.title}-note-${note}`}>
                              {note}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {school.disclaimers && (
                    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm text-orange-500">
                      {school.disclaimers.map((disclaimer) => (
                        <p
                          key={`${school.name}-disclaimer-${disclaimer}`}
                          className="leading-relaxed"
                        >
                          {disclaimer}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

type ProgramCardProps = {
  program: Program;
};

function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="h-full border border-border/60 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-semibold text-foreground">
              {program.name}
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-white">
              Level:{" "}
              {program.level === "UG"
                ? "Undergraduate"
                : program.level === "PG"
                  ? "Postgraduate"
                  : "Professional"}
            </CardDescription>
          </div>
          <Badge className="bg-orange-500/15 text-orange-500">
            <BookOpen className="mr-1 h-3.5 w-3.5" />
            {program.level}
          </Badge>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white">
          <strong className="font-semibold text-foreground">
            Eligibility:
          </strong>{" "}
          {program.eligibility}
        </p>
        {program.specializations && (
          <div className="mt-3">
            <p className="text-xs uppercase tracking-wide text-orange-500">
              Includes Specializations
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white">
              {program.specializations.map((item) => (
                <li key={`${program.name}-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-xl border border-orange-500/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Fee Component</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {program.fees.map((fee) => (
                <TableRow key={`${program.name}-${fee.label}`}>
                  <TableCell className="font-medium text-foreground">
                    {fee.label}
                  </TableCell>
                  <TableCell className="text-orange-500">
                    {fee.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {program.scholarships && (
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-3 text-sm text-orange-500">
            <CheckCircle2 className="mr-2 inline h-4 w-4" />
            {program.scholarships}
          </div>
        )}
        {program.notes && (
          <ul className="list-disc space-y-2 pl-5 text-sm text-white">
            {program.notes.map((note) => (
              <li key={`${program.name}-note-${note}`}>{note}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function BrochureSection() {
  return (
    <section className="bg-gradient-to-br from-orange-500/5 via-red-500/5 to-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Download Program Brochures
          </h2>
          <p className="mt-3 text-lg text-white">
            Access school-specific brochures detailing curriculum, laboratories,
            internship opportunities, and placement tracks across UG, PG, and
            professional programs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brochureResources.map((resource) => (
            <Card
              key={resource.title}
              className="border border-border/60 bg-card/70 backdrop-blur-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-sm text-white">
                  PDF download • Updated for academic year 2025-26
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="secondary"
                  className="w-full justify-center rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white"
                  asChild
                >
                  <a href={resource.href} target="_blank" rel="noreferrer">
                    Download PDF
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Help Choosing?
          </h2>
          <p className="mt-3 text-lg text-white">
            Connect with DSU counselors for personalized guidance on eligibility
            verification, fee planning, and scholarship opportunities.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {contactLocations.map((location) => (
            <Card
              key={location.name}
              className="border border-border/60 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {location.name}
                  </CardTitle>
                </div>
                <CardDescription className="mt-4 text-sm leading-relaxed text-white">
                  {location.address}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-white">
                <div>
                  <p className="font-semibold text-foreground">Helpline</p>
                  <ul className="mt-2 space-y-1">
                    {location.phones.map((phone) => (
                      <li key={`${location.name}-${phone}`}>{phone}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${location.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-orange-500 hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {location.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-lg font-semibold text-foreground">
                  Helpline Directory
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-sm text-white">
                Reach specialized teams for program guidance, counseling
                schedules, and document verification support.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {helplineGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-orange-500/20 bg-background/70 p-4 text-sm"
                >
                  <p className="font-semibold text-foreground">{group.title}</p>
                  <ul className="mt-2 space-y-1 text-xs text-white">
                    {group.entries.map((entry) => (
                      <li key={`${group.title}-${entry}`}>{entry}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-lg font-semibold text-foreground">
                  Regional &amp; International Outreach
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-sm text-white">
                Dedicated counselors are available across regions and for NRI /
                foreign applicants.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {regionalContacts.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-2xl border border-orange-500/20 bg-background/70 p-4 text-sm"
                >
                  <p className="font-semibold text-foreground">
                    {contact.label}
                  </p>
                  <p className="mt-1 text-white">{contact.phone}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm text-orange-500">
                For scholarship or sponsorship collaborations, email
                admissions@dsu.edu.in with program and applicant details.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function NotesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/15 via-red-500/15 to-orange-500/15 p-10 text-center shadow-lg shadow-orange-500/10">
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-500">
          <ScrollText className="h-4 w-4" />
          Important Enrollment Notes
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Prepare Your Application Checklist
        </h2>
        <p className="mt-4 text-lg text-white">
          Review the following guidelines before submitting your application and
          fee payments to ensure a smooth admission experience.
        </p>
        <div className="mt-6 space-y-3 text-left">
          {importantNotes.map((note) => (
            <div
              key={note}
              className="flex items-start gap-3 text-sm text-white"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
              <span>{note}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 text-lg font-semibold text-white hover:from-red-500 hover:to-orange-500"
            asChild
          >
            <a href="mailto:admissions@dsu.edu.in?subject=Eligibility%20and%20Fee%20Clarification">
              Write to Admissions Team
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-2 border-orange-500 px-8 py-6 text-lg font-semibold text-orange-500"
            asChild
          >
            <a
              href="https://www.dsu.edu.in/admission-lastdates"
              target="_blank"
              rel="noreferrer"
            >
              View Admission Deadlines
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
