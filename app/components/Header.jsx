'use client';

import Link from 'next/link';
import { useState } from 'react';

const translations = {
  en: {
    home: 'Home',
    forFamilies: 'For Families',
    forNannies: 'For Nannies',
    login: 'Login',
    signup: 'Sign Up',
    browse: 'Browse Nannies',
    search: 'Search',
  },
  es: {
    home: 'Inicio',
    forFamilies: 'Para Familias',
    forNannies: 'Para Niñeras',
    login: 'Iniciar Sesión',
    signup: 'Registrarse',
    browse: 'Buscar Niñeras',
    search: 'Buscar',
  },
};

export default function Header({ language, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-upa-pink to-upa-lime rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <span className="text-2xl font-bold text-upa-pink">UpaCare</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-upa-pink transition">
            {t.home}
          </Link>
          <Link href="/for-families" className="text-gray-700 hover:text-upa-pink transition">
            {t.forFamilies}
          </Link>
          <Link href="/for-nannies" className="text-gray-700 hover:text-upa-pink transition">
            {t.forNannies}
          </Link>
        </nav>

        {/* Language Selector & Auth */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 border-l pl-4">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded text-sm font-semibold transition ${
                language === 'en'
                  ? 'bg-upa-pink text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-3 py-1 rounded text-sm font-semibold transition ${
                language === 'es'
                  ? 'bg-upa-pink text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ES
            </button>
          </div>

          <Link
            href="/login"
            className="hidden sm:inline-block text-upa-pink font-semibold hover:text-upa-pink/80"
          >
            {t.login}
          </Link>
          <Link
            href="/signup"
            className="btn-primary text-sm hidden sm:inline-block"
          >
            {t.signup}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-upa-pink"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-upa-pink">
              {t.home}
            </Link>
            <Link href="/for-families" className="text-gray-700 hover:text-upa-pink">
              {t.forFamilies}
            </Link>
            <Link href="/for-nannies" className="text-gray-700 hover:text-upa-pink">
              {t.forNannies}
            </Link>
            <Link href="/login" className="text-upa-pink font-semibold">
              {t.login}
            </Link>
            <Link href="/signup" className="btn-primary text-center">
              {t.signup}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
