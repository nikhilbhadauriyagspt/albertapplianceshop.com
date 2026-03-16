import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';


const slides = [
  {
    tag: "Trusted Repair Experts",
    title: "Fast & Reliable",
    highlight: "Home Appliance",
    suffix: "Repair Services.",
    subtitle: "Quick solutions for your daily essentials. Our certified experts fix your appliances on the same day with genuine spare parts.",
    image: "/hero-washing.jpg",
    color: "from-blue-600 to-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    tag: "Cooling Solutions",
    title: "Professional",
    highlight: "Refrigerator",
    suffix: "Service & Fix.",
    subtitle: "Keep your food fresh and your fridge running efficiently. We handle everything from cooling issues to compressor repairs.",
    image: "/hero-refri.jpg",
    color: "from-blue-600 to-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    tag: "Kitchen Care",
    title: "Expert Care for",
    highlight: "Cooking Range",
    suffix: "& Ovens.",
    subtitle: "Safety first! Get your gas stove, oven, or microwave serviced by experts to ensure peak performance and long-lasting durability.",
    image: "/hero-cook.jpg",
    color: "from-blue-600 to-blue-600",
    shadow: "shadow-blue-500/20"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gray-900">
      {/* Full Screen Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center z-10">
        <div className="max-w-full w-full">
          {/* Content Wrapper */}
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase shadow-lg">
              <SparkleIcon />
              {slides[current].tag}
            </div>

            <div className="relative w-full h-[160px] ">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
                    index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                    {slide.title} <span className={`bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                      {slide.highlight}
                    </span> <br />
                    {slide.suffix}
                  </h1>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed transition-all duration-700">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
              >
                Schedule Repair <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Floating Indicators - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={`group relative flex items-center gap-4 transition-all duration-300`}
          >
            <span className={`text-[10px] font-black transition-all duration-300 ${index === current ? 'text-white opacity-100' : 'text-white/0 opacity-0 group-hover:opacity-100 group-hover:text-white/50'}`}>
              0{index + 1}
            </span>
            <div className={`h-12 w-1 rounded-full transition-all duration-500 ${index === current ? 'bg-blue-500' : 'bg-white/20 group-hover:bg-white/40'}`} />
          </button>
        ))}
      </div>

      {/* Manual Controls - Bottom Left */}
      <div className="absolute bottom-10 left-4 sm:left-8 lg:left-12 flex items-center gap-4 z-20">
        <button onClick={prevSlide} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Aesthetic Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
          key={current}
          className="h-full bg-blue-500 animate-[progress_5s_linear_infinite]" 
        />
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={slides[current].highlight} 
      />
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};


const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M12 3v3m0 12v3M5.3 5.3l2.1 2.1m9.2 9.2l2.1 2.1M3 12h3m12 0h3M5.3 18.7l2.1-2.1m9.2-9.2l2.1-2.1" />
  </svg>
);

export default Hero;
