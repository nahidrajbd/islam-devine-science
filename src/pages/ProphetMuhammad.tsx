import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, HandHeart, Scale, Download, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResearchPaper {
  title: string;
  downloadUrl: string;
}

interface ResearchCategory {
  category: string;
  icon: typeof BookOpen;
  papers: ResearchPaper[];
}

const researchCategories: ResearchCategory[] = [
  {
    category: "Prophet Muhammad",
    icon: BookOpen,
    papers: [
      {
        title: "The Prophet of Excellence",
        downloadUrl: "https://drive.google.com/file/d/1DlPJomloGNRgJODmLu0vEGPcgaopfssO/view?usp=drive_link",
      },
      {
        title: "Our Beloved Teacher",
        downloadUrl: "https://drive.google.com/file/d/1azvP5abbsPOtGlP09Tkwsh2P-8MWOH2S/view?usp=drive_link",
      },
      {
        title: "Healthy Habits of the Prophet",
        downloadUrl: "https://drive.google.com/file/d/1et4f71cGpr3IGU-qf5IrdivfRCxhswLB/view?usp=drive_link",
      },
      {
        title: "Teaching Methods of the Prophet",
        downloadUrl: "https://drive.google.com/file/d/149KHC5HaswJek2ZyLr3kXwpQzqUMLUly/view?usp=drive_link",
      },
      {
        title: "Medicine of the Prophet",
        downloadUrl: "https://drive.google.com/file/d/1I5N_9ZuERkq4XmshZcnmu0NHcmOkIe2P/view?usp=drive_link",
      },
    ],
  },
];

const ProphetMuhammad = () => {
  return (
    <Layout>
      <PageHeader
        title="Prophet Muhammad (SAW)"
        subtitle="Teachings, methods, and wisdom of the beloved Messenger"
        verse={{
          text: "You are the best community (Ummah) raised up for (the benefit of) humanity; enjoining what is right, forbidding what is wrong, and believing in Allah.",
          reference: "Quran 3:110"
        }}
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Prophet Muhammad (Peace Be Upon Him) was sent as a mercy to all of mankind.
                  His life exemplifies the perfect balance of worship, compassion, justice, and wisdom.
                </p>
                <div className="islamic-divider mx-auto max-w-xs" />
                <p className="quran-verse text-foreground/80">
                  "And We have not sent you, [O Muhammad], except as a mercy to the worlds."
                </p>
                <cite className="text-sm text-accent font-medium">— Quran 21:107</cite>
              </CardContent>
            </Card>

            {/* Research Papers */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Research by Zin Eddine Dadach
                </h2>
                <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                  "They said: 'Glory to You! We have no knowledge except what You taught us.
                  You, indeed You, are the All-Knowing, the Wise.'" — Quran 2:32
                </p>
              </div>

              {researchCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.category} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {category.category}
                      </h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.papers.map((paper) => (
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
                                Download PDF
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charity and Compassion */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <HandHeart className="h-10 w-10 text-accent" />
                  </div>
                  <div className="text-center md:text-left space-y-3">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Charity as Taught by the Prophet
                    </h3>
                    <p className="text-foreground/80">
                      Prophet Muhammad (PBUH) said: "All creatures are the dependents of Allah,
                      and the most beloved of creatures to Allah is the one who is most beneficial
                      to His dependents."
                    </p>
                    <a
                      href="https://backtojannah.com/charity-taught-by-quran-prophet-muhammad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors mt-2"
                    >
                      Read full article <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rejecting Discrimination */}
            <Card className="border-2 border-secondary/30">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Scale className="h-10 w-10 text-secondary" />
                  </div>
                  <div className="text-center md:text-left space-y-3">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Rejecting Nepotism, Classism, and Racism
                    </h3>
                    <p className="text-foreground/80">
                      The Prophet (PBUH) declared in his farewell sermon: "All mankind is from Adam
                      and Eve. An Arab has no superiority over a non-Arab, nor does a non-Arab have
                      any superiority over an Arab; a white has no superiority over a black, nor does
                      a black have any superiority over a white; except by piety and good action."
                    </p>
                    <a
                      href="https://aboutislam.net/blog/rejecting-nepotism-classism-and-racism-just-like-the-prophet-muhammed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors mt-2"
                    >
                      Read full article <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProphetMuhammad;
