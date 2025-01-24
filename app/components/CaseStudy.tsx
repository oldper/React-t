import type { CaseStudyProps } from '~/interface/CaseStudyProps';

export const CaseStudy: React.FC<CaseStudyProps> = ({ number, href }) => (
    <div className="flex flex-col justify-between h-full border-r border-gray-700 last:border-r-0 px-8 py-6">
        <h3 className="text-white text-lg font-medium">Case {number}</h3>
        <a
            href={href}
            className="inline-flex items-center gap-2 text-[#E5FFB3] hover:text-[#f0ffcc] transition-colors group">
            Learn more
            <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                />
            </svg>
        </a>
    </div>
);
