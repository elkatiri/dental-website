"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-4 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-900/5 backdrop-blur-xl bg-white/80">
          <div className="flex h-16 items-center justify-between px-6 lg:px-8">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Smile Care
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              <Link href="/" className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                Home
              </Link>
              <Link href="/about" className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                About
              </Link>
              <Link href="/services" className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                Services
              </Link>
              <Link href="/contact" className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                Contact
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link 
                href="/signin" 
                className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-slate-200/60 px-6 py-4 lg:hidden">
              <div className="flex flex-col gap-1">
                <Link href="/" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                  Home
                </Link>
                <Link href="/about" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                  About
                </Link>
                <Link href="/services" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                  Services
                </Link>
                <Link href="/contact" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                  Contact
                </Link>
              </div>
              <div className="mt-4 flex flex-col gap-2 border-t border-slate-200/60 pt-4">
                <Link 
                  href="/signin" 
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}