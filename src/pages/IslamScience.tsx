import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Leaf, Mountain, Calculator, FlaskConical, Globe } from "lucide-react";

const scienceAreas = [
  {
    title: "Mathematics",
    description: "From algebra to algorithms, Muslim scholars laid the groundwork for modern mathematics.",
    icon: Calculator,
    contributions: ["Al-Khwarizmi's Algebra", "Arabic Numerals", "Trigonometry"],
  },
  {
    title: "Physics and Chemistry",
    description: "Optics, mechanics, and the scientific method were advanced by Islamic scholars.",
    icon: Atom,
    contributions: ["Ibn al-Haytham's Optics", "Scientific Method"],
  },
  {
    title: "Medicine, Zoology, and Botany",
    description: "Medicine, anatomy, and pharmacology flourished during the Islamic Golden Age.",
    icon: Leaf,
    contributions: ["Ibn Sina's Canon of Medicine", "Surgery Techniques", "Pharmacology"],
  },
  {
    title: "Astronomy, Geology, and Oceanography",
    description: "Geography, cartography, and geology were pioneered by Muslim explorers and scholars.",
    icon: Mountain,
    contributions: ["Astronomy", "World Maps", "Mineral Classification", "Climate Studies"],
  },
];

const IslamScience = () => {
  return (
    <Layout>
      <PageHeader
        title="Islam & Science"
        subtitle="Exploring the harmony between Islamic wisdom and scientific inquiry"
        verse={{
          text: "And the heaven He has raised high, and has set up the Balance.",
          reference: "Quran 55:7"
        }}
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Islamization of Sciences */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-6">
                <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                  Islamization of Sciences
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    The Ayat of Allah (SWT) in the universe can be explained in the way different
                    elements and systems in the natural world (from atoms to stars) are all
                    structured, arranged, and related to each other.
                  </p>
                  <p>
                    Contemplating the skies, the plants, the oceans, the mountains, the animals
                    and the alternation of the day and night, and thinking about the process of
                    childbirth are certainly clear Ayat that everything is created in a state of
                    perfection. All these Ayat are a great proof that Allah (SWT) is the One and
                    Only, the True Scientist.
                  </p>
                  <p className="font-medium text-primary">
                    Indeed, the universe is like a silent Quran with so many marks of the
                    Beautiful Names of Allah (SWT).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tawheed-based Science */}
            <div className="text-center space-y-4 py-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full">
                <FlaskConical className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Tawheed-Based Science</span>
              </div>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                The concept of science in Islam is the concept of Tawheed-based science,
                namely the belief in Allah (SWT) alone in all aspects of His creation and worship.
                Knowledge without Tawhid will cause humans to forget themselves and neglect
                their obligations and goals in life.
              </p>
            </div>

            {/* Science Areas Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {scienceAreas.map((area) => (
                <Card key={area.title} className="border-2 border-border/50 hover:border-primary/30 transition-colors islamic-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-lg">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.contributions.map((item) => (
                        <span key={item} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 13 Scientific Facts */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-8 text-center space-y-4">
                <Globe className="h-12 w-12 text-accent mx-auto" />
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Scientific Facts in the Holy Quran
                </h3>
                <p className="text-foreground/80 max-w-2xl mx-auto">
                  The most important thing to remember is that the conception of knowledge
                  (Al-Ilm) in Islam is never separated from its spiritual dimension.
                  The Quran contains numerous references to natural phenomena that have been
                  confirmed by modern science.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IslamScience;
