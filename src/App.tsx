import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaders from "./pages/Leaders";
import Individuals from "./pages/Individuals";
import Courses from "./pages/Courses";
import Ecosystem from "./pages/Ecosystem";
<<<<<<< HEAD
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import GeneralTerms from "./components/GeneralTerms";
import RefundPolicy from "./components/RefundPolicy";
=======
import PrivacyPolicy from "./pages/PrivacyPolicy";
>>>>>>> bc2e04f67b3055a72f96bff1b247e10050bc4ef3
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
<<<<<<< HEAD
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/general" element={<GeneralTerms />} />
          <Route path="/refund" element={<RefundPolicy />} />
=======
>>>>>>> bc2e04f67b3055a72f96bff1b247e10050bc4ef3
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
