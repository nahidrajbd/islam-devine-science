import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Star, Sparkles, Moon, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "The Holy Quran",
    description: "The divine scripture revealed to Prophet Muhammad (PBUH), serving as the ultimate guide for humanity.",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "The Sunnah",
    description: "The teachings, practices, and sayings of Prophet Muhammad (PBUH) that complement the Quran.",
    icon: Moon,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Tajweed",
    description: "The art of reciting the Quran with proper pronunciation, rhythm, and melody.",
    icon: Sparkles,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Beautiful Names of Allah",
    description: "The 99 Names (Asma ul Husna) that describe the attributes and qualities of the Creator.",
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Five Pillars of Islam",
    description: "Shahada, Salah, Zakat, Sawm, and Hajj - the foundational acts of worship in Islam.",
    icon: Heart,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const researchPapers = [
  {
    title: "Acid Hydrolysis of Cellulose - Part I. Experimental Kinetic Analysis",
    downloadUrl: "https://drive.google.com/file/d/1ogAL0-zIJ2CrFr3-la2v50KVm_tRUSiv/view?usp=sharing",
  },
  {
    title: "Acid Hydrolysis of Cellulose - Part II: Stochastic Simulation using a Monte Carlo Technique",
    downloadUrl: "https://drive.google.com/file/d/1t07yzcb3THn7S7S4N_F0QGczl1TzIFI0/view?usp=sharing",
  },
  {
    title: "Black Powder in Sales Gas Pipelines: Sources and Technical Recommendations",
    downloadUrl: "https://drive.google.com/file/d/1myLkLR6Cuqy3X8qEKar5QifIbvWu6oxf/view?usp=sharing",
  },
  {
    title: "Decision Support for Sustainability Management",
    downloadUrl: "https://drive.google.com/file/d/1snDL1o4Op_G_7kl76V0u9OUMc1T2uUuL/view?usp=sharing",
  },
  {
    title: "Absorption rates of carbon dioxide and hydrogen sulphide in sterically hindered amines",
    downloadUrl: "https://drive.google.com/file/d/1XWFV5chrhmT-JeM0QVPXS6gTiGKrOq62/view?usp=sharing",
  },
  {
    title: "Energy Efficiency of a Simulated Synthetic Natural Gas Combined Cycle (SNGCC)",
    downloadUrl: "https://drive.google.com/file/d/1T7jE5cZDLtxlYr1dt1-pqITBj9xjWdWG/view?usp=sharing",
  },
  {
    title: "An Introductory Chemical Engineering Course Based on Analogies and Research-Based Learning",
    downloadUrl: "https://drive.google.com/file/d/174vaV7XBsoIWV5e6M31da4U1b0VRAmh6/view?usp=sharing",
  },
  {
    title: "Effect of Summer Weather Conditions on the Environmental Impact of a Power Plant in the UAE",
    downloadUrl: "https://drive.google.com/file/d/1F-nDNEaEjt794Jbc4JZ0wWn8H-Hf8EXn/view?usp=sharing",
  },
  {
    title: "The Utilization of a Universal Concept for the Modelisation of Consumer Spending",
    downloadUrl: "https://drive.google.com/file/d/1MTdMJNdpemqPHBoKLiOFWJ2muP4ZcXL1/view?usp=sharing",
  },
  {
    title: "Workforce Management",
    downloadUrl: "https://drive.google.com/file/d/12KuOWpJWecCiHOGEbr5hZW478NCNU3VD/view?usp=sharing",
  },
];

const DiscoverIslam = () => {
  return (
    <Layout>
      <PageHeader
        title="Discover Islam"
        subtitle="Explore the foundations of Islamic faith and practice"
        verse={{
          text: "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.",
          reference: "Quran 16:125"
        }}
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12 space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Islam is a complete way of life that encompasses faith, worship, morality,
                and social conduct. It is built upon the foundation of Tawheed (monotheism) -
                the belief in the Oneness of Allah (SWT).
              </p>
            </div>

            {/* Section Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <Card key={section.title} className="border-2 border-border/50 hover:border-primary/30 transition-colors islamic-shadow">
                  <CardHeader className="text-center pb-2">
                    <div className={`mx-auto w-16 h-16 rounded-full ${section.bgColor} flex items-center justify-center mb-3`}>
                      <section.icon className={`h-8 w-8 ${section.color}`} />
                    </div>
                    <CardTitle className="font-heading text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Research Papers */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                Research by Zin Eddine Dadach
              </h2>
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground italic">
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
                          Download PDF
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Beautiful Names Section */}
            <Card className="mt-12 border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    The Beautiful Names of Allah (SWT)
                  </h3>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Knowing the meaning of the Beautiful Names of Allah (SWT) allows us to
                    thank Him for His infinite blessings and to worship Him with deeper
                    understanding and love. Each Name reveals an aspect of His divine nature
                    and His relationship with His creation.
                  </p>
                  <div className="islamic-divider mx-auto max-w-xs" />
                  <p className="text-sm italic text-muted-foreground">
                    "And to Allah belong the best names, so invoke Him by them." — Quran 7:180
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoverIslam;
