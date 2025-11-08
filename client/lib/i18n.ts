export type Language = 'en' | 'kn' | 'hi';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      academics: 'Academics',
      admissions: 'Admissions',
      campusLife: 'Campus Life',
      centreOfExcellence: 'Centre of Excellence & Innovation',
      placements: 'Placements',
      publicSelfDisclosure: 'Public Self Disclosure',
      language: 'Language',
    },
    hero: {
      headline: 'Shape Your Future at Dayananda Sagar University',
      subheadline: 'Experience world-class education at Dayananda Sagar University. Innovation meets tradition on our state-of-the-art campus.',
      applyNow: 'Apply Now',
      virtualTour: 'Virtual Tour',
    },
    academics: {
      title: 'Academic Excellence That Inspires',
      subtitle: 'Discover our diverse range of undergraduate and postgraduate programs designed to shape the leaders of tomorrow.',
      learnMore: 'Learn More',
    },
  },
  kn: {
    nav: {
      home: 'ಮೂಲ',
      about: 'ಬಗ್ಗೆ',
      academics: 'ಶಿಕ್ಷಣ',
      admissions: 'ಪ್ರವೇಶ',
      campusLife: 'ಕ್ಯಾಂಪಸ್ ಜೀವನ',
      centreOfExcellence: 'ಉತ್ಕರ್ಷತೆ ಮತ್ತು ನವೀನತೆಯ ಕೇಂದ್ರ',
      placements: 'ನೇಮಕಾತಿ',
      publicSelfDisclosure: 'ಸಾರ್ವಜನಿಕ ಸ್ವಯಂ ಬಹಿರಂಗಾಕರಣ',
      language: 'ಭಾಷೆ',
    },
    hero: {
      headline: 'ದಯಾನಂದ ಸಾಗರ ವಿಶ್ವವಿದ್ಯಾಲಯದಲ್ಲಿ ನಿಮ್ಮ ಭವಿಷ್ಯತ್ತನ್ನು ರೂಪಿಸಿ',
      subheadline: 'ದಯಾನಂದ ಸಾಗರ ವಿಶ್ವವಿದ್ಯಾಲಯದಲ್ಲಿ ವಿಶ್ವ-ಮಾನದ ಶಿಕ್ಷೆಯನ್ನು ಅನುಭವ ಮಾಡಿ. ನಮ್ಮ ���ತಿಆಧುನಿಕ ಸಸ್ಯಾವಳಿಯಲ್ಲಿ ನವೀನತೆ ಬಾಲವಚನ ಸಂಪ್ರದಾಯದೊಂದಿಗೆ ಸಾಕ್ಷಿ ನಿಲುವುತ್ತದೆ.',
      applyNow: 'ಈಗ ಅರ್ಜಿ ಹಾಕಿ',
      virtualTour: 'ವರ್ಚುವಲ್ ಟೂರ್',
    },
    academics: {
      title: 'ಅಕಾಡೆಮಿಕ್ ಉತ್ಕರ್ಷತೆ ಯಾವುದು ಅನುಪ್ರೇರಿತ ಮಾಡುತ್ತದೆ',
      subtitle: 'ನಾಳೆಯ ನೇತೃತ್ವವನ್ನು ಸಾಕಾರ ಮಾಡಲು ಪ್ರಣಯನೀಯವಾದ ಬೌದ್ಧಿಕ ಮತ್ತು ಸ್ನಾತಕೋತ್ತರ ಕಾರ್ಯಸೂಚಿಗಳ ನೀವಿದ್ಧಾನವನ್ನು ಆವಿಷ್ಕಾರ ಮಾಡಿ.',
      learnMore: 'ಇನ್ನೂ ಕಲಿಯಿರಿ',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'परिचय',
      academics: 'शिक्षा',
      admissions: 'प्रवेश',
      campusLife: 'कैंपस जीवन',
      centreOfExcellence: 'उत्कृष्टता और नवीनता केंद्र',
      placements: 'प्लेसमेंट',
      publicSelfDisclosure: 'सार्वजनिक स्व-प्रकटीकरण',
      language: 'भाषा',
    },
    hero: {
      headline: 'दयानंद सागर विश्वविद्यालय में अपना भविष्य आकार दें',
      subheadline: 'दयानंद सागर विश्वविद्यालय में विश्वस्तरीय शिक्षा का अनुभव करें। हमारे अत्याधुनिक परिसर पर नवाचार परंपरा से मिलता है।',
      applyNow: 'अभी आवेदन करें',
      virtualTour: 'वर्चुअल टूर',
    },
    academics: {
      title: 'शैक्षणिक उत्कृष्टता जो प्रेरणा देती है',
      subtitle: 'कल के नेताओं को तैयार करने के लिए डिज़ाइन किए गए विविध स्नातक और स्नातकोत्तर कार्यक्रमों की खोज करें।',
      learnMore: 'और जानें',
    },
  },
};

export function getLanguageLabel(lang: Language): string {
  switch (lang) {
    case 'en':
      return 'English';
    case 'kn':
      return 'ಕನ್��ಡ';
    case 'hi':
      return 'हिंदी';
    default:
      return 'English';
  }
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  // Fallback to English if translation not found
  if (!value) {
    let enValue: any = translations.en;
    for (const k of keys) {
      enValue = enValue?.[k];
    }
    return enValue || key;
  }

  return value || key;
}
