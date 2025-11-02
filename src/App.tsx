import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import MOSChampionship from "./pages/MOSChampionship";
import AdobeChampionship from "./pages/AdobeChampionship";
import ICTChampionship from "./pages/ICTChampionship";
import AIHackathon from "./pages/AIHackathon";
import Resources from "./pages/Resources";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mos-championship" element={<MOSChampionship />} />
          <Route path="/adobe-championship" element={<AdobeChampionship />} />
          <Route path="/ict-championship" element={<ICTChampionship />} />
          <Route path="/ai-hackathon" element={<AIHackathon />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
