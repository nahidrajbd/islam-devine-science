import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sun, Moon, Mountain, Waves, Wind } from "lucide-react";

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
