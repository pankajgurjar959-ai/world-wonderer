import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden rounded-3xl mx-6 md:mx-12 mt-6 border border-white/10 backdrop-blur-sm">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="px-3 py-1 bg-blue-400/20 text-blue-300 border border-blue-400/30 rounded text-[10px] uppercase tracking-widest font-bold">Editor's Choice 2024</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-light mb-6 leading-[1.1] tracking-tight"
        >
          Discover <br/>
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400">The World</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From ancient temples hidden in misty mountains to sun-drenched coastal villages, embark on a journey to the destinations that will take your breath away.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => {
            document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full font-semibold text-white transition-all shadow-lg shadow-black/20 flex items-center gap-2"
        >
          <MapPin className="w-5 h-5" />
          Start Exploring
        </motion.button>
      </div>
    </div>
  );
}
