interface PageHeaderProps {
  title: string;
  subtitle?: string;
  verse?: {
    text: string;
    reference: string;
  };
}

export function PageHeader({ title, subtitle, verse }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16">
      <div className="container text-center space-y-4">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {verse && (
          <div className="pt-4">
            <blockquote className="quran-verse text-foreground/80 max-w-3xl mx-auto">
              "{verse.text}"
            </blockquote>
            <cite className="text-sm text-accent font-medium">— {verse.reference}</cite>
          </div>
        )}
        <div className="islamic-divider mx-auto max-w-xs pt-4" />
      </div>
    </div>
  );
}
