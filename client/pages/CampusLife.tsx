import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building,
  Users,
  Star,
  Heart,
  Music,
  Trophy,
  BookOpen,
  Coffee,
  Utensils,
  Wifi,
  Car,
  Gamepad2,
  Dumbbell,
  Palette,
  Camera,
  Mic,
  Drama,
  Plane,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function CampusLife() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F34c979438f024245a025e54a75e65599?format=webp&width=800"
            alt="DSU Campus Courtyard"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-full flex items-center justify-start text-left max-w-7xl mx-auto px-6">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl px-6 md:px-8 py-8 max-w-xl">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/40 mb-4">
              <Heart className="w-4 h-4 text-orange-300 mr-2" />
              <span className="text-sm font-medium text-orange-200">
                Life @ DSU
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-foreground">
              <span>More Than Just</span>
              <br />
              <span className="text-orange-300">Education</span>
              <br />
              <span>It's Home</span>
            </h1>

            <p className="text-base md:text-lg text-orange-50 mb-6 leading-relaxed">
              Experience a vibrant campus community where friendships are made, talents are discovered, and memories are created.
            </p>

            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-foreground px-10 py-6 text-lg font-semibold rounded-full inline-flex items-center"
              >
                Virtual Campus Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Campus Highlights - Image Gallery Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Campus Highlights
              </span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Explore the diverse spaces and vibrant areas across our sprawling campus
            </p>
          </div>

          {/* Featured Large Image */}
          <div className="mb-8 rounded-2xl overflow-hidden h-[400px] border border-border hover:border-orange-500/50 transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F602a48ccc50449ef8b044f6528cfa842?format=webp&width=800"
              alt="Movie Screening Room"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Masonry Grid - Campus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Engineering Complex",
                image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=400&fit=crop",
                description: "State-of-the-art labs and modern classrooms"
              },
              {
                title: "Central Library",
                image: "https://images.unsplash.com/photo-1507842872343-583f20270319?w=500&h=400&fit=crop",
                description: "2M+ books and digital resources"
              },
              {
                title: "Student Center",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop",
                description: "Hub for student activities and events"
              },
            ].map((area, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl h-64 mb-4 border border-border hover:border-orange-500/50 transition-colors">
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-orange-500 transition-colors mb-2">
                  {area.title}
                </h3>
                <p className="text-foreground text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery - Masonry Layout */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Life in </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Pictures
              </span>
            </h2>
            <p className="text-xl text-foreground">
              Glimpses of the vibrant campus life at DSU
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-4">
            {[
              {
                title: "Campus Tour",
                category: "Orientation",
                image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
                size: "col-span-1 row-span-2"
              },
              {
                title: "Campus Entrance",
                category: "Architecture",
                image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa16295c3fda14368b934b709019e0e30?format=webp&width=800",
                size: "col-span-1 row-span-2"
              },
              {
                title: "Cultural Fest",
                category: "Events",
                image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa4d4c925921740bdaac1f9d434a276f1?format=webp&width=800"
              },
              { 
                title: "Sports Day", 
                category: "Athletics", 
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop"
              },
              { 
                title: "Graduation", 
                category: "Ceremony", 
                image: "https://images.unsplash.com/photo-1549692520-ace2c9604117?w=300&h=300&fit=crop"
              },
              { 
                title: "Tech Fair", 
                category: "Innovation", 
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop"
              },
              { 
                title: "Food Festival", 
                category: "Culture", 
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561a1b?w=300&h=300&fit=crop"
              },
              {
                title: "Study Groups",
                category: "Academic",
                image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F216fee584984419caf29c0341644b072?format=webp&width=800",
                size: "col-span-1 row-span-2"
              },
              { 
                title: "Night Life", 
                category: "Social", 
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.size || ''} relative group overflow-hidden rounded-xl border border-border hover:border-orange-500/50 transition-all duration-300 cursor-pointer`}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {item.title}
                    </h3>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Organizations with Images */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Student
              </span>
              <span className="text-foreground"> Organizations</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Discover your passion through our diverse range of student clubs and societies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Palette,
                title: "Arts & Culture",
                description: "Express your creativity through artistic mediums",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                members: "2,500+",
              },
              {
                icon: Trophy,
                title: "Sports & Recreation",
                description: "Stay active with comprehensive sports programs",
                image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Febfd634b00b44333a5bb858290a814d7?format=webp&width=800",
                members: "3,000+",
              },
              {
                icon: Gamepad2,
                title: "Technology & Innovation",
                description: "Build innovative solutions with latest tech",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                members: "4,500+",
              },
              {
                icon: Users,
                title: "Social Service",
                description: "Make a positive impact in the community",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                members: "2,000+",
              },
              {
                icon: BookOpen,
                title: "Academic & Professional",
                description: "Enhance your career development journey",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                members: "3,500+",
              },
              {
                icon: Heart,
                title: "Special Interest",
                description: "Explore unique hobbies with like-minded peers",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
                members: "1,800+",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <category.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.members}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facilities with Large Images */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">World-Class </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
          </div>

          {/* Two Column Featured Facility Layout */}
          {[
            {
              title: "Modern Hostels",
              image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0357dfeb9259438fbb59b6cd31a06e5a?format=webp&width=800",
              description: "Comfortable accommodation with all modern amenities",
              features: ["AC Rooms", "WiFi", "Study Areas", "Recreation Rooms"],
            },
            {
              title: "Sports Complex",
              image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbc9e4b114ef0435c809830c5bca27d60?format=webp&width=800",
              description: "State-of-the-art facilities for all sports and fitness",
              features: ["Swimming Pool", "Gymnasium", "Indoor Sports", "Outdoor Courts"],
            },
            {
              title: "Central Library",
              image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F303af6a81dfe4b5bb9ea6952ee39c3b7?format=webp&width=800",
              description: "Extensive collection with digital resources and study spaces",
              features: ["2M+ Books", "Digital Library", "Study Halls", "Research Centers"],
            },
            {
              title: "Food Courts",
              image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feaa91fe5c0b44c02b3ead40543f73fff?format=webp&width=800",
              description: "Multiple dining options with diverse cuisines",
              features: ["Multi-cuisine", "Healthy Options", "24/7 Cafes", "Food Courts"],
            },
          ].map((facility, index) => (
            <div key={index} className={`mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-cols-2 md:[&>:first-child]:order-2' : ''}`}>
              <div className="relative overflow-hidden rounded-2xl h-80 border border-border hover:border-orange-500/50 transition-colors group">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {facility.title}
                </h3>
                <p className="text-lg text-foreground mb-6">
                  {facility.description}
                </p>
                <div className="space-y-2 mb-6">
                  {facility.features.map((feature) => (
                    <div key={feature} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Timeline with Images */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Events
              </span>
              <span className="text-foreground"> & Activities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "Annual Fest - DSUFEST",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
                duration: "5 Days",
                attendance: "50,000+",
              },
              {
                icon: Trophy,
                title: "Sports Meet",
                image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4965c58a577f42679515554a2c799501?format=webp&width=800",
                duration: "1 Week",
                attendance: "15,000+",
              },
              {
                icon: Mic,
                title: "Tech Symposium",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                duration: "3 Days",
                attendance: "20,000+",
              },
              {
                icon: Palette,
                title: "Cultural Nights",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                duration: "Monthly",
                attendance: "5,000+",
              },
              {
                icon: BookOpen,
                title: "Academic Conferences",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                duration: "Quarterly",
                attendance: "3,000+",
              },
              {
                icon: Heart,
                title: "Social Initiatives",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                duration: "Ongoing",
                attendance: "2,000+",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <event.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary" className="text-xs">
                      {event.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-orange-500 transition-colors">
                    {event.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs border-orange-500/30 text-orange-500">
                    {event.attendance} Attendees
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Stories Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Student </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-foreground">
              Real stories and experiences from our student community
            </p>
          </div>

          {/* Featured Story */}
          <div className="relative overflow-hidden rounded-2xl h-96 mb-12 border border-border hover:border-orange-500/50 transition-colors group">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=400&fit=crop"
              alt="Featured Story"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
              <div className="text-foreground">
                <Badge className="mb-4 bg-orange-500">Featured</Badge>
                <h3 className="text-3xl font-bold mb-2">My Journey at DSU</h3>
                <p className="text-orange-100">A student's journey of growth, learning, and unforgettable memories</p>
              </div>
            </div>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Friendship & Bonding",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
              },
              {
                title: "Academic Excellence",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              },
              {
                title: "Campus Adventures",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
              },
            ].map((story, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl h-64 border border-border hover:border-orange-500/50 transition-colors cursor-pointer">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-foreground font-bold text-lg">{story.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to be
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                Part of the Family
              </span>
              ?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join our vibrant community and create memories that will last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-12 py-6 text-lg font-semibold rounded-full"
              >
                Visit Campus
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-12 py-6 text-lg font-semibold rounded-full"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
