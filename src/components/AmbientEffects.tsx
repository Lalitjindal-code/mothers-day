import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AmbientEffects() {
  const [petals, setPetals] = useState<any[]>([]);
  const [sparkles, setSparkles] = useState<any[]>([]);
  const [balloons, setBalloons] = useState<any[]>([]);

  // Petal System
  useEffect(() => {
    const emojis = ['🌸', '🌺', '🌷', '💮', '🍀', '✿', '❀'];
    // Pre-create some petals
    const initial = Array.from({length: 5}).map((_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      size: 0.8 + Math.random() * 1.5,
      duration: 6 + Math.random() * 8,
      delay: i * 0.3
    }));
    setPetals(initial);

    const interval = setInterval(() => {
      const newPetal = {
        id: Date.now(),
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        size: 0.8 + Math.random() * 1.5,
        duration: 6 + Math.random() * 8,
        delay: 0
      };
      setPetals(prev => [...prev, newPetal].slice(-15)); // keep max 15
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Sparkle System
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.92) {
        addSparkle(e.clientX, e.clientY);
      }
    };
    const handleTouchStart = (e: TouchEvent) => {
      addSparkle(e.touches[0].clientX, e.touches[0].clientY);
    };

    const addSparkle = (x: number, y: number) => {
      const emojis = ['✨', '⭐', '💫', '🌟', '💕'];
      const newSparkle = {
        id: Date.now() + Math.random(),
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: x - 12,
        y: y - 12
      };
      setSparkles(prev => [...prev, newSparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Balloon System
  useEffect(() => {
    const handleLaunch = (e: any) => {
      const count = e.detail?.count || 12;
      const emojis = ['🎈', '🎀', '💕', '🌸', '⭐', '🎊', '💝', '🌺'];
      const newBalloons = Array.from({ length: count }).map((_, i) => ({
        id: Date.now() + i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: 5 + Math.random() * 90,
        size: 2 + Math.random() * 2,
        duration: 3 + Math.random() * 2,
        delay: i * 0.15
      }));
      setBalloons(prev => [...prev, ...newBalloons]);
      setTimeout(() => {
        setBalloons(prev => prev.filter(b => !newBalloons.find(nb => nb.id === b.id)));
      }, 6000);
    };
    window.addEventListener('launch-balloons', handleLaunch as EventListener);
    return () => window.removeEventListener('launch-balloons', handleLaunch as EventListener);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <AnimatePresence>
          {petals.map(p => (
            <motion.div
              key={p.id}
              initial={{ y: -60, x: 0, opacity: 0, rotate: 0 }}
              animate={{ y: '110vh', x: 60, opacity: [0, 0.7, 0.5, 0], rotate: 720 }}
              transition={{ duration: p.duration, delay: p.delay, ease: "linear" }}
              className="absolute drop-shadow-sm"
              style={{ left: `${p.left}vw`, fontSize: `${p.size}rem` }}
            >
              {p.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[500] overflow-hidden">
        <AnimatePresence>
          {sparkles.map(s => (
            <motion.div
              key={s.id}
              initial={{ scale: 0, rotate: 0, opacity: 1 }}
              animate={{ scale: [0, 1.5, 0], rotate: 360, opacity: [1, 1, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute text-xl"
              style={{ left: s.x, top: s.y }}
            >
              {s.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <AnimatePresence>
          {balloons.map(b => (
            <motion.div
              key={b.id}
              initial={{ y: '110vh', rotate: -5, opacity: 1 }}
              animate={{ 
                y: '-20vh', 
                rotate: [-5, 5, -3, 4, -2],
                opacity: [1, 1, 0.3]
              }}
              transition={{ duration: b.duration, delay: b.delay, ease: "easeOut" }}
              className="absolute drop-shadow-md"
              style={{ left: `${b.left}vw`, fontSize: `${b.size}rem` }}
            >
              {b.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
