import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContent, VisionMissionBlock, CoreValuesBlock, ActionItemsBlock, CTABlock } from '@shared/api';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
  Compass,
  Award,
  Lightbulb,
  Loader,
  AlertCircle,
} from 'lucide-react';
import { useTheme } from '@/providers/theme-provider';
import { Alert, AlertDescription } from '@/components/ui/alert';

/**
 * Icon mapping for dynamic icon rendering
 */
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  lightbulb: Lightbulb,
  award: Award,
  target: Target,
  heart: Heart,
  compass: Compass,
  eye: Eye,
};

/**
 * Render icons dynamically from Strapi
 */
function IconComponent({ iconName }: { iconName: string }) {
  const Icon = ICON_MAP[iconName] || Compass;
  return <Icon className="w-8 h-8 text-orange-500" />;
}

/**
 * Loading skeleton
 */
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-pulse">
      <div className="h-96 bg-gray-700 mb-8"></div>
      <div className="max-w-7xl mx-auto px-3 space-y-8">
        <div className="h-12 bg-gray-700 rounded w-1/3"></div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-64 bg-gray-700 rounded"></div>
          <div className="h-64 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * Error boundary for failed data fetch
 */
function ErrorBoundary({ error }: { error: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-3">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <div className="font-semibold mb-2">Failed to load page</div>
          <div className="text-sm">{error}</div>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}

/**
 * Render dynamic content blocks
 */
function ContentBlockRenderer({ block }: { block: any }) {
  switch (block.__component) {
    case 'vision-mission.vision-mission':
      return <VisionMissionSection block={block as VisionMissionBlock} />;
    
    case 'action-items.action-items':
      return <ActionItemsSection block={block as ActionItemsBlock} />;
    
    case 'core-values.core-values':
      return <CoreValuesSection block={block as CoreValuesBlock} />;
    
    case 'cta.cta-section':
      return <CTASection block={block as CTABlock} />;
    
    default:
      console.warn(`Unknown block component: ${block.__component}`);
      return null;
  }
}

/**
 * Hero Section
 */
function HeroSection({ hero }: { hero: PageContent['hero'] }) {
  const { theme } = useTheme();

  return (
    <section className="relative bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative w-full">
        {hero.image && (
          <img
            src={hero.image.url}
            alt={hero.image.alternativeText || 'Hero image'}
            className="w-full h-auto max-h-[600px] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-3 py-10 lg:py-32 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
          <IconComponent iconName={hero.badgeIcon} />
          <span className="text-sm font-medium text-orange-500 ml-2">
            {hero.badgeText}
          </span>
        </div>

        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
            theme === 'light' ? 'text-orange-900' : 'text-white'
          }`}
        >
          {hero.heading}
        </h1>

        <p className="text-lg md:text-xl font-semibold text-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
          {hero.subtitle}
        </p>

        <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
          {hero.description}
        </p>
      </div>
    </section>
  );
}

/**
 * Vision & Mission Section
 */
function VisionMissionSection({ block }: { block: VisionMissionBlock }) {
  return (
    <section className="px-3 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Vision Card */}
          <Card className="bg-card/50 backdrop-blur-sm border border-blue-500/30 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                <IconComponent iconName={block.vision_icon} />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                {block.vision_title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground leading-relaxed">
                {block.vision_description}
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-card/50 backdrop-blur-sm border border-blue-500/30 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                <IconComponent iconName={block.mission_icon} />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                {block.mission_title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground leading-relaxed">
                {block.mission_description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/**
 * Action Items Section
 */
function ActionItemsSection({ block }: { block: ActionItemsBlock }) {
  const { theme } = useTheme();

  return (
    <section className="px-3 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'light' ? 'text-orange-900' : 'text-white'
            }`}
          >
            {block.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {block.items.map((item: string, index: number) => (
              <div
                key={index}
                className="flex gap-4 items-start p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Core Values Section
 */
function CoreValuesSection({ block }: { block: CoreValuesBlock }) {
  const { theme } = useTheme();

  return (
    <section className="px-3 py-10 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'light' ? 'text-orange-900' : 'text-white'
            }`}
          >
            {block.title}
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            {block.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {block.values.map((value) => (
            <Card
              key={value.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
            >
              <CardContent className="p-3">
                <IconComponent iconName={value.icon} />
                <h3 className="text-lg font-bold mb-3 text-foreground mt-4">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * CTA Section
 */
function CTASection({ block }: { block: CTABlock }) {
  return (
    <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{block.title}</h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
          {block.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {block.primaryButton && (
            <a href={block.primaryButton.url} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                {block.primaryButton.label}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          )}

          {block.secondaryButton && (
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                {block.secondaryButton.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Main Component
 */
export default function VisionMission() {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPageContent() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/page/vision-mission');
        
        if (!response.ok) {
          throw new Error(`Failed to load page: ${response.statusText}`);
        }

        const { data } = await response.json();
        setPageContent(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(message);
        console.error('[STRAPI ERROR]', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPageContent();
  }, []);

  // States
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorBoundary error={error} />;
  if (!pageContent) return <ErrorBoundary error="No page content available" />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection hero={pageContent.hero} />

      {/* Dynamic Content Blocks */}
      {pageContent.sections.map((block) => (
        <ContentBlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}
