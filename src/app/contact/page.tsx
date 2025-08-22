"use client"

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageProvider';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-dark-dark text-white">
      <Header />
      
      {/* Contact Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-gold font-poppins font-bold text-center mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-white text-center font-poppins mb-12">
              {t('contact.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 text-gray-100 placeholder:text-gray-400"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 text-gray-100 placeholder:text-gray-400"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 text-gray-100 placeholder:text-gray-400"
                  placeholder={t('contact.form.subject.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 text-gray-100 placeholder:text-gray-400 resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-dark-dark font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 