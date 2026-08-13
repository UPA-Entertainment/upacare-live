'use client';

import Link from 'next/link';
import React from 'react';

const translations = {
  en: {
    for_nannies: 'For Nannies',
    headline: 'Grow Your Childcare Business',
    subtitle: 'Join our platform and connect with families looking for professional care',
    get_started: 'Join Now',
    why_join: 'Why Join UpaCare?',
    reach: 'Reach More Families',
    reach_desc: 'Access hundreds of families seeking childcare services',
    control: 'Set Your Own Schedule',
    control_desc: 'Work when you want and set your own rates',
    secure: 'Secure Payments',
    secure_desc: 'Get paid safely through our platform',
    reputation: 'Build Your Reputation',
    reputation_desc: 'Earn ratings and reviews from satisfied families',
    requirements: 'Join Requirements',
    req1: '18+ years old',
    req2: 'Background check clearance',
    req3: 'Valid ID or passport',
    req4: 'Professional experience or references',
    requirements_desc: 'We ensure safety and quality for all families',
    earnings: 'Earnings Potential',
    earn_desc: 'Keep up to 90% of your rates',
    commission: 'Platform commission: 10%',
    example: 'Example: Earn $18/hour? You keep $16.20',
    features: 'Platform Features',
    profile: 'Professional Profile',
    profile_desc: 'Showcase your experience and services',
    messaging: 'Direct Messaging',
    messaging_desc: 'Communicate with families directly',
    calendar: 'Smart Calendar',
    calendar_desc: 'Manage your availability easily',
    ratings: 'Ratings System',
    ratings_desc: 'Build your reputation with reviews',
    cta_title: 'Ready to Join UpaCare?',
    cta_desc: 'Start earning money doing what you love',
  },
  es: {
    for_nannies: 'Para Niñeras',
    headline: 'Crece tu Negocio de Cuidado Infantil',
    subtitle: 'Únete a nuestra plataforma y conecta con familias que buscan profesionales',
    get_started: 'Únete Ahora',
    why_join: '¿Por Qué Unirse a UpaCare?',
    reach: 'Llega a Más Familias',
    reach_desc: 'Accede a cientos de familias buscando servicios',
    control: 'Define tu Horario',
    control_desc: 'Trabaja cuando quieras y establece tus tarifas',
    secure: 'Pagos Seguros',
    secure_desc: 'Recibe pagos de forma segura en nuestra plataforma',
    reputation: 'Construye tu Reputación',
    reputation_desc: 'Gana calificaciones y reseñas de familias',
    requirements: 'Requisitos',
    req1: '18+ años de edad',
    req2: 'Verificación de antecedentes',
    req3: 'ID válido o pasaporte',
    req4: 'Experiencia profesional o referencias',
    requirements_desc: 'Garantizamos seguridad y calidad para todas las familias',
    earnings: 'Potencial de Ganancias',
    earn_desc: 'Mantén hasta el 90% de tus tarifas',
    commission: 'Comisión de plataforma: 10%',
    example: 'Ejemplo: ¿Ganas $18/hora? Te quedas con $16.20',
    features: 'Características de Plataforma',
    profile: 'Perfil Profesional',
    profile_desc: 'Muestra tu experiencia y servicios',
    messaging: 'Mensajería Directa',
    messaging_desc: 'Comunícate directamente con familias',
    calendar: 'Calendario Inteligente',
    calendar_desc: 'Gestiona tu disponibilidad fácilmente',
    ratings: 'Sistema de Calificaciones',
    ratings_desc: 'Construye tu reputación con reseñas',
    cta_title: '¿Listo para Unirte a UpaCare?',
    cta_desc: 'Comienza a ganar dinero haciendo lo que amas',
  },
};

export default function ForNannies() {
  const [language, setLanguage] = React.useState('en');

  React.useEffect(() => {
    setLanguage(localStorage.getItem('language') || 'en');
  }, []);

  const t = translations[language];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-upa-lime to-upa-pink text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.headline}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{t.subtitle}</p>
          <Link href="/signup" className="bg-white text-upa-pink px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            {t.get_started}
          </Link>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.why_join}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '👥', title: t.reach, desc: t.reach_desc },
              { icon: '⏰', title: t.control, desc: t.control_desc },
              { icon: '💳', title: t.secure, desc: t.secure_desc },
              { icon: '⭐', title: t.reputation, desc: t.reputation_desc },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-gradient-to-r from-upa-lime/10 to-upa-pink/10 rounded-lg">
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

      {/* Requirements */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.requirements}</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-6">{t.requirements_desc}</p>
            <ul className="space-y-4">
              {[t.req1, t.req2, t.req3, t.req4].map((req, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg">
                  <span className="text-upa-lime text-2xl">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Earnings */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">{t.earnings}</h2>
          <div className="bg-gradient-to-r from-upa-pink to-upa-lime text-white rounded-lg p-12 shadow-xl">
            <p className="text-xl mb-4">{t.earn_desc}</p>
            <p className="text-3xl font-bold mb-6">90% 🎉</p>
            <p className="text-lg mb-6">{t.commission}</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <p className="text-xl font-semibold">{t.example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.features}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '👤', title: t.profile, desc: t.profile_desc },
              { icon: '💬', title: t.messaging, desc: t.messaging_desc },
              { icon: '📅', title: t.calendar, desc: t.calendar_desc },
              { icon: '⭐', title: t.ratings, desc: t.ratings_desc },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-upa-lime to-upa-pink text-white">
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
