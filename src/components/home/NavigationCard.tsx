import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  imageUrl?: string;
}

export function NavigationCard({ title, description, href, icon: Icon, imageUrl }: NavigationCardProps) {
  return (
    <Link to={href} className="group block">
      <Card className="overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300 islamic-shadow hover:shadow-lg">
        {/* Image area - like a TV screen */}
        <div className="relative h-32 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="h-12 w-12 text-primary/40 group-hover:text-primary/60 group-hover:scale-110 transition-all duration-300" />
            </div>
          )}
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-accent border-l-[30px] border-l-transparent" />
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
