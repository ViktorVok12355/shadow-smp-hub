import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const roles = ['⚔️ Good PvP', '🛡️ Bad PvP', '🏗️ Builder'];

const Roles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-muted-foreground"
        onClick={() => navigate('/')}
      >
        ← Back
      </Button>

      <p className="text-muted-foreground mb-2 uppercase tracking-widest text-sm">Roles</p>
      <h1 className="font-display text-4xl md:text-5xl text-primary text-glow mb-8">
        ShadowSmp
      </h1>

      <div className="w-full max-w-md space-y-3 mb-8">
        {roles.map((role) => (
          <div
            key={role}
            className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
          >
            <span className="font-medium text-foreground">{role}</span>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-foreground font-medium">
          Type in the chat what you are (Good PvP, Bad PvP, or Builder)
        </p>
        <a
          href="https://discord.gg/PegSdwjd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Join Discord
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Roles;
