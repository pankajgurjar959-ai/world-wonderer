import { motion } from 'motion/react';
import { Compass, Globe, Users, Heart } from 'lucide-react';

export function AboutView() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 space-y-4"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center mb-8">
            <Compass className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
          About <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400">World Wanderer</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
          We believe that travel is the best education. Our mission is to inspire people to explore the world, experience new cultures, and connect with humanity across borders.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <Globe className="w-8 h-8 text-blue-400 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Curated Escapes</h3>
          <p className="text-slate-400 text-sm leading-relaxed">We hand-pick only the most breathtaking and culturally rich destinations to feature on our platform.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <Users className="w-8 h-8 text-blue-400 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Global Community</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Connect with over 10,000 active travelers sharing tips, stories, and hidden gems.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <Heart className="w-8 h-8 text-blue-400 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Responsible Travel</h3>
          <p className="text-slate-400 text-sm leading-relaxed">We advocate for sustainable tourism that respects local cultures and preserves natural environments.</p>
        </motion.div>
      </div>
    </div>
  );
}
