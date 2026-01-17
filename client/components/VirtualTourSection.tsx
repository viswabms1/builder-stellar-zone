import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export function VirtualTourSection() {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.3 });
  const tourLink = "https://dsu.edu.in/virtual-tour";

  return (
    <section ref={elementRef} className="px-3 py-10 md:py-16 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="headline-2 mb-6">
            <span className="text-foreground">Step Inside </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Dayananda Sagar University – Virtually!
            </span>
          </h2>
          <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
            Explore our state-of-the-art campus through an immersive 360° virtual tour
          </p>
        </div>

        {/* Virtual Tour Embedded - Full Section */}
        <div className="w-full bg-background rounded-2xl overflow-hidden h-screen md:h-[90vh] border-2 border-brand-orange/20 shadow-2xl">
          <iframe
            title="DSU Virtual Tour"
            src={tourLink}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
            style={{
              border: "none",
            }}
          />
        </div>

        {/* Tour Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "360° Campus Views",
              description:
                "Explore every corner of our world-class campus with immersive 360-degree photography",
            },
            {
              title: "Interactive Navigation",
              description:
                "Point, click, and scroll to navigate seamlessly through different campus areas and facilities",
            },
            {
              title: "Accessible Anytime",
              description:
                "Visit our campus virtually at your own pace, 24/7, from anywhere in the world",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-card/50 rounded-xl border border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground font-display mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
