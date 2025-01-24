import { CaseStudy } from '~/components/CaseStudy';

export const CaseStudies: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16" id="casestudies">
            <div className="mb-8 space-y-2">
                <div className="inline-block bg-[#E5FFB3] px-6 py-2 rounded-full text-2xl font-semibold">
                    Case Studies
                </div>
                <p className="text-gray-600">Some Cases we have done.</p>
            </div>

            <div className="bg-gray-900 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 h-[300px]">
                    <CaseStudy number={1} href="/case1" />
                    <CaseStudy number={2} href="/case2" />
                    <CaseStudy number={3} href="/case3" />
                </div>
            </div>
        </section>
    );
};
