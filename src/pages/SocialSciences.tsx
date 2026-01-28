import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Heart } from "lucide-react";

const educationPrinciples = [
  {
    title: "Holistic Learning",
    description: "Education in Islam encompasses spiritual, intellectual, and practical dimensions.",
    icon: BookOpen,
  },
  {
    title: "Character Building",
    description: "The goal of education is not just knowledge, but the development of noble character (akhlaq).",
    icon: Heart,
  },
  {
    title: "Community Focus",
    description: "Knowledge should benefit the community and contribute to social welfare.",
    icon: Users,
  },
  {
    title: "Lifelong Learning",
    description: "Seeking knowledge is obligatory from the cradle to the grave.",
    icon: GraduationCap,
  },
];

const SocialSciences = () => {
  return (
    <Layout>
      <PageHeader
        title="Social Sciences & Education"
        subtitle="Islamic perspectives on society, education, and human development"
        verse={{
          text: "Read! In the name of your Lord who created. Created man from a clinging substance. Read! And your Lord is the Most Generous. Who taught by the pen. Taught man that which he knew not.",
          reference: "Quran 96:1-5"
        }}
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Islam-Based Educational Model */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-6">
                <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                  A Look at an Islam-Based Educational Model
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Since the Noble Quran is the book of Allah (SWT) and needed to be organically 
                    integrated into every aspect of Muslim life, Islamic education has always 
                    emphasized the connection between knowledge and faith.
                  </p>
                  <p>
                    The first word revealed to Prophet Muhammad (PBUH) was "Iqra" (Read), 
                    establishing the importance of learning as a fundamental Islamic duty. 
                    This divine instruction set the foundation for a civilization that would 
                    lead the world in knowledge for centuries.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education Principles */}
            <div className="space-y-6">
              <h2 className="font-heading text-xl font-bold text-foreground text-center">
                Principles of Islamic Education
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {educationPrinciples.map((principle) => (
                  <Card key={principle.title} className="border-2 border-border/50 hover:border-primary/30 transition-colors islamic-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <principle.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-heading text-lg">{principle.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Foundation and Soul */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-8 space-y-4">
                <h2 className="font-heading text-xl font-bold text-foreground text-center">
                  The Foundation and Soul of Islam
                </h2>
                <p className="text-center text-foreground/80">
                  Al-Aql (reason) and Al-Fitrah (natural disposition) are fundamental ways to 
                  realize the reality of Al-Tawheed, which means the Oneness of Allah (SWT) 
                  in His Lordship, worship, and Names and Attributes.
                </p>
                <div className="islamic-divider mx-auto max-w-xs" />
                <p className="text-sm italic text-center text-muted-foreground">
                  The pursuit of knowledge is not merely academic—it is an act of worship 
                  that brings one closer to understanding the Creator.
                </p>
              </CardContent>
            </Card>

            {/* God-Consciousness in Workplace */}
            <Card className="border-2 border-secondary/30">
              <CardContent className="p-8 space-y-4">
                <h2 className="font-heading text-xl font-bold text-foreground text-center">
                  God-Consciousness in the Workplace
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="text-center">
                    Staying on a path of God-consciousness and charity in the workplace as a Muslim means:
                  </p>
                  <ul className="space-y-2 max-w-lg mx-auto">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Always presenting a smiling face to colleagues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Maintaining honesty and integrity in all dealings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Helping others without expecting reward</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Remembering that all work, when done with the right intention, is worship</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialSciences;
