"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, LogIn, Stethoscope, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white shadow-lg mb-6">
          <Stethoscope size={32} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Bon retour</h1>
        <p className="mt-2 text-slate-600">Accédez à votre espace patient sécurisé.</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-110">
        <div className="bg-white py-10 px-8 sm:px-12 shadow-xl shadow-slate-200/60 rounded-[2.5rem] border border-slate-100">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 ml-1 mb-1.5">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input id="email" name="email" type="email" required className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" placeholder="nom@exemple.com" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between ml-1 mb-1.5">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700">Mot de passe</label>
                <Link href="/forgot" className="text-xs font-bold text-blue-600 hover:underline">Oublié ?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
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
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all group"
            >
              <LogIn size={20} />
              Se connecter
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              Nouveau patient ?{" "}
              <Link href="/signup" className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline">
                Créer un compte <ArrowRight size={14} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}