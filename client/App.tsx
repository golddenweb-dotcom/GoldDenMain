import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import NaturalIngredients from "./pages/NaturalIngredients";
import SkinHealth from "./pages/SkinHealth";
import WhatIsKP from "./pages/WhatIsKP";
import OurTreatment from "./pages/OurTreatment";
import CustomerStories from "./pages/CustomerStories";
import BestSellers from "./pages/BestSellers";
import NewArrivals from "./pages/NewArrivals";
import Placeholder from "./pages/Placeholder";
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/natural-ingredients" element={<NaturalIngredients />} />
          <Route path="/skin-health" element={<SkinHealth />} />
          <Route path="/what-is-kp" element={<WhatIsKP />} />
          <Route path="/our-treatment" element={<OurTreatment />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/fragrances" element={<Placeholder title="Fragrances" />} />
          <Route path="/collections" element={<Placeholder title="Collections" />} />
          <Route path="/bestsellers" element={<Placeholder title="Bestsellers" />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
