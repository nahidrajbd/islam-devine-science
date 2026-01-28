import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import zinPhoto from "@/assets/zin.jpg";

const timeline = [
  {
    year: "1957",
    event: "Born in Beni Saf, Ain Temouchent, Algeria",
    icon: MapPin,
  },
  {
    year: "1980",
    event: "Bachelor's Degree in Refining and Petro-Chemistry from Algerian Institute of Petroleum",
    icon: GraduationCap,
  },
  {
    year: "1984",
    event: "Master's Degree in Chemical Engineering from Stevens Institute of Technology, New Jersey, USA",
    icon: GraduationCap,
  },
  {
    year: "1994",
    event: "Ph.D. in Chemical Engineering from Laval University, Quebec, Canada",
    icon: Award,
  },
  {
    year: "1994-1996",
    event: "Specialization in Biotechnology at Osaka National Research Institute, Japan",
    icon: GraduationCap,
  },
  {
    year: "2005-2022",
    event: "Academic Faculty at Higher Colleges of Technology, Chemical Engineering Department, Abu Dhabi, UAE",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Zin Eddine Dadach & The Mission | Islam & Sciences"
        description="Learn about the researcher Zin Eddine Dadach and his mission to highlight the scientific contributions of Islamic civilization and Divine Science."
      />
      <PageHeader
        title="About"
        subtitle="The journey, research, and dedication of Prof. Zin Eddine Dadach"
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Author Bio */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Photo */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shrink-0 shadow-xl">
                    <img
                      src={zinPhoto}
                      alt="Prof. Zin Eddine Dadach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left space-y-4">
                    <h2 className="font-heading text-2xl font-bold text-primary">
                      Prof. Zin Eddine Dadach
                    </h2>
                    <p className="text-muted-foreground">
                      Researcher in Islam and Science | Charity | Compassion | Five Pillars of Islam | Gratitude | Guidance
                    </p>
                    <blockquote className="quran-verse text-foreground/80 border-l-4 border-accent pl-4 text-sm mt-4">
                      "Glory be to You, we have no knowledge except what you have taught us. Verily, it is You, the All-Knowing, the All-Wise.” (Quran 2:32)
                    </blockquote>

                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Biography */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-accent rounded-full" />
                Biography
              </h3>
              <div className="text-lg text-foreground/80 leading-loose text-justify space-y-8">
                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Researcher in Divine Science & Chemical Engineering</h4>
                  <p>
                    Prof. Zin Eddine Dadach is a distinguished scholar whose life work bridges the gap between rigorous scientific inquiry and the spiritual depths of Islamic faith. With over twenty years of experience in applied research, vocational education, and industrial engineering, he has dedicated his career to decarbonization, sustainable energy, and the profound study of Tawheed-based science.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Early Life and Foundations</h4>
                  <p>
                    Born in 1957 in the coastal city of Beni Saf, Ain Temouchent, Algeria, Zin Eddine developed an early dedication to knowledge. He began his academic journey at the Algerian Institute of Petroleum, where he obtained his State Engineer Degree (Ingénieur d'état) in Refining and Petro-Chemistry in 1980.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Global Academic Journey & Advanced Research</h4>
                  <p>
                    Driven by a pursuit of excellence, Prof. Dadach moved to the United States to further his education. In 1984, he earned his Master of Science in Chemical Engineering from the prestigious Stevens Institute of Technology (New Jersey, USA). His early research there focused on decarbonization, specifically investigating Carbon Dioxide (CO₂) absorption—a critical field for environmental sustainability.
                  </p>
                  <p className="mt-4">
                    He continued his academic pursuit at Laval University in Quebec, Canada, completing his Ph.D. in Chemical Engineering in 1994. His doctoral dissertation focused on the stochastic simulation of cellulose acid hydrolysis, where he developed complex FORTRAN programs (using Markov and Monte Carlo methods) to simulate glucose production.
                  </p>
                  <p className="mt-4">
                    Post-graduation, he expanded his expertise into Biotechnology as a Post-Doctoral Researcher at the Osaka National Research Institute in Japan (1994–1996). There, he conducted interdisciplinary research, applying mathematical Markov analysis to DNA sequences to study gene transcription.
                  </p>
                </div>



                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Career as an Educator & Academic Leader</h4>
                  <p>
                    For nearly two decades (2005–2022), Prof. Dadach shaped the minds of future engineers as an Assistant Professor in the Chemical Engineering Department at the Higher Colleges of Technology (HCT) in Abu Dhabi, UAE.
                  </p>
                  <p className="mt-4">
                    Beyond the classroom, he was a pivotal figure in the engineering community:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Chairman of the AIChE (UAE Chapter):</strong> From 2007 to 2010, he led the American Institute of Chemical Engineers in the UAE, organizing major conferences on Carbon Capture, Solar Energy, and Process Safety.</li>
                    <li><strong>Applied Research:</strong> He led projects on CO₂ capture supported by the National Research Foundation of the UAE and supervised industrial projects for ADNOC students, covering topics from corrosion to energy efficiency.</li>
                    <li><strong>Pedagogical Innovation:</strong> He published research on "Active Learning" strategies to increase student motivation in engineering education.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Divine Science: The Islamization of Sciences</h4>
                  <p>
                    Prof. Dadach’s extensive background in "hard sciences"—from molecular distillation to process simulation—fuels his unique mission: demonstrating that the natural universe is a "silent Quran." He advocates for the concept of Tawheed-based science, arguing that scientific discovery is a method of uncovering the Divine Laws set by Allah (SWT).
                  </p>
                  <p className="mt-4">
                    He posits that the Beautiful Name Al-Aleem (The All-Knowing) reflects the attribute of the "Supreme Scientist" who created the universe with precision. Through his work, he invites readers to look at atoms, cells, and galaxies not just as physical matter, but as Ayat (Signs) of the Creator.
                  </p>
                  <blockquote className="quran-verse text-foreground/80 border-l-4 border-accent pl-4 mt-6 italic">
                    "The most sincere manifestation of Muslim faith is to live our life feeling that Allah (SWT) is always with us with His Beautiful Names." — Prof. Zin Eddine Dadach
                  </blockquote>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Selected Technical Publications</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Cost Effective Strategies to Reduce CO₂ Emissions in the UAE (2013)</li>
                    <li>Simulation of a NGCC Power Generation Plant for the Production of Electricity from CO₂ Emissions (2019)</li>
                    <li>Black powder in sales gas pipelines: Sources and Technical Recommendations (2020)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-accent rounded-full" />
                Academic Journey
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 text-sm text-accent font-medium mb-1">
                            <Calendar className="h-3 w-3" />
                            {item.year}
                          </div>
                          <p className="text-foreground/80">{item.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Books Section */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-accent rounded-full" />
                Books by Zin Eddine Dadach
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Mechanism of Depolymerization of Cellulose in Low Sulfuric Acid Medium. Kinetic Investigation and Stochastic Simulation",
                  "The Eternal Path of Charity",

                  "An Introductory Chemical Engineering Course Based on Analogies And Research-Based Learning: A Course Designed for Freshmen with Weak Science Background",
                  "First Quantitative Measurement of Motivation. Study of the Effects of Active Learning Strategies",
                  "Performance indices of a power plant using exergy-based analyses",
                  "The Universal Law, Consumer Economy and Global Warming",
                  "Absorption of Carbon Dioxide and Hydrogen Sulfide by Sterically Hindered Amine Amp: A Pioneering Experimental Research on the Rates of Absorption of ... Amine 2-Amino-2-Methyl-1-Propanol",
                  "Effects of marketing, bank loan and credit debt on consumer's spending. Mathematical models based on an engineering concept",
                  "Natural Sciences in the Mirror of Islam",
                ].map((book, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{book}</h4>
                      <p className="text-sm text-muted-foreground">by Zin Eddine Dadach (Goodreads Author)</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
