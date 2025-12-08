// Centralized aggregation of engineering department events
// This file imports and combines all department events for the School of Engineering page

export interface NoticeItem {
  id: string;
  title: string;
  description: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  image?: string;
  link?: string;
  department?: string;
}

// CSE Department Events
const CSE_EVENTS: NoticeItem[] = [
  {
    id: "cse-event-1",
    title: "HackDSU 2025: 36-hour Product Build Sprint",
    category: "Event",
    date: "Feb 12, 2025",
    description:
      "Interdisciplinary hackathon hosted by CSE with tracks in AI for Health, Sustainable Tech, and FinTech innovation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/HackDSU-2025.pdf",
    department: "CSE",
  },
  {
    id: "cse-event-2",
    title: "Industry Lecture: Responsible GenAI Systems",
    category: "Event",
    date: "Jan 24, 2025",
    description:
      "Guest session by Dr. Leela Narayanan, Principal Scientist at Novus Labs. Venue: Innovation Theatre, 10:30 AM.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Responsible-GenAI-Guest-Lecture.pdf",
    department: "CSE",
  },
  {
    id: "cse-event-3",
    title: "Research Seminar: Quantum Computing Trends",
    category: "Event",
    date: "Feb 5, 2025",
    description:
      "Join Prof. Rajesh Kumar from IISc Bangalore for an in-depth discussion on quantum computing advances.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop",
    department: "CSE",
  },
  {
    id: "cse-event-4",
    title: "Industry Workshop: Cloud Architecture Patterns",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Hands-on workshop by AWS certified architects covering microservices and containerization strategies.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "CSE",
  },
];

// Mechanical Engineering Events
const MECHANICAL_EVENTS: NoticeItem[] = [
  {
    id: "mech-event-1",
    title: "Advanced Manufacturing Workshop",
    category: "Event",
    date: "Feb 1, 2025",
    description:
      "Hands-on workshop on CNC machining, 3D printing, and advanced manufacturing techniques with industry experts.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "Mechanical",
  },
  {
    id: "mech-event-2",
    title: "Robotics and Automation Seminar",
    category: "Event",
    date: "Jan 31, 2025",
    description:
      "Expert discussion on industrial robotics, automation systems, and future trends in manufacturing.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f51df21?w=600&h=300&fit=crop",
    department: "Mechanical",
  },
  {
    id: "mech-event-3",
    title: "FSAE Team Presentation and Demo",
    category: "Event",
    date: "Feb 20, 2025",
    description:
      "Student Formula SAE team showcases their latest electric vehicle design and provides technical deep dive.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop",
    department: "Mechanical",
  },
];

// Aerospace Engineering Events
const AEROSPACE_EVENTS: NoticeItem[] = [
  {
    id: "aero-event-1",
    title: "Drone Technology and UAV Workshop",
    category: "Event",
    date: "Feb 7, 2025",
    description:
      "Practical workshop on unmanned aerial vehicles, drone design, and autonomous flight systems.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Aerospace",
  },
  {
    id: "aero-event-2",
    title: "Aerodynamics and CFD Simulation Session",
    category: "Event",
    date: "Jan 28, 2025",
    description:
      "Hands-on session on computational fluid dynamics and aerodynamic design principles for aircraft.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Aerospace",
  },
  {
    id: "aero-event-3",
    title: "Industry Talk: Future of Space Technology",
    category: "Event",
    date: "Feb 14, 2025",
    description:
      "Keynote address by aerospace industry leader on emerging trends in space exploration and satellite technology.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop",
    department: "Aerospace",
  },
];

// ECE Department Events
const ECE_EVENTS: NoticeItem[] = [
  {
    id: "ece-event-1",
    title: "Embedded Systems Design Workshop",
    category: "Event",
    date: "Feb 3, 2025",
    description:
      "Practical workshop on microcontroller programming, embedded systems design, and IoT applications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "ECE",
  },
  {
    id: "ece-event-2",
    title: "VLSI Design and Circuit Optimization Seminar",
    category: "Event",
    date: "Jan 26, 2025",
    description:
      "Advanced seminar on circuit design, VLSI optimization techniques, and semiconductor technology trends.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "ECE",
  },
  {
    id: "ece-event-3",
    title: "5G and Wireless Communication Workshop",
    category: "Event",
    date: "Feb 11, 2025",
    description:
      "Deep dive into 5G technologies, wireless communication protocols, and signal processing applications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "ECE",
  },
];

// Data Science Department Events
const DATA_SCIENCE_EVENTS: NoticeItem[] = [
  {
    id: "ds-event-1",
    title: "Machine Learning in Production Bootcamp",
    category: "Event",
    date: "Feb 9, 2025",
    description:
      "Intensive bootcamp on deploying ML models, managing data pipelines, and real-world ML engineering challenges.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4b0ba8c00?w=600&h=300&fit=crop",
    department: "Data Science",
  },
  {
    id: "ds-event-2",
    title: "Big Data Analytics Workshop",
    category: "Event",
    date: "Jan 30, 2025",
    description:
      "Hands-on workshop on Apache Spark, distributed computing, and large-scale data processing.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4b0ba8c00?w=600&h=300&fit=crop",
    department: "Data Science",
  },
  {
    id: "ds-event-3",
    title: "AI Ethics and Responsible Data Science Seminar",
    category: "Event",
    date: "Feb 17, 2025",
    description:
      "Expert discussion on ethical AI, bias in machine learning, and responsible data science practices.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4b0ba8c00?w=600&h=300&fit=crop",
    department: "Data Science",
  },
];

// AI & ML Department Events
const AIML_EVENTS: NoticeItem[] = [
  {
    id: "aiml-event-1",
    title: "Deep Learning Applications Symposium",
    category: "Event",
    date: "Feb 4, 2025",
    description:
      "Conference featuring keynotes from AI researchers, panel discussions, and student research presentations on neural networks.",
    image: "https://images.unsplash.com/photo-1535990379754-5a13b3a0de4a?w=600&h=300&fit=crop",
    department: "AI & ML",
  },
  {
    id: "aiml-event-2",
    title: "Natural Language Processing Workshop",
    category: "Event",
    date: "Feb 2, 2025",
    description:
      "Hands-on workshop on transformer models, language models, and NLP applications using latest frameworks.",
    image: "https://images.unsplash.com/photo-1535990379754-5a13b3a0de4a?w=600&h=300&fit=crop",
    department: "AI & ML",
  },
  {
    id: "aiml-event-3",
    title: "Computer Vision Applications Demo Day",
    category: "Event",
    date: "Feb 19, 2025",
    description:
      "Student showcase of computer vision projects including object detection, image segmentation, and augmented reality.",
    image: "https://images.unsplash.com/photo-1535990379754-5a13b3a0de4a?w=600&h=300&fit=crop",
    department: "AI & ML",
  },
];

// Cybersecurity Department Events
const CYBERSECURITY_EVENTS: NoticeItem[] = [
  {
    id: "cyber-event-1",
    title: "Ethical Hacking and Penetration Testing Workshop",
    category: "Event",
    date: "Feb 6, 2025",
    description:
      "Hands-on workshop on security vulnerabilities, penetration testing methodologies, and ethical hacking frameworks.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
    department: "Cybersecurity",
  },
  {
    id: "cyber-event-2",
    title: "Capture The Flag Competition",
    category: "Event",
    date: "Feb 22, 2025",
    description:
      "Annual cybersecurity competition featuring real-world hacking challenges and security exploitation scenarios.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
    department: "Cybersecurity",
  },
  {
    id: "cyber-event-3",
    title: "Cloud Security and Infrastructure Protection Seminar",
    category: "Event",
    date: "Jan 27, 2025",
    description:
      "Expert seminar on cloud security best practices, infrastructure hardening, and compliance management.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
    department: "Cybersecurity",
  },
];

// AI & Robotics Department Events
const AI_ROBOTICS_EVENTS: NoticeItem[] = [
  {
    id: "air-event-1",
    title: "Robotics and Autonomous Systems Demo Day",
    category: "Event",
    date: "Feb 13, 2025",
    description:
      "Live demonstration of student robotics projects including autonomous vehicles, drones, and industrial robots.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "AI Robotics",
  },
  {
    id: "air-event-2",
    title: "Robot Operating System (ROS) Workshop",
    category: "Event",
    date: "Jan 25, 2025",
    description:
      "Hands-on workshop on ROS framework, robot simulation, and programming autonomous systems.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "AI Robotics",
  },
  {
    id: "air-event-3",
    title: "AI Ethics in Robotics Panel Discussion",
    category: "Event",
    date: "Feb 16, 2025",
    description:
      "Panel discussion on ethical considerations in robotics, human-robot interaction, and societal impact of automation.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "AI Robotics",
  },
];

// Aggregate all department events
const ALL_DEPARTMENT_EVENTS: NoticeItem[] = [
  ...CSE_EVENTS,
  ...MECHANICAL_EVENTS,
  ...AEROSPACE_EVENTS,
  ...ECE_EVENTS,
  ...DATA_SCIENCE_EVENTS,
  ...AIML_EVENTS,
  ...CYBERSECURITY_EVENTS,
  ...AI_ROBOTICS_EVENTS,
];

// School of Engineering specific news and announcements
const SCHOOL_ENGINEERING_NEWS: NoticeItem[] = [
  {
    id: "eng-news-1",
    title: "School of Engineering Receives NAAC Accreditation",
    category: "News",
    date: "Jan 15, 2025",
    description:
      "School of Engineering achieves excellent accreditation status highlighting commitment to academic excellence and innovation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Engineering",
  },
  {
    id: "eng-news-2",
    title: "96% Placement Rate for Engineering 2024-25 Batch",
    category: "News",
    date: "Nov 1, 2025",
    description:
      "Engineering graduates placed at world-leading tech and manufacturing companies with average package exceeding ₹18 LPA.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Engineering",
  },
  {
    id: "eng-news-3",
    title: "New Research Center Inaugurated",
    category: "News",
    date: "Dec 5, 2024",
    description:
      "State-of-the-art Advanced Research Center for AI and Robotics officially inaugurated on campus.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "Engineering",
  },
];

const SCHOOL_ENGINEERING_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "eng-announce-1",
    title: "B.Tech Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "Engineering",
  },
  {
    id: "eng-announce-2",
    title: "Mid-Semester Exam Schedule Released",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Mid-semester examinations will commence from February 3, 2025. Complete timetable available on the student portal.",
    department: "Engineering",
  },
  {
    id: "eng-announce-3",
    title: "Campus Maintenance Notice: Library Renovation",
    category: "Announcement",
    date: "Dec 18, 2024",
    description:
      "Central library will be temporarily closed from January 5-15 for infrastructure upgrades. Alternative reading rooms available.",
    department: "Engineering",
  },
  {
    id: "eng-announce-4",
    title: "Project Submission Deadline Extension",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final year project submission deadline extended to January 31, 2025. No further extensions will be granted.",
    department: "Engineering",
  },
];

// Export functions to get filtered events
export function getDepartmentEvents(): NoticeItem[] {
  return ALL_DEPARTMENT_EVENTS;
}

export function getSchoolNews(): NoticeItem[] {
  return SCHOOL_ENGINEERING_NEWS;
}

export function getSchoolAnnouncements(): NoticeItem[] {
  return SCHOOL_ENGINEERING_ANNOUNCEMENTS;
}

export function getAllEngineeringNotices(): NoticeItem[] {
  return [
    ...ALL_DEPARTMENT_EVENTS,
    ...SCHOOL_ENGINEERING_NEWS,
    ...SCHOOL_ENGINEERING_ANNOUNCEMENTS,
  ];
}
