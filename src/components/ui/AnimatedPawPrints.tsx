import { useEffect, useState } from 'react';

interface PawPrint {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
}

const AnimatedPawPrints = () => {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    // Generate paw prints in a diagonal walking pattern
    const prints: PawPrint[] = [];
    const numPrints = 8;
    
    for (let i = 0; i < numPrints; i++) {
      prints.push({
        id: i,
        x: 10 + (i % 2 === 0 ? 0 : 8) + Math.random() * 5,
        y: 10 + (i * 12),
        rotation: i % 2 === 0 ? -15 : 15,
        delay: i * 0.3,
      });
    }
    
    setPawPrints(prints);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pawPrints.map((print) => (
        <div
          key={print.id}
          className="absolute animate-paw-fade"
          style={{
            left: `${print.x}%`,
            top: `${print.y}%`,
            transform: `rotate(${print.rotation}deg)`,
            animationDelay: `${print.delay}s`,
          }}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-accent/55 drop-shadow-md"
          >
            <path d="M12 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-9 4c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h4.36c.42 1.16 1.52 2 2.82 2 1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14z"/>
          </svg>
        </div>
      ))}
      
      {/* Additional scattered paw prints on the right side */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`right-${i}`}
          className="absolute animate-paw-fade"
          style={{
            right: `${5 + (i % 2 === 0 ? 0 : 6)}%`,
            top: `${15 + (i * 13)}%`,
            transform: `rotate(${i % 2 === 0 ? 15 : -15}deg)`,
            animationDelay: `${1 + i * 0.4}s`,
          }}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary/50 drop-shadow-sm"
          >
            <path d="M12 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-9 4c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h4.36c.42 1.16 1.52 2 2.82 2 1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14z"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default AnimatedPawPrints;
