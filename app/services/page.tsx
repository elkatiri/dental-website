import React from 'react';
import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Activity, 
  Scissors, 
  Microscope, 
  Calendar, 
  Phone, 
  ChevronRight,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Services Dentaires | SmileCare - Implants, Orthodontie et Esthétique",
  description: "Découvrez nos services dentaires experts : implantologie, orthodontie invisible, blanchiment dentaire et soins généraux. Technologie de pointe pour votre santé bucco-dentaire.",
  keywords: ["implant dentaire", "orthodontie invisible", "blanchiment dentaire", "facettes", "soins dentaires", "détartrage"],
  openGraph: {
    title: "Nos Services Dentaires | SmileCare",
    description: "Soins dentaires complets avec technologie moderna",
    type: "website",
  },
};

const Services = () => {
  const mainServices = [
    {
      title: "Soins Généraux",
      desc: "Traitement des caries, extractions et soins conservateurs pour une base saine.",
      icon: Stethoscope,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Prévention",
      desc: "Détartrage complet et bilans périodiques pour prévenir les maladies parodontales.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Esthétique",
      desc: "Blanchiment professionnel et facettes pour retrouver l'éclat de votre sourire.",
      icon: Sparkles,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Orthodontie",
      desc: "Alignement dentaire pour adultes et enfants via bagues ou gouttières invisibles.",
      icon: Smile,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Implantologie",
      desc: "Remplacement de dents manquantes par des implants titane de haute qualité.",
      icon: Activity,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      title: "Chirurgie",
      desc: "Extractions de dents de sagesse et chirurgies buccales spécialisées.",
      icon: Scissors,
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-900 pb-12">
      
      {/* 1. Services Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Nos services <span className="text-blue-600">dentaires</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de soins spécialisés utilisant les technologies les plus avancées pour garantir votre santé bucco-dentaire et votre confort.
          </p>
        </div>
      </section>

      {/* 2. Services Overview Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <button className="flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                    En savoir plus <ChevronRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Detailed Service Sections */}
      <section className="py-24 space-y-32">
        <div className="container mx-auto px-6">
          {/* Section: Implantologie */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertise Avancée</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">Implantologie & Restauration</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Retrouvez la fonction et l&apos;esthétique naturelle de votre dentition. Nos implants sont posés avec une précision millimétrique.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Stabilité durable', 'Esthétique naturelle', 'Biocompatibilité'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative h-96 lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image 
                src="/implantologie.webp" 
                alt="Chirurgie d'implant dentaire à la pointe de la technologie" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          {/* Section: Orthodontie */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative h-96 lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image 
                src="/orthodontist.jpg" 
                alt="Traitement par aligneurs invisibles et orthodontie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Discrétion</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">Orthodontie Invisible</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Alignez vos dents sans les contraintes des bagues métalliques. Nos solutions transparentes s&apos;adaptent à votre vie.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <Smile className="text-indigo-500 shrink-0" />
                  <div>
                    <p className="font-bold">Confort Absolu</p>
                    <p className="text-sm text-slate-500">Gouttières amovibles et presque invisibles.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technologie de pointe</h2>
            <p className="text-slate-400 text-lg">Diagnostics plus sûrs et traitements moins invasifs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/30">
                <Microscope size={28} />
              </div>
              <h4 className="text-xl font-bold">Imagerie 3D</h4>
              <p className="text-slate-400 text-sm">Scanner Cone Beam pour une précision totale.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold">Stérilisation</h4>
              <p className="text-slate-400 text-sm">Traçabilité complète et hygiène hospitalière.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 border border-purple-500/30">
                <RefreshCw size={28} />
              </div>
              <h4 className="text-xl font-bold">Empreinte Numérique</h4>
              <p className="text-slate-400 text-sm">Scan optique rapide sans pâte désagréable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[2.5rem] p-10 lg:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Prêt pour votre diagnostic ?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/appointment" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
              <Calendar size={20} /> Prendre rendez-vous
            </Link>
            <Link href="tel:+212651625941" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold border border-blue-500 hover:bg-blue-800 transition-all">
              <Phone size={20} /> +212 651 625 941
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;