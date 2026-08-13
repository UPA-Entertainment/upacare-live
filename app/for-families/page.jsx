'use client';

import Link from 'next/link';

const translations = {
  en: {
    for_families: 'For Families',
    headline: 'Professional Childcare, Just a Click Away',
    subtitle: 'Find trusted, verified nannies in your area',
    get_started: 'Get Started',
    how_it_works: 'How It Works',
    step1: 'Create Your Account',
    step1_desc: 'Sign up and tell us about your childcare needs',
    step2: 'Browse Nannies',
    step2_desc: 'View profiles, ratings, and experience',
    step3: 'Connect & Hire',
    step3_desc: 'Message nannies and arrange interviews',
    step4: 'Pay Securely',
    step4_desc: 'Use our secure payment system',
    benefits: 'Why Families Love UpaCare',
    verified: 'Verified Nannies',
    verified_desc: 'All caregivers are background checked',
    flexible: 'Flexible Scheduling',
    flexible_desc: 'Find nannies available when you need them',
    transparent: 'Transparent Pricing',
    transparent_desc: 'Know exactly what you\'ll pay',
    support: 'Customer Support',
    support_desc: 'Our team is here 24/7',
    pricing: 'Pricing Plans',
    basic: 'Basic',
    basic_price: 'Free',
    basic_features: 'Browse nannies, View profiles, Contact nannies',
    plus: 'Plus',
    plus_price: '$10',
    plus_features: 'Everything in Basic, Priority support, Favorites list',
    premium: 'Premium',
    premium_price: '$25/month',
    premium_features: 'Everything in Plus, Unlimited contacts, Ratings & reviews',
    cta_title: 'Ready to Find the Perfect Nanny?',
    cta_desc: 'Join hundreds of families finding trusted care',
  },
  es: {
    for_families: 'Para Familias',
    headline: 'Cuidado Infantil Profesional, A un Click',
    subtitle: 'Encuentra niñeras verificadas de confianza en tu área',
    get_started: 'Comenzar',
    how_it_works: 'Cómo Funciona',
    step1: 'Crea tu Cuenta',
    step1_desc: 'Regístrate y cuéntanos tus necesidades',
    step2: 'Busca Niñeras',
    step2_desc: 'Ver perfiles, calificaciones y experiencia',
    step3: 'Conecta y Contrata',
    step3_desc: 'Mensajea con niñeras y realiza entrevistas',
    step4: 'Paga de Forma Segura',
    step4_desc: 'Usa nuestro sistema de pagos seguro',
    benefits: 'Por Qué las Familias Aman UpaCare',
    verified: 'Niñeras Verificadas',
    verified_desc: 'Todas las cuidadoras están verificadas',
    flexible: 'Horarios Flexibles',
    flexible_desc: 'Encuentra niñeras disponibles cuando las necesites',
    transparent: 'Precios Transparentes',
    transparent_desc: 'Sabe exactamente cuánto pagarás',
    support: 'Soporte al Cliente',
    support_desc: 'Nuestro equipo está disponible 24/7',
    pricing: 'Planes de Precios',
    basic: 'Básico',
    basic_price: 'Gratis',
    basic_features: 'Buscar niñeras, Ver perfiles, Contactar',
    plus: 'Plus',
    plus_price: '$10',
    plus_features: 'Todo lo de Básico, Soporte prioritario, Lista de favoritos',
    premium: 'Premium',
    premium_price: '$25/mes',
    premium_features: 'Todo lo de Plus, Contactos ilimitados, Reseñas',
    cta_title: '¿Listo para Encontrar la Niñera Perfecta?',
    cta_desc: 'Únete a cientos de familias que encontraron cuidado de confianza',
  },
};

export default function ForFamilies() {
  const [language, setLanguage] = React.useState('en');

  React.useEffect(() => {
    setLanguage(localStorage.getItem('language') || 'en');
  }, []);

  const t = translations[language];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-upa-pink to-purple-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.headline}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{t.subtitle}</p>
          <Link href="/signup" className="bg-white text-upa-pink px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            {t.get_started}
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.how_it_works}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '📝', title: t.step1, desc: t.step1_desc },
              { icon: '🔍', title: t.step2, desc: t.step2_desc },
              { icon: '💬', title: t.step3, desc: t.step3_desc },
              { icon: '💳', title: t.step4, desc: t.step4_desc },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.benefits}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '✅', title: t.verified, desc: t.verified_desc },
              { icon: '⏰', title: t.flexible, desc: t.flexible_desc },
              { icon: '💰', title: t.transparent, desc: t.transparent_desc },
              { icon: '📞', title: t.support, desc: t.support_desc },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-gradient-to-r from-upa-pink/10 to-purple-100 rounded-lg">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.pricing}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: t.basic, price: t.basic_price, features: t.basic_features },
              { name: t.plus, price: t.plus_price, features: t.plus_features },
              { name: t.premium, price: t.premium_price, features: t.premium_features },
            ].map((plan, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-upa-pink to-purple-500 text-white p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-3xl font-bold mt-4">{plan.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.split(',').map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="text-upa-pink">✓</span>
                        {feature.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-upa-pink to-upa-lime text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.cta_title}</h2>
          <p className="text-xl mb-8">{t.cta_desc}</p>
          <Link href="/signup" className="bg-white text-upa-pink px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            {t.get_started}
          </Link>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
