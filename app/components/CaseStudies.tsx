import { CaseStudy } from "./CaseStudy";

export const CaseStudies: React.FC = () => {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8 space-y-2">
          <div className="inline-block bg-[#E5FFB3] px-4 py-1 rounded-full text-lg font-medium">
            Case Studies
          </div>
          <p className="text-gray-600">
            Some Cases we have done.
          </p>
        </div>
  
        <div className="bg-gray-900 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[300px]">
            <CaseStudy number={1} href="/cases/1" />
            <CaseStudy number={2} href="/cases/2" />
            <CaseStudy number={3} href="/cases/3" />
          </div>
        </div>
      </section>
    );
  };
  