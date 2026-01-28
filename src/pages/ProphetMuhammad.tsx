import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookOpen, Users, Lightbulb, HandHeart, Scale } from "lucide-react";

const teachings = [
  {
    title: "Teaching with Wisdom",
    description: "The Prophet (PBUH) used parables, examples, and stories to convey complex ideas in understandable ways.",
    icon: Lightbulb,
  },
  {
    title: "Leading by Example",
    description: "He demonstrated every teaching through his own actions, making his words come alive.",
    icon: Users,
  },
  {
    title: "Patience and Repetition",
    description: "He would repeat important points three times and always spoke at a pace that allowed understanding.",
    icon: BookOpen,
  },
  {
    title: "Asking Questions",
    description: "He often posed questions to engage his companions and stimulate their thinking.",
    icon: Lightbulb,
  },
  {
    title: "Individual Attention",
    description: "He gave personalized advice based on each person's circumstances and abilities.",
    icon: Heart,
  },
  {
    title: "Encouraging Discussion",
    description: "He welcomed questions and created an environment where learning was valued.",
    icon: Users,
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

            {/* Teaching Methods */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                6 Teaching Methods of Prophet Muhammad (PBUH)
              </h2>
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground italic">
                  "They said: 'Glory to You! We have no knowledge except what You taught us. 
                  You, indeed You, are the All-Knowing, the Wise.'" — Quran 2:32
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teachings.map((teaching) => (
                  <Card key={teaching.title} className="border-2 border-border/50 hover:border-primary/30 transition-colors islamic-shadow">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <teaching.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-base">{teaching.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">{teaching.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
