import ServiceLayout from '../../components/ServiceLayout';
import { Monitor } from 'lucide-react';

const TelevisionPage = () => (
  <ServiceLayout 
    title="Television"
    desc="Display & audio fix"
    longDesc="From LED panel replacements to complex backlight and motherboard repairs, we handle all major television brands with precision and original components."
    icon={<Monitor size={24} />}
    image="/tv.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Crystal Clear Entertainment</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            Your TV is the center of your home entertainment. Whether it's a cracked screen, a display with no picture, or distorted sound, our specialists have the expertise to bring your television back to life. We specialize in LED, LCD, QLED, and OLED systems across all major brands.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="p-8 rounded-[40px] bg-gray-50 border border-gray-100">
             <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight">Display Specializations</h3>
             <ul className="space-y-4">
               {[
                 "Panel Backlight Replacement",
                 "Vertical/Horizontal Lines Fix",
                 "Color Distortion Correction",
                 "Ghosting Effect Resolution"
               ].map((text, i) => (
                 <li key={i} className="flex gap-4 items-center">
                   <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">{i+1}</div>
                   <span className="text-gray-500 font-bold text-sm">{text}</span>
                 </li>
               ))}
             </ul>
          </section>

          <section className="p-8 rounded-[40px] bg-blue-600 text-white shadow-xl shadow-blue-600/20">
             <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Professional Prowess</h3>
             <p className="text-blue-100 text-sm font-medium leading-relaxed mb-6">
               Modern smart TVs are essentially high-performance computers. Our lab is equipped with infrared BGA rework stations for precise motherboard and processor repairs.
             </p>
             <div className="flex gap-4">
                <div className="px-4 py-2 rounded-xl bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/20">Motherboard</div>
                <div className="px-4 py-2 rounded-xl bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/20">Software</div>
                <div className="px-4 py-2 rounded-xl bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/20">Audio</div>
             </div>
          </section>
        </div>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Why Choose Our TV Service?</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            Handling fragile display panels requires a clean environment and specialized suction tools. We ensure your TV is handled with the utmost care to prevent any further damage during the repair process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Original Panels</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-1">Home</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Pickup/Drop</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-1">Live</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Testing Labs</div>
             </div>
          </div>
        </section>
      </div>
    }
  />
);

export default TelevisionPage;

