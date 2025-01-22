import type { WorkflowItemProps } from "~/interface/WorkFlowItemProps";

export const WorkFlowItem: React.FC<WorkflowItemProps> = ({ 
    step, 
    isOpen, 
    isActive,
    onToggle 
  }) => {
    return (
      <div 
        className={`rounded-2xl overflow-hidden transition-all duration-300 mb-4
          ${isActive ? 'bg-[#E5FFB3]' : 'bg-gray-100'}`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-medium">
              {String(step.id).padStart(2, '0')}
            </span>
            <span className="text-lg">{step.title}</span>
          </div>
          <div className="transform transition-transform duration-300">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M18 12H6" />
              </svg>
            )}
          </div>
        </button>
        <div 
          className={`overflow-hidden transition-all duration-300
            ${isOpen ? 'max-h-48' : 'max-h-0'}`}
        >
          <div className="p-6 pt-0">
            <p className="text-gray-700">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    );
  };
  