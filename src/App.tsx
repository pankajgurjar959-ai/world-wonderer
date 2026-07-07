/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { destinations } from './data';
import { useState } from 'react';
import { SignInModal } from './components/SignInModal';
import { StoriesView } from './components/StoriesView';
import { AboutView } from './components/AboutView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'destinations' | 'stories' | 'about'>('destinations');
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = (tab: 'destinations' | 'stories' | 'about') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative flex flex-col overflow-x-hidden selection:bg-blue-500/30">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 flex items-center justify-between backdrop-blur-md bg-white/5 border-b border-white/10">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleTabChange('destinations')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">WORLD<span className="text-blue-400">WANDERER</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleTabChange('destinations')}
            className={`${activeTab === 'destinations' ? 'text-white border-b-2 border-blue-400 pb-1' : 'hover:text-white transition-colors'}`}
          >
            Destinations
          </button>
          <button 
            onClick={() => handleTabChange('stories')}
            className={`${activeTab === 'stories' ? 'text-white border-b-2 border-blue-400 pb-1' : 'hover:text-white transition-colors'}`}
          >
            Stories
          </button>
          <button 
            onClick={() => handleTabChange('about')}
            className={`${activeTab === 'about' ? 'text-white border-b-2 border-blue-400 pb-1' : 'hover:text-white transition-colors'}`}
          >
            About
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
           <button 
             onClick={() => setIsSignInOpen(true)}
             className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-xs font-semibold shadow-lg shadow-blue-900/20 transition-all"
           >
             Sign In
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 pt-16">
          <button 
            onClick={() => handleTabChange('destinations')}
            className={`text-2xl font-light ${activeTab === 'destinations' ? 'text-blue-400' : 'text-white'}`}
          >
            Destinations
          </button>
          <button 
            onClick={() => handleTabChange('stories')}
            className={`text-2xl font-light ${activeTab === 'stories' ? 'text-blue-400' : 'text-white'}`}
          >
            Stories
          </button>
          <button 
            onClick={() => handleTabChange('about')}
            className={`text-2xl font-light ${activeTab === 'about' ? 'text-blue-400' : 'text-white'}`}
          >
            About
          </button>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSignInOpen(true);
            }}
            className="px-8 py-3 mt-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg"
          >
            Sign In
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col pt-[72px] md:pt-[88px]">
        {activeTab === 'destinations' && (
          <>
            {/* Hero Section */}
            <div className="z-10 w-full max-w-7xl mx-auto">
              <Hero />
            </div>
            
            <main id="destinations" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
              <div className="text-center mb-16 space-y-4">
                <span className="px-3 py-1 bg-blue-400/20 text-blue-300 border border-blue-400/30 rounded text-[10px] uppercase tracking-widest font-bold">Curated for you</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                  Trending <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400">Escapes</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                  Our hand-picked selection of the most awe-inspiring locations across the globe, waiting to be explored.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {destinations.map((destination, index) => (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination} 
                    index={index} 
                  />
                ))}
              </div>
            </main>
          </>
        )}

        {activeTab === 'stories' && <StoriesView />}
        {activeTab === 'about' && <AboutView />}
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8 border-t border-white/10 bg-black/20 backdrop-blur-md text-center mt-auto">
        <div className="flex justify-center items-center gap-2 mb-4 text-white">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-md shadow-lg flex items-center justify-center">
            <Compass className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">WORLD<span className="text-blue-400">WANDERER</span></span>
        </div>
        <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
          &copy; {new Date().getFullYear()} World Wanderer. All rights reserved.
        </p>
      </footer>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </div>
  );
}
