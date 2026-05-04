import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Index from "./pages/Index";
import Loans from "./pages/Loans";
import Documents from "./pages/Documents";
import Apply from "./pages/Apply";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />

      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
