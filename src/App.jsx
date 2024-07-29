import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/app/*"
            element={
              <>
                <Navbar />
                <main className="pt-16">
                  <Routes>
                    {navItems.map(({ to, page }) => (
                      <Route key={to} path={to} element={page} />
                    ))}
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
