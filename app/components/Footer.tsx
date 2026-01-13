import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-700">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">Smile Care</span>
              </div>
              <p className="text-sm text-slate-400">
                Votre cabinet dentaire de confiance pour des soins de qualité dans un environnement moderne et accueillant.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="transition-colors hover:text-white">Accueil</Link></li>
                <li><Link href="/about" className="transition-colors hover:text-white">À propos</Link></li>
                <li><Link href="/services" className="transition-colors hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/services/consultation" className="transition-colors hover:text-white">Consultation</Link></li>
                <li><Link href="/services/blanchiment" className="transition-colors hover:text-white">Blanchiment</Link></li>
                <li><Link href="/services/orthodontie" className="transition-colors hover:text-white">Orthodontie</Link></li>
                <li><Link href="/services/implants" className="transition-colors hover:text-white">Implants</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>123 Avenue des Champs-Élysées</li>
                <li>75008 Paris, France</li>
                <li><a href="tel:+33142566789" className="transition-colors hover:text-white">+33 1 42 56 67 89</a></li>
                <li><a href="mailto:contact@smilecare.fr" className="transition-colors hover:text-white">contact@smilecare.fr</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-slate-400">
                © 2024 Smile Care. Tous droits réservés.
              </p>
              <div className="flex gap-4 text-sm text-slate-400">
                <Link href="/privacy" className="transition-colors hover:text-white">Politique de confidentialité</Link>
                <Link href="/terms" className="transition-colors hover:text-white">Conditions d'utilisation</Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer