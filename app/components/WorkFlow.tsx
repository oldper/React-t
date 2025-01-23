import { useState } from 'react';
import type { WorkFlowStep } from '~/interface/WorkFlowStep';
import { WorkFlowItem } from '~/components/WorkFlowItem';

export const WorkFlow: React.FC = () => {
    const [openStep, setOpenStep] = useState<number>(1);
  
    const workflowSteps: WorkFlowStep[] = [
      { id: 1, title: 'BlaBlaBla', description: 'Description' },
      { id: 2, title: 'BlaBlaBla', description: 'Description' },
      { id: 3, title: 'BlaBlaBla', description: 'Description' },
      { id: 4, title: 'BlaBlaBla', description: 'Description' },
      { id: 5, title: 'BlaBlaBla', description: 'Description' },
      { id: 6, title: 'BlaBlaBla', description: 'Description' },
    ];
  
    const handleToggle = (stepId: number) => {
      setOpenStep(openStep === stepId ? 0 : stepId);
    };
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-16" id="workflow">
        <div className="mb-8 space-y-2">
          <div className="inline-block bg-[#E5FFB3] px-6 py-2 rounded-full text-2xl font-semibold">
            Our Workflow
          </div>
          <p className="text-gray-600">
            Step-by-Step Guide to Get Your Things Done
          </p>
        </div>
  
        <div className="space-y-4">
          {workflowSteps.map((step) => (
            <WorkFlowItem
              key={step.id}
              step={step}
              isOpen={openStep === step.id}
              isActive={openStep === step.id}
              onToggle={() => handleToggle(step.id)}
            />
          ))}
        </div>
      </section>
    );
  };
  