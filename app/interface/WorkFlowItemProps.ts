import type { WorkFlowStep } from "~/interface/WorkFlowStep";
export interface WorkflowItemProps {
    step: WorkFlowStep;
    isOpen: boolean;
    isActive: boolean;
    onToggle: () => void;
}