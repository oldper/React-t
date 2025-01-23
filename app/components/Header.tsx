import { useState } from "react"

export function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      setActiveSection(sectionId);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M12 2L2 20h20L12 2z"
                className="fill-black"
              />
            </svg>
          </div>
          <span className="font-semibold text-xl">Adakrei</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <button 
                onClick={() => handleScroll('home')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'home' ? 'text-gray-900' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll('services')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'services' ? 'text-gray-900' : ''}`}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll('casestudies')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'casestudies' ? 'text-gray-900' : ''}`}
              >
                Case Studies
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll('workflow')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'workflow' ? 'text-gray-900' : ''}`}
              >
                Our Workflow
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll('contact')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'contact' ? 'text-gray-900' : ''}`}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
