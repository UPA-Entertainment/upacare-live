'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    browse_nannies: 'Browse Nannies',
    filters: 'Filters',
    rating: 'Minimum Rating',
    hourly_rate: 'Maximum Hourly Rate',
    services: 'Services',
    apply_filters: 'Apply Filters',
    reset: 'Reset',
    no_results: 'No nannies found matching your criteria.',
    view_profile: 'View Profile',
    per_hour: 'per hour',
    experience: 'years experience',
  },
  es: {
    browse_nannies: 'Buscar Niñeras',
    filters: 'Filtros',
    rating: 'Calificación Mínima',
    hourly_rate: 'Tarifa Máxima por Hora',
    services: 'Servicios',
    apply_filters: 'Aplicar Filtros',
    reset: 'Limpiar',
    no_results: 'No se encontraron niñeras que cumplan tus criterios.',
    view_profile: 'Ver Perfil',
    per_hour: 'por hora',
    experience: 'años de experiencia',
  },
};

const MOCK_NANNIES = [
  {
    id: 1,
    name: 'María García',
    rating: 4.9,
    reviews: 28,
    hourly_rate: 18,
    services: ['Babysitting', 'Tutoring'],
    image: '👩‍🏫',
    experience: 8,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 4.8,
    reviews: 42,
    hourly_rate: 20,
    services: ['Babysitting', 'Cooking'],
    image: '👩‍💼',
    experience: 10,
  },
  {
    id: 3,
    name: 'Rosa López',
    rating: 4.9,
    reviews: 35,
    hourly_rate: 19,
    services: ['Babysitting', 'Homework Help'],
    image: '👩‍🏫',
    experience: 9,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    rating: 4.7,
    reviews: 21,
    hourly_rate: 17,
    services: ['Babysitting'],
    image: '👩‍🎓',
    experience: 5,
  },
  {
    id: 5,
    name: 'Carmen Rodríguez',
    rating: 5.0,
    reviews: 15,
    hourly_rate: 22,
    services: ['Babysitting', 'Tutoring', 'Cooking'],
    image: '👩‍🍳',
    experience: 12,
  },
];

export default function Browse() {
  const [language, setLanguage] = useState('en');
  const [filteredNannies, setFilteredNannies] = useState(MOCK_NANNIES);
  const [minRating, setMinRating] = useState(0);
  const [maxRate, setMaxRate] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
  }, []);

  const handleApplyFilters = () => {
    const filtered = MOCK_NANNIES.filter(
      nanny => nanny.rating >= minRating && nanny.hourly_rate <= maxRate
    );
    setFilteredNannies(filtered);
  };

  const handleReset = () => {
    setMinRating(0);
    setMaxRate(50);
    setFilteredNannies(MOCK_NANNIES);
  };

  if (!mounted) return null;

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          {t.browse_nannies}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.filters}</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.rating}: {minRating}+
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={minRating}
                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.hourly_rate}: ${maxRate}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={maxRate}
                    onChange={(e) => setMaxRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleApplyFilters}
                    className="btn-primary flex-1 text-sm"
                  >
                    {t.apply_filters}
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn-secondary flex-1 text-sm"
                  >
                    {t.reset}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nannies Grid */}
          <div className="lg:col-span-3">
            {filteredNannies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredNannies.map((nanny) => (
                  <div
                    key={nanny.id}
                    className="card-shadow bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform"
                  >
                    <div className="bg-gradient-to-r from-upa-pink to-upa-lime h-48 flex items-center justify-center text-8xl">
                      {nanny.image}
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {nanny.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold">{nanny.rating}</span>
                        <span className="text-gray-500">
                          ({nanny.reviews} {language === 'en' ? 'reviews' : 'reseñas'})
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {nanny.experience} {t.experience}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {nanny.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-upa-pink bg-opacity-20 text-upa-pink text-xs px-3 py-1 rounded-full"
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
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">{t.no_results}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
