import ServiceLayout from '../../components/ServiceLayout';
import { Flame } from 'lucide-react';

const OvenGasStovePage = () => (
  <ServiceLayout 
    title="Oven & Gas Stove"
    desc="Burner & ignition repair"
    longDesc="Ensure your kitchen stays safe and functional. We specialize in burner cleaning, electric ignition repair, and thermostat calibration for all premium stove brands."
    icon={<Flame size={24} />}
    image="/Ove.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Precision Cooking & Safety</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            A faulty gas stove or oven is not just a cooking inconvenience; it's a significant safety hazard. Our expert specialists provide comprehensive maintenance and repair for built-in ovens, cooking ranges, and standard gas stoves, ensuring optimal performance and complete peace of mind.
          </p>
        </section>

        <section className="bg-orange-50 p-10 rounded-[40px] border border-orange-100">
          <h3 className="text-2xl font-black text-orange-900 mb-8 uppercase tracking-tight">Specialized Care for Your Kitchen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0">
                <Flame size={24} />
              </div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Burner Optimization</h4>
                <p className="text-gray-500 text-sm font-bold">Deep cleaning of clogged burners to restore steady blue flames and fuel efficiency.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0">
                <div className="font-black">⚡</div>
              </div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Ignition Systems</h4>
                <p className="text-gray-500 text-sm font-bold">Repair and replacement of faulty spark plugs and electronic ignition modules.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Oven & Grill Specialist</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-10">
            From baking inconsistent cakes to thermostat failures, we diagnose and fix complex oven issues. We ensure even heat distribution and precise temperature control for perfect results every time.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
             {["Thermostat Fix", "Leak Detection", "Door Seal Replace", "Control Knob Fix", "Blower Motor Fix", "Glass Replace"].map((item, idx) => (
               <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-orange-600" />
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{item}</span>
               </div>
             ))}
          </div>
        </section>
      </div>
    }
  />
);

export default OvenGasStovePage;

