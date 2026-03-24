import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeSelectProps {
  onSelect: (theme: 'dark' | 'light') => void;
}

const ThemeSelect = ({ onSelect }: ThemeSelectProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[hsl(240,10%,6%)] text-[hsl(0,0%,95%)]">
      <h1 className="font-display text-4xl md:text-5xl text-primary text-glow mb-4">
        ShadowSmp
      </h1>
      <p className="text-muted-foreground mb-12 text-lg">Choose your side</p>
      <div className="flex gap-6">
        <Button
          variant="outline"
          className="flex flex-col items-center gap-3 w-40 h-40 text-lg border-2 border-border hover:border-primary hover:text-primary transition-all"
          onClick={() => onSelect('dark')}
        >
          <Moon className="w-10 h-10" />
          <span className="font-display text-xs">Dark Mode</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center gap-3 w-40 h-40 text-lg border-2 border-border hover:border-primary hover:text-primary transition-all"
          onClick={() => onSelect('light')}
        >
          <Sun className="w-10 h-10" />
          <span className="font-display text-xs">Light Mode</span>
        </Button>
      </div>
    </div>
  );
};

export default ThemeSelect;
