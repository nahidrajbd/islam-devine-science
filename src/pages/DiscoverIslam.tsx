import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Star, Sparkles, Moon } from "lucide-react";

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
