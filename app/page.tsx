import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmileCare - Accueil | Cabinet Dentaire à Agadir",
  description: "SmileCare, votre cabinet dentaire de confiance à Agadir. Soins dentaires professionnels, implants, orthodontie et esthétique. Prenez rendez-vous dès aujourd'hui.",
  keywords: ["dentiste Agadir", "cabinet dentaire", "soins dentaires", "implants", "orthodontie", "urgence dentaire"],
  openGraph: {
    title: "SmileCare - Cabinet Dentaire à Agadir",
    description: "Soins dentaires professionnels avec une approche moderne et humaine",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Column */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 px-4 py-2 ring-1 ring-blue-600/20">
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                <span className="text-sm font-bold text-blue-900">Cabinet dentaire moderne</span>
              </div>

              <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Votre sourire,{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    notre passion
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C60 2 140 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                Des soins dentaires de qualité supérieure dans un environnement confortable et moderne. 
                <span className="font-semibold text-slate-700"> Votre santé bucco-dentaire est notre priorité.</span>
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <span>Prendre rendez-vous</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>

                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-700 ring-2 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-slate-300"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nos services</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">Certifié</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">
                    <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">Urgences</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">Flexible</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-4xl bg-gradient-to-br from-slate-100 to-slate-50 p-1 shadow-2xl">
                <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-[1.75rem] bg-slate-200">
                  <Image
                    src="/hero.jpg"
                    alt="Cabinet dentaire moderne"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-4 top-12 hidden rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-900/5 lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900">2,500+</p>
                    <p className="text-xs font-semibold text-slate-500">Patients</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-12 hidden rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-900/5 lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900">15 ans</p>
                    <p className="text-xs font-semibold text-slate-500">Expérience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Pourquoi <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">nous choisir</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Un cabinet moderne qui allie technologie de pointe et approche humaine
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Équipements modernes", desc: "Technologie de dernière génération", gradient: "from-blue-500 to-blue-600" },
              { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", title: "Équipe expérimentée", desc: "Professionnels à votre écoute", gradient: "from-cyan-500 to-cyan-600" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Horaires flexibles", desc: "Ouvert du lundi au samedi", gradient: "from-blue-500 to-blue-600" },
              { icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Sans douleur", desc: "Interventions en douceur", gradient: "from-cyan-500 to-cyan-600" },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${item.gradient} p-4 shadow-lg`}>
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Nos <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Une gamme complète de soins dentaires pour toute la famille
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Consultation générale", desc: "Examen complet et détartrage professionnel", color: "blue" },
              { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "Blanchiment dentaire", desc: "Sourire éclatant garanti", color: "cyan" },
              { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", title: "Orthodontie", desc: "Appareils invisibles disponibles", color: "blue" },
              { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Implants dentaires", desc: "Solutions durables et confortables", color: "cyan" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Soins conservateurs", desc: "Préservez vos dents naturelles", color: "blue" },
              { icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Urgences dentaires", desc: "Prise en charge rapide 24/7", color: "cyan" },
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 p-4 shadow-lg`}>
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-4 text-slate-600">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700">
                  En savoir plus
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-700 shadow-lg ring-1 ring-slate-900/5 transition-all hover:bg-slate-50">
              Voir tous nos services
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="group relative overflow-hidden rounded-4xl bg-gradient-to-br from-slate-100 to-slate-50 p-1 shadow-2xl">
                <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-[1.75rem] bg-slate-200">
                  <Image
                    src="/about-clinic.jpg"
                    alt="Cabinet"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 px-4 py-2 ring-1 ring-blue-600/20">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-sm font-bold text-blue-900">À propos</span>
              </div>

              <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Un cabinet à votre écoute depuis <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">15 ans</span>
              </h2>

              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Fondé en 2009, notre cabinet dentaire s&apos;est donné pour mission de fournir des soins dentaires 
                  de haute qualité dans un environnement chaleureux et moderne.
                </p>
                <p>
                  Notre équipe utilise les technologies les plus avancées pour garantir votre confort et votre satisfaction.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 ring-1 ring-blue-100">
                  <p className="text-3xl font-black text-blue-600">15+</p>
                  <p className="text-sm font-bold text-slate-700">Années d&apos;expérience</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-6 ring-1 ring-cyan-100">
                  <p className="text-3xl font-black text-cyan-600">2,500+</p>
                  <p className="text-sm font-bold text-slate-700">Patients satisfaits</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02]">
                  En savoir plus
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ce que disent <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">nos patients</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              La satisfaction de nos patients est notre plus grande fierté
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sophie Martin", initials: "SM", text: "Excellente expérience ! L'équipe est très professionnelle et à l'écoute. Je recommande vivement.", gradient: "from-blue-500 to-blue-600" },
              { name: "Jean Dubois", initials: "JD", text: "Mon fils n'a plus peur du dentiste grâce à leur approche bienveillante et rassurante.", gradient: "from-cyan-500 to-cyan-600" },
              { name: "Marie Laurent", initials: "ML", text: "Service impeccable ! Mon sourire n'a jamais été aussi beau. Merci à toute l'équipe !", gradient: "from-blue-500 to-blue-600" },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-slate-700">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.gradient} font-bold text-white`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">Patient vérifié</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-12 shadow-2xl lg:p-20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative text-center">
              <h2 className="mb-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Prêt à prendre soin de votre sourire ?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                Premier rendez-vous disponible sous 48h. Consultation personnalisée avec nos experts.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-600 shadow-xl transition-all hover:scale-105">
                  Prendre rendez-vous
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-8 py-4 font-bold text-white ring-2 ring-white/20 backdrop-blur-sm transition-all hover:bg-white/20">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Contact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Venez nous rendre visite
            </h2>
            <p className="text-lg text-slate-600">
              Notre cabinet est situé à Agadir, facilement accessible avec parking gratuit disponible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Address */}
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Adresse</h3>
                    <p className="text-slate-600 text-sm">Citée El Houda<br />Agadir, Morocco</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Téléphone</h3>
                    <a href="tel:+212651625941" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                      +212 651 625 941
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:helloahmed2002@gmail.com" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm break-all">
                      helloahmed2002@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-cyan-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-3">Horaires</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Lun - Ven</span>
                        <span className="font-semibold text-slate-900">9h - 19h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Samedi</span>
                        <span className="font-semibold text-slate-900">9h - 17h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Dimanche</span>
                        <span className="font-semibold text-red-600">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10199.523750457343!2d-9.539242229324516!3d30.39538536486307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c825f48b65f7%3A0xc1a03d5109d60a9e!2sCit%C3%A9%20El%20Houda%2C%20Agadir%2080000!5e0!3m2!1sfr!2sma!4v1768314903452!5m2!1sfr!2sma"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Cabinet Location Map"
              />
              
              {/* Location Badge */}
              <div className="absolute top-6 left-6 bg-white px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-bold text-slate-900">Notre cabinet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}