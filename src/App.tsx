import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from './data';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-[#050505] text-[#E0E0E0] overflow-hidden flex flex-col font-sans select-none">
      {/* Top Header / Progress Indicator */}
      <header className="absolute top-0 w-full z-10 flex items-end justify-between p-8 border-b border-white/10">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Strategic Portfolio</h2>
          <h1 className="text-xl font-light tracking-tight font-serif italic text-[#E0E0E0]">The Alfin Atria Vision</h1>
        </div>
        <div className="text-right flex flex-col items-end gap-2">
          <div className="flex gap-1.5 mb-1">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-[#C5A059]' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
          <div className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-mono">v1.0.4_BETA</div>
        </div>
      </header>

      {/* Main Slide Content */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-24 overflow-hidden pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-6xl mx-auto"
          >
            <SlideRenderer slide={slide} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-[#0F0F0F] border border-white/10 hover:bg-[#161616] text-[#E0E0E0] disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-[#C5A059] border border-[#C5A059] hover:bg-[#8A6D3B] text-black disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function SlideRenderer({ slide }: { slide: any }) {
  const Icon = slide.icon;

  switch (slide.layout) {
    case 'center':
      return (
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center bg-[#0F0F0F] border border-white/5 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-4xl opacity-5 font-serif">01</div>
          {Icon && (
            <div className="w-16 h-16 bg-[#161616] border border-white/10 text-[#C5A059] flex items-center justify-center mb-8 mx-auto">
              <Icon className="w-8 h-8" />
            </div>
          )}
          {slide.content.tagline && (
            <span className="px-2 py-1 bg-[#C5A059] text-black text-[9px] font-bold uppercase tracking-widest mb-6 inline-block">
              {slide.content.tagline}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-6 text-[#E0E0E0] leading-tight">
            {slide.title || slide.content.title}
          </h1>
          {slide.content.subtitle && (
            <p className="text-sm opacity-60 tracking-wide mb-12">
              {slide.content.subtitle}
            </p>
          )}
          
          {(slide.content.author || slide.content.actionText) && (
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center w-full">
              {slide.content.author && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C5A059] to-[#8A6D3B] rounded-full flex items-center justify-center text-black font-serif italic text-xl">
                    {slide.content.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold tracking-wider text-[#E0E0E0]">{slide.content.author}</p>
                    <p className="text-[10px] uppercase opacity-50">{slide.content.role}</p>
                  </div>
                </div>
              )}
              {slide.content.actionText && (
                <div className="flex flex-col items-center gap-6 mt-4 w-full">
                  <p className="text-[#E0E0E0]/70 text-sm italic font-serif">{slide.content.text}</p>
                  {slide.content.link ? (
                    <a href={slide.content.link} target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
                      <button className="w-full py-3 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-black transition-colors">
                        {slide.content.actionText}
                      </button>
                    </a>
                  ) : (
                    <button className="w-full max-w-md py-3 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-black transition-colors">
                      {slide.content.actionText}
                    </button>
                  )}
                  <p className="text-[#E0E0E0]/50 font-mono text-[10px] uppercase">{slide.content.contact}</p>
                </div>
              )}
            </div>
          )}
        </div>
      );

    case 'split':
      return (
        <div className="grid md:grid-cols-2 gap-0 items-stretch bg-[#0F0F0F] border border-white/5">
          <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-2">
              <Icon className="w-3 h-3" />
              {slide.title}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif italic font-light mb-6 leading-tight">
              {slide.content.text}
            </h2>
          </div>
          <div className="p-12 bg-[#161616] flex flex-col justify-center space-y-6">
            {slide.content.points.map((point: any, idx: number) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="text-[#C5A059] font-serif italic text-lg shrink-0">
                  {['I.', 'II.', 'III.', 'IV.', 'V.'][idx] || `${idx + 1}.`}
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-[#E0E0E0]">{point.title}</h3>
                  <p className="text-xs text-[#E0E0E0]/60 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'cards':
      return (
        <div className="bg-[#0F0F0F] border border-white/5 p-12 w-full max-w-6xl">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-2 block flex items-center gap-2">
                <Icon className="w-3 h-3" /> {slide.title}
              </span>
              {slide.subtitle && <p className="text-sm italic font-serif text-[#E0E0E0]/70">{slide.subtitle}</p>}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {slide.content.cards.map((card: any, idx: number) => {
              const CardIcon = card.icon;
              return (
                <div key={idx} className="p-6 bg-[#161616] border border-white/5 hover:border-[#C5A059]/50 transition-colors flex flex-col h-full">
                  <div className="text-[#C5A059] mb-6 opacity-80">
                    <CardIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-[#E0E0E0]">{card.title}</h3>
                  <p className="text-xs text-[#E0E0E0]/60 leading-relaxed flex-grow">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      );

    case 'feature':
      return (
        <div className="max-w-5xl mx-auto bg-[#0F0F0F] border border-white/5 p-12">
          <div className="mb-12 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#C5A059] mb-4">
              <Icon className="w-3 h-3" />
              {slide.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic font-light leading-tight">
              {slide.subtitle}
            </h2>
          </div>
          <div className="space-y-4">
            {slide.content.features.map((feature: any, idx: number) => (
              <div key={idx} className="flex items-start gap-6 p-5 bg-[#161616] border border-white/5 hover:border-[#C5A059]/30 transition-colors">
                <div className="text-[#C5A059] font-serif italic text-xl shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-[#E0E0E0]">{feature.title}</h3>
                  <p className="text-xs text-[#E0E0E0]/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'stats':
      return (
        <div className="w-full max-w-5xl mx-auto bg-[#0F0F0F] border border-white/5 p-12">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#C5A059] mb-6">
            <Icon className="w-3 h-3" />
            {slide.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic font-light mb-4">{slide.subtitle}</h2>
          <p className="text-sm text-[#E0E0E0]/60 mb-12 border-l border-[#C5A059] pl-4">{slide.content.text}</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {slide.content.stats.map((stat: any, idx: number) => (
              <div key={idx} className="p-6 bg-[#C5A059] text-black flex flex-col justify-between h-full min-h-[160px]">
                <div>
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-70 mb-2">{stat.label}</div>
                  <div className="text-4xl font-serif">{stat.value}</div>
                </div>
                <div className="text-[10px] uppercase font-bold opacity-70 mt-4 border-t border-black/10 pt-2">{stat.suffix}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'profile':
      return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-0 bg-[#0F0F0F] border border-white/5">
          <div className="w-full md:w-2/5 p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center text-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-6xl opacity-5 font-serif">P</div>
            <div className="w-32 h-32 bg-gradient-to-br from-[#C5A059] to-[#8A6D3B] rounded-full mb-8 flex items-center justify-center font-serif italic text-4xl text-black">
              {slide.content.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-serif italic mb-2">{slide.content.name}</h2>
            <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold">{slide.content.role}</p>
          </div>
          <div className="w-full md:w-3/5 p-12 bg-[#161616]">
            <div className="mb-8">
              <p className="text-2xl font-serif italic font-light leading-tight text-[#E0E0E0]">
                "{slide.content.quote.replace(/"/g, '')}"
              </p>
            </div>
            <p className="text-xs text-[#E0E0E0]/70 mb-8 leading-relaxed">
              {slide.content.bio}
            </p>
            <div className="space-y-4 border-t border-white/10 pt-6">
              {slide.content.highlights.map((highlight: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-[#C5A059]" />
                  <span className="text-xs text-[#E0E0E0]/80 tracking-wide">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'timeline':
      return (
        <div className="max-w-4xl mx-auto w-full bg-[#0F0F0F] border border-white/5 p-12">
           <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#C5A059] mb-10 border-b border-white/10 pb-4">
            <Icon className="w-3 h-3" />
            {slide.title}
          </div>
          
          <div className="space-y-0">
            {slide.content.timeline.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-6 items-start border-l border-white/20 pl-6 pb-8 relative last:pb-0">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-[#C5A059] rotate-45" />
                <div className="w-32 shrink-0 pt-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">{item.phase}</span>
                </div>
                <div>
                  <h3 className="text-sm font-serif italic mb-2 text-[#E0E0E0]">{item.title}</h3>
                  <p className="text-xs text-[#E0E0E0]/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return <div>Unknown slide layout</div>;
  }
}
