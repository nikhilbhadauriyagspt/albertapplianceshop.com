import ServiceLayout from '../../components/ServiceLayout';
import { Coffee } from 'lucide-react';

const CoffeeMakerPage = () => (
  <ServiceLayout 
    title="Coffee Maker"
    desc="Heater & pump service"
    longDesc="Don't miss your morning brew. We repair heating elements, high-pressure pumps, and grinding mechanisms for espresso machines and drip coffee makers."
    icon={<Coffee size={24} />}
    image="/coffee.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">The Perfect Brew, Restored</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            Your coffee maker is a precision instrument where temperature, pressure, and timing must align perfectly. Whether you have a high-end espresso machine or a classic drip brewer, our specialized experts understand the intricate plumbing and electronics required for the perfect cup.
          </p>
        </section>

        <section className="bg-stone-100 p-10 rounded-[40px] border border-stone-200">
          <h3 className="text-2xl font-black text-stone-800 mb-6 uppercase tracking-tight">Our Precision Services:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-900 flex-shrink-0 font-black">☕</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Pressure Pump Repair</h4>
                <p className="text-gray-500 text-sm font-bold">Essential for espresso machines to achieve the correct bar pressure for rich crema.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-900 flex-shrink-0 font-black">🔥</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Thermoblock Fix</h4>
                <p className="text-gray-500 text-sm font-bold">Repairing heating elements to ensure water reaches the optimal brewing temperature.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-900 flex-shrink-0 font-black">⚙️</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Grinder Calibration</h4>
                <p className="text-gray-500 text-sm font-bold">Sharpening and aligning burrs for consistent grind size and flavor extraction.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-900 flex-shrink-0 font-black">🧼</div>
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Deep Descaling</h4>
                <p className="text-gray-500 text-sm font-bold">Professional removal of mineral buildup that causes clogs and off-flavors.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Why Professional Service Matters</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            Coffee machines involve both high pressure and water, which can be a dangerous combination for DIY repairs. We use food-grade lubricants and original seals to ensure your machine remains safe and your coffee stays delicious.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             {["Espresso", "Drip", "Pod-based", "French Press"].map((type, idx) => (
               <div key={idx} className="p-4 rounded-2xl border border-gray-100 text-center font-black text-[10px] text-gray-400 uppercase tracking-widest">{type} Expert</div>
             ))}
          </div>
        </section>
      </div>
    }
  />
);

export default CoffeeMakerPage;

