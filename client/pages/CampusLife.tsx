import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Shield,
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
  ChevronRight
} from "lucide-react";

export default function CampusLife() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <Heart className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">Life @ DSU</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">More Than Just</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Education
            </span>
            <br />
            <span className="text-foreground">It's Home</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience a vibrant campus community where 
            <span className="text-orange-400 font-semibold"> lifelong friendships</span> are made, 
            <span className="text-red-400 font-semibold"> talents are discovered</span>, and 
            <span className="text-pink-400 font-semibold"> memories are created</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl">
              Virtual Campus Tour
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl">
              Download Campus Guide
            </Button>
          </div>
          
          {/* Campus Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "600+", label: "Acres Campus", icon: MapPin },
              { number: "100+", label: "Student Clubs", icon: Users },
              { number: "50+", label: "Cultural Events", icon: Star },
              { number: "24/7", label: "Campus Security", icon: Shield },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Organizations */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Student</span>
              <span className="text-foreground"> Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover your passion and develop your skills through our diverse range of student clubs and societies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Arts & Culture",
                description: "Express your creativity through various artistic mediums and cultural activities",
                clubs: ["Drama Society", "Music Club", "Dance Troupe", "Fine Arts Club", "Photography Club", "Literature Society"],
                members: "2,500+",
                events: "Monthly showcases"
              },
              {
                icon: Trophy,
                title: "Sports & Recreation",
                description: "Stay active and competitive with our comprehensive sports programs",
                clubs: ["Cricket Team", "Football Club", "Basketball", "Badminton", "Tennis", "Swimming"],
                members: "3,000+",
                events: "Inter-college tournaments"
              },
              {
                icon: Gamepad2,
                title: "Technology & Innovation",
                description: "Dive into the latest tech trends and build innovative solutions",
                clubs: ["Coding Club", "Robotics Society", "AI/ML Club", "Cybersecurity", "Web Development", "Mobile App Dev"],
                members: "4,500+",
                events: "Hackathons & Tech talks"
              },
              {
                icon: Users,
                title: "Social Service",
                description: "Make a positive impact in the community through various service initiatives",
                clubs: ["NSS", "NCC", "Rotaract Club", "Environment Club", "Blood Donation", "Community Service"],
                members: "2,000+",
                events: "Weekly community drives"
              },
              {
                icon: BookOpen,
                title: "Academic & Professional",
                description: "Enhance your academic journey and professional development",
                clubs: ["Debate Society", "Model UN", "Entrepreneurship", "Finance Club", "Marketing Club", "HR Forum"],
                members: "3,500+",
                events: "Seminars & Competitions"
              },
              {
                icon: Heart,
                title: "Special Interest",
                description: "Explore unique hobbies and special interests with like-minded peers",
                clubs: ["Astronomy Club", "Culinary Arts", "Travel Club", "Gaming Society", "Gardening", "Yoga & Wellness"],
                members: "1,800+",
                events: "Monthly meetups"
              },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <category.icon className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.members} Members
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs border-orange-500/30 text-orange-500">
                    {category.events}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Popular Clubs:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {category.clubs.slice(0, 4).map((club, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ChevronRight className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                          {club}
                        </div>
                      ))}
                      {category.clubs.length > 4 && (
                        <div className="text-sm text-orange-500 font-medium">
                          +{category.clubs.length - 4} more clubs
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full justify-between group-hover:text-orange-500 group-hover:bg-orange-500/5">
                    Join Clubs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">World-Class </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Facilities</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a comfortable and enriching campus experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "Modern Hostels",
                description: "Comfortable accommodation with all amenities",
                features: ["AC Rooms", "WiFi", "Study Areas", "Recreation Rooms"],
                href: "https://myposhtell.com"
              },
              {
                icon: Utensils,
                title: "Food Courts",
                description: "Multiple dining options with diverse cuisines",
                features: ["Multi-cuisine", "Healthy Options", "24/7 Cafes", "Food Courts"]
              },
              {
                icon: BookOpen,
                title: "Central Library",
                description: "Extensive collection with digital resources",
                features: ["2M+ Books", "Digital Library", "Study Halls", "Research Centers"]
              },
              {
                icon: Dumbbell,
                title: "Sports Complex",
                description: "State-of-the-art sports and fitness facilities",
                features: ["Swimming Pool", "Gymnasium", "Indoor Sports", "Outdoor Courts"]
              },
              {
                icon: Shield,
                title: "Health Center",
                description: "Comprehensive healthcare services on campus",
                features: ["Medical Center", "Ambulance", "Mental Health", "Pharmacy"]
              },
              {
                icon: Car,
                title: "Transportation",
                description: "Convenient transport services across the city",
                features: ["Bus Services", "Parking", "Bike Sharing", "Shuttle Service"]
              },
              {
                icon: Wifi,
                title: "IT Infrastructure",
                description: "High-speed internet and tech support",
                features: ["Campus WiFi", "Computer Labs", "Tech Support", "Smart Classrooms"]
              },
              {
                icon: Coffee,
                title: "Recreation",
                description: "Spaces for relaxation and social interaction",
                features: ["Student Lounges", "Game Rooms", "Entertainment", "Social Spaces"]
              },
            ].map((facility) => {
              const body = (
                <>
                  <facility.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{facility.description}</p>
                  <div className="space-y-1">
                    {facility.features.map((feature) => (
                      <div key={feature} className="text-xs text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </>
              );

              if (facility.href) {
                return (
                  <a
                    key={facility.title}
                    href={facility.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Card className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group">
                      {body}
                    </Card>
                  </a>
                );
              }

              return (
                <Card key={facility.title} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group">
                  {body}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Events</span>
              <span className="text-foreground"> & Activities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Year-round excitement with festivals, competitions, and cultural celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Annual Fest - DSUFEST",
                description: "The biggest cultural extravaganza with celebrities, competitions, and entertainment",
                highlights: ["Celebrity Performances", "Inter-college Competitions", "Food Festival", "Fashion Show"],
                duration: "5 Days",
                attendance: "50,000+"
              },
              {
                icon: Trophy,
                title: "Sports Meet",
                description: "Comprehensive sports championship with inter-college competitions",
                highlights: ["Multiple Sports", "State Teams", "Professional Coaching", "Awards Ceremony"],
                duration: "1 Week",
                attendance: "15,000+"
              },
              {
                icon: Mic,
                title: "Tech Symposium",
                description: "Technology festival featuring innovation, coding competitions, and tech talks",
                highlights: ["Hackathons", "Tech Talks", "Innovation Expo", "Industry Meetups"],
                duration: "3 Days",
                attendance: "20,000+"
              },
              {
                icon: Palette,
                title: "Cultural Nights",
                description: "Regular cultural events celebrating diversity and artistic talents",
                highlights: ["Dance Performances", "Music Concerts", "Drama Shows", "Art Exhibitions"],
                duration: "Monthly",
                attendance: "5,000+"
              },
              {
                icon: BookOpen,
                title: "Academic Conferences",
                description: "Scholarly events with research presentations and industry interactions",
                highlights: ["Research Papers", "Industry Experts", "Networking", "Workshops"],
                duration: "Quarterly",
                attendance: "3,000+"
              },
              {
                icon: Heart,
                title: "Social Initiatives",
                description: "Community service events and social awareness campaigns",
                highlights: ["Blood Donation", "Environmental Drives", "Community Service", "Awareness Campaigns"],
                duration: "Ongoing",
                attendance: "2,000+"
              },
            ].map((event, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <event.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="text-sm font-semibold text-orange-500">{event.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {event.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {event.attendance} Attendees
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Highlights:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Gallery */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Life in </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Pictures</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Glimpses of the vibrant campus life at DSU
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Campus Tour", category: "Orientation", color: "orange" },
              { title: "Cultural Fest", category: "Events", color: "red" },
              { title: "Sports Day", category: "Athletics", color: "blue" },
              { title: "Graduation", category: "Ceremony", color: "green" },
              { title: "Tech Fair", category: "Innovation", color: "purple" },
              { title: "Food Festival", category: "Culture", color: "pink" },
              { title: "Study Groups", category: "Academic", color: "yellow" },
              { title: "Night Life", category: "Social", color: "indigo" },
            ].map((item, index) => (
              <Card key={index} className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 flex items-center justify-center text-center group hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer">
                <div>
                  <Camera className="w-12 h-12 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground group-hover:text-orange-500 transition-colors">{item.title}</h3>
                  <Badge variant="outline" className="mt-2 text-xs border-orange-500/30 text-orange-500">
                    {item.category}
                  </Badge>
                </div>
              </Card>
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
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Part of the Family</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our vibrant community and create memories that will last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-white px-12 py-6 text-lg font-semibold rounded-2xl">
                Visit Campus
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-12 py-6 text-lg font-semibold rounded-2xl">
                Apply Now
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["100+ Clubs", "24/7 Campus", "World-Class Facilities", "Vibrant Community"].map((badge, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-xs font-medium">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
