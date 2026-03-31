import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import DiscoverIslam from "./pages/DiscoverIslam";
import IslamScience from "./pages/IslamScience";
import ProphetMuhammad from "./pages/ProphetMuhammad";
import DivineForces from "./pages/DivineForces";
import Sciences from "./pages/Sciences";
import SocialSciences from "./pages/SocialSciences";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover-islam" element={<DiscoverIslam />} />
          <Route path="/islam-science" element={<IslamScience />} />
          <Route path="/prophet-muhammad" element={<ProphetMuhammad />} />
          <Route path="/divine-forces" element={<DivineForces />} />
          <Route path="/sciences" element={<Sciences />} />
          <Route path="/social-sciences" element={<SocialSciences />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
