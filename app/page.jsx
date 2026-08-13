'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    hero_title: 'Find the Perfect Nanny for Your Family',
    hero_subtitle: 'Connect with trusted, professional caregivers vetted by UPA Entertainment',
    browse_nannies: 'Browse Nannies',
    become_nanny: 'Become a Nanny',
    search_location: 'Search by location...',
    search_service: 'Select service...',
    search_btn: 'Search',
    featured: 'Featured Nannies',
    why_upacare: 'Why Choose UpaCare?',
    safety: 'Safety First',
    safety_desc: 'All nannies are verified and background checked',
    professional: 'Professional Team',
    professional_desc: '25+ years of experience in childcare services',
    pricing: 'Transparent Pricing',
    pricing_desc: 'No hidden fees, affordable rates',
    support: '24/7 Support',
    support_desc: 'We\'re here to help anytime you need us',
    per_hour: 'per hour',
    view_profile: 'View Profile',
    no_results: 'No nannies found. Try adjusting your search.',
  },
  es: {
    hero_title: 'Encuentra la Niñera Perfecta para tu Familia',
    hero_subtitle: 'Conecta con cuidadores de confianza verificados por UPA Entertainment',
    browse_nannies: 'Ver Niñeras',
    become_nanny: 'Ser Niñera',
    search_location: 'Buscar por ubicación...',
    search_service: 'Seleccionar servicio...',
    search_btn: 'Buscar',
    featured: 'Niñeras Destacadas',
    why_upacare: '¿Por qué elegir UpaCare?',
    safety: 'Seguridad Primero',
    safety_desc: 'Todas las niñeras están verificadas',
    professional: 'Equipo Profesional',
    professional_desc: '25+ años de experiencia en cuidado infantil',
    pricing: 'Precios Transparentes',
    pricing_desc: 'Sin cargos ocultos, tarifas accesibles',
    support: 'Soporte 24/7',
    support_desc: 'Estamos aquí para ayudarte en cualquier momento',
    per_hour: 'por hora',
    view_profile: 'Ver Perfil',
    no_results: 'No se encontraron niñeras. Intenta ajustar tu búsqueda.',
  },
};

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [nannies, setNannies] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    
    // Simulated nanny data
    setNannies([
      {
        id: 1,
        name: 'María García',
        rating: 4.9,
        reviews: 28,
        hourly_rate: 18,
        services: ['Babysitting', 'Tutoring'],
        image: '👩‍🏫',
        experience: '8 years',
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        rating: 4.8,
        reviews: 42,
        hourly_rate: 20,
        services: ['Babysitting', 'Cooking'],
        image: '👩‍💼',
        experience: '10 years',
      },
      {
        id: 3,
        name: 'Rosa López',
        rating: 4.9,
        reviews: 35,
        hourly_rate: 19,
        services: ['Babysitting', 'Homework Help'],
        image: '👩‍🏫',
        experience: '9 years',
      },
    ]);
  }, []);

  if (!mounted) {
    return null;
  }

  const t = translations[language];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-upa-pink via-purple-400 to-upa-lime text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.hero_title}</h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">{t.hero_subtitle}</p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder={t.search_location}
                className="input-field text-gray-800"
              />
              <select className="input-field text-gray-800">
                <option>{t.search_service}</option>
                <option>Babysitting</option>
                <option>Tutoring</option>
                <option>Cooking</option>
              </select>
              <div className="flex gap-2">
                <button className="btn-primary w-full">
                  {t.search_btn}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/browse" className="btn-primary">
              {t.browse_nannies}
            </Link>
            <Link href="/signup" className="bg-white text-upa-pink px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              {t.become_nanny}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Nannies */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {t.featured}
        </h2>

        {nannies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nannies.map((nanny) => (
              <div
                key={nanny.id}
                className="card-shadow bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="bg-gradient-to-r from-upa-pink to-upa-lime h-48 flex items-center justify-center text-8xl">
                  {nanny.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{nanny.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{nanny.rating}</span>
                    <span className="text-gray-500">({nanny.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-600 mb-4">{nanny.experience} {language === 'en' ? 'experience' : 'de experiencia'}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {nanny.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-upa-pink bg-opacity-20 text-upa-pink text-sm px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-upa-pink">
                      ${nanny.hourly_rate}
                      <span className="text-sm text-gray-600">{t.per_hour}</span>
                    </span>
                    <Link
                      href={`/nanny/${nanny.id}`}
                      className="btn-primary text-sm"
                    >
                      {t.view_profile}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-12">
            <p className="text-lg">{t.no_results}</p>
          </div>
        )}
      </section>

      {/* Why UpaCare */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t.why_upacare}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🔒', title: t.safety, desc: t.safety_desc },
              { icon: '👥', title: t.professional, desc: t.professional_desc },
              { icon: '💰', title: t.pricing, desc: t.pricing_desc },
              { icon: '📞', title: t.support, desc: t.support_desc },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center card-shadow bg-white rounded-lg p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-upa-pink to-upa-lime text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Join thousands of families finding trusted care</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup" className="bg-white text-upa-pink px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Sign Up Today
            </Link>
            <Link href="/browse" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
              Browse Nannies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
