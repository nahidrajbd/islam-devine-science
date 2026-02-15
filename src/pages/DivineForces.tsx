import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sun, Moon, Mountain, Waves, Wind, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";

const signs = [
  {
    title: "The Heavens",
    description: "The vastness of the universe, with billions of galaxies, each containing billions of stars, points to the infinite power of the Creator.",
    icon: Sun,
  },
  {
    title: "Day and Night",
    description: "The perfect alternation of day and night, allowing life to flourish, demonstrates divine planning and mercy.",
    icon: Moon,
  },
  {
    title: "The Mountains",
    description: "Mountains serve as pegs that stabilize the Earth's crust, a fact mentioned in the Quran and confirmed by geology.",
    icon: Mountain,
  },
  {
    title: "The Oceans",
    description: "The barriers between salt and fresh water, the water cycle, and marine life all reflect divine wisdom.",
    icon: Waves,
  },
  {
    title: "The Wind",
    description: "Wind pollinates plants, brings rain, and shapes landscapes - a subtle yet powerful force guided by divine law.",
    icon: Wind,
  },
  {
    title: "Living Creatures",
    description: "From the smallest cell to the largest whale, all creatures display remarkable design and purpose.",
    icon: Leaf,
  },
];

const researchPapers = [
  {
    title: "Scientific facts in the Quran",
    downloadUrl: "https://drive.google.com/file/d/1fmotAj30bcDw4MpH1iZE-4S5VatA2qVK/view?usp=sharing",
  },
  {
    title: "Laws of Creation and Decay",
    downloadUrl: "https://drive.google.com/file/d/1bVJ1ynsrKB7khQn1apQq17OAOuFf9rLp/view?usp=sharing",
  },
  {
    title: "Law of Balance",
    downloadUrl: "https://drive.google.com/file/d/1XYjMjbj_mNzjrwD0q_tofUXURl-3L3iH/view?usp=sharing",
  },
  {
    title: "CHARITY: THE DIVINE SCIENCE OF ALLAH SWT",
    downloadUrl: "https://drive.google.com/file/d/1UEiH7nbRFEgCHETDhVyyytHQSlOq-hWF/view?usp=sharing",
  },
  {
    title: "The Divine Laws of Charity: The Islamic Solution to Consumerism and Its Consequences",
    downloadUrl: "https://drive.google.com/file/d/1If74k3L9bJC6rc8VhaEqFI3wYs8lDxcl/view?usp=sharing",
  },
  {
    title: "Divine laws of charity",
    downloadUrl: "https://drive.google.com/file/d/1ZJaat34K7mI7di3kutnkXvr8O868CgW0/view?usp=sharing",
  },
  {
    title: "Divine Forces",
    downloadUrl: "https://drive.google.com/file/d/1cen8EkkdnFU0mM5HNY16lQBZhbi2HGLR/view?usp=sharing",
  },
];

const DivineForces = () => {
  return (
    <Layout>
      <PageHeader
        title="Divine Forces & Laws"
        subtitle="Exploring the signs of Allah in nature and the laws governing creation"
        verse={{
          text: "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding.",
          reference: "Quran 3:190"
        }}
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                The universe operates according to precise laws established by Allah (SWT).
                These laws, which govern everything from the orbits of planets to the growth of cells,
                are signs (Ayat) pointing to the existence and attributes of the Creator.
              </p>
            </div>

            {/* Signs in Nature */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {signs.map((sign) => (
                <Card key={sign.title} className="border-2 border-border/50 hover:border-primary/30 transition-colors islamic-shadow group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <sign.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{sign.title}</h3>
                    <p className="text-sm text-muted-foreground">{sign.description}</p>
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

            {/* Divine Laws of Charity */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-8 space-y-6">
                <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                  Signs of Allah's Divine Laws of Charity in Nature
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Similar to nature, divine laws of charity for Muslims are also indicated in the Quran.
                    Just as the sun gives light without discrimination, rain falls on all lands, and
                    trees provide shade to everyone, Muslims are called to be sources of benefit to
                    all of creation.
                  </p>
                  <p>
                    The Prophet Muhammad (PBUH) said: "The believer's shade on the Day of Resurrection
                    will be his charity."
                  </p>
                </div>
                <div className="islamic-divider mx-auto max-w-xs" />
              </CardContent>
            </Card>

            {/* Balance Quote */}
            <div className="text-center py-8 space-y-4">
              <blockquote className="quran-verse text-xl text-foreground/80">
                "And the heaven He has raised high, and has set up the Balance,
                that you may not transgress in the Balance."
              </blockquote>
              <cite className="text-accent font-medium">— Quran 55:7-8</cite>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DivineForces;
