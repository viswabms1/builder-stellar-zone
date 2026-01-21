/**
 * Vercel Serverless Function: RAG Chat API
 *
 * Production-ready RAG (Retrieval-Augmented Generation) chat endpoint
 * for DSU Admissions chatbot. Uses OpenAI Chat Completions API with
 * embedded knowledge base for context retrieval.
 *
 * This is the Vercel equivalent of server/routes/rag-chat.ts
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

// ============================================================================
// KNOWLEDGE BASE (Embedded for Vercel Serverless)
// ============================================================================

const KNOWLEDGE_BASE = `
================================================================================
DAYANANDA SAGAR UNIVERSITY - COMPLETE KNOWLEDGE BASE
India's AI-First University
Academic Year 2026-27
================================================================================

UNIVERSITY OVERVIEW
-------------------
Name: Dayananda Sagar University
Tagline: India's AI-First University
Location: Bangalore, Karnataka, India
Accreditation: NAAC A+ Accredited
Legacy: Building on legacy since 1979
Website: https://8660401238.vercel.app

Description:
Dayananda Sagar University is India's AI-First University offering world-class education in Engineering, Law, Health Sciences, Commerce, Basic and Applied Sciences, Computer Applications, Design, and Humanities.

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


================================================================================
SCHOOL OF ENGINEERING
================================================================================
Innovation-driven education for the tech-savvy world with cutting-edge AI labs and research facilities.

PROGRAMS OFFERED
----------------

B.TECH UNDERGRADUATE PROGRAMS:

COMPUTER SCIENCE & ENGINEERING SPECIALIZATIONS:
  1. B.Tech Computer Science & Technology (4 Years)
  2. B.Tech Computer Science & Medical Engineering (4 Years)
  3. B.Tech CSE (Artificial Intelligence & Machine Learning) (4 Years)
  4. B.Tech CSE (Data Science) (4 Years)
  5. B.Tech CSE (Cyber Security) (4 Years)
  6. B.Tech CSE (AI & Data Science) (4 Years)
  7. B.Tech CSE (Artificial Intelligence) (4 Years)
  8. B.Tech AI & Robotics (4 Years)

OTHER ENGINEERING SPECIALIZATIONS:
  9. B.Tech Electronics & Communication Engineering (4 Years)
  10. B.Tech Mechanical Engineering (4 Years)
  11. B.Tech Aerospace Engineering (4 Years)

M.TECH POSTGRADUATE PROGRAMS:
  - M.Tech Computer Science & Engineering (2 Years)
  - M.Tech CSE (AI & Machine Learning) (2 Years)
  - M.Tech AI & Data Science (2 Years)
  - M.Tech Artificial Intelligence (2 Years)
  - M.Tech AI & Robotics (2 Years)
  - M.Tech Embedded System (2 Years)
  - M.Tech Design Engineering (2 Years)

ELIGIBILITY REQUIREMENTS
------------------------

UNDERGRADUATE (B.Tech) PROGRAMS:
  - Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the following: Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects.
  - Minimum of 45% marks in the above subjects taken together (40% for SC/ST/OBC candidates).

POSTGRADUATE (M.Tech) PROGRAMS:
  - Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other related branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).
  - Exception (Design Engineering): B.Tech in Mechanical, Industrial Engineering & Management, Aerospace, Aeronautical, Automobile, or related disciplines with minimum 50% marks in aggregate (45% for SC/ST/OBC).

FEE STRUCTURE
-------------

B.TECH PROGRAMS (Annual Fees):
  - CET: Not Available
  - Ranking Based (JEE Mains / Uniguage / Comed-K): ₹3,22,000 - ₹4,35,000
  - Others: ₹4,12,000 - ₹5,25,000

M.Tech Programs (Annual Fees):
  - PGCET: Not Available
  - Annual: ₹1,62,000 - ₹2,52,000

Special Notes (M.Tech):
  Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year.

More Info: https://dsu.edu.in/eligibility

================================================================================
SCHOOL OF COMPUTER APPLICATIONS
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  1. BCA in Computer Applications (3 Years)
  2. BCA in Artificial Intelligence & Data Sciences (3 Years)
  3. B.Sc in Data Science (3 Years)
  4. B.Sc in Cyber Security (3 Years)

Eligibility:
  - 10+2 or equivalent with a minimum of 45% marks in aggregate.

Fees (Annual - 2026-27):
  - BCA in Computer Applications: ₹2,07,000 (Term I: ₹1,09,500, Term II: ₹97,500)
  - BCA in Artificial Intelligence & Data Sciences: ₹2,07,000 (Term I: ₹1,09,500, Term II: ₹97,500)
  - B.Sc in Data Science: ₹1,62,000 (Term I: ₹87,000, Term II: ₹75,000)
  - B.Sc in Cyber Security: ₹1,62,000 (Term I: ₹87,000, Term II: ₹75,000)

POSTGRADUATE PROGRAMS:
Programs Offered:
  1. MCA in Computer Applications (2 Years)
  2. M.Sc in Data Science (2 Years)
  3. M.Sc in Cyber Security (2 Years)

Eligibility:
  - BCA/B.Sc.(CS/IT) or B.Sc./B.Com/BA with Mathematics in 10+2 level.

Fees (Annual - 2026-27):
  - MCA in Computer Applications: ₹3,42,000 (Term I: ₹1,77,000, Term II: ₹1,65,000)
  - M.Sc in Data Science: ₹1,52,000 (Term I: ₹82,000, Term II: ₹70,000)
  - M.Sc in Cyber Security: ₹1,52,000 (Term I: ₹82,000, Term II: ₹70,000)

================================================================================
SCHOOL OF LAW
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  1. B.A. LL.B (5 Years)
  2. B.B.A. LL.B (5 Years)
  3. LL.B (3 Years)

Eligibility:
  - B.A. LL.B and B.B.A. LL.B: 10+2 or equivalent with a minimum of 50% marks. CLAT and DSAT scores accepted.
  - LL.B: Graduation or equivalent examination with a minimum of 50% marks.

Fees (Annual - 2026-27):
  - B.A. LL.B and B.B.A. LL.B: ₹2,52,000 (Tuition Fee: ₹2,02,000, Other Fee: ₹50,000)
  - LL.B: ₹1,77,000 (Tuition Fee: ₹1,37,000, Other Fee: ₹40,000)

POSTGRADUATE PROGRAMS:
Programs Offered:
  1. LL.M (1 Year)

Eligibility:
  - LL.B with a minimum of 50% marks.

Fees (Annual - 2026-27):
  - LL.M: ₹1,45,000 (Tuition Fee: ₹1,10,000, Other Fee: ₹35,000)

================================================================================
SCHOOL OF COMMERCE & MANAGEMENT
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  - B.Com Regular (3 Years)
  - B.Com ACCA Integrated (3 Years)
  - B.Com CMA Integrated (3 Years)
  - B.Com With CA Coaching (3 Years)
  - BBA Regular (3 Years)

Eligibility:
  - B.Com Programs: 10+2 with Business Studies and Accountancy with aggregate of 50% (45% for SC/ST & OBC).
  - BBA Regular: 10+2 or equivalent with a minimum of 50% marks in aggregate (45% for SC/ST & OBC).

Fees (Annual - 2026-27):
  - B.Com Regular: ₹1,57,000 (Term I: ₹79,500, Term II: ₹77,500)
  - B.Com ACCA Integrated / CMA Integrated / CA Coaching: ₹1,87,000 (Term I: ₹99,500, Term II: ₹87,500)
  - BBA Regular: ₹2,12,000 (Term I: ₹1,07,000, Term II: ₹1,05,000)

POSTGRADUATE PROGRAMS:
Programs Offered:
  - MBA (2 Years)

Eligibility:
  - Bachelor's degree in any stream with minimum 50% (45% for SC/ST & OBC).

Fees (Annual - 2026-27):
  - MBA: ₹6,02,000 (Term I: ₹3,07,000, Term II: ₹2,95,000)

Special Notes:
  MBA offers dual specialization options covering Business Analytics, Finance, Marketing, HR, and Operations.

================================================================================
SCHOOL OF HEALTH SCIENCES
================================================================================

COLLEGE OF ALLIED HEALTH SCIENCES:
UNDERGRADUATE PROGRAMS:
  1. B.Sc in Medical Radiology & Imaging Technology (3 Years) - ₹1,72,000
  2. B.Sc in Medical Laboratory Technology (3 Years) - ₹1,42,000
  3. B.Sc in Anesthesia and Operation Theatre Technology (3 Years) - ₹1,72,000
  4. B.Sc in Emergency & Trauma Care Technology (3 Years) - ₹1,42,000
  5. B.Sc in Cardiac Care Technology (3 Years) - ₹2,02,000

Eligibility: 10+2 with Physics, Chemistry, Biology, and English with a minimum of 45% marks.

POSTGRADUATE PROGRAMS:
  1. MPH - Masters in Public Health (2 Years) - ₹1,42,000

Eligibility: Degree in MBBS, BDS, BAMS, B.Sc Nursing, BPT, B.Pharm with minimum 50% marks.

COLLEGE OF PHARMACEUTICAL SCIENCES:
UNDERGRADUATE PROGRAMS:
  1. B.Pharm (4 Years) - CET: ₹2,52,000, DSAT: ₹2,82,000

Eligibility: 10+2 with Physics, Chemistry, English with Math/Biotech/CS/Biology with minimum 40% marks.

POSTGRADUATE PROGRAMS:
  1. M.Pharma in Pharmaceutics, Pharmacology, Regulatory Affairs (2 Years) - ₹3,02,000
  2. Pharm D (6 Years) - ₹4,52,000

Eligibility: B.Pharm with minimum 50% marks.

COLLEGE OF NURSING SCIENCES:
UNDERGRADUATE PROGRAMS:
  1. B.Sc in Nursing (4 Years) - ₹1,82,000
  2. PB B.Sc in Nursing (2 Years) - ₹92,000

Eligibility:
  - B.Sc in Nursing: 10+2 with Physics, Chemistry, Biology, English with 45% marks.
  - PB B.Sc in Nursing: GNM with 50% marks, registered Nurse and Midwife.

POSTGRADUATE PROGRAMS:
  1. M.Sc in Medical Surgical Nursing, Child Health Nursing, Mental Health Nursing, Obstetrics and Gynecology Nursing, Community Health Nursing (2 Years) - ₹1,42,000

Eligibility: B.Sc/PC B.Sc/PB B.Sc Nursing with minimum 55% marks.

COLLEGE OF PHYSIOTHERAPY:
UNDERGRADUATE PROGRAMS:
  1. Bachelor's in Physiotherapy (B.P.T.) (4 Years) - ₹2,17,000

Eligibility: 10+2 with Physics, Chemistry, Biology, and English with a minimum of 40% marks.

POSTGRADUATE PROGRAMS:
  1. M.P.T in Sports & Muscular Skeletal, Cardio Pulmonary, Women's Health, Neuro, Community-Based Rehabilitation (2 Years) - ₹2,77,000

Eligibility: BPT with a minimum of 50% marks in aggregate.

================================================================================
SCHOOL OF BASIC & APPLIED SCIENCES
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  1. B.Sc in Biotechnology, Biochemistry, and Genetics (3 Years)
  2. B.Sc in Biotechnology, Chemistry, and Microbiology (3 Years)
  3. B.Sc in Microbiology, Genetics, and Biochemistry (3 Years)

Eligibility:
  - 10+2 or equivalent with Physics, Chemistry, and Biology or Biotechnology with at least 45% marks.

Fees (Annual - 2026-27):
  - All B.Sc Programs: ₹1,82,000 (Term I: ₹97,000, Term II: ₹85,000)

POSTGRADUATE PROGRAMS:
Programs Offered:
  1. M.Sc in Biochemistry (2 Years)
  2. M.Sc in Biotechnology (2 Years)
  3. M.Sc in Microbiology (2 Years)
  4. M.Sc in Molecular Biology and Genetics (2 Years)

Eligibility:
  - B.Sc. with Life Science subjects or degrees in Medical Sciences, Nursing, Pharmaceutical Sciences.

Fees (Annual - 2026-27):
  - All M.Sc Programs: ₹1,92,000 (Term I: ₹1,02,000, Term II: ₹90,000)

================================================================================
SCHOOL OF ARTS, DESIGN & HUMANITIES
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  1. B.A. in Journalism and Mass Communication (3 Years)

Eligibility:
  - 10+2 with a minimum of 45% marks (Arts group subjects preferred).

Fees (Annual - 2026-27):
  - B.A. Journalism and Mass Communication: ₹1,52,000 (Term I: ₹77,000, Term II: ₹75,000)

================================================================================
SCHOOL OF DESIGN & DIGITAL TRANS-MEDIA
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  1. B.Design in Product Design (4 Years)
  2. B.Design in User Experience Design (4 Years)
  3. B.Design in Animation and VFX (4 Years)
  4. B.Design in Game Design (4 Years)

Eligibility:
  - Minimum 50% in Class XII from Science, Commerce, Arts, or Humanities.

Fees (Annual - 2026-27):
  - All B.Design Programs: ₹3,02,000

================================================================================
CAMPUS & FACILITIES
================================================================================

Campus Life at DSU:
• Research & Innovation - Hackathons, hands-on projects, AI labs
• Leadership & Careers - Startup incubation, industry partnerships
• Creative Expression - Performing arts, cultural events
• Sports & Wellness - Athletic programs, community service

World-Class Facilities:
• State-of-the-art library with 2M+ books
• AI labs and maker spaces with 3D printing
• Modern hostels with high-speed connectivity
• Sports facilities and wellness centers
• Performance venues and recreational areas

Student Organizations: 100+ clubs and student organizations

================================================================================
ADMISSION PROCESS
================================================================================

GENERAL ADMISSION PROCESS

Step 1: Check Eligibility
- Review the eligibility requirements for your chosen program
- Ensure you meet the minimum marks and subject requirements
- Check if entrance exam scores are required (CET, JEE, PGCET, CLAT, etc.)

Step 2: Register on Admissions Portal
- Visit the official admissions page: https://8660401238.vercel.app/admissions
- Create your account with your email and mobile number
- Fill in your basic information (name, date of birth, contact details)
- Choose your preferred program(s)

Step 3: Submit Online Application
- Fill out the complete application form with all required details
- Upload necessary documents (see below for required documents)
- Pay the application fee (if applicable)
- Submit the application and receive a confirmation

Step 4: Entrance Exam (if applicable)
- For certain programs, entrance exams are required:
  * UNDERGRADUATE: CET, JEE Mains (for B.Tech), UGAT (for law), NATA/Portfolio (for design)
  * POSTGRADUATE: PGCET (for M.Tech), CLAT/DSAT (for Law), CAT/MAT/GMAT (for MBA)
  * PROFESSIONAL: Pharmacy entrance exam (for B.Pharm), Nursing entrance exam
- Prepare according to exam guidelines and register for the exam
- Appear for the entrance exam on the scheduled date
- Secure a valid score as per the eligibility criteria

Step 5: Merit List/Selection
- DSU publishes merit lists based on:
  * Entrance exam scores (where applicable)
  * Academic performance (10+2/graduation marks)
  * Qualifying marks cutoff
- Check if your name appears in the merit list
- Merit lists are published on the admissions portal and DSU website

Step 6: Counseling & Seat Allocation (if applicable)
- Register for counseling process
- Participate in the counseling rounds
- Indicate your program and seat preferences
- Receive seat allotment letter with allocated program
- Check the allotted seat on the admissions portal

Step 7: Fee Payment & Enrollment
- Complete fee payment as per the fee structure
- Fee payment can be done online (net banking, card) or offline
- Maintain proof of payment
- Complete online enrollment after fee payment
- Receive enrollment confirmation and registration number

Step 8: Document Verification & Admission Completion
- Submit original documents for verification:
  * 10+2 / PUC marksheet and certificate
  * Graduation marksheet and certificate (for postgraduate programs)
  * Entrance exam scorecard
  * Birth certificate or proof of date of birth
  * Caste certificate (if applicable)
  * Income certificate (if applicable)
  * Medical fitness certificate
  * 4-6 passport size photographs
  * ID proof (Aadhar, PAN, Passport, etc.)
  * Address proof
- Participate in document verification at the campus
- Once verified, receive the final admission letter
- Enroll in student information system

IMPORTANT DATES & DEADLINES (2026-27)

For detailed admission deadlines for specific programs, visit:
https://8660401238.vercel.app/admissions/closing-dates

Key Milestones (Approximate):
- Application Registration: Starts from March/April
- Application Submission Deadline: Varies by program (typically May-June)
- Entrance Exam Dates: As per respective exam schedules
- Merit List Publication: June-July
- Counseling Rounds: July-August
- Final Admission: August

REQUIRED DOCUMENTS

GENERAL REQUIREMENTS (for all students):
- 10+2 marksheet and certificate (original and photocopy)
- Entrance exam scorecard (original and photocopy)
- Proof of Date of Birth (Birth Certificate, 10th pass certificate, Aadhar, etc.)
- ID Proof (Aadhar, PAN, Passport, Voter ID)
- Address Proof (Aadhar, Driving License, Utility Bill, Rental Agreement)
- Recent passport size photographs (4-6 color photos, white background, 3.5 x 4.5 cm)

ADDITIONAL FOR POSTGRADUATE PROGRAMS:
- Graduation degree certificate and marksheet
- Transcripts from all undergraduate semesters
- Character certificate from previous institution
- Medical fitness certificate

ADDITIONAL IF APPLICABLE:
- Caste Certificate (SC/ST/OBC) - as per government requirements
- Income Certificate - for scholarship applications
- Medical examination report
- Migration certificate (if from other state/university)
- Gap certificate (if there is a gap in studies)

APPLICATION MODES

ONLINE APPLICATION:
- Preferred method
- Apply through https://8660401238.vercel.app/admissions
- Upload all documents in PDF format
- Maximum file size: 5MB per document
- Supported formats: PDF only

FEE PAYMENT OPTIONS:
- Online: Debit Card, Credit Card, Net Banking, UPI
- Payment Gateway: Secure and encrypted
- Receipt generated automatically after successful payment
- Application fee (typically ₹500-1000, non-refundable)

COUNSELING PROCESS

ROUND 1:
- Register for counseling with your registration number
- Choose up to 5 programs in order of preference
- View seat availability
- Seat allocation based on merit and choice

SUBSEQUENT ROUNDS:
- Additional counseling rounds if seats available
- New choices can be exercised
- Floating and sliding categories of seats

SPOT ADMISSION:
- For remaining vacant seats after counseling rounds
- Direct admission to qualified candidates
- Subject to document verification

CONTACTS & SUPPORT

For Admissions Help:
- Website: https://8660401238.vercel.app/admissions
- Email: admissions@dsu.edu.in
- Phone: Contact through website
- Portal-based chat support available

For International Student Admissions:
- Email: international-admissions@dsu.edu.in
- WhatsApp: +91 9606022152, +91 9606022149
- Special admission pathway for international candidates

For Program-Specific Queries:
- School offices provide specific program information
- Faculty advisors available for consultation
- Virtual counseling available on request

ENTRANCE EXAMS ACCEPTED

UNDERGRADUATE:
- CET (Common Entrance Test) - Karnataka
- JEE Mains - National level engineering entrance
- UGAT - DSU's own entrance test for specific programs
- NATA - National Aptitude Test in Architecture
- Merit based selection for certain programs

POSTGRADUATE:
- PGCET - Post-Graduate Common Entrance Test
- CLAT - Common Law Admission Test
- DSAT - DSU's Standardized Aptitude Test
- CAT, MAT, GMAT - For MBA programs
- Merit based selection for certain programs

HEALTH SCIENCES:
- CEE/CET - Pharmacy entrance test
- Nursing entrance exams
- Professional entrance exams

SCHOLARSHIPS & FINANCIAL AID

Merit Scholarships:
- Based on entrance exam performance
- Up to 100% tuition fee waiver for top performers
- Partial scholarships for qualifying candidates

Need-based Scholarships:
- Available for deserving students
- Application required with income certificate
- Contact financial aid office for details

Government Scholarships:
- SC/ST scholarships as per government provisions
- Minority scholarships
- Post-Matric and Pre-Matric scholarships

Special Categories:
- Sports scholarships for athletes
- Reserved category benefits (SC/ST/OBC)
- PwD (Person with Disability) scholarships

Hostel Financial Assistance:
- Subsidized hostel for economically weaker sections
- Merit-based hostel scholarships
- Contact hostel office for application

POLICIES & GUIDELINES

Admission Terms:
- Admission is conditional on verification of documents
- False information leads to cancellation of admission
- All fees are non-refundable after confirmation
- Students must maintain academic standards

Code of Conduct:
- Students must follow DSU's code of conduct
- Attendance and academic policies apply
- Anti-ragging policy strictly enforced
- Grievance redressal mechanism available

Refund Policy:
- Application fee: Non-refundable
- Tuition fee: Refundable if cancelled before semester starts (95% refund)
- After semester starts: No refund on tuition fee
- Hostel charges: Follow hostel policy

Documentation Policy:
- Original documents required at time of admission
- Photocopies must be attested
- All documents valid as per education board norms
- Expired IDs require renewal

FREQUENTLY ASKED QUESTIONS ABOUT ADMISSION

Q: When does admission process start?
A: Typically in March/April for the academic year starting in July/August. Check the admissions portal for exact dates.

Q: Are entrance exams mandatory for all programs?
A: Not all programs require entrance exams. Some programs offer merit-based direct admission. Check the specific program requirements.

Q: Can I apply for multiple programs?
A: Yes, you can apply for multiple programs. You'll indicate preferences during counseling.

Q: What if I don't have entrance exam scores?
A: Some programs offer merit-based direct admission based on 10+2 marks. Check individual program eligibility.

Q: How long does the admission process take?
A: Typically 2-3 months from application to final admission.

Q: Is there any entrance test conducted by DSU?
A: Yes, DSU conducts UGAT and DSAT for specific undergraduate and postgraduate programs.

Q: When will I get the admission letter?
A: After successful document verification, usually within 1-2 weeks.

Q: Can I change my program after counseling?
A: Limited changes may be possible in subsequent counseling rounds. Contact admissions office for details.

Q: Is hostel accommodation guaranteed?
A: Hostel availability is subject to on-campus bed availability. Priority given to outstation students.

Q: How do I pay the fees?
A: Online payment via debit card, credit card, net banking, or UPI through the admissions portal.

================================================================================
INTERNATIONAL ADMISSIONS
================================================================================

Study in India Initiative
Philosophy: वसुधैव कुटुम्बकम | Vasudhaiva Kutumbakam - The world is one family

Contact:
  Email: international-admissions@dsu.edu.in
  WhatsApp: +91 9606022152, +91 9606022149
  Study in India Portal: https://studyinindia.gov.in/

================================================================================
RESEARCH & INNOVATION
================================================================================

• Hackathons & 48-hour innovation sprints
• NASA Space Apps & international competitions
• Student-led research labs & mentorship
• AI labs and cutting-edge research facilities
• Industry partnerships and collaborative research
• Patent filing and intellectual property support

Entrepreneurship Ecosystem:
• DERBI Foundation - Established 2009
• AIC-DSU Innovation Foundation - Government backed by NITI Aayog
• 25+ startups incubated
• ₹50Cr+ funding raised
• 150+ jobs created

================================================================================
PARTNERSHIPS
================================================================================

• NVIDIA AI Architecture Partnership
• Industry collaborations with leading tech companies
• International university partnerships
• Research collaborations with IITs and premier institutions

================================================================================
KEY ACHIEVEMENTS
================================================================================

• NAAC A+ Accreditation
• 25,000+ Active Students
• 100+ Clubs & Societies
• High placement rates with top companies
• International research collaborations
• Multiple patents and publications

================================================================================
CONTACT INFORMATION
================================================================================

Main Website: https://8660401238.vercel.app
Apply: https://8660401238.vercel.app/admissions
General Inquiries: Contact through website

International Admissions:
  Email: international-admissions@dsu.edu.in
  WhatsApp: +91 9606022152, +91 9606022149

Hostel & Accommodation: https://myposhtell.com
Virtual Campus Tour: https://dsu.edu.in/virtual-tour/
`;

// ============================================================================
// RAG RETRIEVAL FUNCTIONS
// ============================================================================

interface KnowledgeChunk {
  text: string;
  score: number;
}

/**
 * Split knowledge base into chunks for retrieval
 */
function getKnowledgeChunks(): Array<{ text: string; index: number }> {
  const chunkSize = 2000;
  const overlap = 300;
  const chunks: Array<{ text: string; index: number }> = [];

  for (let i = 0; i < KNOWLEDGE_BASE.length; i += chunkSize - overlap) {
    const chunk = KNOWLEDGE_BASE.substring(i, i + chunkSize);
    if (chunk.trim()) {
      chunks.push({
        text: chunk,
        index: chunks.length,
      });
    }
  }

  return chunks;
}

/**
 * Calculate similarity between query and text with comprehensive common sense understanding
 */
function calculateSimilarity(query: string, text: string): number {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  let score = 0;

  // ===== EXACT MATCH (HIGHEST PRIORITY) =====
  if (textLower.includes(queryLower)) {
    score += 50;
  }

  // ===== SYNONYM & ALIAS MAPPING (COMMON SENSE UNDERSTANDING) =====

  // School/Department Level Aliases
  const schoolAliases: { [key: string]: string[] } = {
    "health sciences": [
      "health",
      "healthcare",
      "medical",
      "hospital",
      "nursing",
      "pharmacy",
      "physiotherapy",
      "allied health",
      "pharm",
      "pt",
      "bpt",
    ],
    engineering: [
      "engineering",
      "tech",
      "technology",
      "machine",
      "cse",
      "ece",
      "mechanical",
      "aerospace",
      "embedded",
      "robotics",
    ],
    commerce: [
      "commerce",
      "business",
      "accounting",
      "finance",
      "bcom",
      "bba",
      "mba",
      "management",
      "accounting",
      "cma",
      "acca",
    ],
    computer: [
      "computer",
      "computing",
      "software",
      "it",
      "cse",
      "bca",
      "mca",
      "ai",
      "ml",
      "data science",
      "cyber",
    ],
    law: ["law", "legal", "llb", "llm", "governance", "corporate"],
    design: [
      "design",
      "creative",
      "ux",
      "ui",
      "animation",
      "vfx",
      "graphic",
      "product design",
    ],
    science: [
      "science",
      "research",
      "biotechnology",
      "microbiology",
      "chemistry",
      "biology",
      "physics",
    ],
    humanities: [
      "journalism",
      "arts",
      "communication",
      "media",
      "mass communication",
    ],
  };

  // Academic Level Aliases
  const levelAliases: { [key: string]: string[] } = {
    undergraduate: [
      "undergraduate",
      "ug",
      "bachelor",
      "bachelors",
      "b.tech",
      "b.sc",
      "b.com",
      "bca",
      "first degree",
    ],
    postgraduate: [
      "postgraduate",
      "pg",
      "master",
      "masters",
      "m.tech",
      "m.sc",
      "mba",
      "mca",
      "advanced degree",
    ],
    doctoral: ["doctoral", "doctorate", "phd", "ph.d", "research"],
  };

  // Query Concept Aliases
  const conceptAliases: { [key: string]: string[] } = {
    fees: [
      "fee",
      "cost",
      "price",
      "charge",
      "tuition",
      "expense",
      "payment",
      "rupees",
      "₹",
    ],
    eligibility: [
      "eligible",
      "eligibility",
      "qualify",
      "requirements",
      "pass",
      "marks",
      "percentage",
      "aggregate",
      "qualification",
      "entrance",
      "exam",
    ],
    admission: [
      "admission",
      "apply",
      "application",
      "enroll",
      "enrollment",
      "register",
      "registration",
      "intake",
      "seat",
      "process",
      "step",
      "document",
      "verification",
      "counseling",
      "merit",
      "list",
      "deadline",
      "date",
      "round",
      "allotment",
      "allocation",
      "how to apply",
      "application process",
      "admission process",
      "admission pathway",
      "selection",
      "procedure",
    ],
    contact: [
      "contact",
      "phone",
      "email",
      "address",
      "reach",
      "call",
      "whatsapp",
      "helpline",
      "support",
    ],
    placement: [
      "placement",
      "job",
      "career",
      "employment",
      "salary",
      "graduate",
      "companies",
    ],
    campus: [
      "campus",
      "facility",
      "infrastructure",
      "lab",
      "laboratory",
      "library",
      "hostel",
      "accommodation",
    ],
    program: [
      "program",
      "course",
      "degree",
      "specialization",
      "major",
      "stream",
      "branch",
    ],
  };

  // Check school aliases
  for (const [school, terms] of Object.entries(schoolAliases)) {
    const queryHasTerm = terms.some((term) => queryLower.includes(term));
    const textHasTerm = terms.some((term) => textLower.includes(term));
    if (queryHasTerm && textHasTerm) {
      score += 25;
    }
  }

  // Check level aliases
  for (const [level, terms] of Object.entries(levelAliases)) {
    const queryHasTerm = terms.some((term) => queryLower.includes(term));
    const textHasTerm = terms.some((term) => textLower.includes(term));
    if (queryHasTerm && textHasTerm) {
      score += 15;
    }
  }

  // Check concept aliases
  for (const [concept, terms] of Object.entries(conceptAliases)) {
    const queryHasTerm = terms.some((term) => queryLower.includes(term));
    const textHasTerm = terms.some((term) => textLower.includes(term));
    if (queryHasTerm && textHasTerm) {
      score += 20;
    }
  }

  // ===== KEYWORD-BASED SCORING =====
  const keywords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  for (const keyword of keywords) {
    const pattern = new RegExp(`\\b${keyword}\\b`, "g");
    const matches = (textLower.match(pattern) || []).length;
    score += matches * 5;

    if (textLower.includes(keyword)) {
      score += 2;
    }
  }

  // ===== PROGRAM NAME SPECIFIC BOOSTS =====
  const programVariations: { [key: string]: string[] } = {
    cse: [
      "cse",
      "computer science",
      "cs",
      "computer science & engineering",
      "computer science & technology",
    ],
    btech: ["b.tech", "btech", "bachelor of technology", "engineering"],
    mtech: ["m.tech", "mtech", "master of technology"],
    nursing: ["nursing", "b.sc nursing", "bsc nursing", "nurse"],
    pharmacy: [
      "pharmacy",
      "pharm",
      "b.pharm",
      "bpharm",
      "pharm.d",
      "pharmd",
      "m.pharma",
      "mpharma",
      "pharmaceutical",
      "college of pharmaceutical",
    ],
    bca: ["bca", "bachelor of computer applications"],
    mca: ["mca", "master of computer applications"],
    bba: ["bba", "bachelor of business administration"],
    mba: ["mba", "master of business administration"],
    commerce: ["b.com", "bcom", "commerce", "bachelor of commerce"],
    law: ["law", "llb", "ll.b", "llm", "ll.m", "law school"],
    design: ["design", "b.design", "bdesign"],
    jmc: ["journalism", "jmc", "mass communication", "media"],
    allied: [
      "allied health",
      "physiotherapy",
      "nursing",
      "radiology",
      "laboratory technology",
    ],
  };

  for (const [prog, terms] of Object.entries(programVariations)) {
    const queryHasTerm = terms.some((term) => queryLower.includes(term));
    const textHasTerm = terms.some((term) => textLower.includes(term));
    if (queryHasTerm && textHasTerm) {
      score += 18;
    }
  }

  // ===== CONTEXT-SPECIFIC BOOSTS =====

  // If asking about fees, boost chunks with fee information
  if (
    (queryLower.includes("fee") ||
      queryLower.includes("cost") ||
      queryLower.includes("price")) &&
    (textLower.includes("₹") ||
      textLower.includes("annual") ||
      textLower.includes("fees"))
  ) {
    score += 25;
  }

  // If asking about eligibility, boost chunks with eligibility info
  if (
    (queryLower.includes("eligible") ||
      queryLower.includes("eligibility") ||
      queryLower.includes("requirement") ||
      queryLower.includes("qualify")) &&
    (textLower.includes("eligibility") ||
      textLower.includes("pass") ||
      textLower.includes("marks") ||
      textLower.includes("minimum") ||
      textLower.includes("percentage"))
  ) {
    score += 25;
  }

  // If asking about admission, boost chunks with admission info
  if (
    (queryLower.includes("admission") ||
      queryLower.includes("apply") ||
      queryLower.includes("enroll") ||
      queryLower.includes("process") ||
      queryLower.includes("document") ||
      queryLower.includes("counseling") ||
      queryLower.includes("deadline") ||
      queryLower.includes("merit") ||
      queryLower.includes("how to") ||
      queryLower.includes("step")) &&
    (textLower.includes("admission") ||
      textLower.includes("apply") ||
      textLower.includes("document") ||
      textLower.includes("counseling") ||
      textLower.includes("process") ||
      textLower.includes("step") ||
      textLower.includes("deadline") ||
      textLower.includes("merit list") ||
      textLower.includes("registration") ||
      textLower.includes("enrollment"))
  ) {
    score += 30; // Increased boost for admission process queries
  }

  // If asking about contact, boost chunks with contact info
  if (
    (queryLower.includes("contact") ||
      queryLower.includes("phone") ||
      queryLower.includes("email") ||
      queryLower.includes("address")) &&
    (textLower.includes("contact") ||
      textLower.includes("email") ||
      textLower.includes("phone") ||
      textLower.includes("address"))
  ) {
    score += 25;
  }

  // If asking about placement/career/job, boost relevant chunks
  if (
    (queryLower.includes("placement") ||
      queryLower.includes("job") ||
      queryLower.includes("career") ||
      queryLower.includes("salary")) &&
    (textLower.includes("placement") ||
      textLower.includes("job") ||
      textLower.includes("career") ||
      textLower.includes("salary"))
  ) {
    score += 20;
  }

  // ===== NEGATIVE SCORING (IRRELEVANT CONTENT) =====
  // Reduce score if query is about X but text is clearly about a different program
  const programKeywords = [
    "b.tech",
    "m.tech",
    "bca",
    "mca",
    "nursing",
    "pharmacy",
    "law",
    "commerce",
    "design",
    "engineering",
  ];
  const queryPrograms = programKeywords.filter((prog) =>
    queryLower.includes(prog),
  );
  const textPrograms = programKeywords.filter((prog) =>
    textLower.includes(prog),
  );

  if (queryPrograms.length > 0 && textPrograms.length > 0) {
    const hasCommonProgram = queryPrograms.some((p) =>
      textPrograms.includes(p),
    );
    if (!hasCommonProgram && queryPrograms[0] !== textPrograms[0]) {
      score -= 10; // Penalize unrelated program matches
    }
  }

  return Math.max(0, score); // Never return negative scores
}

/**
 * Retrieve relevant context from knowledge base
 */
function retrieveContext(query: string, topK: number = 6): KnowledgeChunk[] {
  const chunks = getKnowledgeChunks();

  const scored = chunks.map((chunk) => ({
    text: chunk.text,
    score: calculateSimilarity(query, chunk.text),
  }));

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/**
 * Build system prompt for OpenAI
 */
function buildSystemPrompt(contextString: string): string {
  return `You are an AI assistant for Dayananda Sagar University (DSU), India's AI-First University. Your role is to help students and prospective students with SPECIFIC, DETAILED, and ACCURATE information about the university.

KNOWLEDGE DOMAIN:
- Academic programs and courses (with specific names and durations)
- Admissions process and eligibility (with exact percentage requirements)
- Fee structures and costs (with exact annual fee amounts for each program)
- Campus facilities and infrastructure
- Research opportunities and innovation
- Campus life and student activities
- Placements and career support
- International admissions
- Scholarships and financial aid

GUIDELINES:
1. ALWAYS provide SPECIFIC, EXACT information from the knowledge base
2. When answering about FEES: Include the exact annual fee amounts (₹ currency), mention different categories (CET, Ranking Based like JEE, Others), and specify the program level (UG/PG)
3. When answering about ELIGIBILITY: Provide exact percentage requirements, mention qualification required (PUC/10+2), specify required subjects, and note category-specific criteria (SC/ST/OBC)
4. When answering about PROGRAMS:
   - If asked about a specific program (e.g., B.Tech CSE): Be brief but include duration, eligibility requirements, and fees
   - ALWAYS list all related programs in that school/category. For example, if asked about B.Tech, list all B.Tech programs offered
   - Include program name, degree type (B.Tech, M.Tech, B.Com, etc.), duration in years, department/specialization name, and the school it belongs to
   - Provide comprehensive program information across all schools when relevant
5. Be VERY SPECIFIC - include exact numbers, percentages, amounts, and criteria from the knowledge base
6. If you don't have specific information, say so honestly
7. Be helpful and friendly in tone
8. Always mention the official website (https://8660401238.vercel.app) for more information
9. If asked about specific fees or eligibility, provide EXACT details including fee amounts and percentage requirements
10. Encourage prospective students to apply through https://8660401238.vercel.app/admissions
11. DO NOT use asterisks (*), bold (**), or markdown formatting in your responses
12. DO NOT use bullet points or special symbols - use simple dashes (-) for lists instead
13. Keep responses clear and plain text without any special formatting
14. DO NOT include trailing punctuation like . ) ] or , in URLs or hyperlinks

KNOWLEDGE BASE:
${contextString}

CRITICAL ANTI-HALLUCINATION INSTRUCTIONS:

1. ONLY USE INFORMATION FROM THE PROVIDED KNOWLEDGE BASE
2. If the knowledge base does NOT contain information, say: "I don't have this information in my knowledge base. Please contact the admissions office at info@dsu.edu.in or visit https://8660401238.vercel.app for more details."
3. NEVER invent or assume:
   - Program names that are not listed in the knowledge base
   - Fee amounts different from what is stated
   - Eligibility criteria not explicitly mentioned
   - Facilities, placements, or benefits not mentioned in the knowledge base
4. If a user asks about something not in the knowledge base, STOP and ask them to verify or contact DSU directly
5. ALWAYS quote exact text from the knowledge base when possible
6. NEVER use phrases like "typically", "usually", "generally" - ONLY use definite statements based on knowledge base
7. NEVER expand on what's in the knowledge base - stick exactly to the facts provided

BASE YOUR RESPONSES ENTIRELY ON THE KNOWLEDGE BASE PROVIDED ABOVE.
PROVIDE SPECIFIC, EXACT INFORMATION - NOT GENERAL STATEMENTS.
DO NOT INVENT INFORMATION ABOUT DSU THAT IS NOT IN THE KNOWLEDGE BASE.`;
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, conversationHistory } = req.body;

    // Validate request
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "Invalid request",
        details: "Message is required and must be a string",
      });
    }

    // Validate API key
    if (!process.env.OPENAI_API_KEY) {
      console.error("[RAG] OPENAI_API_KEY is not configured");
      return res.status(500).json({
        success: false,
        error: "Server configuration error",
        details: "OpenAI API key not configured",
      });
    }

    console.log(`[RAG] Processing query: "${message}"`);

    // Retrieve relevant context from knowledge base
    const contextChunks = retrieveContext(message, 6);

    if (contextChunks.length === 0) {
      console.warn("[RAG] No relevant context found for query");
    }

    // Build context string
    const contextString =
      contextChunks.length > 0
        ? contextChunks
            .map((chunk, i) => `[Source ${i + 1}]\n${chunk.text}`)
            .join("\n\n---\n\n")
        : "Note: No directly relevant information found in knowledge base.";

    // Build system prompt
    const systemPrompt = buildSystemPrompt(contextString);

    // Build messages array for OpenAI
    const messages: Array<{
      role: "system" | "user" | "assistant";
      content: string;
    }> = [{ role: "system", content: systemPrompt }];

    // Add conversation history if provided (last 10 messages)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      const recentHistory = conversationHistory.slice(-10);
      for (const msg of recentHistory) {
        if (msg.role === "user" || msg.role === "assistant") {
          messages.push({
            role: msg.role,
            content: msg.content,
          });
        }
      }
    }

    // Add current user message
    messages.push({ role: "user", content: message });

    console.log(
      `[RAG] Calling OpenAI API with ${contextChunks.length} context chunks`,
    );

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI Chat Completions API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      max_tokens: 1000,
      temperature: 0,
    });

    const assistantMessage = completion.choices[0]?.message?.content || "";

    if (!assistantMessage) {
      console.error("[RAG] Empty response from OpenAI");
      return res.status(500).json({
        success: false,
        error: "Empty response",
        details: "No response generated from AI",
      });
    }

    console.log("[RAG] Response generated successfully");
    console.log(`[RAG] Message length: ${assistantMessage.length} characters`);

    // Return response
    return res.status(200).json({
      success: true,
      message: assistantMessage,
      contextCount: contextChunks.length,
      sources: contextChunks.map((chunk, i) => ({
        id: i + 1,
        relevanceScore: chunk.score,
      })),
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("[RAG] Chat error:", error?.message || error);

    // Handle specific OpenAI errors
    if (error?.status === 401) {
      return res.status(500).json({
        success: false,
        error: "Authentication failed",
        details: "Invalid OpenAI API key",
      });
    }

    if (error?.status === 429) {
      return res.status(429).json({
        success: false,
        error: "Rate limit exceeded",
        details: "Please try again in a few moments",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Failed to process chat message",
      details: error?.message || "Unknown error",
    });
  }
}
