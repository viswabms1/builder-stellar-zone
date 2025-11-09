import fs from 'fs';
import path from 'path';
import { translate } from '@vitalets/google-translate-api';

const extractedStrings = {};
const translationMap = {};

// Define pages and their key sections to extract
const pagesToProcess = [
  'About', 'Leadership', 'VisionMission', 'History', 'Placements',
  'Facilities', 'Examinations', 'IQAC', 'Accreditations', 'AdministrativeCommittees',
  'BoardOfGovernors', 'AcademicCouncil', 'BoardOfManagement', 'FinanceCommittee',
  'ResearchInnovationCouncil', 'Engineering', 'Law', 'HealthSciences',
  'ManagementStudies', 'ComputerApplications', 'AppliedSciences',
  'JournalismMassComm', 'BDesignOverview', 'FacultyDirectory', 'FacultyCSE',
  'CentreOfExcellence', 'InternationalAdmissions', 'Eligibility', 'CDSIMER',
  'CDSIMERHospital', 'MedicalEducationResearch', 'DeptCSE', 'DeptAIML',
  'CEE', 'CDSIMERLife'
];

// Function to extract strings from a file
function extractStringsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract strings from various patterns
    const patterns = [
      /"([^"]{20,})"(?!:)/g, // Double quoted strings longer than 20 chars
      /'([^']{20,})'(?!:)/g, // Single quoted strings longer than 20 chars
      /title:\s*"([^"]+)"/g, // title properties
      /description:\s*"([^"]+)"/g, // description properties
      /<h[1-6][^>]*>([^<]+)</g, // Headings
      /<p[^>]*>([^<]+)</g, // Paragraphs
    ];

    const strings = new Set();
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const str = match[1];
        // Filter out code snippets and technical content
        if (str && str.length > 10 && !str.includes('{') && !str.includes('@') && !str.includes('http')) {
          strings.add(str.trim());
        }
      }
    });

    return Array.from(strings);
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
    return [];
  }
}

// Function to translate text
async function translateText(text, targetLang) {
  try {
    if (!text || text.length === 0) return text;
    
    const result = await translate({
      text: text,
      from: 'en',
      to: targetLang,
      fetch: (url, options) => fetch(url, options)
    });

    return result.text;
  } catch (error) {
    console.error(`Translation error for "${text}":`, error.message);
    return text;
  }
}

// Main extraction and translation function
async function processAllPages() {
  console.log('Starting extraction and translation process...\n');

  for (const page of pagesToProcess) {
    const filePath = `client/pages/${page}.tsx`;
    
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${page} - file not found`);
      continue;
    }

    console.log(`Processing ${page}...`);
    const strings = extractStringsFromFile(filePath);
    
    if (strings.length === 0) {
      console.log(`  No strings extracted for ${page}`);
      continue;
    }

    extractedStrings[page] = {};

    for (const str of strings.slice(0, 30)) { // Limit to 30 strings per page for demo
      // Translate to Kannada
      console.log(`  Translating: "${str.substring(0, 50)}..."`);
      const kannada = await translateText(str, 'kn');
      const hindi = await translateText(str, 'hi');

      extractedStrings[page][str] = {
        en: str,
        kn: kannada,
        hi: hindi
      };

      // Add small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return extractedStrings;
}

// Generate translation structure
function generateTranslationStructure(data) {
  const structure = {
    en: {},
    kn: {},
    hi: {}
  };

  Object.entries(data).forEach(([page, translations]) => {
    const pageKey = page.charAt(0).toLowerCase() + page.slice(1);
    structure.en[pageKey] = {};
    structure.kn[pageKey] = {};
    structure.hi[pageKey] = {};

    let index = 0;
    Object.entries(translations).forEach(([original, translated]) => {
      const key = `text${index}`;
      structure.en[pageKey][key] = translated.en;
      structure.kn[pageKey][key] = translated.kn;
      structure.hi[pageKey][key] = translated.hi;
      index++;
    });
  });

  return structure;
}

// Main execution
async function main() {
  try {
    const translations = await processAllPages();
    const structure = generateTranslationStructure(translations);

    // Save to file
    const outputPath = 'extracted-translations.json';
    fs.writeFileSync(outputPath, JSON.stringify(structure, null, 2));
    console.log(`\nTranslations saved to ${outputPath}`);
    console.log(`Total pages processed: ${Object.keys(translations).length}`);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
