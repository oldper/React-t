export interface ServiceCardProps {
  title: string;
  variant?: 'light' | 'dark' | 'green';
  fullWidth?: boolean;
  serviceNumber?: number;
  serviceId: string;
  children: React.ReactNode;
}