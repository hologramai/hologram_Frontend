
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* City background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
        style={{
          backgroundImage: `url('/lovable-uploads/9bf22095-1a71-407e-820c-ab0a71345125.png')`,
          animationDuration: '4s'
        }}
      />
      
      {/* Animated overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* Enhanced glitter particles with more movement */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translateX(${Math.sin(i) * 20}px) translateY(${Math.cos(i) * 20}px)`,
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-primary/60 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Moving light streaks */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`streak-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-b from-primary/40 to-transparent animate-pulse opacity-30"
            style={{
              left: `${10 + i * 20}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle color overlay to enhance the pink/purple theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse" 
           style={{ animationDuration: '8s' }} />
    </div>
  );
};

export default Background;
