import type { ClientLogo } from '~/interface/ClientLogo';

export function Navigation() {
    const clientLogos: ClientLogo[] = [
        { name: 'MentalWe', imageUrl: 'Logo' },
        { name: 'Wits', imageUrl: 'Logo' },
        { name: 'Johnson', imageUrl: 'Logo' },
    ];
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
        <main className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Describe what we do in around ten words
          </h1>
          <p className="text-gray-600">
            A more detailed description
          </p>
        </div>

        <div className="w-1/2 relative">
          {/* Orbital design */}
          <div className="relative w-96 h-96">
            {/* Central logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M12 2L2 20h20L12 2z"
                  className="fill-black"
                />
              </svg>
            </div>

            {/* Orbital circle */}
            <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-blue-200 rounded-full" />

            {/* Orbital dots */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="absolute top-1/4 right-0 w-4 h-4 bg-blue-400 rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-green-400 rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full" />
            <div className="absolute bottom-1/4 left-0 w-4 h-4 bg-blue-400 rounded-full" />
            <div className="absolute top-1/4 left-0 w-4 h-4 bg-red-400 rounded-full" />
          </div>
        </div>
      </main>

      <footer className="mt-16 flex gap-12 items-center">
        {clientLogos.map((logo) => (
          <div key={logo.name} className="h-8">
            <img
              src={logo.imageUrl}
              alt={`${logo.name} logo`}
              className="h-full object-contain"
            />
          </div>
        ))}
      </footer>
    </div>
    )
}