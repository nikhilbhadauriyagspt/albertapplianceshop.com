import ServiceLayout from '../../components/ServiceLayout';
import { WashingMachine } from 'lucide-react';

const WashingMachinePage = () => (
  <ServiceLayout 
    title="Washing Machine"
    desc="Drum & motor repair"
    longDesc="Our specialists handle everything from front-load to top-load machines. Whether it's a motor failure, drum noise, or water leakage, we restore your machine to factory performance."
    icon={<WashingMachine size={24} />}
    image="/washing.png"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Expert Laundry Solutions</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            A broken washing machine can disrupt your entire household routine. From minor leaks to major motor failures, our team provides comprehensive repair services for all types of washing machines, including semi-automatic, fully-automatic top-load, and front-load models.
          </p>
        </section>

        <section className="bg-gray-900 p-10 rounded-[40px] text-white">
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">What We Fix:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-blue-500 font-black uppercase text-sm">Mechanical Issues</h4>
              <ul className="space-y-2 text-gray-400 font-bold text-sm">
                <li>• Drum not spinning or rotating</li>
                <li>• Excessive vibration or noise</li>
                <li>• Door latch or seal replacement</li>
                <li>• Belt and pulley repairs</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-blue-500 font-black uppercase text-sm">Electrical & Water</h4>
              <ul className="space-y-2 text-gray-400 font-bold text-sm">
                <li>• Control board (PCB) troubleshooting</li>
                <li>• Water inlet valve replacement</li>
                <li>• Drainage pump clearing & fix</li>
                <li>• Heating element replacement</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Our Promise of Quality</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            We understand the value of your appliance. That's why we only use genuine spare parts and provide a transparent pricing model. Our experts undergo rigorous training to stay updated with the latest systems from brands like Samsung, LG, Whirlpool, and Bosch.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Top Load", val: "Expertise" },
              { label: "Front Load", val: "Specials" },
              { label: "Original", val: "Spare Parts" },
              { label: "Same Day", val: "Service" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-blue-600 font-black text-xs uppercase mb-1">{item.label}</div>
                <div className="text-gray-900 font-black text-[10px] uppercase tracking-widest">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default WashingMachinePage;

