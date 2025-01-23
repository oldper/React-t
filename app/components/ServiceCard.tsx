import React, { useState } from 'react';
import type { ServiceCardProps } from '~/interface/ServiceCardProps';
import { Modal } from '~/components/Modal';
const styles = {
  base: "rounded-xl p-6 relative hover:scale-[1.02] transition-transform",
  variants: {
    light: "bg-gray-100",
    dark: "bg-gray-900 text-white",
    green: "bg-[#E5FFB3]"
  },
  button: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
};



export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  variant = 'light',
  fullWidth = false,
  serviceNumber,
  children
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`${styles.base} ${styles.variants[variant]} ${fullWidth ? 'col-span-2' : ''}`}>
        <div className="flex justify-between mb-4">
          <div className="space-y-1">
            {serviceNumber && (
              <div className="text-sm font-medium">
                Service {serviceNumber}
              </div>
            )}
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex-1">{children}</div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className={styles.button}
          >
            <span className="text-sm">Learn more</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        serviceNumber={serviceNumber}
      />
    </>
  );
};