import { ServiceCard } from "~/components/ServiceCard";

export const Service: React.FC = () => {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="inline-block bg-[#E5FFB3] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Services
          </div>
          <p className="text-gray-600">
            Description of our services does not include the list:
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="Machine Learning System Building" variant="light">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/5 h-20 rounded-lg"></div>
              <div className="bg-black/5 h-20 rounded-lg"></div>
              <div className="bg-black/5 h-20 rounded-lg"></div>
              <div className="bg-black/5 h-20 rounded-lg"></div>
            </div>
          </ServiceCard>
  
          <ServiceCard title="Service 1" variant="green" serviceNumber={1}>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-black/5 h-16 rounded-lg"></div>
              <div className="bg-black/5 h-16 rounded-lg"></div>
              <div className="bg-black/5 h-16 rounded-lg"></div>
            </div>
          </ServiceCard>
  
          <ServiceCard title="Service 2" variant="dark" serviceNumber={2}>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-lg"></div>
            </div>
          </ServiceCard>
  
          <ServiceCard title="Service 3" variant="light" serviceNumber={3}>
            <div className="flex justify-end">
              <div className="w-32 h-16 bg-black/5 rounded-lg"></div>
            </div>
          </ServiceCard>
  
          <ServiceCard title="Frontend & Backend Design" variant="green" fullWidth>
            <div className="flex justify-end">
              <div className="w-40 h-24 bg-black/5 rounded-lg"></div>
            </div>
          </ServiceCard>
        </div>
  
        <div className="mt-6 bg-gray-100 rounded-xl p-8 flex items-center justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Need A Full Description?</h3>
            <p className="text-gray-600">
              Some
              <br />
              words
              <br />
              around 3 lines
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get our full description
            </button>
          </div>
          <div className="hidden md:block relative">
            <div className="w-32 h-32 bg-black rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#E5FFB3] rotate-45"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gray-200 rotate-45"></div>
          </div>
        </div>
      </section>
    );
  };
  