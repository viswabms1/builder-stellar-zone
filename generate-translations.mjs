import { translate } from '@vitalets/google-translate-api';

const translations = {
  en: {},
  kn: {},
  hi: {}
};

const contentToTranslate = {
  about: {
    title: "About Dayananda Sagar University",
    hero: "A centre of excellence in education, research & training, innovation & entrepreneurship producing citizens with exceptional leadership qualities",
    welcome: "Welcome to DSU",
    legacy: "Our Legacy",
    unveiling: "Unveiling a Legacy",
    proud: "Proud to be part of DSU",
    facilities: "Best-in-class Facilities",
    innovators: "Inspired by Innovators",
    stellar: "Stellar Performance – Time and Again",
    courses: "Different Courses for Different Passions"
  },
  leadership: {
    title: "Leadership & Administration",
    chancellor: "Chancellor",
    proChancellor: "Pro Chancellor",
    registrar: "Registrar"
  },
  visionMission: {
    title: "Vision, Mission and Values",
    vision: "Vision",
    mission: "Mission",
    values: "Values"
  }
};

async function translateContent() {
  console.log('Starting translation process...\n');
  
  for (const [section, items] of Object.entries(contentToTranslate)) {
    console.log(`Translating ${section}...`);
    translations.en[section] = {};
    translations.kn[section] = {};
    translations.hi[section] = {};
    
    for (const [key, englishText] of Object.entries(items)) {
      try {
        const kannadaResult = await translate({
          text: englishText,
          from: 'en',
          to: 'kn'
        });
        
        const hindiResult = await translate({
          text: englishText,
          from: 'en',
          to: 'hi'
        });
        
        translations.en[section][key] = englishText;
        translations.kn[section][key] = kannadaResult.text;
        translations.hi[section][key] = hindiResult.text;
        
        console.log(`  ✓ ${key} translated`);
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
      }
    }
  }
  
  console.log('\nTranslations completed!');
  return translations;
}

translateContent().then(result => {
  console.log(JSON.stringify(result, null, 2));
}).catch(err => console.error('Error:', err));
