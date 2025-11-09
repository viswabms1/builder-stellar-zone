import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define pages to process
const pages = [
  { name: 'About', file: 'About.tsx' },
  { name: 'Leadership', file: 'Leadership.tsx' },
  { name: 'VisionMission', file: 'VisionMission.tsx' },
  { name: 'History', file: 'History.tsx' },
  { name: 'Placements', file: 'Placements.tsx' },
  { name: 'Facilities', file: 'Facilities.tsx' },
  { name: 'Examinations', file: 'Examinations.tsx' },
  { name: 'IQAC', file: 'IQAC.tsx' },
  { name: 'Accreditations', file: 'Accreditations.tsx' },
  { name: 'AdministrativeCommittees', file: 'AdministrativeCommittees.tsx' },
  { name: 'BoardOfGovernors', file: 'BoardOfGovernors.tsx' },
  { name: 'AcademicCouncil', file: 'AcademicCouncil.tsx' },
  { name: 'BoardOfManagement', file: 'BoardOfManagement.tsx' },
  { name: 'FinanceCommittee', file: 'FinanceCommittee.tsx' },
  { name: 'ResearchInnovationCouncil', file: 'ResearchInnovationCouncil.tsx' },
  { name: 'Engineering', file: 'Engineering.tsx' },
  { name: 'Law', file: 'Law.tsx' },
  { name: 'HealthSciences', file: 'HealthSciences.tsx' },
  { name: 'ManagementStudies', file: 'ManagementStudies.tsx' },
  { name: 'ComputerApplications', file: 'ComputerApplications.tsx' },
  { name: 'AppliedSciences', file: 'AppliedSciences.tsx' },
  { name: 'JournalismMassComm', file: 'JournalismMassComm.tsx' },
  { name: 'BDesignOverview', file: 'BDesignOverview.tsx' },
  { name: 'FacultyDirectory', file: 'FacultyDirectory.tsx' },
  { name: 'FacultyCSE', file: 'FacultyCSE.tsx' },
  { name: 'CentreOfExcellence', file: 'CentreOfExcellence.tsx' },
  { name: 'InternationalAdmissions', file: 'InternationalAdmissions.tsx' },
  { name: 'Eligibility', file: 'Eligibility.tsx' },
  { name: 'CDSIMER', file: 'CDSIMER.tsx' },
  { name: 'CDSIMERHospital', file: 'CDSIMERHospital.tsx' },
  { name: 'MedicalEducationResearch', file: 'MedicalEducationResearch.tsx' },
  { name: 'DeptCSE', file: 'DeptCSE.tsx' },
  { name: 'DeptAIML', file: 'DeptAIML.tsx' },
  { name: 'CEE', file: 'CEE.tsx' },
  { name: 'CDSIMERLife', file: 'CDSIMERLife.tsx' },
];

// Function to extract content from file
function extractContentFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const extracted = {
    titles: [],
    descriptions: [],
    cards: [],
    buttons: [],
    quotes: [],
    other: []
  };

  // Extract titles (h1, h2, h3)
  const titleMatches = content.match(/<h[1-3][^>]*>([^<]+)</g) || [];
  titleMatches.forEach(match => {
    const text = match.replace(/<h[1-3][^>]*>/, '').replace(/<\/h[1-3]>/, '').trim();
    if (text && text.length > 5 && !text.includes('{') && !text.startsWith('<')) {
      extracted.titles.push(text);
    }
  });

  // Extract quoted strings (longer than 20 chars)
  const stringMatches = content.match(/"([^"]{20,})"/g) || [];
  stringMatches.forEach(match => {
    const text = match.slice(1, -1).trim();
    if (text && !text.includes('http') && !text.includes('@') && !text.includes('://') && !text.startsWith('/')) {
      if (text.length > 20 && text.length < 300) {
        extracted.descriptions.push(text);
      }
    }
  });

  // Extract card titles and descriptions
  const cardMatches = content.match(/CardTitle[^>]*>([^<]+)</g) || [];
  cardMatches.forEach(match => {
    const text = match.replace(/CardTitle[^>]*>/, '').trim();
    if (text && text.length > 5) {
      extracted.cards.push(text);
    }
  });

  // Extract button text
  const buttonMatches = content.match(/Button[^>]*>([^<]+)</g) || [];
  buttonMatches.forEach(match => {
    const text = match.replace(/Button[^>]*>/, '').trim();
    if (text && text.length > 3) {
      extracted.buttons.push(text);
    }
  });

  // Remove duplicates
  Object.keys(extracted).forEach(key => {
    extracted[key] = [...new Set(extracted[key])].filter(s => s && s.length > 0);
  });

  return extracted;
}

// Main extraction function
function extractAllPages() {
  const allContent = {};

  pages.forEach(page => {
    const filePath = path.join(__dirname, '..', 'client', 'pages', page.file);
    console.log(`Extracting from ${page.name}...`);
    
    const extracted = extractContentFromFile(filePath);
    if (extracted) {
      allContent[page.name] = extracted;
    }
  });

  return allContent;
}

// Main execution
const allContent = extractAllPages();

// Save to JSON for inspection
const outputPath = path.join(__dirname, '..', 'extracted-content.json');
fs.writeFileSync(outputPath, JSON.stringify(allContent, null, 2));

console.log(`\nExtraction complete!`);
console.log(`Saved to: ${outputPath}`);
console.log(`Total pages processed: ${Object.keys(allContent).length}`);

// Print summary
Object.entries(allContent).forEach(([page, content]) => {
  const total = Object.values(content).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`${page}: ${total} strings extracted`);
});
