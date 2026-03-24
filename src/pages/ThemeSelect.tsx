import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeSelectProps {
  onSelect: (theme: 'dark' | 'light') => void;
}

const ThemeSelect = ({ onSelect }: ThemeSelectProps) => {
  return (
    <div className="min-h-screen flex bg-[hsl(240,10%,6%)]">
      {/* Dark side - left */}
      <button
        onClick={() => onSelect('dark')}
        className="flex-1 flex flex-col items-center justify-center gap-4 transition-all hover:bg-[hsl(240,10%,10%)] cursor-pointer border-r border-[hsl(240,10%,20%)] group"
      >
        <Moon className="w-16 h-16 text-[hsl(14,90%,55%)] group-hover:drop-shadow-[0_0_20px_hsl(14,90%,55%,0.5)] transition-all" />
        <span className="font-display text-sm text-[hsl(0,0%,95%)]">Dark Mode</span>
      </button>

      {/* Light side - right */}
      <button
        onClick={() => onSelect('light')}
        className="flex-1 flex flex-col items-center justify-center gap-4 transition-all hover:bg-[hsl(0,0%,20%)] cursor-pointer group"
      >
        <Sun className="w-16 h-16 text-[hsl(45,100%,60%)] group-hover:drop-shadow-[0_0_20px_hsl(45,100%,60%,0.5)] transition-all" />
        <span className="font-display text-sm text-[hsl(0,0%,95%)]">Light Mode</span>
      </button>

      {/* Center title overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 pointer-events-none">
        <h1 className="font-display text-4xl md:text-5xl text-[hsl(14,90%,55%)] drop-shadow-[0_0_20px_hsl(14,90%,55%,0.4)] mb-2">
          ShadowSmp
        </h1>
        <p className="text-[hsl(0,0%,55%)] text-lg">Choose your side</p>
      </div>
    </div>
  );
};

export default ThemeSelect;
