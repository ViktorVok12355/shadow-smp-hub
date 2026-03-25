import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

const roles = [
  { label: '⚔️ Good PvP', value: 'good_pvp' },
  { label: '🛡️ Bad PvP', value: 'bad_pvp' },
  { label: '🏗️ Builder', value: 'builder' },
];

const Roles = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selected, setSelected] = useState<string | null>(null);
  const [discordName, setDiscordName] = useState('');
  const [realName, setRealName] = useState('');
  const [saving, setSaving] = useState(false);

  const canSave = selected && discordName.trim().length > 0;

  const handleSave = async () => {
    if (!canSave || !user) return;
    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update({
        role: selected,
        discord_name: discordName.trim(),
        name: realName.trim() || null,
      } as any)
      .eq('user_id', user.id);
    setSaving(false);
    if (error) {
      toast.error('Failed to save role');
    } else {
      toast.success('Role saved!');
    }
  };

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

      <div className="w-full max-w-xl space-y-5 mb-12">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => setSelected(role.value)}
            className={`w-full flex items-center gap-5 border-2 rounded-xl p-8 transition-colors text-left ${
              selected === role.value
                ? 'bg-primary/10 border-primary'
                : 'bg-card border-border hover:border-muted-foreground'
            }`}
          >
            <span className="font-medium text-foreground text-2xl">{role.label}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-xl space-y-4 mb-8">
        <div>
          <label className="block text-foreground font-semibold text-lg mb-2">
            Discord Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={discordName}
            onChange={(e) => setDiscordName(e.target.value)}
            placeholder="e.g. Shadow#1234"
            className="w-full rounded-xl border-2 border-border bg-card p-4 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-foreground font-semibold text-lg mb-2">
            Your Real Name <span className="text-muted-foreground text-sm">(optional)</span>
          </label>
          <input
            type="text"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
            placeholder="e.g. John"
            className="w-full rounded-xl border-2 border-border bg-card p-4 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="text-center space-y-8">
        <Button onClick={handleSave} disabled={!canSave || saving} className="px-12 py-7 text-lg text-white">
          {saving ? 'Saving...' : 'Save Role'}
        </Button>
        <p className="text-foreground font-semibold text-xl">
          Type in the chat what you are (Good PvP, Bad PvP, or Builder)
        </p>
        <a
          href="https://discord.gg/PegSdwjd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
        >
          Join Discord
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Roles;
