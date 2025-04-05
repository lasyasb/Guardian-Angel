
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertTriangle, Check, X } from 'lucide-react';

export const AlertsPanel: React.FC = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'medication',
      priority: 'high',
      message: 'Missed morning medication (Lisinopril)',
      timestamp: '10:45 AM',
      status: 'pending'
    },
    {
      id: 2,
      type: 'safety',
      priority: 'medium',
      message: 'Unusual inactivity detected in bedroom',
      timestamp: '9:30 AM',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'health',
      priority: 'low',
      message: 'Heart rate slightly elevated (85 bpm)',
      timestamp: 'Yesterday, 8:15 PM',
      status: 'resolved'
    }
  ]);

  const handleResolveAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'resolved' } : alert
    ));
  };

  const handleDismissAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'dismissed' } : alert
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-guardian-red text-white';
      case 'medium':
        return 'bg-guardian-orange text-white';
      case 'low':
        return 'bg-guardian-blue text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return <Bell className="h-5 w-5" />;
      case 'safety':
        return <AlertTriangle className="h-5 w-5" />;
      case 'health':
        return <Bell className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h3 className="font-medium">Recent Alerts</h3>
          <p className="text-sm text-gray-500">Notifications and warnings requiring attention</p>
        </div>
        <Badge variant="outline" className="text-guardian-red border-guardian-red">
          {alerts.filter(a => a.status === 'pending').length} Active
        </Badge>
      </div>
      
      <div className="divide-y">
        {alerts.map(alert => (
          <div key={alert.id} className={`p-4 flex ${alert.status === 'pending' ? 'bg-red-50' : ''}`}>
            <div className="mr-3 mt-1">
              <div className={`rounded-full p-2 ${getPriorityColor(alert.priority)}`}>
                {getTypeIcon(alert.type)}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-medium">{alert.message}</h4>
                <span className="text-xs text-gray-500">{alert.timestamp}</span>
              </div>
              
              <div className="mt-2 flex justify-between items-center">
                <div className="flex items-center">
                  <Badge className={getPriorityColor(alert.priority)}>
                    {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)} Priority
                  </Badge>
                  <span className="text-xs text-gray-500 ml-2">
                    {alert.status === 'pending' ? 'Pending' : 
                     alert.status === 'resolved' ? 'Resolved' : 'Dismissed'}
                  </span>
                </div>
                
                {alert.status === 'pending' && (
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 px-2 text-xs"
                      onClick={() => handleResolveAlert(alert.id)}
                    >
                      <Check className="h-3 w-3 mr-1" />
                      Resolve
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 px-2 text-xs text-guardian-red border-guardian-red hover:bg-red-50"
                      onClick={() => handleDismissAlert(alert.id)}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Dismiss
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {alerts.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-gray-500">No alerts at this time</p>
        </div>
      )}
      
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full">
          View Alert History
        </Button>
      </div>
    </div>
  );
};

export default AlertsPanel;
