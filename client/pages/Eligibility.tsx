import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  duration?: string;
  eligibility: string;
  eligibilityPoints?: string[];
  fees: FeeDetail[];
  specializations?: string[];
  notes?: string[];
  scholarships?: string;
  documentsRequired?: string[];
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
      "Yearly fee structure 2026-27 with CET, JEE Mains / Uniguage / Comed-K ranking-based, and direct admission pathways.",
    icon: Layers,
    categories: [
      {
        title: "Undergraduate Programs (4 Years Duration)",
        description:
          "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
        programs: [
          {
            name: "B.Tech Computer Science & Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,12,000",
              },
              { label: "Others - Total Fee", amount: "₹4,92,000" },
            ],
            documentsRequired: [
              "10+2 original mark sheets and pass certificate",
              "Physics, Chemistry, and Mathematics mark cards",
              "CET / JEE Mains / Uniguage / Comed-K admit card and score sheet",
              "School leaving certificate",
              "Category certificate (if applicable)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Recent passport-size photographs (4)",
            ],
          },
          {
            name: "B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,35,000",
              },
              { label: "Others - Total Fee", amount: "₹5,25,000" },
            ],
            documentsRequired: [
              "10+2 original mark sheets and pass certificate",
              "Physics, Chemistry, and Mathematics mark cards",
              "CET / JEE Mains / Uniguage / Comed-K admit card and score sheet",
              "School leaving certificate",
              "Category certificate (if applicable)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Recent passport-size photographs (4)",
            ],
          },
          {
            name: "B.Tech Computer Science & Engineering (Data Science)",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,12,000",
              },
              { label: "Others - Total Fee", amount: "₹4,92,000" },
            ],
            documentsRequired: [
              "10+2 original mark sheets and pass certificate",
              "Physics, Chemistry, and Mathematics mark cards",
              "CET / JEE Mains / Uniguage / Comed-K admit card and score sheet",
              "School leaving certificate",
              "Category certificate (if applicable)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Recent passport-size photographs (4)",
            ],
          },
          {
            name: "B.Tech Computer Science & Engineering (Cyber Security)",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,12,000",
              },
              { label: "Others - Total Fee", amount: "₹4,92,000" },
            ],
            documentsRequired: [
              "10+2 original mark sheets and pass certificate",
              "Physics, Chemistry, and Mathematics mark cards",
              "CET / JEE Mains / Uniguage / Comed-K admit card and score sheet",
              "School leaving certificate",
              "Category certificate (if applicable)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Recent passport-size photographs (4)",
            ],
          },
          {
            name: "B.Tech Computer Science & Engineering (Artificial Intelligence & Data Science)",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,35,000",
              },
              { label: "Others - Total Fee", amount: "₹5,25,000" },
            ],
          },
          {
            name: "B.Tech Computer Science & Medical Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,12,000",
              },
              { label: "Others - Total Fee", amount: "₹4,92,000" },
            ],
          },
          {
            name: "B.Tech Computer Science & Engineering (Artificial Intelligence)",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,35,000",
              },
              { label: "Others - Total Fee", amount: "₹5,25,000" },
            ],
          },
          {
            name: "B.Tech Computer Science & Technology",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,12,000",
              },
              { label: "Others - Total Fee", amount: "₹4,92,000" },
            ],
          },
          {
            name: "B.Tech AI & Robotics",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹4,12,000",
              },
              { label: "Others - Total Fee", amount: "₹4,92,000" },
            ],
          },
          {
            name: "B.Tech Electronics & Communication Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹3,22,000",
              },
              { label: "Others - Total Fee", amount: "₹4,12,000" },
            ],
          },
          {
            name: "B.Tech Mechanical Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹3,22,000",
              },
              { label: "Others - Total Fee", amount: "₹4,12,000" },
            ],
          },
          {
            name: "B.Tech Aerospace Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: [
              { label: "CET - Total Fee", amount: "Not Available" },
              {
                label: "Ranking Based (JEE Mains/Uniguage/Comed-K)",
                amount: "₹3,22,000",
              },
              { label: "Others - Total Fee", amount: "₹4,12,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
          "CET pathway currently not available for Engineering programs.",
        ],
      },
      {
        title: "Postgraduate Programs (2 Years Duration)",
        description:
          "Minimum of 50% in the qualifying bachelor's degree (45% for SC/ST & OBC) with eligible backgrounds as specified.",
        programs: [
          {
            name: "M.Tech Computer Science & Engineering",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹2,52,000" },
            ],
            notes: [
              "Upon successful completion of the M.Tech programs (CSE/AI & ML/AI & Robotics/AI/AI & DS), candidates are offered a job with a starting salary of INR 65,000 per month for a year which will be extended after evaluating performance deliverables as per the Organization.",
            ],
          },
          {
            name: "M.Tech Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹2,52,000" },
            ],
            notes: [
              "Upon successful completion of the M.Tech programs (CSE/AI & ML/AI & Robotics/AI/AI & DS), candidates are offered a job with a starting salary of INR 65,000 per month for a year which will be extended after evaluating performance deliverables as per the Organization.",
            ],
          },
          {
            name: "M.Tech Artificial Intelligence and Data Science",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹2,52,000" },
            ],
            notes: [
              "Upon successful completion of the M.Tech programs (CSE/AI & ML/AI & Robotics/AI/AI & DS), candidates are offered a job with a starting salary of INR 65,000 per month for a year which will be extended after evaluating performance deliverables as per the Organization.",
            ],
          },
          {
            name: "M.Tech Artificial Intelligence",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹2,52,000" },
            ],
            notes: [
              "Upon successful completion of the M.Tech programs (CSE/AI & ML/AI & Robotics/AI/AI & DS), candidates are offered a job with a starting salary of INR 65,000 per month for a year which will be extended after evaluating performance deliverables as per the Organization.",
            ],
          },
          {
            name: "M.Tech Artificial Intelligence and Robotics",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹2,52,000" },
            ],
            notes: [
              "Upon successful completion of the M.Tech programs (CSE/AI & ML/AI & Robotics/AI/AI & DS), candidates are offered a job with a starting salary of INR 65,000 per month for a year which will be extended after evaluating performance deliverables as per the Organization.",
            ],
          },
          {
            name: "M.Tech Embedded System",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹1,62,000" },
            ],
          },
          {
            name: "M.Tech Design Engineering",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in B.Tech in Mechanical, Industrial Engineering & Management, Aerospace, Aeronautical, Automobile, or related disciplines with minimum 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Others - Total Fee (Annual)", amount: "₹1,62,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure for 2026-27 academic year. Special job placement guarantee for select M.Tech AI programs (CSE, AI & ML, AI & Robotics, AI, AI & DS).",
          "Job placement offer subject to successful completion and performance evaluation as per organizational standards.",
        ],
      },
    ],
    disclaimers: [
      "Any variation in the fee structure due to revision by the Government will accordingly be applicable.",
      "Job placement guarantee for select M.Tech AI programs subject to successful completion and performance evaluation.",
    ],
  },
  {
    name: "School of Computer Applications",
    tagline:
      "Yearly fee structure 2026-27 for undergraduate and postgraduate programs in computing, analytics, and data science.",
    icon: ClipboardList,
    categories: [
      {
        title: "Undergraduate Programs (3 Years Duration)",
        description:
          "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
        programs: [
          {
            name: "BCA - Bachelor of Computer Applications",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: [
              { label: "Term I", amount: "₹1,09,500" },
              { label: "Term II", amount: "₹97,500" },
              { label: "Total Fee", amount: "₹2,07,000" },
            ],
            documentsRequired: [
              "10+2 original mark sheets and pass certificate",
              "Mathematics or equivalent subject mark card",
              "School leaving certificate",
              "Category certificate (if applicable)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Passport-size photographs (6)",
              "Transfer certificate from previous institution",
            ],
          },
          {
            name: "BCA in Artificial Intelligence & Data Sciences",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: [
              { label: "Term I", amount: "₹1,09,500" },
              { label: "Term II", amount: "₹97,500" },
              { label: "Total Fee", amount: "₹2,07,000" },
            ],
          },
          {
            name: "B.Sc in Data Science",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: [
              { label: "Term I", amount: "₹87,000" },
              { label: "Term II", amount: "₹75,000" },
              { label: "Total Fee", amount: "₹1,62,000" },
            ],
          },
          {
            name: "B.Sc in Cyber Security",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: [
              { label: "Term I", amount: "₹87,000" },
              { label: "Term II", amount: "₹75,000" },
              { label: "Total Fee", amount: "₹1,62,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "Postgraduate Programs (2 Years Duration)",
        description:
          "Advanced computing degrees aligned with industry certifications and research opportunities.",
        programs: [
          {
            name: "MCA - Master of Computer Applications",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Admission to First Year MCA shall be open to candidates with a UG degree in BCA/B.Sc.(CS/IT) or B.Sc./B.Com/BA from a recognized University with Mathematics at 10+2 level or Graduation Level (with additional Bridge Courses as per the norms of the University). Obtained at least 50% marks in the Qualifying Examination.",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Term I", amount: "₹1,77,000" },
              { label: "Term II", amount: "₹1,65,000" },
              { label: "Total Fees", amount: "₹3,42,000" },
            ],
          },
          {
            name: "M.Sc in Data Science",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "B.Sc in Life Science or related fields such as Biotechnology, Microbiology, Genetics, Zoology, Botany, Biochemistry, Bioinformatics, Statistics, or Computer Science with minimum 50% aggregate.",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Term I", amount: "₹82,000" },
              { label: "Term II", amount: "₹70,000" },
              { label: "Total Fees", amount: "₹1,52,000" },
            ],
          },
          {
            name: "M.Sc in Cyber Security",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "B.Sc in Computer Science, Information Technology, Cyber Security, or related fields with minimum 50% aggregate.",
            fees: [
              { label: "PGCET - Total Fee", amount: "Not Available" },
              { label: "Term I", amount: "₹82,000" },
              { label: "Term II", amount: "₹70,000" },
              { label: "Total Fees", amount: "₹1,52,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
    ],
  },
  {
    name: "School of Law",
    tagline:
      "Yearly fee structure 2026-27 for integrated legal programs with CLAT pathways, curated clinics, and moot court training.",
    icon: FileText,
    categories: [
      {
        title: "Undergraduate Programs",
        description:
          "10+2 or equivalent examination from a recognized Board with a minimum of 50% marks in aggregate. We accept CLAT scores.",
        programs: [
          {
            name: "B.A. LL.B",
            level: "UG",
            duration: "5 Years",
            eligibility:
              "10+2 or equivalent examination from a recognized Board with a minimum of 50% marks in aggregate. We accept CLAT scores.",
            fees: [
              { label: "Tuition Fee", amount: "₹2,02,000" },
              { label: "Other Fee", amount: "₹50,000" },
              { label: "Total Fees", amount: "₹2,52,000" },
            ],
            scholarships: "Scholarship Available",
            documentsRequired: [
              "10+2 / PUC original mark sheets and pass certificate",
              "CLAT admit card and scorecard (if applicable)",
              "School leaving certificate",
              "Category certificate (SC/ST/OBC, if applicable)",
              "Character certificate from school/college",
              "Passport-size photographs (6)",
              "Photo ID (Aadhaar / Passport / Driving License)",
            ],
          },
          {
            name: "B.B.A. LL.B",
            level: "UG",
            duration: "5 Years",
            eligibility:
              "10+2 or equivalent examination from a recognized Board with a minimum of 50% marks in aggregate. We accept CLAT scores.",
            fees: [
              { label: "Tuition Fee", amount: "₹2,02,000" },
              { label: "Other Fee", amount: "₹50,000" },
              { label: "Total Fees", amount: "₹2,52,000" },
            ],
            scholarships: "Scholarship Available",
          },
          {
            name: "LL.B",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Graduation or equivalent examination from a recognized University with a minimum of 50% marks in aggregate.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,37,000" },
              { label: "Other Fee", amount: "₹40,000" },
              { label: "Total Fees", amount: "₹1,77,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "Postgraduate Program",
        programs: [
          {
            name: "LL.M",
            level: "PG",
            duration: "1 Year",
            eligibility:
              "A bachelor's degree in law (LL.B) or an equivalent degree from recognized university. A minimum of 50% marks in the qualifying degree (40% for SC/ST candidates). Valid scores in any national level entrance exams like CLAT or AILET.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,10,000" },
              { label: "Other Fee", amount: "₹35,000" },
              { label: "Total Fees", amount: "₹1,45,000" },
            ],
            notes: [
              "Tracks include Corporate & Commercial Law, Intellectual Property Rights, and Human Rights Law.",
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
    ],
  },
  {
    name: "School of Basic & Applied Sciences",
    tagline:
      "Yearly fee structure 2026-27 for life science programs blending lab research, internships, and interdisciplinary electives.",
    icon: Stethoscope,
    categories: [
      {
        title: "Undergraduate Programs (3 Years Duration)",
        programs: [
          {
            name: "B.Sc - Life Science Combinations",
            level: "UG",
            duration: "3 Years",
            specializations: [
              "Biotechnology, Biochemistry, and Genetics",
              "Biotechnology, Chemistry, and Microbiology",
              "Microbiology, Genetics, and Biochemistry",
            ],
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry and English with Biology or Biotechnology or Mathematics or any other Life Science subject as optional and a minimum of 45% marks taken together in Physics, Chemistry and any one of the optional subjects.",
            fees: [
              { label: "Term I", amount: "₹97,000" },
              { label: "Term II", amount: "₹85,000" },
              { label: "Total Fees", amount: "₹1,82,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "Postgraduate Programs (2 Years Duration)",
        programs: [
          {
            name: "M.Sc Biochemistry",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "B.Sc. with any of the following life science subjects such as Biochemistry, Chemistry, Biotechnology, Microbiology, Bioinformatics, Anatomy, Physiology, etc. Students having degree in Medical Sciences, Nursing Sciences, Pharmaceutical Sciences are also eligible to apply.",
            fees: [
              { label: "Term I", amount: "₹1,02,000" },
              { label: "Term II", amount: "₹90,000" },
              { label: "Total Fees", amount: "₹1,92,000" },
            ],
          },
          {
            name: "M.Sc Biotechnology",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "B.Sc. with any of the following subjects in Life Science such as Biotechnology, Microbiology, Genetics, Zoology, Botany, Biochemistry, Bioinformatics, etc.",
            fees: [
              { label: "Term I", amount: "₹1,02,000" },
              { label: "Term II", amount: "₹90,000" },
              { label: "Total Fees", amount: "₹1,92,000" },
            ],
          },
          {
            name: "M.Sc Microbiology",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "M.Sc. Microbiology is a 2 year full-time postgraduate course with minimum qualification required to apply is a bachelor's degree. Eligibility for which is B.Sc. in any stream of science with any of the following life science subjects such as Genetics, Zoology, Botany, Biochemistry, Chemistry, Microbiology etc. Students having degree in Medical Sciences, Nursing Sciences, Pharmaceutical Sciences are also eligible to apply from a recognized board.",
            fees: [
              { label: "Term I", amount: "₹1,02,000" },
              { label: "Term II", amount: "₹90,000" },
              { label: "Total Fees", amount: "₹1,92,000" },
            ],
          },
          {
            name: "M.Sc Molecular Biology and Genetics",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "B.Sc. with any of the following life science subjects such as Genetics, Zoology, Botany, Biochemistry, Chemistry, Microbiology, Bioinformatics, Anthropology, Anatomy, Physiology, etc. Students having degree in Medical Sciences, Nursing Sciences, Pharmaceutical Sciences are also eligible to apply.",
            fees: [
              { label: "Term I", amount: "₹1,02,000" },
              { label: "Term II", amount: "₹90,000" },
              { label: "Total Fees", amount: "₹1,92,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
          "Advanced instrumentation labs support research in molecular biology, genomic diagnostics, and translational sciences.",
        ],
      },
    ],
  },
  {
    name: "School of Commerce & Management",
    tagline:
      "Yearly fee structure 2026-27 for industry-driven commerce, business, and management programs with professional certifications.",
    icon: Users,
    categories: [
      {
        title: "Undergraduate Programs (3 Years Duration)",
        programs: [
          {
            name: "BBA Regular",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: [
              { label: "Term I", amount: "₹1,07,000" },
              { label: "Term II", amount: "₹1,05,000" },
              { label: "Total (Incl. Library Deposit)", amount: "₹2,12,000" },
            ],
            documentsRequired: [
              "10+2 original mark sheets and pass certificate",
              "School leaving certificate",
              "Category certificate (if applicable)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Passport-size photographs (6)",
              "Transfer certificate from previous institution",
            ],
          },
          {
            name: "B.Com - Regular",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study in both first and second year pre-university with aggregate of 50% PUC/ CBSE/ ISCE/10+2 or Equivalent Examination (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: [
              { label: "Term I", amount: "₹79,500" },
              { label: "Term II", amount: "₹77,500" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,57,000" },
            ],
          },
          {
            name: "B.Com - ACCA Integrated",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study in both first and second year pre-university with aggregate of 50% PUC/ CBSE/ ISCE/10+2 or Equivalent Examination (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: [
              { label: "Term I", amount: "₹99,500" },
              { label: "Term II", amount: "₹87,500" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,87,000" },
            ],
            notes: [
              "Professional ACCA coaching integrated within the timetable.",
            ],
          },
          {
            name: "B.Com - CMA Integrated",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study in both first and second year pre-university with aggregate of 50% PUC/ CBSE/ ISCE/10+2 or Equivalent Examination (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: [
              { label: "Term I", amount: "₹99,500" },
              { label: "Term II", amount: "₹87,500" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,87,000" },
            ],
            notes: [
              "Professional CMA coaching integrated within the timetable.",
            ],
          },
          {
            name: "B.Com - With CA Coaching",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study in both first and second year pre-university with aggregate of 50% PUC/ CBSE/ ISCE/10+2 or Equivalent Examination (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: [
              { label: "Term I", amount: "₹99,500" },
              { label: "Term II", amount: "₹87,500" },
              { label: "Total (Incl. Library Deposit)", amount: "₹1,87,000" },
            ],
            notes: [
              "Professional CA coaching integrated within the timetable.",
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "Postgraduate Program (2 Years Duration)",
        programs: [
          {
            name: "MBA",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Pass in a Bachelors degree of three years in any stream with minimum 50% (45% in case of candidates belonging to SC/ST & OBC category) of marks in aggregate from any recognized University / Institution or any other qualification recognized as equivalent there to.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Term I", amount: "₹3,07,000" },
              { label: "Term II", amount: "₹2,95,000" },
              { label: "Total Fees", amount: "₹6,02,000" },
            ],
            notes: [
              "Dual specialization options covering Business Analytics, Finance, Marketing, HR, and Operations.",
            ],
            documentsRequired: [
              "Bachelor's degree original mark sheets and certificate",
              "CAT / MAT / GMAT / PGCET scorecard (if applicable)",
              "Category certificate (SC/ST/OBC, if applicable)",
              "Work experience certificate (if applicable)",
              "Passport-size photographs (6)",
              "Photo ID (Aadhaar / Passport / Driving License)",
              "Transcripts from previous institutions",
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
    ],
  },
  {
    name: "School of Health Sciences",
    tagline:
      "Yearly fee structure 2026-27 for allied health, pharmaceutical, nursing, public health, and physiotherapy programs with clinical immersion.",
    icon: Stethoscope,
    categories: [
      {
        title: "College of Allied Health Sciences - UG Programs",
        description:
          "A candidate seeking admission to the BSc. programs shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent with Physics, Chemistry and Biology as major subjects of study.",
        programs: [
          {
            name: "B.Sc : Medical Radiology & Imaging Technology",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent as recognized by Dayananda Sagar University with Physics, Chemistry and Biology as major subjects of study.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,42,000" },
              { label: "Other Fee", amount: "₹30,000" },
              { label: "Total Fee", amount: "₹1,72,000" },
            ],
          },
          {
            name: "B.Sc : Medical Laboratory Technology",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent as recognized by Dayananda Sagar University with Physics, Chemistry and Biology as major subjects of study.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,12,000" },
              { label: "Other Fee", amount: "₹30,000" },
              { label: "Total Fee", amount: "₹1,42,000" },
            ],
          },
          {
            name: "B.Sc : Anesthesia and Operation Theatre Technology",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent as recognized by Dayananda Sagar University with Physics, Chemistry and Biology as major subjects of study.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,42,000" },
              { label: "Other Fee", amount: "₹30,000" },
              { label: "Total Fee", amount: "₹1,72,000" },
            ],
          },
          {
            name: "B.Sc : EET - Emergency & Trauma Care Technology",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent as recognized by Dayananda Sagar University with Physics, Chemistry and Biology as major subjects of study.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,12,000" },
              { label: "Other Fee", amount: "₹30,000" },
              { label: "Total Fee", amount: "₹1,42,000" },
            ],
          },
          {
            name: "B.Sc : Cardiac Care Technology",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent as recognized by Dayananda Sagar University with Physics, Chemistry and Biology as major subjects of study.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,72,000" },
              { label: "Other Fee", amount: "₹30,000" },
              { label: "Total Fee", amount: "₹2,02,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "College of Allied Health Sciences - PG Programs",
        programs: [
          {
            name: "MPH - Masters in Public Health",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "A candidate seeking admission to Masters in Public Health should have a degree in MBBS or BDS or BAMS or B.Sc Nursing or BPT or B. Pharm with minimum 50% marks from a University established under law considered equivalent by Dayananda Sagar University.",
            fees: [
              { label: "Tuition Fee", amount: "₹1,12,000" },
              { label: "Others Fee", amount: "₹30,000" },
              { label: "Total Fee", amount: "₹1,42,000" },
            ],
          },
        ],
        footnotes: [
          "Any variation in the fee structure due to revision by the Govt will accordingly be applicable.",
        ],
      },
      {
        title: "College of Pharmaceutical Sciences - UG Programs",
        programs: [
          {
            name: "B.Pharm",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in 10+2 with Physics, Chemistry and English with Mathematics or Biotechnology or Computer Science or Biology as optional subjects with a minimum of 40% marks in aggregate. Lateral: Diploma holders in Pharmacy from an institution recognized by the Pharmacy Council of India.",
            fees: [
              { label: "CET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,82,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "College of Pharmaceutical Sciences - PG Programs",
        programs: [
          {
            name: "M Pharma : Pharmaceutics",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed B.pharm from an institution recognized by the Pharmacy Council of India with a minimum of 50% marks in aggregate.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹3,02,000" },
            ],
          },
          {
            name: "M Pharma : Pharmacology",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed B.pharm from an institution recognized by the Pharmacy Council of India with a minimum of 50% marks in aggregate.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹3,02,000" },
            ],
          },
          {
            name: "M Pharma : Regulatory Affairs",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed B.pharm from an institution recognized by the Pharmacy Council of India with a minimum of 50% marks in aggregate.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹3,02,000" },
            ],
          },
          {
            name: "Pharm D",
            level: "Professional",
            duration: "6 Years",
            eligibility:
              "Pass in 10+2 examination with Physics, Chemistry and English with Mathematics or Biology as optional subjects / DPharm or any other equivalent qualification recognized by the Pharmacy Council of India.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹4,52,000" },
            ],
          },
        ],
        footnotes: [
          "Any variation in the fee structure due to revision by the Govt will accordingly be applicable.",
        ],
      },
      {
        title: "College of Nursing Sciences - UG Programs",
        programs: [
          {
            name: "B.Sc - Nursing",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry, Biology and English and a minimum of 45% marks taken together in Physics, Chemistry, Biology and English.",
            fees: [
              { label: "CET - Total Fees", amount: "Not Available" },
              { label: "Term I", amount: "₹97,000" },
              { label: "Term II", amount: "₹85,000" },
              { label: "Total Fees", amount: "₹1,82,000" },
            ],
          },
          {
            name: "PB B.Sc - Nursing",
            level: "UG",
            duration: "2 Years",
            eligibility:
              "Pass in GNM after 10+2 or equivalent examination preferably with Science subjects with 50% marks in aggregate. Candidates should be a registered Nurse and registered Midwife or equivalent with any State Nursing Registration Council. Candidates should have completed their GNM course on or before 01.06.2020.",
            fees: [
              { label: "CET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹92,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "College of Nursing Sciences - PG Programs",
        programs: [
          {
            name: "M.Sc : Medical Surgical Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: Applicants must have 1 year of experience after BSc Nursing in a hospital or in a community health program or in a school or college of nursing. PB BSc Degree holders need to have one year experience either before or after Post Basic BSc Nursing degree.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹1,42,000" },
            ],
          },
          {
            name: "M.Sc : Child Health Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: Applicants must have 1 year of experience after BSc Nursing in a hospital or in a community health program or in a school or college of nursing. PB BSc Degree holders need to have one year experience either before or after Post Basic BSc Nursing degree.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹1,42,000" },
            ],
          },
          {
            name: "M.Sc : Mental Health Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: Applicants must have 1 year of experience after BSc Nursing in a hospital or in a community health program or in a school or college of nursing. PB BSc Degree holders need to have one year experience either before or after Post Basic BSc Nursing degree.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹1,42,000" },
            ],
          },
          {
            name: "M.Sc : Obstetrics and Genealogical Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: Applicants must have 1 year of experience after BSc Nursing in a hospital or in a community health program or in a school or college of nursing. PB BSc Degree holders need to have one year experience either before or after Post Basic BSc Nursing degree.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹1,42,000" },
            ],
          },
          {
            name: "M.Sc : Community Health Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: Applicants must have 1 year of experience after BSc Nursing in a hospital or in a community health program or in a school or college of nursing. PB BSc Degree holders need to have one year experience either before or after Post Basic BSc Nursing degree.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹1,42,000" },
            ],
          },
        ],
        footnotes: [
          "Any variation in the fee structure due to revision by the Govt will accordingly be applicable.",
        ],
      },
      {
        title: "College of Physiotherapy - UG Programs",
        programs: [
          {
            name: "Bachelor's in Physiotherapy (B.P.T.)",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry, English and Biology with a minimum of 40% marks taken together in Physics, Chemistry and Biology.",
            fees: [
              { label: "CET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,17,000" },
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
      {
        title: "College of Physiotherapy - PG Programs",
        programs: [
          {
            name: "M.P.T : Sports & Muscular Skeletal",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship on or before 15.08.2020.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,77,000" },
            ],
          },
          {
            name: "M.P.T : Cardio Pulmonary",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship on or before 15.08.2020.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,77,000" },
            ],
          },
          {
            name: "M.P.T : Women's Health",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship on or before 15.08.2020.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,77,000" },
            ],
          },
          {
            name: "M.P.T : Neuro",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship on or before 15.08.2020.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,77,000" },
            ],
          },
          {
            name: "M.P.T : Community Based Rehabilitation",
            level: "PG",
            duration: "2 Years",
            eligibility:
              "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship on or before 15.08.2020.",
            fees: [
              { label: "PGCET - Total Fees", amount: "Not Available" },
              { label: "Others - Total Fees", amount: "₹2,77,000" },
            ],
          },
        ],
      },
    ],
    disclaimers: [
      "Clinical postings are scheduled in DSU hospitals; medical fitness compliance is mandatory.",
      "Any changes in regulatory guidelines from statutory councils will be immediately adopted.",
      "Any variation in the fee structure due to revision by the Govt will accordingly be applicable.",
    ],
  },
  {
    name: "School of Arts, Design & Humanities",
    tagline:
      "Yearly fee structure 2026-27 for creative programs combining storytelling, digital media, and field journalism.",
    icon: BookOpen,
    categories: [
      {
        title: "Undergraduate Program (3 Years Duration)",
        programs: [
          {
            name: "B.A. Journalism and Mass Communication",
            level: "UG",
            duration: "3 Years",
            eligibility:
              "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate. Arts group subjects are preferred.",
            fees: [
              { label: "Term I", amount: "₹77,000" },
              { label: "Term II", amount: "₹75,000" },
              { label: "Total Fees", amount: "₹1,52,000" },
            ],
            notes: [
              "Includes newsroom simulations, digital production labs, and internships with media houses.",
            ],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
        ],
      },
    ],
  },
  {
    name: "School of Design & Digital Trans-Media",
    tagline:
      "Yearly fee structure 2026-27 for studio-based design programs with immersive projects in product, UX, animation, and game design.",
    icon: PenTool,
    categories: [
      {
        title: "Undergraduate Programs (4 Years Duration)",
        description:
          "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
        programs: [
          {
            name: "B.Design : Product Design",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: [{ label: "Total Fees", amount: "₹3,02,000" }],
          },
          {
            name: "B.Design : User Experience Design",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: [{ label: "Total Fees", amount: "₹3,02,000" }],
          },
          {
            name: "B.Design : Animation and VFX",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: [{ label: "Total Fees", amount: "₹3,02,000" }],
          },
          {
            name: "B.Design : Game Design",
            level: "UG",
            duration: "4 Years",
            eligibility:
              "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: [{ label: "Total Fees", amount: "₹3,02,000" }],
          },
        ],
        footnotes: [
          "Fee structure reflects the 2026-27 academic year. All fees shown are annual totals.",
          "Access to design studios, fabrication labs, and collaborative projects with industry partners.",
        ],
      },
    ],
  },
];

const brochureResources: BrochureResource[] = [
  {
    title: "B.Tech Computer Science & Technology (CST)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/btech_cst_brochure_2026.pdf",
  },
  {
    title: "B.Tech Computer Science Engineering (CSE)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BTech_CSE_Brochure.pdf",
  },
  {
    title: "B.Tech CSE (Artificial Intelligence)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BTech_CSE_AI_Brochure.pdf",
  },
  {
    title: "B.Tech CSE (Data Science)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BTech_CSE_Data_Sciences_Brochure.pdf",
  },
  {
    title: "B.Tech CSE (AI & ML)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/btech_cse_aiml_brochure_2026.pdf",
  },
  {
    title: "B.Tech Artificial Intelligence & Robotics",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/btech_AI_Robotics_brochure_2026.pdf",
  },
  {
    title: "B.Tech Electronics & Communication Engineering",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/ece_2026.pdf",
  },
  {
    title: "B.Tech Mechanical Engineering",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/mechanical_engg_2026.pdf",
  },
  {
    title: "B.Tech Aerospace Engineering",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/aerospace_engg_2026.pdf",
  },
  {
    title: "B.Tech Cyber Security",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/btech_cyber_security_brochure_2026.pdf",
  },
  {
    title: "M.Tech Artificial Intelligence & Data Science",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MTech_AI_and_Data_Science.pdf",
  },
  {
    title: "M.Tech Computer Science Engineering",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MTech_CSE_Brochure_2026.pdf",
  },
  {
    title: "M.Tech Design Engineering",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MTech-_Design_Engineering.pdf",
  },
  {
    title: "BBA (Bachelor of Business Administration)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BBA_Brochure.pdf",
  },
  {
    title: "MBA (Master of Business Administration)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MBA_Brochure_26.pdf",
  },
  {
    title: "B.Com (General)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BCom_Regular_Brochure.pdf",
  },
  {
    title: "B.Com (ACCA)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BCom-ACCA_Brochure.pdf",
  },
  {
    title: "B.Com (CA)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BCom-CA_Brochure.pdf",
  },
  {
    title: "B.Com (CMA)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BCom-CMA_Brochure.pdf",
  },
  {
    title: "BCA (Bachelor of Computer Applications)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BCA_Brochure_2026.pdf",
  },
  {
    title: "MCA (Master of Computer Applications)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/MCA_Brochure_2026.pdf",
  },
  {
    title: "B.Sc Data Science",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BSc_Data_Science.pdf",
  },
  {
    title: "M.Sc Data Science",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/MSc_Data_Science.pdf",
  },
  {
    title: "B.Sc Basic Sciences",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BSc_in_Basic_Sciences.pdf",
  },
  {
    title: "M.Sc Basic Sciences",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MSc_in_Basic_Sciences.pdf",
  },
  {
    title: "BA Journalism & Mass Communication",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BA_JMC_brochure_2026.pdf",
  },
  {
    title: "B.Design",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BDesign_Brochure.pdf",
  },
  {
    title: "B.Sc Nursing",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/BSc_Nursing_Brochure.pdf",
  },
  {
    title: "M.Sc Nursing",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MSc_Nursing_Brochure.pdf",
  },
  {
    title: "Bachelor of Physiotherapy (BPT)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BPT_Brochure_2026.pdf",
  },
  {
    title: "Master of Physiotherapy (MPT)",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_MPT_Brochure_2026.pdf",
  },
  {
    title: "B.Pharm",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/bpharma_2026.pdf",
  },
  {
    title: "M.Pharm",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/m_pharm.pdf",
  },
  {
    title: "Pharm.D",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_Pharm_D_Brochure_2026.pdf",
  },
  {
    title: "School of Law Programs",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_School_of_LAW_Brochure_2026.pdf",
  },
  {
    title: "LLM Programs",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_LLM_Brochure.pdf",
  },
  {
    title: "B.Sc Allied Health Sciences",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2026/DSU_BSc_AHS_Brochure.pdf",
  },
];

const contactLocations: ContactLocation[] = [
  {
    name: "DSU Main Campus",
    address:
      "Dayananda Sagar University, Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112",
    email: "admissions@dsu.edu.in",
    phones: [
      "Office of Registrar: 080 24496999 (Extn-2)",
      "Reception: 080 24496999 (Extn-1)",
      "Registrar: 080 24496999 (Extn-3)",
      "Dean, SOE: 080 24496999 (Extn-4)",
    ],
  },
  {
    name: "DSU City Innovation Campus",
    address:
      "Dayananda Sagar University, Innovation Campus, Administrative & Main Admission Office, Kudlu Gate, Hosur Road, Bengaluru - 560 068",
    email: "admissions@dsu.edu.in",
    phones: [
      "080 46461800",
      "080 49092800",
      "+91 7760964277",
      "+91 8296316737",
      "+91 6366885507",
    ],
  },
  {
    name: "Admission Information Center",
    address:
      "Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru - 560 111",
    email: "admissions@dsu.edu.in",
    phones: ["080 46461800", "080 49092800"],
  },
];

const helplineGroups: HelplineGroup[] = [
  {
    title: "Admissions Helpline",
    entries: [
      "080 46461800",
      "080 49092800",
      "+91 7760964277",
      "+91 8296316737",
      "+91 6366885507",
    ],
  },
  {
    title: "Registrar Office",
    entries: ["080 4909 2910", "080 4909 2911"],
  },
  {
    title: "Dean – School of Engineering",
    entries: ["080 4909 2986", "080 4909 2932", "080 4909 2933"],
  },
  {
    title: "Dean – MBA",
    entries: ["080 4909 2931"],
  },
  {
    title: "Research Cell",
    entries: ["080 4909 2912", "+91 9739017462"],
  },
];

const regionalContacts: RegionalContact[] = [
  { label: "East Region", phone: "82402 16553" },
  { label: "West Region", phone: "97414 88001" },
  { label: "North Region", phone: "74889 83636" },
  { label: "South Region", phone: "99628 35358" },
  { label: "NRI / Foreign Admissions Helpline", phone: "+91 9606022152" },
  { label: "NRI / Foreign Admissions Support", phone: "+91 9606022150" },
  {
    label: "NRI / Foreign Admissions Support (Alternate)",
    phone: "+91 9606022149",
  },
];

const importantNotes = [
  "Admissions are subject to eligibility verification and submission of original documents during counseling.",
  "Fee payments can be made online through the DSU admissions portal or at the admissions office counters.",
  "Library deposits are refundable as per university policy on completion of the program.",
  "All statutory reservations and relaxation norms from Government of Karnataka are applied.",
  "International applicants must furnish equivalence certificates and passport/visa documentation before enrollment.",
];

export default function Eligibility() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="relative mx-auto max-w-6xl px-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
          <BadgeCheck className="h-4 w-4" />
          Programs, Eligibility &amp; Fees 2026-27
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
          Check Eligibility for Your Program
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl">
          Find out what you need to apply — eligibility criteria, required documents, admission pathways, and fee structures for Undergraduate, Postgraduate, and Doctoral programs.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-8 py-6 text-lg font-semibold text-foreground shadow-lg shadow-orange-500/30 transition hover:shadow-xl"
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
            description="CET | JEE Mains | Uniguage | Comed-K | PGCET | Direct Admissions"
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
    <div className="rounded-2xl border border-orange-500/20 bg-background/80 p-3 text-left shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function SchoolsSection() {
  const [searchParams] = useSearchParams();
  const [openSchools, setOpenSchools] = useState<string[]>([]);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<"all" | "UG" | "PG">("all");

  const targetSchool = searchParams.get("school");
  const targetProgram = searchParams.get("program");

  useEffect(() => {
    if (targetSchool) {
      setOpenSchools([targetSchool]);
    }
  }, [targetSchool]);

  useEffect(() => {
    if (targetProgram && scrollTarget === null) {
      const programElement = document.getElementById(
        `program-${targetProgram}`,
      );
      if (programElement) {
        setTimeout(() => {
          programElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          programElement.classList.add(
            "ring-2",
            "ring-orange-500",
            "rounded-lg",
          );
        }, 300);
        setScrollTarget(targetProgram);
      }
    }
  }, [targetProgram, scrollTarget]);

  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Program Directory by School
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Expand each school to review eligibility checkpoints,
            specializations, yearly fees, and counseling codes. All values
            include the latest library deposit and ancillary components.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => setSelectedLevel("all")}
            variant={selectedLevel === "all" ? "default" : "outline"}
            className={`rounded-full px-6 py-2 font-semibold transition ${
              selectedLevel === "all"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border border-orange-500/30 text-foreground hover:bg-orange-500/10"
            }`}
          >
            All Programs
          </Button>
          <Button
            onClick={() => setSelectedLevel("UG")}
            variant={selectedLevel === "UG" ? "default" : "outline"}
            className={`rounded-full px-6 py-2 font-semibold transition ${
              selectedLevel === "UG"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border border-orange-500/30 text-foreground hover:bg-orange-500/10"
            }`}
          >
            Undergraduate
          </Button>
          <Button
            onClick={() => setSelectedLevel("PG")}
            variant={selectedLevel === "PG" ? "default" : "outline"}
            className={`rounded-full px-6 py-2 font-semibold transition ${
              selectedLevel === "PG"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border border-orange-500/30 text-foreground hover:bg-orange-500/10"
            }`}
          >
            Postgraduate
          </Button>
        </div>

        <Accordion
          type="multiple"
          value={openSchools}
          onValueChange={setOpenSchools}
          className="space-y-3"
        >
          {schools
            .map((school) => {
              const filteredCategories = school.categories
                .map((category) => ({
                  ...category,
                  programs: category.programs.filter(
                    (program) =>
                      selectedLevel === "all" || program.level === selectedLevel
                  ),
                }))
                .filter((category) => category.programs.length > 0);

              return filteredCategories.length > 0
                ? {
                    ...school,
                    categories: filteredCategories,
                  }
                : null;
            })
            .filter(Boolean)
            .map((school) => (
              <AccordionItem
                key={school.name}
                value={school.name}
                className="overflow-hidden rounded-3xl border border-orange-500/20 bg-card/70 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-3 py-4 text-left text-xl font-semibold text-foreground">
                  <div className="flex w-full items-center gap-3 text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-500">
                      <school.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex flex-wrap items-center gap-3">
                        <span>{school.name}</span>
                        <Badge className="bg-orange-500/15 text-orange-500">
                          {school.name === "School of Engineering" ||
                          school.name === "School of Computer Applications" ||
                          school.name === "School of Law" ||
                          school.name === "School of Basic & Applied Sciences" ||
                          school.name === "School of Commerce & Management" ||
                          school.name === "School of Health Sciences" ||
                          school.name === "School of Arts, Design & Humanities" ||
                          school.name === "School of Design & Digital Trans-Media"
                            ? "2026-27"
                            : "2025-26"}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm font-normal text-foreground">
                        {school.tagline}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-6">
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
                              <p className="text-sm text-foreground">
                                {category.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2">
                          {category.programs.map((program) => (
                            <ProgramCard
                              key={`${category.title}-${program.name}`}
                              program={program}
                            />
                          ))}
                        </div>
                        {category.footnotes && (
                          <ul className="list-disc space-y-2 pl-5 text-xs text-foreground">
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
  const parseEligibilityToBullets = (eligibilityText: string): string[] => {
    const bullets: string[] = [];
    const cleanText = eligibilityText.replace(/\s+/g, " ").trim();

    if (cleanText.includes("Pass in") || cleanText.includes("Candidates")) {
      const sentences = cleanText.split(/(?<=[.!?])\s+/);
      sentences.forEach((sentence) => {
        const trimmed = sentence.trim();
        if (trimmed) {
          bullets.push(trimmed);
        }
      });
    }

    if (bullets.length === 0) {
      bullets.push(eligibilityText);
    }

    return bullets;
  };

  const getDefaultDocuments = (): string[] => {
    if (program.level === "UG") {
      return [
        "10+2 / PUC original mark sheets and pass certificate",
        "Relevant subject mark cards (Physics, Chemistry, Mathematics, etc.)",
        "Entrance exam admit card and score sheet (if applicable)",
        "School leaving certificate or equivalent",
        "Category certificate (SC/ST/OBC, if applicable)",
        "Photo ID (Aadhaar / Passport / Driving License)",
        "Recent passport-size photographs (4-6)",
      ];
    } else if (program.level === "PG") {
      return [
        "Bachelor's degree original mark sheets and certificate",
        "Relevant entrance exam scorecard (PGCET/GATE/CAT, if applicable)",
        "Category certificate (SC/ST/OBC, if applicable)",
        "Work experience certificate (if applicable)",
        "Photo ID (Aadhaar / Passport / Driving License)",
        "Recent passport-size photographs (4-6)",
      ];
    } else {
      return [
        "12th standard mark sheets and certificate",
        "Entrance exam scorecard (as per program requirements)",
        "Category certificate (if applicable)",
        "Photo ID and recent photographs",
      ];
    }
  };

  const eligibilityBullets = program.eligibilityPoints || parseEligibilityToBullets(program.eligibility);
  const documentsRequired = program.documentsRequired || getDefaultDocuments();

  return (
    <Card
      id={`program-${program.name}`}
      className="h-full border border-border/60 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10"
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-semibold text-foreground">
              {program.name}
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-foreground">
              {program.duration && `Duration: ${program.duration} | `}
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

        <div className="mt-4">
          <p className="text-xs uppercase tracking-wide text-orange-500 font-semibold">
            Eligibility Criteria
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
            {eligibilityBullets.map((bullet, idx) => (
              <li key={`${program.name}-eligibility-${idx}`}>{bullet}</li>
            ))}
          </ul>
        </div>

        {program.specializations && (
          <div className="mt-3">
            <p className="text-xs uppercase tracking-wide text-orange-500 font-semibold">
              Includes Specializations
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
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

        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
          <p className="text-xs uppercase tracking-wide font-semibold text-blue-600 mb-2">
            📋 Documents Required
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
            {documentsRequired.map((doc, idx) => (
              <li key={`${program.name}-doc-${idx}`}>{doc}</li>
            ))}
          </ul>
        </div>

        {program.scholarships && (
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-3 text-sm text-orange-500">
            <CheckCircle2 className="mr-2 inline h-4 w-4" />
            {program.scholarships}
          </div>
        )}

        {program.notes && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3">
            <p className="text-xs uppercase tracking-wide font-semibold text-amber-600 mb-2">
              ⭐ Key Highlights
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
              {program.notes.map((note) => (
                <li key={`${program.name}-note-${note}`}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-2 space-y-2 border-t border-border/40">
          <p className="text-xs uppercase tracking-wide font-semibold text-orange-500 mb-3">
            Next Steps
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              size="sm"
              className="rounded-lg bg-orange-500/15 text-orange-500 hover:bg-orange-500 hover:text-foreground"
              asChild
            >
              <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                Apply Now
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-lg border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
              asChild
            >
              <a href="mailto:admissions@dsu.edu.in?subject=Query%20about%20%22{encodeURIComponent(program.name)}%22">
                Ask Question
                <Mail className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function BrochureSection() {
  return (
    <section className="bg-gradient-to-br from-orange-500/5 via-red-500/5 to-background px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Download Program Brochures
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Access school-specific brochures detailing curriculum, laboratories,
            internship opportunities, and placement tracks across UG, PG, and
            professional programs.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {brochureResources.map((resource) => (
            <Card
              key={resource.title}
              className="border border-border/60 bg-card/70 backdrop-blur-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground">
                  PDF download • Updated for academic year 2025-26
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="secondary"
                  className="w-full justify-center rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-foreground"
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
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Help Choosing?
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Connect with DSU counselors for personalized guidance on eligibility
            verification, fee planning, and scholarship opportunities.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
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
                <CardDescription className="mt-4 text-sm leading-relaxed text-foreground">
                  {location.address}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground">
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
        <div className="grid gap-3 lg:grid-cols-2">
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-lg font-semibold text-foreground">
                  Helpline Directory
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-sm text-foreground">
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
                  <ul className="mt-2 space-y-1 text-xs text-foreground">
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
              <CardDescription className="mt-2 text-sm text-foreground">
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
                  <p className="mt-1 text-foreground">{contact.phone}</p>
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
    <section className="px-3 pb-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/15 via-red-500/15 to-orange-500/15 p-10 text-center shadow-lg shadow-orange-500/10">
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-500">
          <ScrollText className="h-4 w-4" />
          Important Enrollment Notes
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Prepare Your Application Checklist
        </h2>
        <p className="mt-4 text-lg text-foreground">
          Review the following guidelines before submitting your application and
          fee payments to ensure a smooth admission experience.
        </p>
        <div className="mt-6 space-y-3 text-left">
          {importantNotes.map((note) => (
            <div
              key={note}
              className="flex items-start gap-3 text-sm text-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-500" />
              <span>{note}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 text-lg font-semibold text-foreground hover:from-red-500 hover:to-orange-500"
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
