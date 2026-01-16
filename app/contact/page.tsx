"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Calendar, 
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-12">
      
      {/* 1. Hero Section */}
      <section className="relative bg-white pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Contactez <span className="text-blue-600">notre cabinet</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Vous avez une question ou souhaitez planifier votre première consultation ? Notre équipe est à votre écoute pour vous accompagner.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      </section>

      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* 2. Left Column: Infos */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                
                {/* Adresse */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Notre adresse</h3>
                    <p className="text-slate-600">Citée El Houda, Agadir Morocco</p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                    <a href="tel:+212651625941" className="text-slate-600 font-medium hover:text-emerald-600 transition-colors">
                      +212 651 625 941
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:helloahmed2002@gmail.com" className="text-slate-600 font-medium hover:text-cyan-600 transition-colors">
                      helloahmed2002@gmail.com
                    </a>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-lg mb-3">Horaires d&apos;ouverture</h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="font-semibold">09:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="font-semibold">09:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="font-semibold text-rose-600">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgences */}
              <div className="bg-rose-50 border border-rose-100 p-8 rounded-2xl">
                <div className="flex items-center gap-2 text-rose-600 font-bold mb-2">
                  <AlertCircle size={20} />
                  <span>Urgences Dentaires</span>
                </div>
                <p className="text-slate-700 mb-4 text-sm">
                  Nous traitons les urgences le jour même pendant les heures d&apos;ouverture.
                </p>
                <a 
                  href="tel:+212651625941" 
                  className="text-2xl font-black text-slate-900 hover:text-rose-600 transition-colors"
                >
                  +212 651 625 941
                </a>
              </div>
            </div>

            {/* 3. Right Column: Formulaire */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold">Message envoyé !</h2>
                    <p className="text-slate-600">
                      Merci de nous avoir contactés. Nous vous répondrons sous 24h.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-blue-600 font-semibold underline hover:text-blue-700 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Nom complet
                          </label>
                          <input 
                            required 
                            type="text" 
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50" 
                            placeholder="Jean Dupont" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">
                            Téléphone
                          </label>
                          <input 
                            required 
                            type="tel" 
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50" 
                            placeholder="06 12 34 56 78" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                          Email
                        </label>
                        <input 
                          required 
                          type="email" 
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50" 
                          placeholder="jean@exemple.com" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                          Message
                        </label>
                        <textarea 
                          required 
                          rows={4}
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50/50 resize-none" 
                          placeholder="Comment pouvons-nous vous aider ?"
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                      >
                        <span>Envoyer le message</span>
                        <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="w-full h-96 lg:h-[450px] bg-slate-200 rounded-[2rem] overflow-hidden relative border border-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10199.523750457343!2d-9.539242229324516!3d30.39538536486307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c825f48b65f7%3A0xc1a03d5109d60a9e!2sCit%C3%A9%20El%20Houda%2C%20Agadir%2080000!5e0!3m2!1sfr!2sma!4v1768314903452!5m2!1sfr!2sma"
            className="w-full h-full grayscale contrast-125"
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy"
            title="Cabinet Location Map"
          />
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Prêt pour votre rendez-vous ?
            </h2>
            <p className="text-slate-400">
              Gagnez du temps en réservant directement en ligne.
            </p>
          </div>
          <Link 
            href="/appointment"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/40"
          >
            <Calendar size={20} />
            Prendre rendez-vous en ligne
          </Link>
        </div>
      </section>
    </div>
  );
}