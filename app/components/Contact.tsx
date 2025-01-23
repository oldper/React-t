import React, { useState } from 'react';
import type { FormData } from '~/interface/FormData';
import type { FormErrors } from '~/interface/FormError';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
  
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const validateForm = (): boolean => {
      const newErrors: FormErrors = {};
  
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
  
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
  
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }
  
      setIsSubmitting(true);
      try {
        console.log('Form submitted:', formData);
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({
          ...prev,
          [name]: undefined
        }));
      }
    };
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-16" id="contact">
        <div className="mb-8 space-y-2">
          <div className="inline-block bg-[#E5FFB3] px-4 py-1 rounded-full text-lg font-medium">
            Contact Us
          </div>
          <p className="text-gray-600">
            BlaBlaBla
          </p>
        </div>
  
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white border transition-colors
                  ${errors.name ? 'border-red-500' : 'border-gray-200'}
                  focus:outline-none focus:ring-2 focus:ring-[#E5FFB3]`}
                placeholder="Name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
  
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white border transition-colors
                  ${errors.email ? 'border-red-500' : 'border-gray-200'}
                  focus:outline-none focus:ring-2 focus:ring-[#E5FFB3]`}
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
  
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg bg-white border transition-colors
                  ${errors.message ? 'border-red-500' : 'border-gray-200'}
                  focus:outline-none focus:ring-2 focus:ring-[#E5FFB3]`}
                placeholder="Message"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
  
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg
                hover:bg-gray-800 transition-colors disabled:opacity-50 
                disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    );
  };