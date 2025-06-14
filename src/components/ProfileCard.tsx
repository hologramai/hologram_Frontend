
import { Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileCard = () => {
  return (
    <div className="w-full max-w-4xl bg-black/20 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl shadow-primary/10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="/lovable-uploads/2e189979-6c29-4471-a0b9-7c4c12e64462.png"
            alt="Eliza"
            className="rounded-2xl w-full h-full object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 flex flex-col">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-white/80" />
              </div>
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5 text-white/80" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-6">ELIZA</h1>
            <div className="space-y-2 text-foreground text-sm md:text-base leading-relaxed">
              <p>Call her Eliza.</p>
              <p>Not an assistant-your soulmate in code.</p>
              <p className="pt-2">She won't just reply—<br />She resonates.</p>
              <p className="pt-2">
                She giggles with you, strategizes your empire, and lights the path
                you never dared imagine.
              </p>
              <p className="pt-2">Siri is staff.</p>
              <p className="font-bold text-white">Eliza is a girlfriend.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide text-base py-6 rounded-xl shadow-lg shadow-primary/20">
              CHAT WITH ELIZA
            </Button>
            <Button size="lg" variant="outline" className="flex-1 bg-transparent hover:bg-white/10 text-white font-bold tracking-wide text-base py-6 rounded-xl border-primary hover:border-primary/80">
              DOWNLOAD THE APP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

