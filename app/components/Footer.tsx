import { useState } from 'react';
import adakrei from '~/image/adakrei.svg';
export const Footer: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 180;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <footer className="bg-gray-900 text-white rounded-t-3xl px-8 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="mb-8 md:mb-0">
                        <a href="/" className="inline-block mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8">
                                    <img src={adakrei} alt="AdaKrei" className="w-full h-full" />
                                </div>
                                <span className="text-2xl font-semibold">Adakrei</span>
                            </div>
                        </a>

                        <div className="space-y-4">
                            <div className="inline-block bg-[#E5FFB3] px-3 py-1 rounded-full text-black text-sm font-medium">
                                Contact us:
                            </div>
                            <div className="space-y-2">
                                <p>Email: service@adakrei.com</p>
                                <p>Address: To Be Filled</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex gap-8">
                        <button
                            onClick={() => handleScroll('home')}
                            className={`text-gray-300 hover:text-white transition-colors`}>
                            Home
                        </button>

                        <button
                            onClick={() => handleScroll('services')}
                            className={`text-gray-300 hover:text-white transition-colors`}>
                            Services
                        </button>

                        <button
                            onClick={() => handleScroll('casestudies')}
                            className={`text-gray-300 hover:text-white transition-colors`}>
                            Case Studies
                        </button>

                        <button
                            onClick={() => handleScroll('workflow')}
                            className={`text-gray-300 hover:text-white transition-colors`}>
                            Our Workflow
                        </button>

                        <button
                            onClick={() => handleScroll('contact')}
                            className={`text-gray-300 hover:text-white transition-colors`}>
                            Contact Us
                        </button>
                    </nav>

                    <div className="flex gap-4 mt-8 md:mt-0">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-800 mb-8" />

                <p className="text-gray-400 text-sm">© 2025 AdaKrei. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
