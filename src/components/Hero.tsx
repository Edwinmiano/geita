import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#29235C]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/20" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Your Trusted Supplier of
          <br />
          <span className="text-[#FFCE00]">Quality Construction Materials</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Building excellence through quality materials, reliable delivery, and expert consultation
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#FFCE00] text-[#29235C] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFCE00]/90 transition-colors"
        >
          Get a Quote
        </motion.button>
      </div>
    </section>
  );
}
