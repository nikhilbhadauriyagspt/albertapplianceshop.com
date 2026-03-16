import { ShieldCheck, BadgeDollarSign, CalendarDays, ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOrganization = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about-us">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Modern Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 aspect-square rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-gray-50/50">
              <img 
                loading="lazy" 
                src="/about.jpg" 
                alt="Professional Repair Service" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
            </div>

            
            {/* Background Decorative Element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-50/50 rounded-full -z-10" />
          </div>

          {/* Right Side: Clean Typography & Features */}
          <div className="w-full lg:w-1/2 px-20 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
                <Award size={12} />
                Our Organization
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1]">
                Providing Professional <br />
                <span className="text-blue-600">Appliance Solutions.</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                We are dedicated to restoring your peace of mind by ensuring your home essentials work perfectly. Our mission is built on trust, speed, and service precision.
              </p>
            </div>

            {/* Feature List (Direct & Simple) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4">
              {[
                { icon: <ShieldCheck size={18} />, text: "Certified Experts" },
                { icon: <Zap size={18} />, text: "Same Day Service" },
                { icon: <BadgeDollarSign size={18} />, text: "Transparent Pricing" },
                { icon: <CheckCircle2 size={18} />, text: "Genuine Spare Parts" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="text-blue-600 bg-blue-50 p-1.5 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-800 tracking-tight">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutOrganization;
