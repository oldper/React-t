import { useState, useEffect } from 'react';
import adakrei from '~/image/adakrei.svg';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <header className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6">
                            <img src={adakrei} alt="AdaKrei" className="w-full h-full [filter:invert(1)]" />
                        </div>
                        <span className="font-semibold text-xl">Adakrei</span>
                    </div>
                    <nav>
                        <ul className="flex gap-8">
                            <li>
                                <button
                                    onClick={() => handleScroll('home')}
                                    className={`text-gray-600 hover:text-gray-900 ${activeSection === 'home' ? 'text-gray-900' : ''}`}>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('services')}
                                    className={`text-gray-600 hover:text-gray-900 ${activeSection === 'services' ? 'text-gray-900' : ''}`}>
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('casestudies')}
                                    className={`text-gray-600 hover:text-gray-900 ${activeSection === 'casestudies' ? 'text-gray-900' : ''}`}>
                                    Case Studies
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('workflow')}
                                    className={`text-gray-600 hover:text-gray-900 ${activeSection === 'workflow' ? 'text-gray-900' : ''}`}>
                                    Our Workflow
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('contact')}
                                    className={`text-gray-600 hover:text-gray-900 ${activeSection === 'contact' ? 'text-gray-900' : ''}`}>
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}
