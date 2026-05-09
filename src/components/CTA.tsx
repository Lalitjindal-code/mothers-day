import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function CTA() {
  const launchCelebration = () => {
    
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f8b4c8', '#ffd6b3', '#d4b8e0', '#b8e0d2', '#e8c96e', '#c4607a']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f8b4c8', '#ffd6b3', '#d4b8e0', '#b8e0d2', '#e8c96e', '#c4607a']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Fire global balloon event
    const event = new CustomEvent('launch-balloons', { detail: { count: 20 } });
    window.dispatchEvent(event);
  };

  return (
    <section className="text-center py-16 px-5 pb-32 relative z-10">
      <motion.button
        className="relative overflow-hidden bg-white/80 backdrop-blur-md text-deep-rose border border-rose/50 font-dancing text-3xl md:text-4xl px-10 md:px-14 py-5 rounded-full shadow-[0_8px_32px_rgba(248,180,200,0.4)] group"
        whileHover={{ y: -6, scale: 1.05, boxShadow: '0 15px 40px rgba(248,180,200,0.6)' }}
        whileTap={{ scale: 0.95 }}
        onClick={launchCelebration}
      >
        <div className="absolute inset-0 w-full h-full bg-[image:var(--background-image-badge-gradient)] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="absolute inset-0 w-full h-full bg-white/40 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
        <span className="relative z-10 drop-shadow-sm font-bold">🎉 Mummy ko Celebrate Karo! 🎉</span>
      </motion.button>
    </section>
  );
}
