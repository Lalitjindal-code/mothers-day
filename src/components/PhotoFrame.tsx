import { motion } from 'framer-motion';

export default function PhotoFrame() {
  return (
    <section className="flex justify-center py-16 px-5 max-w-4xl mx-auto overflow-visible relative z-10">
      <motion.div 
        className="relative w-[240px] h-[280px] bg-white border border-white/80 rounded-sm shadow-[0_20px_50px_rgba(150,100,120,0.2)] cursor-pointer group flex flex-col items-center justify-start pt-6 pb-4 overflow-visible"
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 2 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        whileHover={{ rotate: 5, scale: 1.05, y: -10, boxShadow: "0 30px 60px rgba(150,100,120,0.3)" }}
      >
        {/* Washi Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-rose/40 backdrop-blur-sm -rotate-3 opacity-80 shadow-sm mix-blend-multiply z-20"></div>
        
        {/* Photo Area */}
        <div className="w-[200px] h-[180px] bg-gradient-to-br from-[#fdf0f4] to-[#fce8f0] border border-rose/20 shadow-inner rounded-sm flex items-center justify-center overflow-hidden mb-4 relative group-hover:from-[#fce8f0] group-hover:to-[#f5c6d6] transition-colors duration-500">
          <div className="absolute inset-2 border border-dashed border-rose/40 rounded-sm pointer-events-none"></div>
          <motion.div 
            className="text-[5rem] drop-shadow-md"
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
            transition={{ duration: 0.5 }}
          >
            👩‍👧‍👦
          </motion.div>
        </div>
        
        {/* Caption */}
        <div className="font-dancing text-deep-rose text-2xl text-center px-4 leading-tight font-bold w-full">
          Mummy — meri duniya
        </div>
      </motion.div>
    </section>
  );
}
