import ServiceLayout from '../../components/ServiceLayout';
import { Droplets } from 'lucide-react';

const WaterPurifierPage = () => (
  <ServiceLayout 
    title="Water Purifier"
    desc="RO filter replacement"
    longDesc="Ensure your family's health with perfectly purified water. We provide complete RO filter replacements, membrane cleaning, and motor pump repairs for all purifier brands."
    icon={<Droplets size={24} />}
    image="/water.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Pure Water, Healthy Life</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            A water purifier is essential for removing harmful contaminants, bacteria, and excess minerals from your drinking water. Regular maintenance is crucial to ensure the filters and membranes are working correctly. Our experts specialize in RO, UV, and UF systems.
          </p>
        </section>

        <section className="bg-emerald-50 p-10 rounded-[40px] border border-emerald-100">
          <h3 className="text-2xl font-black text-emerald-700 mb-6 uppercase tracking-tight">Essential Maintenance Checklist:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0 font-black">01</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Pre-Filter Change</h4>
                <p className="text-gray-500 text-sm font-bold">Recommended every 3-6 months to prevent clogging of main filters.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0 font-black">02</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">RO Membrane Service</h4>
                <p className="text-gray-500 text-sm font-bold">Critical for TDS reduction and removing dissolved solids.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0 font-black">03</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">UV Lamp Check</h4>
                <p className="text-gray-500 text-sm font-bold">Ensures 100% elimination of water-borne viruses and bacteria.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0 font-black">04</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Pump Pressure Test</h4>
                <p className="text-gray-500 text-sm font-bold">Verifies the booster pump's performance for optimal water flow.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Understanding TDS (Total Dissolved Solids)</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            The TDS level indicates the concentration of dissolved substances in your water. Our experts use digital TDS meters to calibrate your purifier according to your local water source, ensuring the perfect balance of minerals for taste and health.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
             <div className="flex-1 p-6 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Ideal TDS Range</div>
                <div className="text-2xl font-black text-gray-900">50 - 150 mg/L</div>
             </div>
             <div className="flex-1 p-6 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Service Interval</div>
                <div className="text-2xl font-black text-gray-900">6 Months</div>
             </div>
          </div>
        </section>
      </div>
    }
  />
);

export default WaterPurifierPage;

