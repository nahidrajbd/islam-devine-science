import { BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import charityBookCover from "@/assets/TheEternalPathofCharity.png";
import scienceBookCover from "@/assets/NaturalSciencesintheMirrorofIslam.png";
import arabicBookCover from "@/assets/arabic-book-by-zin-eddine.png";
import scienceArabicBookCover from "@/assets/natural-science-in-the-mirror-of-islam.png";

const books = [
  {
    title: "الطّريق الأبديّ للصّدقات",
    description: "كتاب \"الطريق الأبدي للصدقات\" يوضح كيف يحقق الإحسان غاية العبادة ويجلب السكينة الدائمة للقلب.",
    link: "#",
    cover: arabicBookCover,
  },
  {
    title: "The Eternal Path of Charity",
    description: "Exploring the tranquility and inner joy that comes from charity as an act of worship.",
    link: "https://www.researchgate.net/publication/377363732_The_Eternal_Path_of_Charity",
    cover: charityBookCover,
  },
  {
    title: "الاسلام والعلوم الطبيعية",
    description: "كتاب \"الإسلام والعلوم الطبيعية\" يبيّن أن قوانين الكون هي سنن إلهية، وأن دراسة العلوم طريق لمعرفة عظمة الخالق وتعميق اليقين بالتوحيد.",
    link: "#",
    cover: scienceArabicBookCover,
  },
  {
    title: "Natural Sciences in the Mirror of Islam",
    description: "A comprehensive look at how Islamic principles illuminate our understanding of natural sciences.",
    link: "https://www.amazon.com/Natural-Sciences-Mirror-Eddine-Dadach-ebook/dp/B0GC894XZD",
    cover: scienceBookCover,
  },
];

export function FeaturedBooks() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Publications</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Featured Books
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {books.map((book) => (
            <Card key={book.title} className="border-2 border-primary/20 h-full flex flex-col">
              <CardHeader className="pb-2">
                {/* Header content if needed */}
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div className="w-1/2 mx-auto aspect-[3/4] relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover drop-shadow-md rounded-sm"
                  />
                </div>
                <div className="space-y-2 text-center flex-grow">
                  <h4 className="font-semibold text-foreground text-lg leading-tight">{book.title}</h4>
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                </div>
                <div className="pt-2 mt-auto">
                  <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" />
                      Download / View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
