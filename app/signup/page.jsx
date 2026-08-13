'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    signup: 'Sign Up',
    user_type: 'I am a...',
    family: 'Family',
    nanny: 'Nanny',
    email: 'Email',
    password: 'Password',
    confirm_password: 'Confirm Password',
    full_name: 'Full Name',
    phone: 'Phone Number',
    create_account: 'Create Account',
    already_member: 'Already a member?',
    login_here: 'Login here',
    success: 'Account created successfully!',
    error: 'Please fill all fields correctly',
  },
  es: {
    signup: 'Registrarse',
    user_type: 'Soy un/a...',
    family: 'Familia',
    nanny: 'Niñera',
    email: 'Correo',
    password: 'Contraseña',
    confirm_password: 'Confirmar Contraseña',
    full_name: 'Nombre Completo',
    phone: 'Teléfono',
    create_account: 'Crear Cuenta',
    already_member: '¿Ya eres miembro?',
    login_here: 'Inicia sesión aquí',
    success: '¡Cuenta creada exitosamente!',
    error: 'Por favor completa todos los campos correctamente',
  },
};

export default function SignUp() {
  const [language, setLanguage] = useState('en');
  const [userType, setUserType] = useState('family');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!formData.email || !formData.password || !formData.fullName) {
      setMessage(t.error);
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage(t.error);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setMessage(t.success);
      setIsLoading(false);
      // Reset form
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        phone: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-upa-pink to-purple-400 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {t.signup}
        </h2>

        {message && (
          <div className={`p-4 rounded-lg mb-6 text-center ${message.includes(t.success) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        {/* User Type Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            {t.user_type}
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setUserType('family')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                userType === 'family'
                  ? 'bg-upa-pink text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.family}
            </button>
            <button
              onClick={() => setUserType('nanny')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                userType === 'nanny'
                  ? 'bg-upa-pink text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.nanny}
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t.full_name}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input-field"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t.password}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t.confirm_password}
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full mt-6"
          >
            {isLoading ? 'Creating...' : t.create_account}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          {t.already_member} <Link href="/login" className="text-upa-pink font-semibold hover:underline">
            {t.login_here}
          </Link>
        </p>
      </div>
    </div>
  );
}
