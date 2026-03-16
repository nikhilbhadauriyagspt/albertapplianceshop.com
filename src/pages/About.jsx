import { ShieldCheck, Clock, Award, Users, CheckCircle2, ArrowRight, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-0 bg-white min-h-screen">
      
      {/* 1. Modern Hero Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
                <Sparkles size={12} /> Who We Are
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
                Dedicated to Keeping Your <br />
                <span className="text-blue-600 italic">Home Running Smoothly.</span>
              </h1>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                At ALBERT APPLIANCE SHOP, we understand that a broken appliance is more than a nuisance—it’s a disruption to your daily life. Our goal is to provide fast, honest, and high-quality repair solutions that you can trust.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95 flex items-center justify-center gap-3">
                  Contact Us Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-gray-50 group">
                <img loading="lazy" src="/about.jpg" alt="Our Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Simple Why Choose Us - Bento Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">Reliable Service, Every Time.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock size={32} />}
              title="Fast Response"
              desc="We know your time is valuable. Our experts arrive within 60 minutes to fix your appliance issues on the spot."
            />
            <FeatureCard 
              icon={<ShieldCheck size={32} />}
              title="Genuine Parts"
              desc="Quality is our priority. We only use original manufacturer-approved spare parts for long-lasting durability."
            />
            <FeatureCard 
              icon={<Award size={32} />}
              title="Expert Care"
              desc="Our team consists of highly skilled specialists with years of experience in repairing all major appliance brands."
            />
          </div>
        </div>
      </section>

      {/* 3. Our Values - Minimalist Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-[40px] overflow-hidden h-64 shadow-xl"><img src="/about-child1.jpg" className="w-full h-full object-cover" alt="Service" /></div>
                <div className="bg-blue-600 rounded-[40px] p-8 text-white h-48 flex flex-col justify-end">
                  <p className="text-3xl font-black leading-none mb-2">100%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Guaranteed Quality</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gray-900 rounded-[40px] p-8 text-white h-48 flex flex-col justify-end">
                  <p className="text-3xl font-black leading-none mb-2">High</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Standards of Service</p>
                </div>
                <div className="rounded-[40px] overflow-hidden h-64 shadow-xl"><img src="/about-child2.jpg" className="w-full h-full object-cover" alt="Service" /></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">Our Mission is <br /><span className="text-blue-600">Simplicity.</span></h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                We believe appliance repair should be stress-free. From the moment you call us to the final testing of your repaired equipment, we ensure a smooth, transparent, and professional experience.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "No Hidden Charges - Honest Upfront Pricing",
                  "Verified Specialists - Background Checked for Safety",
                  "90-Day Warranty - Peace of Mind Guaranteed",
                  "Modern Systems - Precise & Accurate Diagnosis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 justify-center lg:justify-start">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Simple Contact CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Need a Reliable Repair Today?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 font-medium">Don't let a faulty appliance ruin your day. Our experts are just a call away.</p>
          <div className="flex justify-center">
            <Link to="/contact" className="px-16 py-6 bg-blue-600 text-white rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
              Book a Service
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
    <div className="w-16 h-16 rounded-[24px] bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default About;
