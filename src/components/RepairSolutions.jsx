import { 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { id: "washing-machine", title: "Washing Machine", desc: "Drum & motor repair", icon: <WashingMachine size={24} />, image: "/washing.png" },
  { id: "refrigerator", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={24} />, image: "/refrigerator.png" },
  { id: "dishwasher", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={24} />, image: "/dish.png" },
  { id: "television", title: "Television", desc: "Display & audio fix", icon: <Monitor size={24} />, image: "/tv.jpg" },
  { id: "coffee-maker", title: "Coffee Maker", desc: "Heater & pump service", icon: <Coffee size={24} />, image: "/coffee.jpg" },
  { id: "air-conditioner", title: "Air Conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={24} />, image: "/air.jpg" },
  { id: "microwave-oven", title: "Microwave Oven", desc: "Magnetron & panel fix", icon: <Microwave size={24} />, image: "/micro.jpg" },
  { id: "oven-stove", title: "Oven & Gas Stove", desc: "Burner & ignition repair", icon: <Flame size={24} />, image: "/Ove.jpg" },
  { id: "water-purifier", title: "Water Purifier", desc: "RO filter replacement", icon: <Droplets size={24} />, image: "/water.jpg" },
  { id: "clothes-dryer", title: "Clothes Dryer", desc: "Heating & belt repair", icon: <Wind size={24} />, image: "/clothes.jpg" },
  { id: "kitchen-chimney", title: "Kitchen Chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={24} />, image: "/Kitchen.jpg" },
  { id: "other-appliances", title: "Other Appliances", desc: "Mixers, irons & more", icon: <Cpu size={24} />, image: "/others.jpg" }
];

const RepairSolutions = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="repair-solutions">
      <div className="px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-widest text-blue-600 uppercase mb-4">
              <Sparkles size={12} /> Service Catalog
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              Expert Repair <br />
              <span className="text-blue-600 italic">Solutions.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm md:text-right leading-relaxed">
            Professional maintenance for all your household appliances using genuine parts and expert ideas.
          </p>
        </div>

        {/* Full Width Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] flex flex-col h-[480px] hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="h-2/3 overflow-hidden relative">
                <img loading="lazy" 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-white/50 group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative bg-white m-2 rounded-[32px] shadow-sm">
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    {item.desc}
                  </p>
                </div>
                
                <Link 
                  to={`/service/${item.id}`}
                  className="mt-auto inline-flex items-center justify-between w-full p-1 pl-6 bg-gray-50 rounded-2xl group/btn hover:bg-blue-600 transition-all duration-300"
                >
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest group-hover/btn:text-white transition-colors">
                    View Details
                  </span>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover/btn:bg-blue-500 group-hover/btn:text-white transition-all">
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairSolutions;
