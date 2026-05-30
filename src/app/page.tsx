import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070913] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
      
      <h1 className="text-5xl font-bold mb-4 relative">
        African Vibe <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
          Animation
        </span>
      </h1>
      
      <p className="text-xl text-slate-400 mb-8 max-w-md">
        Authentic Folklore & Digital Storytelling in Motion.
      </p>

      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
        <p className="text-amber-400 font-mono text-sm uppercase tracking-widest mb-2">Production Desk</p>
        <p className="text-lg">africanvibeanimation@gmail.com</p>
      </div>

      <footer className="mt-20 text-slate-500 text-xs tracking-[0.3em] uppercase">
        © 2026 African Vibe Studio
      </footer>
    </div>
  );
}
