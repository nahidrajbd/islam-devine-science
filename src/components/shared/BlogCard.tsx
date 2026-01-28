import { Link } from "react-router-dom";
import { Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  source?: string;
  href: string;
  isExternal?: boolean;
}

export function BlogCard({ title, excerpt, date, source, href, isExternal }: BlogCardProps) {
  const Wrapper = isExternal ? 'a' : Link;
  const wrapperProps = isExternal 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { to: href };

  return (
    <Wrapper {...wrapperProps as any} className="group block">
      <Card className="h-full border-2 border-border/50 hover:border-primary/30 transition-all duration-300 islamic-shadow hover:shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            {isExternal && (
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
            )}
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          {source && (
            <Badge variant="secondary" className="text-xs">
              {source}
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Wrapper>
  );
}
