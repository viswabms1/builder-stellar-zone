import { Badge } from "@/components/ui/badge";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Faculty = {
  id: string;
  name: string;
  title: string;
  qualification: string;
  image?: string;
};

const FACULTY_DATA: Faculty[] = [
  {
    id: "senthil",
    name: "Dr. S. Senthil",
    title: "Professor & Dean",
    qualification: "Ph.D",
  },
  {
    id: "kokila",
    name: "Dr. R Kokila",
    title: "Associate Professor",
    qualification: "M.Sc, M.Phil",
  },
  {
    id: "padmageetha",
    name: "Mrs. Padmageetha B G",
    title: "Associate Professor",
    qualification: "MCA, M.Phil",
  },
  {
    id: "ramesh",
    name: "Dr. Ramesh Reddy Chundi",
    title: "Assistant Professor",
    qualification: "Ph.D",
  },
  {
    id: "sindhu",
    name: "Mrs. Sindhu S",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "ambanna",
    name: "Mr. Ambanna S",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "priyanka",
    name: "Ms. D Priyanka Rukesh",
    title: "Assistant Professor",
    qualification: "MCA, M.Phil",
  },
  {
    id: "jithy",
    name: "Ms. Jithy Lijo",
    title: "Assistant Professor",
    qualification: "MCA, M.Phil",
  },
  {
    id: "varshitha",
    name: "Ms. Varshitha K",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "akancha",
    name: "Ms. Akancha Minz",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "aqib",
    name: "Mr. Aqib Hussain",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "bhukya",
    name: "Bhukya Chinna",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "dhirendra",
    name: "Mr. Dhirendra Yadav",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "haripriya",
    name: "Haripriya Ramalingam",
    title: "Assistant Professor",
    qualification: "",
  },
  {
    id: "mohdadil",
    name: "Mr. Mohd Adil",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "neha",
    name: "Neha Gupta",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "nimisha",
    name: "Ms. Nimisha R Nair",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "pradisha",
    name: "Ms. Pradisha Baranwal",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "rajan",
    name: "Mr. Rajan Niranjan",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "shahil",
    name: "Shahil Kumar Ray",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "shreshthav",
    name: "Shreshthav Bisht",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "tanya",
    name: "Tanya Gupta",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "vasanthikumari",
    name: "Dr. Vasanthikumari P",
    title: "Professor",
    qualification: "Ph.D",
  },
  {
    id: "nidhya",
    name: "Dr. M.S.Nidhya",
    title: "Associate Professor",
    qualification: "Ph.D (Computer Science)",
  },
  {
    id: "sandhya",
    name: "Dr. G Sandhya Madhuri",
    title: "Assistant Professor",
    qualification: "Ph.D",
  },
  {
    id: "sumana",
    name: "Mrs. Sumana S G",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "vaishnavi",
    name: "Ms. Vaishnavi K C",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "alpa",
    name: "Mrs. Alpa Patel",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "lakshmi",
    name: "Mrs. K Ashtalakshmi Rajaram",
    title: "Assistant Professor",
    qualification: "M.Sc, M.Phil",
  },
  {
    id: "rakshitha",
    name: "Ms. Rakshitha S",
    title: "Assistant Professor - Mathematics",
    qualification: "MSc Applied Mathematics",
  },
  {
    id: "adarsh",
    name: "Mr. Adarsh Kumar Jha",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "amanjyoti",
    name: "Mr. Amanjyoti Baidya",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "ashutosh",
    name: "Mr. Ashutosh Kumar",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "chandaka",
    name: "Mr. Chandaka Giri Babu",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "hariom",
    name: "Mr. Hariom",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "jyoti",
    name: "Ms. Jyoti Singh",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "mohit",
    name: "Mr. Mohit Singh",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "nikita",
    name: "Nikita Patel",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "pavan",
    name: "Mr. Pavan Kalyan G",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "priyanka2",
    name: "Priyanka Soni",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "sandeep",
    name: "Mr. Sandeep Kumar",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "shital",
    name: "Shital Kumari",
    title: "Assistant Professor",
    qualification: "MCA",
  },
  {
    id: "sourabh",
    name: "Sourabh Pandey",
    title: "Assistant Professor",
    qualification: "MCA",
  },
];

export default function ComputerApplicationsFaculty() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <RouterLink
              to="/academics/computer-applications"
              className="inline-flex items-center gap-2 text-brand-magenta hover:text-brand-magenta/80 mb-6 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Computer Applications
            </RouterLink>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Faculty & Staff
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Meet the dedicated team of educators and mentors at the School of Computer Applications
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="relative overflow-hidden px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FACULTY_DATA.map((faculty) => (
              <div
                key={faculty.id}
                className="rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="h-40 bg-gradient-to-br from-brand-magenta/20 to-brand-blue/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-2xl">
                    {faculty.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold font-display text-foreground">
                      {faculty.name}
                    </h3>
                    <p className="text-sm text-brand-magenta font-medium mt-1">
                      {faculty.title}
                    </p>
                  </div>

                  {faculty.qualification && (
                    <div>
                      <p className="text-xs text-foreground/60 uppercase tracking-wide">
                        Qualification
                      </p>
                      <p className="text-sm text-foreground/80">
                        {faculty.qualification}
                      </p>
                    </div>
                  )}

                  <button className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20 transition-colors text-sm font-medium">
                    View Profile
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to School Link */}
      <section className="px-6 py-16 text-center">
        <RouterLink
          to="/academics/computer-applications"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20 transition-colors font-medium"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to School of Computer Applications
        </RouterLink>
      </section>
    </div>
  );
}
