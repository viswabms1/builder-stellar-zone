import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CarouselItem = {
  image: string;
  title: string;
  description: string;
};

const admissionSliderItems: CarouselItem[] = [
  {
    image:
      "https://www.dsu.edu.in/cache/resized/ccb77541cad0917c758d7c8869ab88c3.jpg",
    title: "CJMC Admissions",
    description:
      "Admissions open for: Journalism, Advertising & PR, Video Production",
  },
  {
    image:
      "https://www.dsu.edu.in/cache/resized/daee71601a135f97bd8b57033cc23a3b.jpg",
    title: "Business Applications",
    description:
      "The only program that provides a unique 'Reverse Engineer Pedagogy' with hands-on AI & ML",
  },
  {
    image:
      "https://www.dsu.edu.in/cache/resized/a4359bd05fb868287dc18844ac2ffd9f.jpg",
    title: "PGCET Admissions",
    description:
      "School of Commerce and Management Studies welcomes full-time MBA students from PGCET",
  },
  {
    image:
      "https://www.dsu.edu.in/cache/resized/8a4ad3ecd59ce31c851a7b2cf20ecda6.jpg",
    title: "AIC-DSU Innovation",
    description:
      "Your Success is our Success. AIC-DSU Innovation Foundation is an Innovation Center that strives to empower startups",
  },
  {
    image:
      "https://www.dsu.edu.in/cache/resized/2d89222379562f640d600b5be025d83a.jpg",
    title: "College of Pharmacy",
    description: "College of Pharmaceutical Sciences",
  },
  {
    image:
      "https://www.dsu.edu.in/cache/resized/6c2ce349101d1198a3bbbada6d4dcdd3.jpg",
    title: "School of Engineering",
    description: "School of Engineering",
  },
];

export default function AdmissionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % admissionSliderItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) =>
      prev === 0 ? admissionSliderItems.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % admissionSliderItems.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-orange-500/5 px-3 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative h-96 overflow-hidden rounded-2xl border border-orange-500/20 bg-background shadow-2xl">
          {/* Carousel Container */}
          <div className="relative h-full w-full">
            {admissionSliderItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />
                {/* Overlay with Content */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div className="max-w-xl px-4 py-6">
                    <h3 className="title-lg font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="body-lg text-gray-100 mb-3 line-clamp-3">
                      {item.description}
                    </p>
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-3 py-2 rounded-xl font-semibold"
                      asChild
                    >
                      <a
                        href="https://admissions.dsu.edu.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/30 p-2 text-white transition hover:bg-white/50 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/30 p-2 text-white transition hover:bg-white/50 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {admissionSliderItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentSlide
                    ? "h-3 w-8 bg-white"
                    : "h-2 w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
