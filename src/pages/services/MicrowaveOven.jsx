import ServiceLayout from '../../components/ServiceLayout';
import { Microwave } from 'lucide-react';

const MicrowaveOvenPage = () => (
  <ServiceLayout 
    title="Microwave Oven"
    desc="Magnetron & panel fix"
    longDesc="Specialized repair for magnetron issues, touch panel failures, and turntable motor fixes. We restore your microwave's heating power safely and quickly."
    icon={<Microwave size={24} />}
    image="/micro.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Safe & Efficient Heating</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            Microwave ovens are highly convenient but require specialized knowledge to repair safely due to high-voltage components. Whether it's a Solo, Grill, or Convection microwave, our certified experts handle all repairs with extreme precision and safety testing.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[40px] bg-amber-50 border border-amber-100">
             <h3 className="text-xl font-black text-amber-900 mb-4 uppercase tracking-tight">The Magnetron: Heart of the Oven</h3>
             <p className="text-amber-800/80 text-sm font-bold leading-relaxed">
               The magnetron is responsible for generating the microwaves that cook your food. If your oven is running but not heating, it's likely a magnetron failure. We provide genuine replacements with a safety guarantee.
             </p>
          </div>
          <div className="p-8 rounded-[40px] bg-blue-50 border border-blue-100">
             <h3 className="text-xl font-black text-blue-900 mb-4 uppercase tracking-tight">Touch Panel & Logic Board</h3>
             <p className="text-blue-800/80 text-sm font-bold leading-relaxed">
               Unresponsive buttons or a blank display often point to a faulty logic board or membrane switch. We specialize in repairing these delicate electronic components.
             </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Our Safety Protocol</h3>
          <div className="space-y-4">
             {[
               { title: "Radiation Leak Test", desc: "We use professional meters to ensure no harmful radiation is escaping the unit after repair." },
               { title: "High-Voltage Discharge", desc: "Our experts safely discharge the high-voltage capacitor before performing any work." },
               { title: "Door Interlock Check", desc: "Crucial for preventing the oven from running while the door is open." }
             ].map((item, idx) => (
               <div key={idx} className="flex gap-6 items-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center font-black text-blue-600">{idx + 1}</div>
                  <div>
                    <h4 className="font-black text-gray-900 uppercase text-xs mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-bold">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </section>
      </div>
    }
  />
);

export default MicrowaveOvenPage;

