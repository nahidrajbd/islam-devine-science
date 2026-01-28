import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedVideoProps {
  videoId: string;
  title?: string;
}

export function FeaturedVideo({ videoId, title = "Featured Video" }: FeaturedVideoProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-transparent">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Play className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{title}</span>
            </div>
          </div>

          {/* Video Container */}
          <Card className="overflow-hidden border-2 border-primary/20 islamic-shadow">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          {/* Decorative element below */}
          <div className="islamic-divider mx-auto max-w-xs mt-8" />
        </div>
      </div>
    </section>
  );
}
