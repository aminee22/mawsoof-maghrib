import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import PostMiddleSchool from "./pages/PostMiddleSchool";
import PostBaccalaureate from "./pages/PostBaccalaureate";
import JobMarket from "./pages/JobMarket";
import PersonalTips from "./pages/PersonalTips";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Index />} />
          <Route path="/post-middle-school" element={<PostMiddleSchool />} />
          <Route path="/post-baccalaureate" element={<PostBaccalaureate />} />
          <Route path="/job-market" element={<JobMarket />} />
          <Route path="/personal-tips" element={<PersonalTips />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
