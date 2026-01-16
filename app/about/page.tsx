import React from 'react';
import { ShieldCheck, Award, Stethoscope, Heart, Calendar, Phone, CheckCircle2, Microscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- AJOUT DES METADATA POUR LE SEO ---
export const metadata = {
  title: 'À propos de notre Cabinet Dentaire | Expertise et Innovation',
  description: 'Découvrez l’équipe d’experts du Dr. Marc Lefebvre. Plus de 15 ans d’expérience en chirurgie dentaire, implantologie et soins modernes dans un environnement serein.',
  keywords: ['cabinet dentaire', 'équipe dentaire', 'Dr Marc Lefebvre', 'chirurgien-dentiste', 'expertise dentaire'],
};

const About = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden  py-20 lg:py-32">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100/50 rounded-full">
              L&apos;excellence du sourire
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              À propos du <span className="text-blue-600">cabinet</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Allier expertise clinique de pointe et approche humaine pour vous offrir une expérience dentaire sereine, moderne et personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Clinic Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform" />
                <div className="relative h-96 lg:h-125 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/about-clinic.jpg" 
                    alt="Vue de la salle de soin moderne et équipée de notre clinique dentaire" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Une mission dédiée à votre santé bucco-dentaire</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Depuis plus de 15 ans, notre cabinet s&apos;engage à transformer la perception des soins dentaires. Fondé sur des valeurs de transparence et d&apos;innovation, nous plaçons le confort du patient au cœur de chaque traitement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Notre structure intègre les technologies de diagnostic les plus avancées pour garantir des soins précis, allant de la dentisterie préventive à l&apos;implantologie complexe. Nous croyons qu&apos;un beau sourire commence par une relation de confiance durable.
              </p>
              <ul className="space-y-4 pt-4">
                {['Approche multidisciplinaire', 'Technologie numérique 3D', 'Protocoles d\'hygiène stricts'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-emerald-500 h-6 w-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre équipe d&apos;experts</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Des praticiens passionnés formés aux dernières techniques internationales pour assurer la pérennité de vos soins.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { 
              name: "Dr. Marc Lefebvre", 
              role: "Chirurgien-Dentiste", 
              bio: "Spécialiste en implantologie et esthétique dentaire, diplômé de la Faculté de Paris.",
              image: "/doc1.jpg"
            },
            { 
              name: "Dr. Sarah Benali", 
              role: "Orthodontiste", 
              bio: "Experte en aligneurs invisibles et orthodontie pédiatrique avec 10 ans d'expérience.",
              image: "/doc2.jpg"
            },
            { 
              name: "Sophie Durant", 
              role: "Assistante Dentaire", 
              bio: "Responsable des protocoles de stérilisation et de l'accompagnement patient.",
              image: "/doc3.jpg"
            }
          ].map((member, i) => (
            <div key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
              <div className="h-72 relative overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10" />
                <Image
                  src={member.image}
                  alt={`Portrait de ${member.name}, ${member.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Values & Commitments */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Hygiène", desc: "Protocoles de stérilisation hospitaliers et contrôles rigoureux.", color: "bg-blue-50 text-blue-600" },
              { icon: Microscope, title: "Technologie", desc: "Équipements de pointe : Scanner 3D, Laser et empreinte numérique.", color: "bg-emerald-50 text-emerald-600" },
              { icon: Award, title: "Expertise", desc: "Formation continue de nos praticiens aux nouvelles techniques.", color: "bg-purple-50 text-purple-600" },
              { icon: Heart, title: "Confiance", desc: "Transparence totale sur les tarifs et les plans de traitement.", color: "bg-rose-50 text-rose-600" }
            ].map((value, i) => {
              const IconComponent = value.icon;
              return (
                <div key={i} className="p-8 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Experience Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Années d'expérience", value: "15+" },
              { label: "Patients satisfaits", value: "8k+" },
              { label: "Certifications", value: "12" },
              { label: "Experts", value: "05" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-extrabold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke="white" fill="none" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Prêt à retrouver votre plus beau sourire ?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Prenez rendez-vous en ligne en quelques clics ou contactez notre secrétariat pour toute question.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  <Calendar size={20} />
                  Prendre rendez-vous
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                  <Phone size={20} />
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;