"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, Mail, Phone, Lock, Eye, EyeOff, 
  ShieldCheck, Stethoscope, Loader2 
} from 'lucide-react';

export default function SignUpPage() {
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fix Hydration Error: Ensure client-only rendering for interactive parts
  useEffect(() => {
    setMounted(true);
  }, []);

  const getStrength = () => {
    if (!password) return 0;
    let s = 0;
    if (password.length > 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };

  // Prevents the flickering/hydration error by waiting for mount
  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  const strength = getStrength();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white shadow-lg mb-6">
          <Stethoscope size={32} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Créer un compte</h1>
        <p className="mt-2 text-slate-600">Rejoignez notre patientèle en quelques secondes.</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white py-10 px-8 sm:px-12 shadow-xl shadow-slate-200/60 rounded-[2.5rem] border border-slate-100">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsSubmitting(true); }}>
            
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 ml-1 mb-1.5">Nom complet</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <User size={18} />
                </div>
                <input id="name" name="name" type="text" required className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" placeholder="Jean Dupont" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 ml-1 mb-1.5">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input id="email" name="email" type="email" required className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" placeholder="jean@exemple.com" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 ml-1 mb-1.5">Mot de passe</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {/* Strength Bar */}
              <div className="flex gap-1 mt-2 px-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < strength ? (strength <= 2 ? 'bg-orange-400' : 'bg-emerald-500') : 'bg-slate-200'}`} />
                ))}
              </div>
            </div>

            {/* Terms - Fixed Nesting (No Link inside Label) */}
            <div className="flex items-start px-1 pt-2">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required className="h-5 w-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" />
              </div>
              <div className="ml-3 text-sm text-slate-600">
                <span>J&apos;accepte les </span>
                <Link href="/terms" className="text-blue-600 font-bold hover:underline">conditions d&apos;utilisation</Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-[0.98] shadow-lg shadow-blue-100 disabled:opacity-70 transition-all group"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : <ShieldCheck size={20} />}
              Créer mon compte
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Déjà inscrit ? <Link href="/signin" className="text-blue-600 font-bold hover:underline">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}