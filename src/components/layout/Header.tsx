import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Discover Islam", href: "/discover-islam" },
  { name: "Islam & Science", href: "/islam-science" },
  { name: "Prophet Muhammad (SAW)", href: "/prophet-muhammad" },
  { name: "Divine Forces & Laws", href: "/divine-forces" },
  { name: "Sciences", href: "/sciences" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent border-none">
      {/* Decorative top border */}
      <div className="h-1 islamic-divider" />

      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Islam & Sciences Logo" className="h-10 w-10" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-heading font-bold text-amber-300">Islam & Sciences</h1>
            <p className="text-xs text-white/80">Prof. Zin Eddine Dadach</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-3 py-2 text-sm font-medium text-amber-300/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card">
            <div className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
