import { motion } from 'framer-motion';

export default function Hero() {
  const hearts = ['💗', '🌸', '💕', '🌷', '💝'];

  return (
    <section className="text-center pt-[80px] px-5 pb-[40px] w-full max-w-4xl mx-auto flex flex-col items-center relative z-10">
      <motion.div 
        className="inline-block bg-white/40 backdrop-blur-md border border-white/60 text-deep-rose font-dancing text-xl px-8 py-3 rounded-full shadow-[0_8px_32px_rgba(248,180,200,0.3)] mb-8"
        animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="bg-[image:var(--background-image-badge-gradient)] bg-[length:200%_auto] animate-[textShimmer_3s_infinite_linear] text-transparent bg-clip-text font-bold">✨ Aaj ka din sirf tumhara hai ✨</span>
      </motion.div>
      
      <motion.h1 
        className="mt-2 mb-4 font-dancing text-[clamp(3.5rem,10vw,7rem)] text-gradient drop-shadow-[0_4px_12px_rgba(196,96,122,0.3)] leading-tight font-bold"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      >
        Happy Mother's Day
      </motion.h1>
      
      <motion.p 
        className="font-playfair italic text-soft-purple text-2xl md:text-3xl mb-12 drop-shadow-sm font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, type: "spring" }}
      >
        Meri pyaari Mummy ko
      </motion.p>
      
      <div className="flex justify-center gap-6">
        {hearts.map((heart, i) => (
          <motion.span 
            key={i} 
            className="text-4xl inline-block drop-shadow-md"
            animate={{ scale: [1, 1.4, 1, 1.2, 1], rotate: [0, -10, 10, -5, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            {heart}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
