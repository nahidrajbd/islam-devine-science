import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, HandHeart, Scale, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import PDF files
import habitsOfProphetPdf from "@/assets/chapters/Prophet_Muhammad/HABITS_OF_THE_PROPHET_MUHAMMAD_THAT_SCIE.pdf";
import healthyHabitsPdf from "@/assets/chapters/Prophet_Muhammad/HEALTYH_HABITS_OF_THE_PROHET.pdf";
import medicinePdf from "@/assets/chapters/Prophet_Muhammad/MEDICINE_OF_THE_PROPHET.pdf";
import scienceSayingsPdf from "@/assets/chapters/Prophet_Muhammad/SCIENCE_AND_THE_PROPHETS_SAYINGS.pdf";
import leadershipPdf from "@/assets/chapters/Prophet_Muhammad/Top_Leadership_Qualities_of_the_Holy_Pro.pdf";
import teachingMethodsPdf from "@/assets/chapters/Prophet_Muhammad/teachings_of_the_prophet.pdf";

const researchPapers = [
  {
    title: "Habits of the Prophet Muhammad that Science Supports",
    pdfFile: habitsOfProphetPdf,
  },
  {
    title: "Healthy Habits of the Prophet",
    pdfFile: healthyHabitsPdf,
  },
  {
    title: "Medicine of the Prophet",
    pdfFile: medicinePdf,
  },
  {
    title: "Science and the Prophet's Sayings",
    pdfFile: scienceSayingsPdf,
  },
  {
    title: "Top Leadership Qualities of the Holy Prophet",
    pdfFile: leadershipPdf,
  },
  {
    title: "6 Teaching Methods of Prophet Muhammad (PBUH)",
    pdfFile: teachingMethodsPdf,
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

            {/* Research Papers */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                The research about Prophet Muhammad (PBUH) by Zin Eddine Dadach
              </h2>
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground italic">
                  "They said: 'Glory to You! We have no knowledge except what You taught us.
                  You, indeed You, are the All-Knowing, the Wise.'" — Quran 2:32
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {researchPapers.map((paper) => (
                  <Card key={paper.title} className="border-2 border-border/50 hover:border-primary/30 transition-all islamic-shadow group">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-base leading-snug">{paper.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-md hover:shadow-lg transition-all"
                      >
                        <a
                          href={paper.pdfFile}
                          download
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
