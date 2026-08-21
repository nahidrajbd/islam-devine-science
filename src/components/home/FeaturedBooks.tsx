import { useEffect, useRef } from "react";
import charityBookCover from "@/assets/TheEternalPathofCharity.png";
import scienceBookCover from "@/assets/NaturalSciencesintheMirrorofIslam.png";
import arabicBookCover from "@/assets/arabic-book-by-zin-eddine.png";
import scienceArabicBookCover from "@/assets/natural-science-in-the-mirror-of-islam.png";
import pedagogyBookCover from "@/assets/IslamicPedagogy.jpg";

const books = [
  {
    title: "الطّريق الأبديّ للصّدقات",
    desc: "كتاب \"الطريق الأبدي للصدقات\" يوضح كيف يحقق الإحسان غاية العبادة ويجلب السكينة الدائمة للقلب.",
    img: arabicBookCover,
    link: "https://drive.google.com/file/d/128slLOA5KRgLpXPKqDgV2eM3GXgFmcWg/view?usp=drive_link"
  },
  {
    title: "The Eternal Path of Charity",
    desc: "Exploring the tranquility and inner joy that comes from charity as an act of worship.",
    img: charityBookCover,
    link: "https://drive.google.com/file/d/1GF3i9jOswHTj0Ttfs2Eo8EwAUy4XZfAN/view?usp=drive_link"
  },
  {
    title: "الاسلام والعلوم الطبيعية",
    desc: "كتاب \"الإسلام والعلوم الطبيعية\" يبيّن أن قوانين الكون هي سنن إلهية، وأن دراسة العلوم طريق لمعرفة عظمة الخالق وتعميق اليقين بالتوحيد.",
    img: scienceArabicBookCover,
    link: "https://drive.google.com/file/d/1JhgMjAkEX6UKfZ-XB4xvw8b1yEfJqYur/view?usp=drive_link"
  },
  {
    title: "Natural Sciences in the Mirror of Islam",
    desc: "A comprehensive look at how Islamic principles illuminate our understanding of natural sciences.",
    img: scienceBookCover,
    link: "https://drive.google.com/file/d/17o7PDYJKnPA2CKwf2Jb11OCe2dbEbXVx/view?usp=drive_link"
  },
  {
    title: "Islamic Pedagogy in Modern Times",
    desc: "A detailed exploration of teaching strategies and educational models based on Islamic values and principles.",
    img: pedagogyBookCover,
    link: "https://drive.google.com/file/d/121jIwSvTacYOG6vKMUY_sQCbzO3nU9rN/view?usp=drive_link"
  }
];

export function FeaturedBooks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section bg-alt">
      <div className="container" ref={containerRef}>
        <h2
          className="animate-on-scroll font-heading"
          style={{ textAlign: 'center', marginBottom: '60px', fontSize: '2.25rem', fontWeight: 'bold' }}
        >
          Featured Books
        </h2>

        <div className="book-grid">
          {books.map((book, index) => (
            <div
              key={index}
              className="book-card animate-on-scroll"
              style={{
                display: 'flex',
                flexDirection: 'column',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', padding: '15px 15px 0' }}>
                <img src={book.img} alt={book.title} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div className="book-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '8px', fontSize: '0.95rem' }}>{book.title}</h3>
                <p style={{ marginBottom: '15px', flexGrow: 1, fontSize: '0.85rem' }}>{book.desc}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textAlign: 'center', display: 'block', marginTop: 'auto', fontSize: '0.85rem', padding: '8px 12px' }}>
                  Download / View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;
