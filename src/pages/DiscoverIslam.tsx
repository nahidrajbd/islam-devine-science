import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { BookOpen, Moon, Star, ExternalLink, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchPapers = [
  {
    title: "THE CREATOR (SWT)",
    downloadUrl: "https://drive.google.com/file/d/1GPHzdDk7bK8Xkvisk8twVXQ75a8CFzVa/view"
  },
  {
    title: "The Light “Al-Noor” (SWT)",
    downloadUrl: "https://drive.google.com/file/d/16wzmJKdCjUgvQvO48n6mqTfdSI4uuoFe/view"
  },
  {
    title: "Tawhidic Paradigm",
    downloadUrl: "https://drive.google.com/file/d/1k0W3w7nvBPe6u4zDApuwrYHphkcOHphv/view"
  },
  {
    title: "Spirituality in Islam",
    downloadUrl: "https://drive.google.com/file/d/1KWxkWnPMoT5jgeEg7maPIGQMOh4HbuH0/view"
  },
  {
    title: "ISLAM: THE TRUE LOVE",
    downloadUrl: "https://drive.google.com/file/d/17yZXv4IdaEC6BpGZTlzlbsAKq8Em_zjo/view"
  },
  {
    title: "INTELLIGENCE IN ISLAM",
    downloadUrl: "https://drive.google.com/file/d/1uPIx7uVhIK1mNCZIrfmh071HLYhH4797/view"
  },
  {
    title: "CREATED TO BE MUSLIM",
    downloadUrl: "https://drive.google.com/file/d/1-vr8Qb8yEMEBxCyK5KWB482_pr6JPFev/view"
  },
  {
    title: "CHARITY AS TAUGHT BY QURAN AND PROPHET MUHAMMAD (PBUH)",
    downloadUrl: "https://drive.google.com/file/d/14-srSQjAZlWKMdqag3ZQ1CAaMl__EZEJ/view"
  },
  {
    title: "Adam (as) : From Clay to Viceroy",
    downloadUrl: "https://drive.google.com/file/d/1Ecios1T39LuAoAKvcp7z09gFomGhQQOM/view"
  }
];

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

            {/* Research Papers */}
            <div className="space-y-8 mt-16">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Research
                </h2>
                <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                  "They said: 'Glory to You! We have no knowledge except what You taught us.
                  You, indeed You, are the All-Knowing, the Wise.'" — Quran 2:32
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {researchPapers.map((paper) => (
                  <Card
                    key={paper.title}
                    className="border-2 border-border/50 hover:border-primary/30 transition-all islamic-shadow group"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <CardTitle className="font-heading text-sm leading-snug">
                          {paper.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-md hover:shadow-lg transition-all"
                      >
                        <a
                          href={paper.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          View Document
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoverIslam;
