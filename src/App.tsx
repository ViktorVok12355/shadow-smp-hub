import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import ThemeSelect from "@/pages/ThemeSelect";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import Roles from "@/pages/Roles";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { theme, setTheme, resetTheme } = useTheme();
  const { user, loading, signOut } = useAuth();

  if (!theme) {
    return <ThemeSelect onSelect={setTheme} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="font-display text-primary text-glow text-sm animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Auth onBack={resetTheme} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onSignOut={signOut} onBack={resetTheme} />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
