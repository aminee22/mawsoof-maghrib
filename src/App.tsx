import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Login from "./pages/Login";
import Index from "./pages/Index";
import PostMiddleSchool from "./pages/PostMiddleSchool";
import PostBaccalaureate from "./pages/PostBaccalaureate";
import JobMarket from "./pages/JobMarket";
import PersonalTips from "./pages/PersonalTips";
import UsefulResources from "./pages/UsefulResources";
import ChooseInterests from "./pages/ChooseInterests";
import InterestDetail from "./pages/InterestDetail";
import Favorites from "./pages/Favorites";
import SmartGuidance from "./pages/SmartGuidance";
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
          <Route path="/*" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full">
                <AppSidebar />
                <main className="flex-1">
                  <header className="h-12 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <SidebarTrigger className="ml-4" />
                  </header>
                  <Routes>
                    <Route path="/home" element={<Index />} />
                    <Route path="/post-middle-school" element={<PostMiddleSchool />} />
                    <Route path="/post-baccalaureate" element={<PostBaccalaureate />} />
                    <Route path="/job-market" element={<JobMarket />} />
                    <Route path="/personal-tips" element={<PersonalTips />} />
                    <Route path="/useful-resources" element={<UsefulResources />} />
                    <Route path="/choose-interests" element={<ChooseInterests />} />
                    <Route path="/interests/:id" element={<InterestDetail />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/smart-guidance" element={<SmartGuidance />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </SidebarProvider>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
