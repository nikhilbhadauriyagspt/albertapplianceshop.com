import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { servicesData } from '../servicesData';
import BookingModal from './BookingModal';

const ServiceSection = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '' });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="services">
      <div className="px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[10px] font-black tracking-widest text-blue-600 uppercase mb-4">
              <Sparkles size={12} /> Our Offerings
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              Service <span className="text-blue-600">Catalog.</span><br />
              <span className="text-gray-400">Expert Repair Solutions.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm md:text-right">
            We provide specialized care for all your premium home essentials, ensuring they run at peak efficiency with genuine components.
          </p>
        </div>

        {/* Full Width Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] flex flex-col h-[480px]"
            >
              {/* Image Container */}
              <div className="h-2/3 overflow-hidden relative">
                <img loading="lazy" 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-white/50 group-hover:rotate-12 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    {service.desc}
                  </p>
                </div>
                
                <button 
                  onClick={() => setModalState({ isOpen: true, title: service.title })}
                  className="mt-auto inline-flex items-center justify-between w-full p-1 pl-6 bg-gray-50 rounded-2xl group/btn hover:bg-blue-600 transition-all duration-300"
                >
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest group-hover/btn:text-white transition-colors">
                    Book Service
                  </span>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover/btn:bg-blue-500 group-hover/btn:text-white transition-all">
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ isOpen: false, title: '' })} 
        serviceTitle={modalState.title} 
      />
    </section>
  );
};

export default ServiceSection;
