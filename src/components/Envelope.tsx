import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSignature, setShowSignature] = useState(false);

  const fullText = "Aap sirf meri Mummy nahi, aap meri best friend, meri teacher, aur meri sabse badi inspiration ho. Aapne jo pyaar, sacrifice aur mehnat se mujhe pal-posakr bada kiya — uska shukriya karne ke liye mere paas lafz nahi hain. Aaj aur hamesha — I love you Mummy! 🌸";

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Launch balloons globally
    const event = new CustomEvent('launch-balloons');
    window.dispatchEvent(event);

    // Switch z-index after it rises above the envelope
    setTimeout(() => {
      setIsFullyOpen(true);
    }, 800);

    // Start typewriter
    setTimeout(() => {
      setIsTyping(true);
    }, 1200);
  };

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => setShowSignature(true), 500);
      }
    }, 45);

    return () => {
      clearInterval(interval);
    };
  }, [isTyping, fullText]);

  return (
    <section className="flex flex-col items-center py-12 px-5 w-full relative z-20 max-w-4xl mx-auto min-h-[500px]">
      <motion.div 
        className="text-center font-dancing text-soft-purple text-2xl mb-8 font-bold tracking-wide"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        👇 Letter kholne ke liye click karo 👇
      </motion.div>

      <div className="relative cursor-pointer w-[280px] sm:w-[320px] h-[200px] sm:h-[220px] group perspective-[1000px]" onClick={handleOpen}>
        
        {/* Envelope Base */}
        <div className="absolute inset-0 z-20 pointer-events-none drop-shadow-2xl">
           {/* Back of envelope */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#fce8f0] to-[#f5c6d6] shadow-inner rounded-b-xl border border-rose/40"></div>
           
           {/* Flap */}
           <div className={`env-flap absolute top-0 left-[-2px] z-30 transition-all duration-1000 ease-in-out origin-top sm:border-l-[162px] sm:border-r-[162px] border-l-[142px] border-r-[142px] sm:border-top-[120px] ${isOpen ? 'open z-0 brightness-90' : 'brightness-105 group-hover:brightness-110'}`}></div>
           
           {/* Left/Right triangles */}
           <div className="env-left absolute left-[-2px] bottom-[-2px] z-30 sm:border-l-[162px] border-l-[142px] sm:border-top-[120px] sm:border-bottom-[100px]"></div>
           <div className="env-right absolute right-[-2px] bottom-[-2px] z-30 sm:border-r-[162px] border-r-[142px] sm:border-top-[120px] sm:border-bottom-[100px]"></div>
           
           {/* Wax Seal */}
           <div className={`wax-seal absolute bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[radial-gradient(circle,#f5aebd,#c4607a)] shadow-[0_6px_16px_rgba(196,96,122,0.6)] flex items-center justify-center text-2xl z-40 transition-all duration-500 pointer-events-auto ${isOpen ? 'scale-0 opacity-0 rotate-180' : 'scale-100 opacity-100 group-hover:scale-110'}`}>
              💌
           </div>
        </div>

        {/* The Letter Card */}
        <motion.div 
          className={`letter-card absolute bottom-0 left-1/2 -translate-x-1/2 w-[270px] sm:w-[320px] bg-[#fffcf8] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col border border-rose/20 ${isFullyOpen ? 'z-50' : 'z-10'}`}
          initial={{ y: 20, scale: 0.8, opacity: 0, rotateX: 10 }}
          animate={isOpen ? { 
            y: isFullyOpen ? -100 : -220, 
            scale: isFullyOpen ? 1.05 : 1, 
            opacity: 1,
            rotateX: 0
          } : { 
            y: 20, 
            scale: 0.8, 
            opacity: 0,
            rotateX: 10
          }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.35, delay: isOpen ? 0.4 : 0 }}
        >
          <div className="letter-lines absolute inset-0 opacity-40 rounded-xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="font-dancing text-3xl text-deep-rose mb-5 font-bold tracking-wide drop-shadow-sm">Meri Pyaari Mummy,</h2>
            <p className="font-playfair text-[#6a4251] leading-[2] text-[1.05rem] min-h-[180px] sm:min-h-[160px] font-medium tracking-wide">
              {typedText}
              {isTyping && <span className="border-r-2 border-deep-rose animate-pulse ml-1"></span>}
            </p>
            
            <AnimatePresence>
              {showSignature && (
                <motion.div 
                  className="font-dancing text-soft-purple text-3xl text-right mt-6 drop-shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                >
                  — Tumhara ❤️ bachha
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      {/* Spacer to account for letter rising and coming forward */}
      <div className={`transition-all duration-1000 ${isOpen ? 'h-[250px]' : 'h-0'}`}></div>
    </section>
  );
}
