
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Glitter particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 -mb-12 w-full h-auto text-secondary/30"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,234.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-auto text-background/50"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,288L60,261.3C120,235,240,181,360,176C480,171,600,213,720,208C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Background;
