export const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    serviceNumber?: number;
  }> = ({ isOpen, onClose, title, serviceNumber }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div 
          className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 relative transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="mb-4">
            {serviceNumber && (
              <div className="text-sm font-medium text-gray-600 mb-1">
                Service {serviceNumber}
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          
          <div className="text-gray-600">
            <p className="mb-4">
              Detailed information about {title} will go here. You can customize this content for each service.
            </p>
            <ul className="space-y-2">
              <li>• Feature or benefit 1</li>
              <li>• Feature or benefit 2</li>
              <li>• Feature or benefit 3</li>
            </ul>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };