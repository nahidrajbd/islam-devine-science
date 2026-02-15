import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Atom, Leaf, Mountain, FlaskConical, Globe } from "lucide-react";

const scienceCategories = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    description: "Islamic mathematicians revolutionized the field with groundbreaking contributions.",
    topics: [
      {
        name: "Algebra",
        detail: "Al-Khwarizmi's 'Kitab al-Jabr' gave us the word 'algebra' and systematic methods for solving equations.",
      },
      {
        name: "Numerals",
        detail: "The Hindu-Arabic numeral system, refined by Muslim scholars, is the basis of modern mathematics.",
      },
      {
        name: "Trigonometry",
        detail: "Muslim astronomers developed trigonometric functions essential for navigation and astronomy.",
      },
      {
        name: "Algorithms",
        detail: "The word 'algorithm' comes from Al-Khwarizmi's name, honoring his computational methods.",
      },
    ],
  },
  {
    id: "physical",
    title: "Physics and Chemistry",
    icon: Atom,
    description: "From optics to mechanics, Islamic scholars advanced our understanding of the physical world.",
    topics: [
      {
        name: "Optics",
        detail: "Ibn al-Haytham's 'Book of Optics' laid the foundation for modern optics and the scientific method.",
      },

      {
        name: "Chemistry",
        detail: "Jabir ibn Hayyan pioneered experimental chemistry, introducing distillation, crystallization, and more.",
      },
      {
        name: "Physics",
        detail: "Scholars like Al-Biruni made precise measurements of the Earth and developed concepts of specific gravity.",
      },
    ],
  },
  {
    id: "biological",
    title: "Medicine, Zoology, and Botany",
    icon: Leaf,
    description: "Medicine and biology flourished under Islamic civilization.",
    topics: [
      {
        name: "Medicine",
        detail: "Ibn Sina's 'Canon of Medicine' was used as a medical textbook in Europe for over 500 years.",
      },
      {
        name: "Surgery",
        detail: "Al-Zahrawi, the father of surgery, invented over 200 surgical instruments still used today.",
      },
      {
        name: "Pharmacology",
        detail: "Muslim physicians created comprehensive pharmacopeias and pioneered drug testing.",
      },
      {
        name: "Anatomy",
        detail: "Ibn al-Nafis discovered pulmonary circulation centuries before it was 'discovered' in Europe.",
      },
    ],
  },
  {
    id: "earth",
    title: "Astronomy, Geology, and Oceanography",
    icon: Mountain,
    description: "Geography, geology, and environmental sciences were advanced by Muslim scholars.",
    topics: [
      {
        name: "Geography",
        detail: "Al-Idrisi created the most accurate world map of his time for King Roger II of Sicily.",
      },
      {
        name: "Geology",
        detail: "Ibn Sina described the formation of mountains and the stratification of rocks.",
      },
      {
        name: "Cartography",
        detail: "Muslim cartographers developed sophisticated map-making techniques and navigation tools.",
      },
      {
        name: "Meteorology",
        detail: "Scholars studied weather patterns, atmospheric phenomena, and developed climate classification.",
      },
    ],
  },
];

const Sciences = () => {
  return (
    <Layout>
      <PageHeader
        title="Natural Sciences"
        subtitle="Exploring scientific disciplines through the lens of Islamic scholarship"
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

            {/* Science Categories Tabs */}
            <Tabs defaultValue="mathematics" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {scienceCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {scienceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <category.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-heading text-2xl">{category.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{category.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        {category.topics.map((topic) => (
                          <Card key={topic.name} className="border border-border/50 bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-foreground mb-2">{topic.name}</h4>
                              <p className="text-sm text-muted-foreground">{topic.detail}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sciences;
