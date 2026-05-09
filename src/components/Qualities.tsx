import { motion } from 'framer-motion';

const qualities = [
  { icon: '🌟', text: 'Meri superhero, har mushkil mein sath' },
  { icon: '🤗', text: 'Sabse warm aur loving embrace' },
  { icon: '🍳', text: 'World\'s best cook — maa ke hath ka khana =ghar' },
  { icon: '🧭', text: 'Meri guide jab raasta bhatka hoon' },
  { icon: '💪', text: 'Meri sabse badi strength' },
  { icon: '🌈', text: 'Meri zindagi mein rang laane wali' }
];

export default function Qualities() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section className="py-16 px-5 max-w-4xl mx-auto w-full relative z-10">
      <motion.h2 
        className="font-dancing text-4xl md:text-5xl text-deep-rose text-center mb-12 font-bold drop-shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, type: "spring" }}
      >
        Mummy, aap ho meri...
      </motion.h2>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {qualities.map((q, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -12, rotate: i % 2 === 0 ? -3 : 3, scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(248,180,200,0.2)] flex flex-col items-center text-center cursor-pointer transition-all duration-300 group"
          >
            <div className="text-5xl mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">{q.icon}</div>
            <div className="font-lato font-medium text-[1rem] text-[#6a4251] leading-relaxed">
              {q.text}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
