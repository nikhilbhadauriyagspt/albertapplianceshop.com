import ServiceLayout from '../../components/ServiceLayout';
import { Waves } from 'lucide-react';

const DishwasherPage = () => (
  <ServiceLayout 
    title="Dishwasher"
    desc="Pump & leakage repair"
    longDesc="Restore the sparkle to your dishes. Our experts specialize in fixing pump drainage issues, heating element failures, and complex electronic board repairs."
    icon={<Waves size={24} />}
    image="/dish.png"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Seamless Kitchen Cleanup</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            A dishwasher is a time-saving marvel, but when it starts leaving spots or fails to drain, it becomes a burden. Our repair services cover everything from mechanical arm blockages to sophisticated sensor malfunctions.
          </p>
        </section>

        <section className="bg-blue-900 rounded-[40px] p-10 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px]" />
          <h3 className="text-2xl font-black mb-8 uppercase tracking-tight relative z-10">Common Failure Points</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-3">
              <div className="text-blue-400 font-black text-xs uppercase tracking-widest">Drainage</div>
              <p className="text-gray-300 text-sm font-medium">Blocked filters or faulty drain pumps often lead to standing water at the bottom of the tub.</p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400 font-black text-xs uppercase tracking-widest">Heating</div>
              <p className="text-gray-300 text-sm font-medium">Faulty heating elements prevent proper drying and sanitization of your dishes.</p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400 font-black text-xs uppercase tracking-widest">Leaking</div>
              <p className="text-gray-300 text-sm font-medium">Damaged door gaskets or loose hose connections can cause water damage to your kitchen floor.</p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-400 font-black text-xs uppercase tracking-widest">Cleaning</div>
              <p className="text-gray-300 text-sm font-medium">Clogged spray arms or low water pressure result in poorly cleaned utensils.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Eco-Friendly Repairs</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            We focus on repairing rather than replacing wherever possible, reducing e-waste and saving you money. We also provide tips on the best detergents and loading techniques to extend the life of your appliance.
          </p>
          <div className="p-8 rounded-[32px] border-2 border-dashed border-gray-200 flex items-center justify-between">
             <div className="font-black text-gray-900 uppercase tracking-tighter text-xl">Authorized <br /><span className="text-blue-600">Service Center</span></div>
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white shadow-sm" />)}
             </div>
          </div>
        </section>
      </div>
    }
  />
);

export default DishwasherPage;

