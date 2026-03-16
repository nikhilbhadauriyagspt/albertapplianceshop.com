import ServiceLayout from '../../components/ServiceLayout';
import { Wind } from 'lucide-react';

const ClothesDryerPage = () => (
  <ServiceLayout 
    title="Clothes Dryer"
    desc="Heating & belt repair"
    longDesc="Get your laundry dry in minutes. We fix heating element failures, snapped drive belts, and moisture sensor issues for all major vented and condenser dryer models."
    icon={<Wind size={24} />}
    image="/clothes.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Rapid Drying, Guaranteed</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            A dryer that doesn't heat or takes forever to dry a single load is a major energy drain. Our experts specialize in restoring the drying power of your appliance, whether it's a gas or electric model, vented or heat-pump based.
          </p>
        </section>

        <section className="bg-blue-600 rounded-[40px] p-10 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mb-24 -mr-24 blur-3xl" />
          <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Professional Solutions</h3>
          <div className="space-y-6 relative z-10">
             <div className="p-6 rounded-3xl bg-white/10 border border-white/20">
                <h4 className="font-black uppercase text-xs mb-2 text-blue-200">Heating Elements</h4>
                <p className="text-sm font-medium text-blue-50">Replacement of burnt-out coils or faulty gas igniters for consistent heat.</p>
             </div>
             <div className="p-6 rounded-3xl bg-white/10 border border-white/20">
                <h4 className="font-black uppercase text-xs mb-2 text-blue-200">Drum Drive Systems</h4>
                <p className="text-sm font-medium text-blue-50">Fixing snapped belts, worn rollers, and seized motors that cause noise or prevent rotation.</p>
             </div>
             <div className="p-6 rounded-3xl bg-white/10 border border-white/20">
                <h4 className="font-black uppercase text-xs mb-2 text-blue-200">Ventilation & Airflow</h4>
                <p className="text-sm font-medium text-blue-50">Deep cleaning of internal ducts to prevent overheating and fire hazards.</p>
             </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Smart Sensor Systems</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            Modern dryers use moisture sensors to prevent over-drying and protect your fabrics. We calibrate and repair these sensors to ensure your clothes come out perfectly dry every time while minimizing energy usage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">🌡️</div>
                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Thermostat Testing</span>
             </div>
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">🛡️</div>
                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Fuse Replacement</span>
             </div>
          </div>
        </section>
      </div>
    }
  />
);

export default ClothesDryerPage;

