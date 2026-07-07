import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-pointer h-full"
    >
      <div className="relative h-48 mb-5 overflow-hidden rounded-2xl">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin className="w-3 h-3" />
              {destination.country}
            </div>
          </div>
        </div>
        
        <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-5">
          {destination.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {destination.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 bg-white/5 text-slate-300 text-[10px] uppercase tracking-wider font-medium border border-white/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
