import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, ChevronDown, Shield, Crown, Star, Code, ArrowLeft } from 'lucide-react';
import heroImage from '@/assets/minecraft-hero.jpg';

interface HomeProps {
  onSignOut: () => void;
  onBack: () => void;
}

const Home = ({ onSignOut }: HomeProps) => {
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerified(true);
      setVerifying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sign Out */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" size="sm" onClick={onSignOut} className="gap-2 border-border">
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <h1 className="font-display text-5xl md:text-7xl text-primary text-glow mb-8">
          ShadowSmp
        </h1>
        <div className="flex flex-col items-center gap-2 animate-bounce text-muted-foreground">
          <span className="text-sm">Scroll down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-primary text-glow text-center mb-12">
            Staff
          </h2>
          <div className="space-y-4">
            <StaffCard icon={<Crown className="w-5 h-5 text-primary" />} role="Owner" name="ViktorVok12355" />
            <StaffCard icon={<Shield className="w-5 h-5 text-muted-foreground" />} role="Co-Owner" name="(don't have)" muted />
            <StaffCard icon={<Star className="w-5 h-5 text-muted-foreground" />} role="Moderator" name="(don't have)" muted />
            <StaffCard icon={<Code className="w-5 h-5 text-primary" />} role="Code" name="FireDraogon1" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary text-glow mb-8">
            ShadowSmp
          </h2>
          <div className="relative rounded-lg overflow-hidden mb-10">
            <img
              src={heroImage}
              alt="ShadowSmp Minecraft World"
              className="w-full h-64 md:h-96 object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="bg-card border border-border rounded-lg p-6 md:p-10 text-left space-y-4">
            <p className="text-foreground leading-relaxed font-medium text-lg">
              WELCOME TO SHADOW SMP — A HIGHLY DRAMATIC, ACTION-PACKED, AND LIKELY STAGED MINECRAFT SERIES.
            </p>
            <p className="text-foreground leading-relaxed">
              PVP IS CONSTANT, DEATH = BAN, AND 90% OF PLAYERS DIE AT SPAWN.
            </p>
            <p className="text-foreground leading-relaxed">
              YOU NEED TO HAVE A GOOD AMOUNT OF IQ BRAIN CELLS.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              THIS SERVER SOMETIMES USES SCRIPTS.
            </p>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-xl text-primary text-glow mb-8">Verification</h2>
          {!verified ? (
            <Button
              onClick={handleVerify}
              disabled={verifying}
              variant="outline"
              className="border-2 border-border hover:border-primary px-8 py-6 text-base"
            >
              {verifying ? 'Verifying...' : '🤖 I am not a robot'}
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-primary font-medium">✅ Verified!</p>
              <Button onClick={() => navigate('/roles')} className="px-8">
                Continue to Roles →
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const StaffCard = ({ icon, role, name, muted }: { icon: React.ReactNode; role: string; name: string; muted?: boolean }) => (
  <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
    {icon}
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{role}</p>
      <p className={`font-medium ${muted ? 'text-muted-foreground italic' : 'text-foreground'}`}>{name}</p>
    </div>
  </div>
);

export default Home;
