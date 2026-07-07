import { motion } from 'motion/react';

export function StoriesView() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="text-center mb-16 space-y-4">
        <span className="px-3 py-1 bg-blue-400/20 text-blue-300 border border-blue-400/30 rounded text-[10px] uppercase tracking-widest font-bold">Traveler Tales</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
          World <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400">Stories</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Read about adventures, hidden gems, and cultural experiences from fellow wanderers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-pointer group flex flex-col"
          >
            <div className="h-64 rounded-2xl bg-slate-800 mb-6 overflow-hidden relative">
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1501785888041-af3ef285b470' : i === 2 ? '1469854523086-cc02fe5d8800' : i === 3 ? '1498652208188-9fc3e6480b0e' : '1502791451862-7bd8c1df43a7'}?q=80&w=2070&auto=format&fit=crop`}
                  alt="Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="flex gap-2 mb-3 text-xs text-blue-400 font-medium">
                <span>{i === 1 ? 'Adventure' : i === 2 ? 'Culture' : i === 3 ? 'Food' : 'Nature'}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-500">5 min read</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              {i === 1 ? 'Trekking the Annapurna Circuit' : i === 2 ? 'Lost in the Souks of Marrakech' : i === 3 ? 'Culinary Journey through Osaka' : 'Chasing Waterfalls in Iceland'}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
              Discover the unexpected beauty and thrilling moments of this incredible journey. From local encounters to breathtaking landscapes, experience the world through the eyes of our seasoned travelers.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
              <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Author" className="w-full h-full object-cover" />
              </div>
              <div className="text-xs">
                <p className="text-white font-medium">Alex Traveler</p>
                <p className="text-slate-500">Oct {i + 10}, 2024</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
