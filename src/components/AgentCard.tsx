
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Shield, Bell, Users, Info } from 'lucide-react';

interface AgentCardProps {
  title: string;
  description: string;
  status: 'active' | 'alert' | 'idle';
  icon: string;
  data: Record<string, string>;
}

export const AgentCard: React.FC<AgentCardProps> = ({ 
  title, 
  description, 
  status, 
  icon,
  data 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'activity':
        return <Activity className="h-6 w-6 text-guardian-blue" />;
      case 'shield':
        return <Shield className="h-6 w-6 text-guardian-teal" />;
      case 'bell':
        return <Bell className="h-6 w-6 text-guardian-orange" />;
      case 'users':
        return <Users className="h-6 w-6 text-guardian-red" />;
      default:
        return <Info className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'alert':
        return 'status-alert';
      case 'idle':
        return 'status-idle';
      default:
        return 'status-idle';
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base flex items-center gap-2">
            {getIcon()}
            {title}
          </CardTitle>
          <div className={`agent-status ${getStatusClass()}`}></div>
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-xs text-gray-500 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}:
              </span>
              <span className={`text-sm font-medium ${value.includes('Not Taken') || value.includes('overdue') ? 'text-guardian-red' : ''}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
