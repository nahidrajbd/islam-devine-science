import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Islam & Divine Science | Reconnecting Creation with the Creator"
        description="Discover our vision of the universe as a Visible Book of Signs, bridging faith and science through Divine Science, Quranic reflections, and Islamic scholarship."
      />
      <PageHeader
        title="About Islam & Divine Science"
        subtitle="Reconnecting Creation with the Creator"
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Vision Section */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-bold text-primary flex items-center gap-3">
                    <BookOpen className="h-7 w-7 text-accent" />
                    Our Vision: The Universe as a Visible Book of Signs
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Islam & Divine Science is the realization of a profound vision: to demonstrate that the universe is far more than mere matter and equations. It is a <strong>"Visible Book of Signs"</strong> (The Silent Quran) pointing directly to the Oneness of Allah (SWT).
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    We believe that true science does not exist in a vacuum separate from faith. Instead, we champion <strong>Divine Science</strong>, a framework for studying natural laws, energy, biological life, and the vastness of the cosmos as <em>Ayat</em> (Signs). Every discovery in the physical world serves to reveal the infinite wisdom, mercy, and mathematical precision of the Creator.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Three Pillars Section */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-accent rounded-full" />
                The Three Pillars of Our Mission
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                This platform serves as a bridge between the laboratory and the masjid, grounded in three core areas of exploration:
              </p>

              <div className="grid gap-6 md:grid-cols-1">
                {/* Pillar 1 */}
                <Card className="border border-primary/30 hover:border-primary/60 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                          Reflections from the Holy Qur'an
                        </h4>
                        <p className="text-foreground/80 leading-relaxed">
                          We explore the "13 Scientific Facts" mentioned in the Quran, showing how scripture preceded modern discovery.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pillar 2 */}
                <Card className="border border-primary/30 hover:border-primary/60 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                          The Islamic Golden Age
                        </h4>
                        <p className="text-foreground/80 leading-relaxed">
                          We honor the legacy of Muslim polymaths whose faith drove them to pioneer medicine, optics, and mathematics, proving that Islam is the ultimate catalyst for scientific inquiry.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pillar 3 */}
                <Card className="border border-primary/30 hover:border-primary/60 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                          Modern Scientific Inquiry
                        </h4>
                        <p className="text-foreground/80 leading-relaxed">
                          We translate complex concepts in physics, biology, and thermodynamics into accessible language, viewing them through the lens of <em>Tawheed</em>—the principle that all laws of nature belong to Allah alone.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Resource Section */}
            <Card className="border-2 border-accent/30 bg-accent/5">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground flex items-center gap-3">
                    <Heart className="h-7 w-7 text-accent" />
                    A Resource for Seekers, Students, and Teachers
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Whether you are a student looking for clarity, a teacher seeking an Islam-based educational model, or a seeker searching for deeper certainty (<em>Yaqeen</em>), this website is built for you.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ultimate Goal Section */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-accent rounded-full" />
                Our Ultimate Goal: Strengthening Certainty
              </h3>
              <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                <p>
                  The goal of <strong>Islam & Divine Science</strong> is to deepen the conviction that sincere scientific inquiry is a form of worship. By understanding the "Mirror of Islam," we move from observing the world to knowing its Master.
                </p>
                <p>
                  We invite you to explore, learn, and join us on this path of <em>Sadaqah Jariyah</em> (Ongoing Charity), connecting knowledge with the heart to inspire a life of purpose.
                </p>
                <blockquote className="quran-verse text-foreground/80 border-l-4 border-accent pl-6 py-4 italic bg-accent/5 rounded-r-lg">
                  "The purpose of creating man and all other creatures is to worship Allah alone, and thus helping others and sharing knowledge rises to the highest forms of worship."
                  <span className="block mt-2 text-sm font-semibold not-italic">
                    — <a href="https://www.zineddinedadach.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline">Prof. Zin Eddine Dadach</a>
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
