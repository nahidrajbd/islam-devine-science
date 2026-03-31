import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BookOpen, Moon, Star, ExternalLink } from "lucide-react";

const externalResources = [
  {
    title: "The Holy Quran",
    description: "Read, study, and learn The Noble Quran.",
    url: "https://quran.com",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "The Sunnah",
    description: "The Hadith of the Prophet Muhammad (PBUH) at your fingertips.",
    url: "https://sunnah.com",
    icon: Moon,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "The 99 Names of Allah",
    description: "Learn the beautiful names of Allah (Asma-ul-Husna).",
    url: "https://myislam.org/99-names-of-allah/",
    icon: Star,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const DiscoverIslam = () => {
  return (
    <Layout>
      <PageHeader
        title="Discover Islam"
        subtitle="Explore external religious resources for deeper understanding"
        verse={{
          text: "Read! In the Name of your Lord, Who has created (all that exists).",
          reference: "Quran 96:1"
        }}
      />

      <section className="py-12">
        <div className="container flex justify-center">
          <div className="max-w-4xl w-full">
            {/* Introduction */}
            <div className="text-center mb-12 space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                Discover a collection of trusted resources to deepen your understanding
                of Islam. Read the Holy Quran, explore the authentic sayings of Prophet
                Muhammad (PBUH), and learn the Beautiful Names of Allah.
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {externalResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <Card className="h-full border-2 border-border/50 hover:border-primary/50 transition-all islamic-shadow flex flex-col items-center p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${resource.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className={`h-8 w-8 ${resource.color}`} />
                    </div>
                    <CardTitle className="font-heading text-xl mb-3 flex items-center justify-center gap-2">
                      {resource.title}
                      <ExternalLink className="h-4 w-4 opacity-50" />
                    </CardTitle>
                    <CardContent className="p-0">
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoverIslam;
