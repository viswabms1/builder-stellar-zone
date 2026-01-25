import { ArrowRight, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function LibraryGallery() {
  const galleryImages = [
    {
      title: "Main Reading Room",
      description: "Central reading hall with modern facilities",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Digital Library Access Area",
      description: "Computer workstations for digital resource access",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Book Collection Section",
      description: "Organized shelving of comprehensive collection",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Reference Desk",
      description: "Professional assistance and research support",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Study Area",
      description: "Quiet study spaces for focused learning",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Group Study Rooms",
      description: "Collaborative learning spaces for students",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Periodicals Section",
      description: "Collection of journals and publications",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
    {
      title: "Library Entrance",
      description: "Welcome area of the DSU Central Library",
      imageUrl: "https://www.dsu.edu.in/images/3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-pink-500/10 via-rose-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 dark:bg-pink-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-rose-600/10 dark:bg-rose-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Library Gallery
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Visual tour of our state-of-the-art library facilities
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/library">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Facilities</h2>
          <p className="text-lg text-foreground/70">
            Take a visual tour of the DSU Central Library
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all group overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-foreground/70">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Box */}
        <Card className="border-none shadow-lg bg-pink-50 dark:bg-slate-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Visit Our Library</h3>
              <p className="text-foreground/70 mb-4">
                Experience our world-class facilities in person. The DSU Central Library welcomes all students, faculty, and staff during operating hours.
              </p>
              <div className="space-y-2 text-sm text-foreground/70">
                <p><strong>Location:</strong> Main Campus, Devarakaggalahalli</p>
                <p><strong>Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM</p>
                <p><strong>Seating Capacity:</strong> 560 students</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-pink-600 hover:bg-pink-700">
            <Link to="/library">
              Back to Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
