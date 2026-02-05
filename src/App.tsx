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
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import GeneralTerms from "./components/GeneralTerms";
import RefundPolicy from "./components/RefundPolicy";
import EcosystemForm from "./components/ecosystem/EcosystemForm";
import EssentialCompetenciesOfAi from "./components/courses/instructor-courses/EssentialCompetenciesOfAi";
import GenerativeAiTechnicalMasterclass from "./components/courses/instructor-courses/Generativeaitechnicalmasterclass";
import AiGenaiTransformationStrategy from "./components/courses/instructor-courses/AiGenaiTransformationStrategy";
import CultivatingAiGenaiMindset from "./components/courses/instructor-courses/CultivatingAiGenaiMindset";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
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
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/general" element={<GeneralTerms />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/ecosystemform" element={<EcosystemForm />} />
          <Route path="/courses/Essential-Competencies-of-AI/GenAI-Leader" element={<EssentialCompetenciesOfAi />} />
          <Route path="/courses/Generative-AI-Technical-Masterclass" element={<GenerativeAiTechnicalMasterclass />} />
          <Route path="/courses/AI/GenAI-Transformation-Strategy" element={<AiGenaiTransformationStrategy />} />
          <Route path="/courses/AI/GenAI-Operational-Readiness" element={<CultivatingAiGenaiMindset />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
