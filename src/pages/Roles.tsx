import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const roles = [
  {
    name: 'Good PvP',
    emoji: '⚔️',
    url: 'https://discord.com/channels/1414156900114759772/1486039711276597299',
  },
  {
    name: 'Bad PvP',
    emoji: '🛡️',
    url: 'https://discord.com/channels/1414156900114759772/1486039691189813380',
  },
  {
    name: 'Builder',
    emoji: '🏗️',
    url: 'https://discord.com/channels/1414156900114759772/1486039764653178880',
  },
];

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
      <h1 className="font-display text-4xl md:text-5xl text-primary text-glow mb-12">
        ShadowSmp
      </h1>

      <div className="w-full max-w-md space-y-4">
        {roles.map((role) => (
          <a
            key={role.name}
            href={role.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{role.emoji}</span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {role.name}
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Roles;
