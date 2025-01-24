import React, { useState } from 'react';
import type { FormData } from '~/interface/FormData';
import type { FormErrors } from '~/interface/FormError';

function handleChange() {
    console.log('changed!');
}

function handleSubmit() {
    console.log('Submit!!!');
}
export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ... rest of your state management and handlers remain the same ...

    return (
        <section className="max-w-6xl mx-auto px-4 py-16" id="contact">
            <div className="mb-8 space-y-2">
                <div className="inline-block bg-[#E5FFB3] px-6 py-2 rounded-full text-2xl font-semibold">
                    Contact Us
                </div>
                <p className="text-gray-600">BlaBlaBla</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Contact Form */}
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg
                hover:bg-gray-800 transition-colors disabled:opacity-50 
                disabled:cursor-not-allowed">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* SVG Illustration */}
                <div className="flex justify-center items-center">
                    <svg
                        className="w-full max-w-md"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        {/* Background Circle */}
                        <circle cx="200" cy="200" r="180" fill="#E5FFB3" opacity="0.3" />

                        {/* Envelope Base */}
                        <path d="M100 140H300V280H100V140Z" fill="white" stroke="black" strokeWidth="2" />

                        {/* Envelope Flap */}
                        <path d="M100 140L200 200L300 140" stroke="black" strokeWidth="2" fill="none" />

                        {/* Paper */}
                        <rect x="120" y="160" width="160" height="100" fill="#E5FFB3" />

                        {/* Lines on Paper */}
                        <line x1="140" y1="180" x2="260" y2="180" stroke="black" strokeWidth="2" opacity="0.3" />
                        <line x1="140" y1="200" x2="260" y2="200" stroke="black" strokeWidth="2" opacity="0.3" />
                        <line x1="140" y1="220" x2="260" y2="220" stroke="black" strokeWidth="2" opacity="0.3" />

                        {/* Decorative Elements */}
                        <circle cx="200" cy="140" r="5" fill="black" />
                        <circle cx="160" cy="260" r="3" fill="black" opacity="0.5" />
                        <circle cx="240" cy="260" r="3" fill="black" opacity="0.5" />
                    </svg>
                </div>
            </div>
        </section>
    );
};
