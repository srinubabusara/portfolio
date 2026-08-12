import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import FresherGuide from "@/components/userguide/FresherGuide";
import LearningHub from "@/components/userguide/LearningHub";
import React from "@/components/userguide/React";
import ReactIQS from "@/components/userguide/ReactIQS";
import PrivacyPolicy from "@/components/userguide/PrivacyPolicy";
import TermsAndConditions from "@/components/userguide/TermsAndConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/fresher-guide" element={<FresherGuide />} />
        <Route path="/learning-hub" element={<LearningHub />} />
        <Route path="/react" element={<React />} />
        <Route path="/react-question_answers" element={<ReactIQS />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
