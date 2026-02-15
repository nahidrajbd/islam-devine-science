import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, HandHeart, Scale, Download, BookOpen, Microscope, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResearchPaper {
  title: string;
  downloadUrl: string;
}

interface ResearchCategory {
  category: string;
  icon: typeof BookOpen;
  papers: ResearchPaper[];
}

const researchCategories: ResearchCategory[] = [
  {
    category: "Discover Islam",
    icon: BookOpen,
    papers: [
      {
        title: "Acid Hydrolysis of Cellulose - Part I. Experimental Kinetic Analysis",
        downloadUrl: "https://drive.google.com/file/d/1ogAL0-zIJ2CrFr3-la2v50KVm_tRUSiv/view?usp=sharing",
      },
      {
        title: "Acid Hydrolysis of Cellulose - Part II: Stochastic Simulation using a Monte Carlo Technique",
        downloadUrl: "https://drive.google.com/file/d/1t07yzcb3THn7S7S4N_F0QGczl1TzIFI0/view?usp=sharing",
      },
      {
        title: "Black Powder in Sales Gas Pipelines: Sources and Technical Recommendations",
        downloadUrl: "https://drive.google.com/file/d/1myLkLR6Cuqy3X8qEKar5QifIbvWu6oxf/view?usp=sharing",
      },
      {
        title: "Decision Support for Sustainability Management",
        downloadUrl: "https://drive.google.com/file/d/1snDL1o4Op_G_7kl76V0u9OUMc1T2uUuL/view?usp=sharing",
      },
      {
        title: "Absorption rates of carbon dioxide and hydrogen sulphide in sterically hindered amines",
        downloadUrl: "https://drive.google.com/file/d/1XWFV5chrhmT-JeM0QVPXS6gTiGKrOq62/view?usp=sharing",
      },
      {
        title: "Energy Efficiency of a Simulated Synthetic Natural Gas Combined Cycle (SNGCC)",
        downloadUrl: "https://drive.google.com/file/d/1T7jE5cZDLtxlYr1dt1-pqITBj9xjWdWG/view?usp=sharing",
      },
      {
        title: "An Introductory Chemical Engineering Course Based on Analogies and Research-Based Learning",
        downloadUrl: "https://drive.google.com/file/d/174vaV7XBsoIWV5e6M31da4U1b0VRAmh6/view?usp=sharing",
      },
      {
        title: "Effect of Summer Weather Conditions on the Environmental Impact of a Power Plant in the UAE",
        downloadUrl: "https://drive.google.com/file/d/1F-nDNEaEjt794Jbc4JZ0wWn8H-Hf8EXn/view?usp=sharing",
      },
      {
        title: "The Utilization of a Universal Concept for the Modelisation of Consumer Spending",
        downloadUrl: "https://drive.google.com/file/d/1MTdMJNdpemqPHBoKLiOFWJ2muP4ZcXL1/view?usp=sharing",
      },
      {
        title: "Workforce Management",
        downloadUrl: "https://drive.google.com/file/d/12KuOWpJWecCiHOGEbr5hZW478NCNU3VD/view?usp=sharing",
      },
    ],
  },
  {
    category: "Islam & Sciences",
    icon: Microscope,
    papers: [
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
    ],
  },
  {
    category: "Natural Science",
    icon: Microscope,
    papers: [
      {
        title: "Divine Law of Conservation",
        downloadUrl: "https://drive.google.com/file/d/1jD8ZP8lvLqH96xuA8XBwxSBH0lklKmBX/view?usp=sharing",
      },
      {
        title: "Islam & Botany",
        downloadUrl: "https://drive.google.com/file/d/1jhZ4m22m9lOdLA66F54mwlsd9nQN45q-/view?usp=sharing",
      },
      {
        title: "Islam & Chemistry",
        downloadUrl: "https://drive.google.com/file/d/1MnFq5w7XiH9HfcvfWe_9hhNcgBziAUM2/view?usp=sharing",
      },
      {
        title: "Islam & Earth Sciences",
        downloadUrl: "https://drive.google.com/file/d/1qfw3VBsGvLu8bNMHTJ0n9aWylURqMbeH/view?usp=sharing",
      },
      {
        title: "Mathematics in Islam",
        downloadUrl: "https://drive.google.com/file/d/1tssps9C4-MBWlteEp_3_nJenkfcmeYMZ/view?usp=sharing",
      },
      {
        title: "Islam & Medical Sciences",
        downloadUrl: "https://drive.google.com/file/d/10fVuc6HdBg1KRJDSJzef1JMUw0fUxAB6/view?usp=sharing",
      },
      {
        title: "Physical Sciences",
        downloadUrl: "https://drive.google.com/file/d/1XH4zNtA0vgV0N5P8BA1rOI1Y3ZPEx5AR/view?usp=sharing",
      },
      {
        title: "Zoology in Islam",
        downloadUrl: "https://drive.google.com/file/d/1lbj18bpBUmNkUfDz5AL3uzVCFVt7DR9a/view?usp=sharing",
      },
    ],
  },
  {
    category: "Social Science",
    icon: Users,
    papers: [
      {
        title: "THE ETERNAL PATH OF CHARITY",
        downloadUrl: "https://drive.google.com/file/d/1cKvUAaCV0Yzx9vGkxH0eQbPTYLROGrje/view?usp=sharing",
      },
      {
        title: "Tawhidic Paradigm",
        downloadUrl: "https://drive.google.com/file/d/1wfMEnrzXPkCBrlRX36_yxgveZdtyF9gl/view?usp=sharing",
      },
      {
        title: "Spirituality in Islam",
        downloadUrl: "https://drive.google.com/file/d/1xQAxes4GkZB0H8Ih_tcZbhccAyMPW8GD/view?usp=sharing",
      },
      {
        title: "Scientific facts in the Quran",
        downloadUrl: "https://drive.google.com/file/d/1pXqEjUr9wpRyfSYn3zoZ-fq699NaVBeQ/view?usp=sharing",
      },
      {
        title: "LEADERSHIP IN WORKPLACES",
        downloadUrl: "https://drive.google.com/file/d/1pXqEjUr9wpRyfSYn3zoZ-fq699NaVBeQ/view?usp=sharing",
      },
      {
        title: "Law of Balance",
        downloadUrl: "https://drive.google.com/file/d/1lpzV3IMzf_mkpiXnlAHAcXyZo9f5EF51/view?usp=sharing",
      },
      {
        title: "ISLAM-BASED EDUCATIONAL MODEL",
        downloadUrl: "https://drive.google.com/file/d/1OgYnHdOUGZ2l4-nSIQ7iQnm-ztK_4ejs/view?usp=sharing",
      },
      {
        title: "DIVINE FORCES AND LAWS IN MUSLIM SOCIETIES",
        downloadUrl: "https://drive.google.com/file/d/10XHWKZGiV9y-prIFGuPELuoIZWOtpV91/view?usp=sharing",
      },
      {
        title: "Divine Forces",
        downloadUrl: "https://drive.google.com/file/d/1h7TgDDvxWG3nSg7k1GddALdd18kdm9DW/view?usp=sharing",
      },
      {
        title: "CONSUMERISM & WARNINGS FROM THE MERCIFUL",
        downloadUrl: "https://drive.google.com/file/d/1UZbfg8IJ8vdkzcnRpBUY5z34Fwzgeabp/view?usp=sharing",
      },
      {
        title: "CHARITY IN WORKPLACES",
        downloadUrl: "https://drive.google.com/file/d/1w_ng4_YgsZZb6fZtekO8XrOn0AaplH-p/view?usp=sharing",
      },
    ],
  },
  {
    category: "Divine Forces and Divine Laws",
    icon: Sparkles,
    papers: [
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
    ],
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
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Research by Zin Eddine Dadach
                </h2>
                <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                  "They said: 'Glory to You! We have no knowledge except what You taught us.
                  You, indeed You, are the All-Knowing, the Wise.'" — Quran 2:32
                </p>
              </div>

              {researchCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.category} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {category.category}
                      </h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.papers.map((paper) => (
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
                );
              })}
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
