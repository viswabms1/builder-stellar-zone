import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Shield,
  Headset,
  Cpu,
  Zap,
  Microscope,
  TrendingUp,
} from "lucide-react";

export default function CentreOfExcellence() {
  const centres = [
    {
      icon: Shield,
      title: "State-of-the-Art Cyber Range",
      description:
        "Advanced training, simulation, and research in cybersecurity, ethical hacking, and digital forensics.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Headset,
      title: "AR & VR Laboratory",
      description:
        "Immersive technologies for engineering, healthcare, design, and education.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Cpu,
      title: "Robotics & Humanoid Laboratory",
      description:
        "Industrial automation, humanoid robots, and collaborative systems.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Lightbulb,
      title: "AI Maker Space",
      description:
        "An innovation hub fostering AI-driven product development and prototyping.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      icon: Zap,
      title: "Quantum Computing Laboratory",
      description:
        "Exploration of quantum algorithms, simulation, and quantum software development.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: Microscope,
      title: "High Performance Computing (HPC) Laboratory",
      description:
        "Supercomputing infrastructure for AI/ML, data science, genomics, and climate research.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Image */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
                <Lightbulb className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm font-medium text-orange-500">
                  Innovation Hub
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Centre of Excellence
                </span>
                <br />
                <span className="text-foreground">& Innovation</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Dayananda Sagar University is establishing world-class centres of
                excellence in emerging technologies, aligned with its AI-First
                approach to education, research, and innovation. These centres
                are designed to foster cutting-edge research and industry
                collaboration.
              </p>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <span>Building world-class research infrastructure</span>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe2eb00eb05cd4afbaf2b388959ca3615?format=webp&width=800"
                alt="Centre of Excellence and Innovation"
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Centres Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Proposed Centres
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Centres of Excellence
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              DSU is inviting consultants and industry partners to establish
              these cutting-edge centres, fostering research, innovation, and
              industry collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre, index) => {
              const Icon = centre.icon;
              return (
                <Card
                  key={index}
                  className={`${centre.borderColor} bg-gradient-to-br ${centre.bgColor} to-transparent backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-opacity-100`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${centre.color} mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{centre.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {centre.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Scope Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Scope of Partnership
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Turnkey Solutions</h3>
                <p className="text-muted-foreground">
                  Design, supply, installation, and commissioning
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Academic Integration</h3>
                <p className="text-muted-foreground">
                  Curriculum alignment, training modules, and certification programs
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Industry Collaboration</h3>
                <p className="text-muted-foreground">
                  Joint research, internships, and real-world problem-solving
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Sustainability & Scalability</h3>
                <p className="text-muted-foreground">
                  Roadmap for upgradation and global benchmarking
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Who Can Apply</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Global & Indian Technology Companies</li>
                  <li>• Industry-specific System Integrators</li>
                  <li>• Specialized Consultants in Emerging Tech</li>
                  <li>• Research Institutions & Consortia</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl">
                <p className="font-semibold text-yellow-900 dark:text-yellow-300">
                  ⏰ Submission deadline: 30 days from announcement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-red-600/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Interested in establishing a Centre of Excellence at DSU?
                Contact us for more information.
              </p>
              <div className="space-y-3">
                <p className="flex items-center space-x-3">
                  <span className="font-semibold">Email:</span>
                  <a
                    href="mailto:vc-ceo@dayanandasagar.edu"
                    className="text-orange-500 hover:text-orange-600 transition"
                  >
                    vc-ceo@dayanandasagar.edu
                  </a>
                  {" | "}
                  <a
                    href="mailto:registrar@dsu.edu.in"
                    className="text-orange-500 hover:text-orange-600 transition"
                  >
                    registrar@dsu.edu.in
                  </a>
                </p>
                <p className="text-muted-foreground">
                  The Registrar, Dayananda Sagar University, Devarakaggalahalli,
                  Haranalli, Kanakapura Road, Bengaluru South Dist. 562112
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
