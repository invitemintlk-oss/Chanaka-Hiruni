import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const HeroContent: React.FC = () => {
  const glow = { textShadow: "0 0 12px rgba(251,248,241,0.9)" };
  return (
    <section aria-label="Hero — Save the Date" className="relative h-[100dvh] overflow-hidden bg-[#fbf8f1]">
      {/* Portrait column sized to the illustration so it is never cropped badly on desktop */}
      <div className="relative mx-auto h-full w-full max-w-[calc(100dvh*941/1672)]">
        <img
          src="/ChatGPT Image Aug 4, 2026, 03_50_44 PM.webp"
          alt="Chanaka and Hiruni in traditional Kandyan wedding attire"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        {/* Details placed in the empty space at the bottom of the illustration */}
        <motion.div
          className="absolute inset-x-0 top-[66%] bottom-[7%] mx-auto flex w-[64%] flex-col items-center justify-center text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-[#8a6a3b] font-serif tracking-[0.3em] uppercase text-[9px] sm:text-[11px] font-semibold" style={glow}>
            The Wedding Of
          </motion.p>

          <motion.h1 variants={itemVariants}
            className="text-[#2C1810] leading-tight mt-1 whitespace-nowrap"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.2rem, 9vw, 3.4rem)", ...glow }}
          >
            Chanaka <span className="text-[#b8893a]">&</span> Hiruni
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center gap-2 w-28 mx-auto my-2 sm:my-3">
            <div className="h-px flex-1 bg-[#b8893a]/70"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#b8893a]"></div>
            <div className="h-px flex-1 bg-[#b8893a]/70"></div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-[#2C1810] font-serif text-[14px] sm:text-lg tracking-[0.35em] font-bold" style={glow}>
            26 . 05 . 2027
          </motion.p>

          <motion.p variants={itemVariants} className="text-[#5a4127] font-serif uppercase tracking-[0.18em] text-[9px] sm:text-[11px] mt-2 leading-relaxed" style={glow}>
            Poruwa Ceremony at 08:56 AM<br />
            Hotel Sarani, Digana Road
          </motion.p>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#8a6a3b]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
