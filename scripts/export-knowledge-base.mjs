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
  { path: '/eligibility', url: `${BASE_URL}/eligibility`, title: 'Eligibility' },
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
  
  schools: [
    {
      name: 'School of Engineering',
      programs: ['B.Tech in AI & ML', 'B.Tech in AI & Robotics', 'B.Tech in Data Science', 'B.Tech in Cybersecurity', 'B.Tech in Computer Science', 'B.Tech in Mechanical Engineering', 'B.Tech in Aerospace Engineering', 'B.Tech in Electronics & Communication'],
      description: 'Innovation-driven education for the tech-savvy world with cutting-edge AI labs and research facilities.'
    },
    {
      name: 'School of Law',
      programs: ['BA LLB (Hons)', 'BBA LLB (Hons)', 'LLB (3 Year)', 'LLM in Law & Technology', 'LLM in Corporate & Commercial Law'],
      description: 'Training tomorrow\'s legal minds with a focus on justice and impact.'
    },
    {
      name: 'School of Health Sciences',
      programs: ['B.Sc Nursing', 'BPT (Physiotherapy)', 'MPT', 'MSc Nursing', 'MPH (Master of Public Health)', 'Allied Health Sciences'],
      description: 'Equipping future leaders in global health and wellness.'
    },
    {
      name: 'School of Computer Applications',
      programs: ['BCA', 'MCA', 'B.Sc Data Science', 'M.Sc Data Science'],
      description: 'Cutting-edge IT education for the digital age.'
    },
    {
      name: 'School of Basic and Applied Science',
      programs: ['B.Sc Triple Major (Physics, Chemistry, Mathematics)', 'M.Sc in specializations'],
      description: 'Practical approaches rooted in foundational sciences.'
    },
    {
      name: 'School of Commerce and Management',
      programs: ['B.Com', 'BBA', 'MBA'],
      description: 'Shaping tomorrow\'s business and industry leaders.'
    },
    {
      name: 'School of Arts, Design, and Humanities',
      programs: ['Humanities programs', 'Social Sciences'],
      description: 'Cultivating creativity, culture, and critical thinking.'
    },
    {
      name: 'School of Design and Digital Trans-media',
      programs: ['B.Design'],
      description: 'Bringing creativity to reality through innovative design education.'
    },
    {
      name: 'School of Journalism and Mass Communication',
      programs: ['BA Journalism and Mass Communication'],
      description: 'Training future media professionals and storytellers.'
    }
  ],

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
      whatsapp: ['+91 9606022152', '+91 9606022149']
    },
    eligibility: 'Programs available for 10+2 pass students with various specializations',
    process: 'Online application through admissions.dsu.edu.in'
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

function generateHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dayananda Sagar University - Complete Knowledge Base</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        h1 { color: #ff6b35; border-bottom: 3px solid #ff6b35; padding-bottom: 10px; }
        h2 { color: #004e89; margin-top: 30px; }
        h3 { color: #1a659e; }
        .section {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .highlight {
            background: #fff3cd;
            padding: 15px;
            border-left: 4px solid #ff6b35;
            margin: 10px 0;
        }
        ul { line-height: 1.8; }
        .route { color: #6c757d; font-family: monospace; }
        .school-card {
            border: 1px solid #e0e0e0;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>🎓 Dayananda Sagar University - Complete Knowledge Base</h1>
    
    <div class="section highlight">
        <h2>University Overview</h2>
        <p><strong>${keyContent.university.name}</strong></p>
        <p><em>${keyContent.university.tagline}</em></p>
        <ul>
            <li><strong>Location:</strong> ${keyContent.university.location}</li>
            <li><strong>Accreditation:</strong> ${keyContent.university.accreditation}</li>
            <li><strong>Legacy:</strong> ${keyContent.university.established}</li>
            <li><strong>Website:</strong> <a href="${keyContent.university.website}">${keyContent.university.website}</a></li>
        </ul>
        <p>${keyContent.university.description}</p>
    </div>

    <div class="section">
        <h2>📚 Schools & Programs</h2>
        ${keyContent.schools.map(school => `
            <div class="school-card">
                <h3>${school.name}</h3>
                <p>${school.description}</p>
                <p><strong>Programs Offered:</strong></p>
                <ul>
                    ${school.programs.map(program => `<li>${program}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>🔬 Research & Innovation</h2>
        <h3>${keyContent.researchInnovation.title}</h3>
        <p><strong>Key Highlights:</strong></p>
        <ul>
            ${keyContent.researchInnovation.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <h3>Entrepreneurship Ecosystem</h3>
        <ul>
            ${keyContent.researchInnovation.entrepreneurship.map(e => `<li>${e}</li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>🏫 Campus Life</h2>
        <h3>${keyContent.campusLife.title}</h3>
        <p><strong>Four Pillars of Excellence:</strong></p>
        <ul>
            ${keyContent.campusLife.pillars.map(p => `<li>${p}</li>`).join('')}
        </ul>
        <p><strong>World-Class Facilities:</strong></p>
        <ul>
            ${keyContent.campusLife.facilities.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <p>${keyContent.campusLife.organizations}</p>
    </div>

    <div class="section">
        <h2>🌍 International Admissions</h2>
        <div class="highlight">
            <h3>${keyContent.admissions.international.title}</h3>
            <p><strong>Philosophy:</strong> ${keyContent.admissions.international.philosophy}</p>
            <p><strong>Contact Email:</strong> ${keyContent.admissions.international.contact}</p>
            <p><strong>WhatsApp:</strong> ${keyContent.admissions.international.whatsapp.join(', ')}</p>
        </div>
        <p><strong>Eligibility:</strong> ${keyContent.admissions.eligibility}</p>
        <p><strong>Application Process:</strong> ${keyContent.admissions.process}</p>
    </div>

    <div class="section">
        <h2>🤝 Partnerships & Collaborations</h2>
        <ul>
            ${keyContent.partnerships.map(p => `<li>${p}</li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>🏗️ Infrastructure</h2>
        <ul>
            ${keyContent.infrastructure.map(i => `<li>${i}</li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>🏆 Key Achievements</h2>
        <ul>
            ${keyContent.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>🗺️ Website Structure</h2>
        <p>Complete navigation paths available on the website:</p>
        <ul>
            ${routes.map(route => `<li><a href="${route.url}" target="_blank">${route.url}</a> - ${route.title}</li>`).join('')}
        </ul>
    </div>

    <footer style="margin-top: 40px; padding: 20px; text-align: center; color: #6c757d;">
        <p>Generated Knowledge Base for Dayananda Sagar University RAG Chatbot</p>
        <p>Last Updated: ${new Date().toLocaleDateString()}</p>
    </footer>
</body>
</html>`;
}

function generateTXT() {
  return `
================================================================================
DAYANANDA SAGAR UNIVERSITY - COMPLETE KNOWLEDGE BASE
India's AI-First University
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
SCHOOLS & PROGRAMS
================================================================================

${keyContent.schools.map((school, index) => `
${index + 1}. ${school.name.toUpperCase()}
${'-'.repeat(school.name.length + 3)}
Description: ${school.description}

Programs Offered:
${school.programs.map(p => `  • ${p}`).join('\n')}
`).join('\n')}

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

Eligibility: ${keyContent.admissions.eligibility}
Application Process: ${keyContent.admissions.process}

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

All available pages on the website:

${routes.map(route => `  ${route.path.padEnd(50)} - ${route.title}`).join('\n')}

================================================================================
CONTACT INFORMATION
================================================================================

General Inquiries: Contact through website
International Admissions: international-admissions@dsu.edu.in
WhatsApp (International): +91 9606022152, +91 9606022149
Website: https://dsu.edu.in
Admissions Portal: https://admissions.dsu.edu.in
Virtual Tour: https://dsu.edu.in/virtual-tour/

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

================================================================================
Generated: ${new Date().toLocaleString()}
Purpose: RAG Chatbot Knowledge Base
================================================================================
`;
}

// Generate files
const htmlContent = generateHTML();
const txtContent = generateTXT();

const outputDir = path.join(__dirname, '..', 'knowledge-base');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'dsu-knowledge-base.html'), htmlContent);
fs.writeFileSync(path.join(outputDir, 'dsu-knowledge-base.txt'), txtContent);

console.log('✅ Knowledge base files generated successfully!');
console.log('📁 Location: knowledge-base/');
console.log('  - dsu-knowledge-base.html');
console.log('  - dsu-knowledge-base.txt');
