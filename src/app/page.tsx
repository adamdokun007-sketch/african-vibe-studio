'use client';

import React, { useState, useEffect } from 'react';

// Modern Icon SVG components defined locally for seamless copy-paste deployment
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.187-.813L9 9l.813 5.187L15 15l-5.187.813zM19.071 4.929l-.707 3.535-3.536.707 3.536.707.707 3.535.707-3.535 3.536-.707-3.536-.707-.707-3.535z" />
  </svg>
);

export default function AfricanVibeStudio() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to handle Apple-style blurred sticky header transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070913] text-white font-sans antialiased selection:bg-purple-600 selection:text-white overflow-x-hidden relative">
      
      {/* GLOBAL BACKGROUND GLOWS (Futuristic Apple Aesthetic) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/10 via-amber-600/5 to-transparent blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[1200px] -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-[2200px] -left-40 w-96 h-96 bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      {/* 1. STICKY BLURRED NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#070913]/70 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-600 via-amber-500 to-emerald-500 p-[1.5px] shadow-lg shadow-purple-500/10">
              <div className="h-full w-full bg-[#070913] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400 text-sm tracking-wider">A</div>
            </div>
            <span className="font-semibold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
              African Vibe <span className="text-purple-400 font-light">Animation</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-slate-400">
            <a href="#animations" className="hover:text-white transition-colors duration-200">Animations</a>
            <a href="#what-we-do" className="hover:text-white transition-colors duration-200">What We Do</a>
            <a href="#characters" className="hover:text-white transition-colors duration-200">Characters</a>
            <a href="#universe" className="hover:text-white transition-colors duration-200">The Universe</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          </div>

          <a href="#contact" className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:border-amber-500/40 text-slate-200">
            Secure Uplink
          </a>
        </div>
      </nav>

      {/* 2. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6 z-10">
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* Animated Futuristic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-purple-300">Aesthetics & Future Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl font-sans">
            Bringing African Stories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-indigo-400">
              to Life Through Animation
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            African Vibe Animation creates powerful African animated stories, comedy, history, folklore, and trending African entertainment through world-class digital storytelling.
          </p>

          {/* Luxury CTA Action Tray */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#animations" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-wide shadow-2xl transition-all duration-300 hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] text-center">
              Watch Animations
            </a>
            <a href="#universe" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 text-center">
              Explore Our Universe
            </a>
            <a href="https://whatsapp.com/channel/0029Vb73zwRGufJ3G24lPA1D" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-4 text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium text-center">
              Join The Community →
            </a>
          </div>
        </div>

        {/* Ambient Bottom Scroll Anchor */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] text-slate-600 tracking-widest uppercase pointer-events-none">
          <span>Scroll to Experience</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>
      </section>

      {/* 3. FEATURED ANIMATIONS (PIXAR/NETFLIX REEL) */}
      <section id="animations" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[11px] font-bold tracking-widest uppercase text-purple-400 mb-2">Cinematic Showreels</h2>
            <p className="text-3xl font-bold tracking-tight text-white">Featured Masterpieces</p>
          </div>
          
          {/* Filter Pill Tabs */}
          <div className="flex items-center gap-1 border border-white/5 bg-slate-950/40 p-1 rounded-xl backdrop-blur-md self-start md:self-auto">
            {['all', 'folklore', 'comedy', 'futuristic'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab ? 'bg-white/10 text-amber-400 shadow-inner' : 'text-slate-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "The Legend of Moremi", desc: "High-fidelity modern visual sets bringing timeless historical empires to global screens.", type: "folklore", glow: "hover:border-emerald-500/30", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn" },
            { title: "Afro-Comedy Nights", desc: "Pure relatable humor frameworks engineered for viral cross-continental digital outreach.", type: "comedy", glow: "hover:border-amber-500/30", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn" },
            { title: "Tales of Anansi", desc: "Deep ancestral mythology reimagined with sleek cyberpunk structures and abstract motion layout.", type: "folklore", glow: "hover:border-purple-500/30", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn" },
            { title: "Afro-Futuristic Chronicles", desc: "Sprawling megacities driven by futuristic African engineering arrays and storytelling.", type: "futuristic", glow: "hover:border-indigo-500/30", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn" },
            { title: "Mythology & Legends", desc: "Unveiling ancient spirits and deep historical folklore records through pristine rendering.", type: "folklore", glow: "hover:border-blue-500/30", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn" },
            { title: "Entertainment & Education", desc: "Balancing critical heritage records with ultra-captivating contemporary storytelling loops.", type: "comedy", glow: "hover:border-pink-500/30", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn" }
          ].filter(item => activeTab === 'all' || item.type === activeTab).map((video, idx) => (
            <a href={video.url} target="_blank" rel="noreferrer" key={idx} className={`group relative rounded-2xl bg-[#0d101f]/60 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${video.glow} block shadow-[0_15px_35px_rgba(0,0,0,0.4)]`}>
              <div className="aspect-video w-full bg-slate-950 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent z-10 opacity-90"></div>
                
                {/* Visual Backdrop Mockup Texture */}
                <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-30 group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-50 transition-all duration-700" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80')` }}></div>
                
                {/* Micro-interactive Glass Play Button */}
                <div className="h-12 w-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center relative z-20 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-xl">
                  <PlayIcon />
                </div>
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="font-bold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">{video.title}</h3>
                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">{video.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  <span>Stream Production</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. WHAT WE DO SECTION (BENTO GRID STYLE) */}
      <section id="what-we-do" className="py-24 bg-slate-950/30 border-y border-white/5 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 mb-2">Core Competencies</h2>
            <p className="text-3xl font-bold tracking-tight">Creative Frameworks</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Animation Storytelling", desc: "Full cinema pipeline blueprints engineered for premium multi-platform broadcast formats." },
              { title: "African Comedy", desc: "High-end relatable humor setups optimized for explosive viral digital scaling." },
              { title: "History & Heritage", desc: "Rigorous research arrays transforming complex factual chronicles into modern cinematic visual scripts." },
              { title: "Trending News", desc: "Agile creative response systems mapping real-time cultural events into animated frameworks." },
              { title: "Folktales & Folklore", desc: "Preserving ancient oral values via pristine digital asset structures and audio-visual layouts." },
              { title: "African Mythology", desc: "Aesthetic conceptualization of cosmic maps, legendary battles, and deep spiritual lore." },
              { title: "Afro-Futurism", desc: "Blending traditional African artistic motifs with advanced high-tech civilization landscapes." },
              { title: "Entertainment & Education", desc: "Merging critical values with deeply addictive visual loops for all age demographics." }
            ].map((card, i) => (
              <div key={i} className="group relative rounded-2xl bg-white/[0.01] border border-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 overflow-hidden">
                <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
                  <SparklesIcon />
                </div>
                <h3 className="mt-5 font-bold text-base tracking-tight text-white">{card.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHARACTER SHOWCASE */}
      <section id="characters" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[11px] font-bold tracking-widest uppercase text-amber-400 mb-2">Character Forge</h2>
          <p className="text-3xl font-bold tracking-tight">Heroes & Cultural Avatars</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Queen Amina", role: "Zazzau Strategic Regent", trait: "Tactical Monarch", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
            { name: "Kwaku Anansi", role: "Cosmic Folk Matrix Agent", trait: "Meta-Trickster", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
            { name: "Zele the Vanguard", role: "Neo-Lagos Kinetic Ranger", trait: "Cyber Shock-Trooper", img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=400&q=80" },
            { name: "The Folklore Elder", role: "Timeless Oral History Link", trait: "Mystic Archive", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=400&q=80" }
          ].map((char, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 mix-blend-lighten opacity-30 group-hover:opacity-60" style={{ backgroundImage: `url('${char.img}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-slate-950/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[9px] font-bold tracking-widest uppercase bg-amber-400 text-black px-2 py-0.5 rounded-sm">{char.trait}</span>
                <h3 className="mt-3 font-bold text-lg tracking-tight text-white">{char.name}</h3>
                <p className="text-[11px] text-slate-400 font-light mt-0.5">{char.role}</p>
                <div className="h-[1px] w-0 bg-gradient-to-r from-amber-400 to-purple-500 mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AFRICAN UNIVERSE MULTIVERSE GRID */}
      <section id="universe" className="py-24 bg-gradient-to-b from-[#070913] via-slate-950 to-[#070913] relative overflow-hidden px-6 z-10">
        <div className="max-w-5xl mx-auto border border-white/5 bg-white/[0.01] backdrop-blur-xl rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-purple-600/5 rounded-full blur-[90px]"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[90px]"></div>

          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">Lore Mapping System</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-3 mb-5 leading-tight text-white">An Expanded Futuristic African Storytelling Universe</h2>
            <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed mb-8">
              Step into an integrated, hyper-advanced universe inspired by rich fantasy landscapes, cybernetic empires, and historic kingdoms. We link spirits, modern folklore, localized comedic avatars, and cosmic legends into a coherent visual multiverse.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-400 text-xs font-medium">
              {["Futuristic Kingdoms", "Advanced Cities", "Deep Mythology", "Spirit Realms", "Legends & Sagas", "Folklore Networks"].map((item, key) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY & SOCIAL HUB */}
      <section className="py-16 border-t border-white/5 text-center px-6 z-10 relative">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">Join The Ecosystem</p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {[
            { name: "YouTube", url: "https://youtube.com/@africananimation-d6p?si=N09_zAtR-njn", color: "hover:bg-red-500/5 hover:border-red-500/30 text-red-400" },
            { name: "TikTok", url: "https://vm.tiktok.com/ZNRkSdesB/", color: "hover:bg-white/5 hover:border-white/30 text-white" },
            { name: "Instagram", url: "https://www.instagram.com/africanvibeanimation.363762?igsh=ZGRkYnJqa204bXA=&utm_source=ig_contact_invite", color: "hover:bg-pink-500/5 hover:border-pink-500/30 text-pink-400" },
            { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61585854161043", color: "hover:bg-blue-600/5 hover:border-blue-600/30 text-blue-400" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${social.color}`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
