'use client';

import Link from 'next/link';

const translations = {
  en: {
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2026 UpaCare. All rights reserved.',
    address: '3300 NE 191 St, Suite 1907, Aventura, FL 33180',
    phone: '+1 (561) 367-5662',
    email: 'info@upaentertainment.com',
    followUs: 'Follow Us',
  },
  es: {
    about: 'Acerca de',
    contact: 'Contacto',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    copyright: '© 2026 UpaCare. Todos los derechos reservados.',
    address: '3300 NE 191 St, Suite 1907, Aventura, FL 33180',
    phone: '+1 (561) 367-5662',
    email: 'info@upaentertainment.com',
    followUs: 'Síguenos',
  },
};

export default function Footer({ language }) {
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-upa-pink to-upa-lime rounded-full"></div>
              <span className="text-xl font-bold">UpaCare</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t.address}</p>
            <p className="text-gray-400 text-sm mb-2">{t.phone}</p>
            <p className="text-gray-400 text-sm">{t.email}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-upa-pink transition">{t.about}</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-upa-pink transition">{t.contact}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-upa-pink transition">{t.privacy}</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-upa-pink transition">{t.terms}</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">{t.followUs}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-upa-pink transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-upa-pink transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
