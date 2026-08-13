'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!mounted) {
    return (
      <html lang={language}>
        <body>
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-upa-pink"></div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang={language}>
      <head>
        <title>UpaCare - Marketplace de Niñeras</title>
        <meta name="description" content="Conecta con niñeras profesionales y confiables" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gradient-to-b from-purple-50 to-white">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer language={language} />
      </body>
    </html>
  );
}
