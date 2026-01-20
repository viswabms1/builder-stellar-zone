#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for the university website
const BASE_URL = 'https://dsu.edu.in';

// All routes in the application with full URLs
const routes = [
  { path: '/', url: `${BASE_URL}/`, title: 'Home - Dayananda Sagar University' },
  { path: '/about', url: `${BASE_URL}/about`, title: 'About DSU' },
  { path: '/academics', url: `${BASE_URL}/academics`, title: 'Academics' },
  { path: '/academics/engineering', url: `${BASE_URL}/academics/engineering`, title: 'School of Engineering' },
  { path: '/academics/law', url: `${BASE_URL}/academics/law`, title: 'School of Law' },
  { path: '/academics/health-sciences', url: `${BASE_URL}/academics/health-sciences`, title: 'School of Health Sciences' },
  { path: '/academics/computer-applications', url: `${BASE_URL}/academics/computer-applications`, title: 'School of Computer Applications' },
  { path: '/academics/basic-applied-sciences', url: `${BASE_URL}/academics/basic-applied-sciences`, title: 'School of Basic and Applied Sciences' },
  { path: '/academics/commerce-and-management', url: `${BASE_URL}/academics/commerce-and-management`, title: 'School of Commerce and Management' },
  { path: '/academics/humanities-social-sciences', url: `${BASE_URL}/academics/humanities-social-sciences`, title: 'School of Humanities and Social Sciences' },
  { path: '/academics/design/bdesign', url: `${BASE_URL}/academics/design/bdesign`, title: 'School of Design and Digital Trans-media' },
  { path: '/academics/journalism-mass-communication', url: `${BASE_URL}/academics/journalism-mass-communication`, title: 'School of Journalism and Mass Communication' },
  { path: '/admissions', url: `${BASE_URL}/admissions`, title: 'Admissions' },
  { path: '/eligibility', url: `${BASE_URL}/eligibility`, title: 'Eligibility & Fee Structure' },
  { path: '/international-admissions', url: `${BASE_URL}/international-admissions`, title: 'International Admissions' },
  { path: '/study-in-india', url: `${BASE_URL}/study-in-india`, title: 'Study in India' },
  { path: '/campus-life', url: `${BASE_URL}/campus-life`, title: 'Campus Life' },
  { path: '/research', url: `${BASE_URL}/research`, title: 'Research' },
  { path: '/library', url: `${BASE_URL}/library`, title: 'Library' },
  { path: '/alumni', url: `${BASE_URL}/alumni`, title: 'Alumni' },
  { path: '/placements', url: `${BASE_URL}/placements`, title: 'Placements' },
  { path: '/ai-first', url: `${BASE_URL}/ai-first`, title: 'AI-First University' },
  { path: '/nvidia-ai-architecture', url: `${BASE_URL}/nvidia-ai-architecture`, title: 'NVIDIA AI Architecture' },
  { path: '/faculty-directory', url: `${BASE_URL}/faculty-directory`, title: 'Faculty Directory' },
  { path: '/vision-mission', url: `${BASE_URL}/vision-mission`, title: 'Vision & Mission' },
  { path: '/leadership', url: `${BASE_URL}/leadership`, title: 'Leadership' },
  { path: '/accreditations', url: `${BASE_URL}/accreditations`, title: 'Accreditations' },
  { path: '/facilities', url: `${BASE_URL}/facilities`, title: 'Facilities' },
  { path: '/careers', url: `${BASE_URL}/careers`, title: 'Careers' },
  { path: '/examinations', url: `${BASE_URL}/examinations`, title: 'Examinations' },
];

// Detailed Program, Fee, and Eligibility Information (Academic Year 2026-27)
const detailedProgramData = {
  "School of Engineering": {
    tagline: "Innovation-driven education for the tech-savvy world with cutting-edge AI labs and research facilities.",
    departments: [
      {
        name: "Computer Science & Engineering Department",
        programs: [
          {
            name: "B.Tech Computer Science & Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,12,000",
              "Others": "₹4,92,000"
            }
          },
          {
            name: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,35,000",
              "Others": "₹5,25,000"
            }
          },
          {
            name: "B.Tech CSE (Data Science)",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,12,000",
              "Others": "₹4,92,000"
            }
          },
          {
            name: "B.Tech CSE (Cyber Security)",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,12,000",
              "Others": "₹4,92,000"
            }
          },
          {
            name: "B.Tech CSE (AI & Data Science)",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,35,000",
              "Others": "₹5,25,000"
            }
          },
          {
            name: "B.Tech CSE (Artificial Intelligence)",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,35,000",
              "Others": "₹5,25,000"
            }
          },
          {
            name: "B.Tech Computer Science & Technology",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,12,000",
              "Others": "₹4,92,000"
            }
          },
          {
            name: "B.Tech Computer Science & Medical Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,12,000",
              "Others": "₹4,92,000"
            }
          },
          {
            name: "B.Tech AI & Robotics",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹4,12,000",
              "Others": "₹4,92,000"
            }
          },
          {
            name: "M.Tech Computer Science & Engineering",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹2,52,000"
            },
            notes: "Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year."
          },
          {
            name: "M.Tech CSE (AI & Machine Learning)",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹2,52,000"
            },
            notes: "Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year."
          },
          {
            name: "M.Tech AI & Data Science",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹2,52,000"
            },
            notes: "Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year."
          },
          {
            name: "M.Tech Artificial Intelligence",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹2,52,000"
            },
            notes: "Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year."
          },
          {
            name: "M.Tech AI & Robotics",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹2,52,000"
            },
            notes: "Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year."
          },
        ]
      },
      {
        name: "Electronics & Communication Department",
        programs: [
          {
            name: "B.Tech Electronics & Communication Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹3,22,000",
              "Others": "₹4,12,000"
            }
          },
          {
            name: "M.Tech Embedded System",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other circuit Branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹1,62,000"
            }
          }
        ]
      },
      {
        name: "Mechanical Engineering Department",
        programs: [
          {
            name: "B.Tech Mechanical Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹3,22,000",
              "Others": "₹4,12,000"
            }
          },
          {
            name: "M.Tech Design Engineering",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in B.Tech in Mechanical, Industrial Engineering & Management, Aerospace, Aeronautical, Automobile, or related disciplines with minimum 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: {
              "PGCET": "Not Available",
              "Others (Annual)": "₹1,62,000"
            }
          }
        ]
      },
      {
        name: "Aerospace Engineering Department",
        programs: [
          {
            name: "B.Tech Aerospace Engineering",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together.",
            fees: {
              "CET": "Not Available",
              "Ranking Based (JEE Mains/Uniguage/Comed-K)": "₹3,22,000",
              "Others": "₹4,12,000"
            }
          }
        ]
      }
    ]
  },
  "School of Computer Applications": {
    tagline: "Cutting-edge IT education for the digital age with industry certifications.",
    departments: [
      {
        name: "Department of Computer Applications",
        programs: [
          {
            name: "BCA - Bachelor of Computer Applications",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: {
              "Term I": "₹1,09,500",
              "Term II": "₹97,500",
              "Total": "₹2,07,000"
            }
          },
          {
            name: "BCA in AI & Data Sciences",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: {
              "Term I": "₹1,09,500",
              "Term II": "₹97,500",
              "Total": "₹2,07,000"
            }
          },
          {
            name: "B.Sc Data Science",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: {
              "Term I": "₹87,000",
              "Term II": "₹75,000",
              "Total": "₹1,62,000"
            }
          },
          {
            name: "B.Sc Cyber Security",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate.",
            fees: {
              "Term I": "₹87,000",
              "Term II": "₹75,000",
              "Total": "₹1,62,000"
            }
          },
          {
            name: "MCA - Master of Computer Applications",
            level: "PG",
            duration: "2 Years",
            eligibility: "Admission to First Year MCA shall be open to candidates with a UG degree in BCA/B.Sc.(CS/IT) or B.Sc./B.Com/BA from a recognized University with Mathematics at 10+2 level or Graduation Level. Obtained at least 50% marks in the Qualifying Examination.",
            fees: {
              "PGCET": "Not Available",
              "Term I": "₹1,77,000",
              "Term II": "₹1,65,000",
              "Total": "₹3,42,000"
            }
          },
          {
            name: "M.Sc Data Science",
            level: "PG",
            duration: "2 Years",
            eligibility: "B.Sc in Life Science or related fields such as Biotechnology, Microbiology, Genetics, Zoology, Botany, Biochemistry, Bioinformatics, Statistics, or Computer Science with minimum 50% aggregate.",
            fees: {
              "PGCET": "Not Available",
              "Term I": "₹82,000",
              "Term II": "₹70,000",
              "Total": "₹1,52,000"
            }
          },
          {
            name: "M.Sc Cyber Security",
            level: "PG",
            duration: "2 Years",
            eligibility: "B.Sc in Computer Science, Information Technology, Cyber Security, or related fields with minimum 50% aggregate.",
            fees: {
              "PGCET": "Not Available",
              "Term I": "₹82,000",
              "Term II": "₹70,000",
              "Total": "₹1,52,000"
            }
          }
        ]
      }
    ]
  },
  "School of Law": {
    tagline: "Training tomorrow's legal minds with a focus on justice and impact.",
    departments: [
      {
        name: "Department of Legal Studies",
        programs: [
          {
            name: "B.A. LL.B (Hons)",
            level: "UG",
            duration: "5 Years",
            eligibility: "10+2 or equivalent examination from a recognized Board with a minimum of 50% marks in aggregate. We accept CLAT scores.",
            fees: {
              "Tuition Fee": "₹2,02,000",
              "Other Fee": "₹50,000",
              "Total": "₹2,52,000"
            },
            scholarships: "Scholarship Available"
          },
          {
            name: "B.B.A. LL.B (Hons)",
            level: "UG",
            duration: "5 Years",
            eligibility: "10+2 or equivalent examination from a recognized Board with a minimum of 50% marks in aggregate. We accept CLAT scores.",
            fees: {
              "Tuition Fee": "₹2,02,000",
              "Other Fee": "₹50,000",
              "Total": "₹2,52,000"
            },
            scholarships: "Scholarship Available"
          },
          {
            name: "LL.B",
            level: "UG",
            duration: "3 Years",
            eligibility: "Graduation or equivalent examination from a recognized University with a minimum of 50% marks in aggregate.",
            fees: {
              "Tuition Fee": "₹1,37,000",
              "Other Fee": "₹40,000",
              "Total": "₹1,77,000"
            }
          },
          {
            name: "LL.M",
            level: "PG",
            duration: "1 Year",
            eligibility: "A bachelor's degree in law (LL.B) or an equivalent degree from recognized university. A minimum of 50% marks in the qualifying degree (40% for SC/ST candidates). Valid scores in any national level entrance exams like CLAT or AILET.",
            fees: {
              "Tuition Fee": "₹1,10,000",
              "Other Fee": "₹35,000",
              "Total": "₹1,45,000"
            },
            notes: "Tracks include Corporate & Commercial Law, Intellectual Property Rights, and Human Rights Law."
          }
        ]
      }
    ]
  },
  "School of Basic & Applied Sciences": {
    tagline: "Practical approaches rooted in foundational sciences with advanced lab research.",
    departments: [
      {
        name: "Department of Life Sciences",
        programs: [
          {
            name: "B.Sc Life Science (Biotechnology, Biochemistry, Genetics)",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry and English with Biology or Biotechnology or Mathematics or any other Life Science subject as optional and a minimum of 45% marks taken together.",
            fees: {
              "Term I": "₹97,000",
              "Term II": "₹85,000",
              "Total": "₹1,82,000"
            }
          },
          {
            name: "M.Sc Biochemistry",
            level: "PG",
            duration: "2 Years",
            eligibility: "B.Sc. with any of the following life science subjects such as Biochemistry, Chemistry, Biotechnology, Microbiology, Bioinformatics, Anatomy, Physiology, etc. Students having degree in Medical Sciences, Nursing Sciences, Pharmaceutical Sciences are also eligible.",
            fees: {
              "Term I": "₹1,02,000",
              "Term II": "₹90,000",
              "Total": "₹1,92,000"
            }
          },
          {
            name: "M.Sc Biotechnology",
            level: "PG",
            duration: "2 Years",
            eligibility: "B.Sc. with any of the following subjects in Life Science such as Biotechnology, Microbiology, Genetics, Zoology, Botany, Biochemistry, Bioinformatics, etc.",
            fees: {
              "Term I": "₹1,02,000",
              "Term II": "₹90,000",
              "Total": "₹1,92,000"
            }
          },
          {
            name: "M.Sc Microbiology",
            level: "PG",
            duration: "2 Years",
            eligibility: "B.Sc. in any stream of science with any of the following life science subjects such as Genetics, Zoology, Botany, Biochemistry, Chemistry, Microbiology etc. Students having degree in Medical Sciences, Nursing Sciences, Pharmaceutical Sciences are also eligible.",
            fees: {
              "Term I": "₹1,02,000",
              "Term II": "₹90,000",
              "Total": "₹1,92,000"
            }
          },
          {
            name: "M.Sc Molecular Biology and Genetics",
            level: "PG",
            duration: "2 Years",
            eligibility: "B.Sc. with any of the following life science subjects such as Genetics, Zoology, Botany, Biochemistry, Chemistry, Microbiology, Bioinformatics, Anthropology, Anatomy, Physiology, etc. Students having degree in Medical Sciences, Nursing Sciences, Pharmaceutical Sciences are also eligible.",
            fees: {
              "Term I": "₹1,02,000",
              "Term II": "₹90,000",
              "Total": "₹1,92,000"
            }
          }
        ]
      }
    ]
  },
  "School of Commerce & Management": {
    tagline: "Shaping tomorrow's business and industry leaders with professional certifications.",
    departments: [
      {
        name: "Department of Commerce",
        programs: [
          {
            name: "B.Com Regular",
            level: "UG",
            duration: "3 Years",
            eligibility: "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study with aggregate of 50% (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: {
              "Term I": "₹79,500",
              "Term II": "₹77,500",
              "Total (Incl. Library Deposit)": "₹1,57,000"
            }
          },
          {
            name: "B.Com ACCA Integrated",
            level: "UG",
            duration: "3 Years",
            eligibility: "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study with aggregate of 50% (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: {
              "Term I": "₹99,500",
              "Term II": "₹87,500",
              "Total (Incl. Library Deposit)": "₹1,87,000"
            },
            notes: "Professional ACCA coaching integrated within the timetable."
          },
          {
            name: "B.Com CMA Integrated",
            level: "UG",
            duration: "3 Years",
            eligibility: "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study with aggregate of 50% (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: {
              "Term I": "₹99,500",
              "Term II": "₹87,500",
              "Total (Incl. Library Deposit)": "₹1,87,000"
            },
            notes: "Professional CMA coaching integrated within the timetable."
          },
          {
            name: "B.Com With CA Coaching",
            level: "UG",
            duration: "3 Years",
            eligibility: "Candidates who have completed two year Pre – University course of Karnataka State or its equivalent with Business Studies and Accountancy as two major subjects of study with aggregate of 50% (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: {
              "Term I": "₹99,500",
              "Term II": "₹87,500",
              "Total (Incl. Library Deposit)": "₹1,87,000"
            },
            notes: "Professional CA coaching integrated within the timetable."
          }
        ]
      },
      {
        name: "Department of Management",
        programs: [
          {
            name: "BBA Regular",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC category).",
            fees: {
              "Term I": "₹1,07,000",
              "Term II": "₹1,05,000",
              "Total (Incl. Library Deposit)": "₹2,12,000"
            }
          },
          {
            name: "MBA",
            level: "PG",
            duration: "2 Years",
            eligibility: "Pass in a Bachelors degree of three years in any stream with minimum 50% (45% in case of candidates belonging to SC/ST & OBC category) of marks in aggregate from any recognized University / Institution.",
            fees: {
              "PGCET": "Not Available",
              "Term I": "₹3,07,000",
              "Term II": "₹2,95,000",
              "Total": "₹6,02,000"
            },
            notes: "Dual specialization options covering Business Analytics, Finance, Marketing, HR, and Operations."
          }
        ]
      }
    ]
  },
  "School of Health Sciences": {
    tagline: "Equipping future leaders in global health and wellness with clinical immersion.",
    departments: [
      {
        name: "College of Allied Health Sciences",
        programs: [
          {
            name: "B.Sc Medical Radiology & Imaging Technology",
            level: "UG",
            duration: "3 Years",
            eligibility: "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent with Physics, Chemistry and Biology as major subjects of study.",
            fees: {
              "Tuition Fee": "₹1,42,000",
              "Other Fee": "₹30,000",
              "Total": "₹1,72,000"
            }
          },
          {
            name: "B.Sc Medical Laboratory Technology",
            level: "UG",
            duration: "3 Years",
            eligibility: "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent with Physics, Chemistry and Biology as major subjects of study.",
            fees: {
              "Tuition Fee": "₹1,12,000",
              "Other Fee": "₹30,000",
              "Total": "₹1,42,000"
            }
          },
          {
            name: "B.Sc Anesthesia and Operation Theatre Technology",
            level: "UG",
            duration: "3 Years",
            eligibility: "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent with Physics, Chemistry and Biology as major subjects of study.",
            fees: {
              "Tuition Fee": "₹1,42,000",
              "Other Fee": "₹30,000",
              "Total": "₹1,72,000"
            }
          },
          {
            name: "B.Sc Emergency & Trauma Care Technology",
            level: "UG",
            duration: "3 Years",
            eligibility: "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent with Physics, Chemistry and Biology as major subjects of study.",
            fees: {
              "Tuition Fee": "₹1,12,000",
              "Other Fee": "₹30,000",
              "Total": "₹1,42,000"
            }
          },
          {
            name: "B.Sc Cardiac Care Technology",
            level: "UG",
            duration: "3 Years",
            eligibility: "A candidate seeking admission shall have studied English as one of the principal subjects and shall have passed Two-year Pre-University examination or equivalent with Physics, Chemistry and Biology as major subjects of study.",
            fees: {
              "Tuition Fee": "₹1,72,000",
              "Other Fee": "₹30,000",
              "Total": "₹2,02,000"
            }
          },
          {
            name: "MPH - Masters in Public Health",
            level: "PG",
            duration: "2 Years",
            eligibility: "A candidate seeking admission should have a degree in MBBS or BDS or BAMS or B.Sc Nursing or BPT or B. Pharm with minimum 50% marks from a University established under law.",
            fees: {
              "Tuition Fee": "₹1,12,000",
              "Others Fee": "₹30,000",
              "Total": "₹1,42,000"
            }
          }
        ]
      },
      {
        name: "College of Pharmaceutical Sciences",
        programs: [
          {
            name: "B.Pharm",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in 10+2 with Physics, Chemistry and English with Mathematics or Biotechnology or Computer Science or Biology as optional subjects with a minimum of 40% marks in aggregate.",
            fees: {
              "CET": "Not Available",
              "Others": "₹2,82,000"
            }
          },
          {
            name: "M.Pharm Pharmaceutics",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed B.pharm from an institution recognized by the Pharmacy Council of India with a minimum of 50% marks in aggregate.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹3,02,000"
            }
          },
          {
            name: "M.Pharm Pharmacology",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed B.pharm from an institution recognized by the Pharmacy Council of India with a minimum of 50% marks in aggregate.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹3,02,000"
            }
          },
          {
            name: "M.Pharm Regulatory Affairs",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed B.pharm from an institution recognized by the Pharmacy Council of India with a minimum of 50% marks in aggregate.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹3,02,000"
            }
          },
          {
            name: "Pharm.D",
            level: "Professional",
            duration: "6 Years",
            eligibility: "Pass in 10+2 examination with Physics, Chemistry and English with Mathematics or Biology as optional subjects / DPharm or any other equivalent qualification recognized by the Pharmacy Council of India.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹4,52,000"
            }
          }
        ]
      },
      {
        name: "College of Nursing Sciences",
        programs: [
          {
            name: "B.Sc Nursing",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry, Biology and English and a minimum of 45% marks taken together.",
            fees: {
              "CET": "Not Available",
              "Term I": "₹97,000",
              "Term II": "₹85,000",
              "Total": "₹1,82,000"
            }
          },
          {
            name: "PB B.Sc Nursing",
            level: "UG",
            duration: "2 Years",
            eligibility: "Pass in GNM after 10+2 or equivalent examination preferably with Science subjects with 50% marks in aggregate. Candidates should be a registered Nurse and registered Midwife.",
            fees: {
              "CET": "Not Available",
              "Others": "₹92,000"
            }
          },
          {
            name: "M.Sc Medical Surgical Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: 1 year of experience after BSc Nursing in a hospital or community health program.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹1,42,000"
            }
          },
          {
            name: "M.Sc Child Health Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: 1 year of experience after BSc Nursing.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹1,42,000"
            }
          },
          {
            name: "M.Sc Mental Health Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: 1 year of experience after BSc Nursing.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹1,42,000"
            }
          },
          {
            name: "M.Sc Obstetrics and Genealogical Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: 1 year of experience after BSc Nursing.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹1,42,000"
            }
          },
          {
            name: "M.Sc Community Health Nursing",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BSc/PC BSc/PB BSc Nursing recognized by the Indian Nursing Council and a minimum of 55% marks in aggregate. Experience: 1 year of experience after BSc Nursing.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹1,42,000"
            }
          }
        ]
      },
      {
        name: "College of Physiotherapy",
        programs: [
          {
            name: "Bachelor's in Physiotherapy (BPT)",
            level: "UG",
            duration: "4 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry, English and Biology with a minimum of 40% marks taken together.",
            fees: {
              "CET": "Not Available",
              "Others": "₹2,17,000"
            }
          },
          {
            name: "M.P.T Sports & Muscular Skeletal",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹2,77,000"
            }
          },
          {
            name: "M.P.T Cardio Pulmonary",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹2,77,000"
            }
          },
          {
            name: "M.P.T Women's Health",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹2,77,000"
            }
          },
          {
            name: "M.P.T Neuro",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹2,77,000"
            }
          },
          {
            name: "M.P.T Community Based Rehabilitation",
            level: "PG",
            duration: "2 Years",
            eligibility: "Candidates should have passed BPT from a recognized university with a minimum of 50% marks in aggregate. INTERNSHIP: Completed or completing their compulsory internship.",
            fees: {
              "PGCET": "Not Available",
              "Others": "₹2,77,000"
            }
          }
        ]
      }
    ]
  },
  "School of Arts, Design & Humanities": {
    tagline: "Cultivating creativity, culture, and critical thinking through storytelling and digital media.",
    departments: [
      {
        name: "Department of Journalism & Mass Communication",
        programs: [
          {
            name: "B.A. Journalism and Mass Communication",
            level: "UG",
            duration: "3 Years",
            eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent and a minimum of 45% marks in aggregate. Arts group subjects are preferred.",
            fees: {
              "Term I": "₹77,000",
              "Term II": "₹75,000",
              "Total": "₹1,52,000"
            },
            notes: "Includes newsroom simulations, digital production labs, and internships with media houses."
          }
        ]
      }
    ]
  },
  "School of Design & Digital Trans-Media": {
    tagline: "Studio-based design programs with immersive projects in product, UX, animation, and game design.",
    departments: [
      {
        name: "Department of Design",
        programs: [
          {
            name: "B.Design Product Design",
            level: "UG",
            duration: "4 Years",
            eligibility: "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: {
              "Total": "₹3,02,000"
            }
          },
          {
            name: "B.Design User Experience Design",
            level: "UG",
            duration: "4 Years",
            eligibility: "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: {
              "Total": "₹3,02,000"
            }
          },
          {
            name: "B.Design Animation and VFX",
            level: "UG",
            duration: "4 Years",
            eligibility: "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: {
              "Total": "₹3,02,000"
            }
          },
          {
            name: "B.Design Game Design",
            level: "UG",
            duration: "4 Years",
            eligibility: "Students with a minimum of 50% in Class XII from Science, Commerce, Arts, and Humanities.",
            fees: {
              "Total": "₹3,02,000"
            }
          }
        ]
      }
    ]
  }
};

const keyContent = {
  university: {
    name: 'Dayananda Sagar University',
    tagline: 'India\'s AI-First University',
    location: 'Bangalore, Karnataka, India',
    accreditation: 'NAAC A+ Accredited',
    established: 'Building on legacy since 1979',
    website: 'https://dsu.edu.in',
    description: 'Dayananda Sagar University is India\'s AI-First University offering world-class education in Engineering, Law, Health Sciences, Commerce, Basic and Applied Sciences, Computer Applications, Design, and Humanities.'
  },

  researchInnovation: {
    title: 'Research & Innovation',
    highlights: [
      'Hackathons & 48-hour innovation sprints',
      'NASA Space Apps & international competitions',
      'Student-led research labs & mentorship',
      'AI labs and cutting-edge research facilities',
      'Industry partnerships and collaborative research',
      'Patent filing and intellectual property support'
    ],
    entrepreneurship: [
      'DERBI Foundation - Established 2009',
      'AIC-DSU Innovation Foundation - Government backed by NITI Aayog',
      '25+ startups incubated',
      '₹50Cr+ funding raised',
      '150+ jobs created'
    ]
  },

  campusLife: {
    title: 'Campus Life at DSU',
    pillars: [
      'Research & Innovation - Hackathons, hands-on projects, AI labs',
      'Leadership & Careers - Startup incubation, industry partnerships',
      'Creative Expression - Performing arts, cultural events',
      'Sports & Wellness - Athletic programs, community service'
    ],
    facilities: [
      'State-of-the-art library with 2M+ books',
      'AI labs and maker spaces with 3D printing',
      'Modern hostels with high-speed connectivity',
      'Sports facilities and wellness centers',
      'Performance venues and recreational areas'
    ],
    organizations: '100+ clubs and student organizations'
  },

  admissions: {
    international: {
      title: 'Study in India Initiative',
      philosophy: 'वसुधैव कुटुम्बकम | Vasudhaiva Kutumbakam - The world is one family',
      contact: 'international-admissions@dsu.edu.in',
      whatsapp: ['+91 9606022152', '+91 9606022149'],
      studyInIndiaGov: 'https://studyinindia.gov.in/'
    },
    process: 'Online application through admissions.dsu.edu.in',
    admissionsPortal: 'https://admissions.dsu.edu.in',
    internationalAdmissions: 'https://international-admissions.dsu.edu.in'
  },

  externalLinks: {
    virtualTour: 'https://dsu.edu.in/virtual-tour/',
    hostel: 'https://myposhtell.com',
    derbiFoundation: 'https://derbifoundation.com',
    aicDsu: 'https://aicdsu.foundation',
    studyInIndia: 'https://studyinindia.gov.in/',
    internationalPage: 'https://dsu.edu.in/international/',
    internationalAffairs: 'https://dsu.edu.in/international/international-affairs/'
  },

  partnerships: [
    'NVIDIA AI Architecture Partnership',
    'Industry collaborations with leading tech companies',
    'International university partnerships',
    'Research collaborations with IITs and premier institutions'
  ],

  infrastructure: [
    'World-class campus with modern facilities',
    'AI and research labs',
    'Library with extensive digital archives',
    'Maker spaces and innovation hubs',
    'Sports complexes',
    'Hostel accommodation',
    'Healthcare facilities'
  ],

  achievements: [
    'NAAC A+ Accreditation',
    '25,000+ Active Students',
    '100+ Clubs & Societies',
    'High placement rates with top companies',
    'International research collaborations',
    'Multiple patents and publications'
  ]
};

function generateTXT() {
  let output = `
================================================================================
DAYANANDA SAGAR UNIVERSITY - COMPLETE KNOWLEDGE BASE
India's AI-First University
Academic Year 2026-27
================================================================================

UNIVERSITY OVERVIEW
-------------------
Name: ${keyContent.university.name}
Tagline: ${keyContent.university.tagline}
Location: ${keyContent.university.location}
Accreditation: ${keyContent.university.accreditation}
Legacy: ${keyContent.university.established}
Website: ${keyContent.university.website}

Description:
${keyContent.university.description}

================================================================================
COMPLETE PROGRAMS, FEES, AND ELIGIBILITY DETAILS
Academic Year 2026-27
================================================================================

IMPORTANT NOTES:
• All fees listed are annual fees for the academic year 2026-27
• CET = Common Entrance Test (Karnataka)
• PGCET = Post-Graduate Common Entrance Test
• Fees may vary based on government revisions
• For detailed brochures and application: https://dsu.edu.in/eligibility

`;

  // Add detailed program information for each school
  for (const [schoolName, schoolData] of Object.entries(detailedProgramData)) {
    output += `\n${'='.repeat(80)}\n`;
    output += `${schoolName.toUpperCase()}\n`;
    output += `${'='.repeat(80)}\n`;
    output += `${schoolData.tagline}\n\n`;

    for (const dept of schoolData.departments) {
      output += `\n${'-'.repeat(80)}\n`;
      output += `DEPARTMENT: ${dept.name}\n`;
      output += `${'-'.repeat(80)}\n\n`;

      for (const program of dept.programs) {
        output += `\nProgram: ${program.name}\n`;
        output += `Level: ${program.level} | Duration: ${program.duration}\n`;
        output += `\nEligibility:\n${program.eligibility}\n`;
        
        output += `\nFee Structure (Annual):\n`;
        for (const [feeType, amount] of Object.entries(program.fees)) {
          output += `  • ${feeType}: ${amount}\n`;
        }
        
        if (program.scholarships) {
          output += `\n💰 ${program.scholarships}\n`;
        }
        
        if (program.notes) {
          output += `\nSpecial Notes:\n${program.notes}\n`;
        }
        
        output += `\nMore Info: ${BASE_URL}/eligibility\n`;
        output += `${'-'.repeat(40)}\n`;
      }
    }
  }

  output += `
================================================================================
RESEARCH & INNOVATION
================================================================================

${keyContent.researchInnovation.title}

Key Highlights:
${keyContent.researchInnovation.highlights.map(h => `  • ${h}`).join('\n')}

Entrepreneurship Ecosystem:
${keyContent.researchInnovation.entrepreneurship.map(e => `  • ${e}`).join('\n')}

================================================================================
CAMPUS LIFE
================================================================================

${keyContent.campusLife.title}

Four Pillars of Excellence:
${keyContent.campusLife.pillars.map(p => `  • ${p}`).join('\n')}

World-Class Facilities:
${keyContent.campusLife.facilities.map(f => `  • ${f}`).join('\n')}

Student Organizations: ${keyContent.campusLife.organizations}

================================================================================
INTERNATIONAL ADMISSIONS
================================================================================

${keyContent.admissions.international.title}

Philosophy: ${keyContent.admissions.international.philosophy}

Contact Information:
  Email: ${keyContent.admissions.international.contact}
  WhatsApp: ${keyContent.admissions.international.whatsapp.join(', ')}
  Study in India Portal: ${keyContent.admissions.international.studyInIndiaGov}

Application Process: ${keyContent.admissions.process}

Application Portals:
  General Admissions: ${keyContent.admissions.admissionsPortal}
  International Admissions: ${keyContent.admissions.internationalAdmissions}

================================================================================
IMPORTANT EXTERNAL LINKS
================================================================================

  Virtual Campus Tour: ${keyContent.externalLinks.virtualTour}
  Hostel Accommodation: ${keyContent.externalLinks.hostel}
  DERBI Foundation: ${keyContent.externalLinks.derbiFoundation}
  AIC-DSU Innovation Foundation: ${keyContent.externalLinks.aicDsu}
  Study in India Gov Portal: ${keyContent.externalLinks.studyInIndia}
  International Page: ${keyContent.externalLinks.internationalPage}
  International Affairs: ${keyContent.externalLinks.internationalAffairs}

================================================================================
PARTNERSHIPS & COLLABORATIONS
================================================================================

${keyContent.partnerships.map(p => `  • ${p}`).join('\n')}

================================================================================
INFRASTRUCTURE
================================================================================

${keyContent.infrastructure.map(i => `  • ${i}`).join('\n')}

================================================================================
KEY ACHIEVEMENTS
================================================================================

${keyContent.achievements.map(a => `  • ${a}`).join('\n')}

================================================================================
WEBSITE NAVIGATION STRUCTURE
================================================================================

All available pages on the website (Full URLs):

${routes.map(route => `  ${route.url.padEnd(80)} - ${route.title}`).join('\n')}

================================================================================
CONTACT INFORMATION
================================================================================

Main Website: https://dsu.edu.in
General Inquiries: Contact through website

International Admissions:
  Email: international-admissions@dsu.edu.in
  WhatsApp: +91 9606022152, +91 9606022149
  Portal: https://international-admissions.dsu.edu.in
  Study in India: https://studyinindia.gov.in/

Admissions & Applications:
  General Admissions Portal: https://admissions.dsu.edu.in
  Eligibility & Fees: https://dsu.edu.in/eligibility
  Virtual Campus Tour: https://dsu.edu.in/virtual-tour/
  International Page: https://dsu.edu.in/international/

Innovation & Entrepreneurship:
  DERBI Foundation: https://derbifoundation.com
  AIC-DSU Foundation: https://aicdsu.foundation

Hostel & Accommodation:
  Hostel Portal: https://myposhtell.com

================================================================================
QUICK FACTS
================================================================================

  • NAAC A+ Accredited University
  • 25,000+ Active Students
  • 100+ Clubs & Societies
  • India's AI-First University
  • Multiple schools offering diverse programs
  • Strong industry partnerships
  • World-class infrastructure
  • Active research and innovation ecosystem
  • International student programs
  • Government-backed incubation center (AIC-DSU)
  • Comprehensive fee structures and scholarships available
  • Multiple admission pathways (CET, CLAT, JEE, Direct)

================================================================================
Generated: ${new Date().toLocaleString()}
Purpose: RAG Chatbot Knowledge Base
Academic Year: 2026-27
================================================================================
`;

  return output;
}

// Generate files
const txtContent = generateTXT();

const outputDir = path.join(__dirname, '..', 'knowledge-base');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'dsu-knowledge-base.txt'), txtContent);

// Also generate the links files
const allLinks = routes.map(r => r.url);
fs.writeFileSync(path.join(outputDir, 'all-links.txt'), allLinks.join('\n'));
fs.writeFileSync(path.join(outputDir, 'all-links.json'), JSON.stringify(routes, null, 2));

console.log('✅ Knowledge base files generated successfully!');
console.log('📁 Location: knowledge-base/');
console.log('  - dsu-knowledge-base.txt (with detailed fees and eligibility)');
console.log('  - all-links.txt');
console.log('  - all-links.json');
