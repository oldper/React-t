export function Header() {
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
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Use Cases</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          </ul>
        </nav>
      </header>
    </div>
    )
}
