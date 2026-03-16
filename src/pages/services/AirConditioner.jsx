import ServiceLayout from '../../components/ServiceLayout';
import { Snowflake } from 'lucide-react';

const AirConditionerPage = () => (
  <ServiceLayout 
    title="Air Conditioner"
    desc="Gas refilling & PCB fix"
    longDesc="Experience superior cooling once again. Our certified HVAC technicians specialize in gas refilling, PCB circuit repairs, and deep chemical cleaning for split and window ACs."
    icon={<Snowflake size={24} />}
    image="/air.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Comprehensive Cooling Care</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            When the summer heat strikes, a malfunctioning AC is the last thing you want. Our specialized experts are equipped with the latest diagnostic tools to identify and resolve issues quickly. We don't just fix the immediate problem; we ensure your unit is operating at peak efficiency to save you money on energy bills.
          </p>
        </section>

        <section className="bg-blue-50/50 p-10 rounded-[40px] border border-blue-100/50">
          <h3 className="text-2xl font-black text-blue-600 mb-6 uppercase tracking-tight">Our AC Services Include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Gas Charging</h4>
                <p className="text-gray-500 text-sm font-bold">Precision refilling of R32, R410, and R22 refrigerants.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">PCB Repair</h4>
                <p className="text-gray-500 text-sm font-bold">Advanced circuit board troubleshooting and component replacement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Jet Service</h4>
                <p className="text-gray-500 text-sm font-bold">High-pressure water cleaning for indoor and outdoor units.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
              <div>
                <h4 className="font-black text-gray-900 uppercase text-sm mb-1">Installation</h4>
                <p className="text-gray-500 text-sm font-bold">Standard and customized installation for split and window ACs.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Why Choose Professional AC Repair?</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-6">
            Modern air conditioners are complex machines involving high-pressure refrigerants and sensitive electronics. DIY repairs can often lead to more damage or even safety hazards. Our technicians are certified to handle these complexities, ensuring:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Extended Equipment Life", "Improved Air Quality", "Optimized Power Consumption", "Quiet Operation"].map((point, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-900 font-black text-xs uppercase tracking-wider">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
                {point}
              </li>
            ))}
          </ul>
        </section>
      </div>
    }
  />
);

export default AirConditionerPage;

