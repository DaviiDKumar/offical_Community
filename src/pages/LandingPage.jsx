import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ onJoin }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Simple Main Container */}
      <div className="w-full max-w-[400px] bg-white rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 text-center">
        
        {/* Logo */}
        <div className="w-28 h-28 mx-auto mb-6 p-1 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <img 
            src="/l1.jpg" 
            alt="Game Logo" 
            className="w-full h-full rounded-[20px] object-cover" 
          />
        </div>

        {/* Heading */}
       

        {/* Simple Points */}
       
        {/* Main Action Button */}
        <motion.button
          onClick={onJoin}
          whileTap={{ scale: 0.97 }}
          className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-blue-100 uppercase tracking-tight"
        >
          JOIN TELEGRAM
        </motion.button>

        {/* Safe Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 opacity-60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Verified Community
          </span>
        </div>
      </div>

      {/* Required Footer for Meta Safety */}
      <footer className="mt-10 text-center space-y-4">
        <div className="flex justify-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Support</a>
        </div>
        <p className="text-[8px] text-slate-300 uppercase leading-relaxed max-w-[250px] mx-auto tracking-tighter">
          This site is not a part of the Meta website or Meta Platforms, Inc. Not endorsed by Meta in any way.
        </p>
      </footer>

    </div>
  );
};

export default LandingPage;