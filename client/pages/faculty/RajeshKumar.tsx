import FacultyProfileCard from "@/components/FacultyProfileCard";
import { eceFaculty } from "@/data/ece-faculty";

export default function RajeshKumarProfile() {
  const faculty = eceFaculty.find((f) => f.slug === "dr-rajesh-kumar");

  if (!faculty) {
    return <div>Faculty member not found</div>;
  }

  const profileData = {
    name: faculty.name,
    title: faculty.title,
    department: faculty.department || "Department of Electronics & Communication Engineering",
    image: faculty.image,
    email: faculty.email,
    phone: faculty.phone,
    office: faculty.office,
    qualifications: faculty.qualifications,
    researchAreas: faculty.researchAreas || [],
    publications: faculty.publications,
    doctoralStudents: faculty.doctoralStudents,
    projects: faculty.projects,
    patents: faculty.patents,
    sections: [
      {
        title: "Education Qualification",
        content: [
          "B.E. in Electronics & Communication from a leading institute",
          "M.Tech in VLSI Design - National Institute of Technology",
          "Ph.D. in Embedded Systems - School of Engineering, DSU",
        ],
      },
      {
        title: "Courses Handled",
        content: [
          "Digital Circuit Design and Analysis",
          "VLSI Design Methodology",
          "Embedded Systems and Microcontrollers",
          "Signal Processing Fundamentals",
          "Power Electronics Applications",
          "Advanced Semiconductor Devices",
        ],
      },
      {
        title: "Research Areas",
        content: [
          "VLSI circuit design and optimization",
          "Embedded systems architecture",
          "Low-power design techniques",
          "Digital signal processing implementations",
          "Power management systems",
        ],
      },
      {
        title: "Publications",
        content: [
          "24 peer-reviewed publications in international journals",
          "15 papers presented at international conferences",
          "3 book chapters on VLSI design methodologies",
          "5 papers on embedded systems applications",
        ],
      },
      {
        title: "Projects & Consultancy",
        content: [
          "Industry Collaboration with Bosch for ETAS Lab development",
          "Research project on 'Energy-Efficient VLSI Design for IoT Applications' (funded by DST)",
          "Consultancy with semiconductor companies on design optimization",
          "Project lead for 'Wireless Sensor Network Design' with government funding",
        ],
      },
      {
        title: "Research Fellows / PhD Students",
        content: [
          "9 PhD students currently under supervision",
          "Research areas: VLSI design, power electronics, embedded systems",
          "2 PhD students have completed their degree in the last 3 years",
          "5 of current PhD students have published papers in tier-1 conferences",
        ],
      },
      {
        title: "Conferences / Workshops / Symposium",
        content: [
          "Keynote speaker at IEEE International Conference on VLSI Systems, 2023",
          "Organized workshop on 'Sustainable Electronics Design' at DSU, 2023",
          "Panelist at International Symposium on Embedded Systems, 2022",
          "Presenter at NASSCOM Technology Summit on IoT and VLSI, 2023",
          "Regular attendee of IEEE Circuits and Systems Society meetings",
        ],
      },
      {
        title: "Awards & Accolades",
        content: [
          "Best Teacher Award - School of Engineering, DSU, 2022",
          "Research Excellence Award for high-impact publications, 2023",
          "Distinguished Alumnus Award from NIT Warangal, 2021",
          "International travel grant for IEEE conference presentation, 2023",
          "Recognition for mentoring excellence by Students, 2022",
        ],
      },
      {
        title: "Additional Responsibilities",
        content: [
          "Department Head, Electronics & Communication Engineering",
          "Member of Academic Council, DSU",
          "Coordinator of VLSI Center of Excellence",
          "Industry Liaison Officer for Bosch ETAS Lab",
          "Supervisor for ECE Lab and Facilities",
          "Member of Research Ethics Committee",
          "Faculty Advisor for Student Technical Clubs",
        ],
      },
    ],
  };

  return <FacultyProfileCard faculty={profileData} />;
}
