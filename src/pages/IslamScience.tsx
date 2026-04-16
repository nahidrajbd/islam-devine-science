import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Globe, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";



const researchPapers = [
  {
    title: "THE FOUNDATION OF ISLAM",
    downloadUrl: "https://drive.google.com/file/d/1eWK2eDXl_LBTunekNKJ7x4NfwfMW1k-s/view?usp=sharing",
  },
  {
    title: "The Creator (SWT)",
    downloadUrl: "https://drive.google.com/file/d/1pTD6-KFC-k82REQ9T7Nc41VCwZk4J-g_/view?usp=sharing",
  },
  {
    title: "Need for Re-Islamization of Science",
    downloadUrl: "https://drive.google.com/file/d/1f4h6t47RA3XLUlarPzJkqVnM9ZC8Ein5/view?usp=sharing",
  },
  {
    title: "Islamic Approach to Science",
    downloadUrl: "https://drive.google.com/file/d/1FzddCf9UgFG7wrg7GKf_YNocgP8hedwc/view?usp=sharing",
  },
  {
    title: "Islam & Science",
    downloadUrl: "https://drive.google.com/file/d/1HakP8Z3uK0EtCB2d0i_yx2-T4ypYXiiz/view?usp=sharing",
  },
  {
    title: "Muslim Scientists of the Golden Age",
    downloadUrl: "https://drive.google.com/file/d/1wUI90fl4-cdy_0KK8XlDLXTMwsHAhusr/view?usp=drive_link",
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

            {/* Science in Islam */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                  Science in Islam
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Science in Islam has historically been viewed as a pursuit of knowledge that complements religious faith,
                  viewing the study of nature as a way to understand God's creation. During the Islamic Golden Age (8th–15th centuries),
                  Muslim scholars made significant advancements in fields like mathematics, astronomy, and medicine, inventing the
                  scientific method and laying the foundation for modern science, often driven by the Quranic encouragement to seek knowledge.
                </p>
              </CardContent>
            </Card>

            {/* Tawhidic Paradigm */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-8 space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                  The Tawhidic Paradigm
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  The Tawhidic paradigm is an Islamic worldview centered on Tawhid (the oneness of God), which dictates that all aspects
                  of creation, knowledge, and life are interconnected and subordinate to Divine Law. It serves as an integrated framework
                  for ethics, science, and social action, emphasizing human stewardship (khalifah) and uniting spiritual (Naqli) with
                  rational (Aqli) knowledge.
                </p>
              </CardContent>
            </Card>

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
