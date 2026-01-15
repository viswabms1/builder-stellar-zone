import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselImageItem = {
  image: string;
  alt: string;
};

type AdmissionCarouselNewProps = {
  items: CarouselImageItem[];
};

export default function AdmissionCarouselNew({ items }: AdmissionCarouselNewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || items.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, items.length]);

  if (items.length === 0) return null;

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-background px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative w-full overflow-hidden rounded-2xl border border-orange-500/20 bg-background shadow-xl">
          {/* Carousel Container */}
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {items.map((_, index) => (
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
