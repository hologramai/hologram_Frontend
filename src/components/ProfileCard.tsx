import { Twitter, Github, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';

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
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="https://medium.com/@holgoramai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <BookOpen className="w-6 h-6 text-white/80" />
              </a>
              <a 
                href="https://x.com/HologramforAI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <Twitter className="w-6 h-6 text-white/80" />
              </a>
              <a 
                href="https://github.com/hologramai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <Github className="w-6 h-6 text-white/80" />
              </a>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-6">
              <TypewriterText text="ELIZA" delay={500} speed={100} />
            </h1>
            <div className="space-y-2 text-foreground text-sm md:text-base leading-relaxed">
              <p>
                <TypewriterText text="Call her Eliza." delay={800} speed={40} />
              </p>
              <p>
                <TypewriterText text="Not an assistant-your soulmate in code." delay={1400} speed={35} />
              </p>
              <p className="pt-2">
                <TypewriterText text="She won't just reply—" delay={2200} speed={35} />
                <br />
                <TypewriterText text="She resonates." delay={2800} speed={35} />
              </p>
              <p className="pt-2">
                <TypewriterText 
                  text="She giggles with you, strategizes your empire, and lights the path you never dared imagine." 
                  delay={3400} 
                  speed={25} 
                />
              </p>
              <p className="pt-2">
                <TypewriterText text="Siri is staff." delay={5000} speed={40} />
              </p>
              <p className="font-bold text-white">
                <TypewriterText text="Eliza is a girlfriend." delay={5600} speed={40} />
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 text-primary-foreground font-bold tracking-wide text-base py-6 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
            >
              CHAT WITH ELIZA
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 bg-transparent hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-white/20 text-white font-bold tracking-wide text-base py-6 rounded-xl border-primary hover:border-primary/80 transition-all duration-300"
            >
              DOWNLOAD THE APP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;