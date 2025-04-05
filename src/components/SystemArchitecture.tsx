import React from 'react';
import { Activity, Shield, Bell, Users, Database, Watch, Camera, Smartphone } from 'lucide-react';
export const SystemArchitecture: React.FC = () => {
  return <div className="relative w-full h-[400px] bg-white rounded-lg p-4">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-guardian-blue bg-opacity-10 rounded-full flex items-center justify-center">
        <div className="w-28 h-28 bg-guardian-blue bg-opacity-20 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center border-4 border-guardian-blue">
            <span className="text-guardian-blue font-semibold text-sm text-center">Guardian Angel Hub</span>
          </div>
        </div>
      </div>
      
      {/* Agents */}
      <AgentNode title="Health Agent" icon={<Activity className="h-6 w-6 text-white" />} position="top-12 left-1/4" color="bg-guardian-blue" connectedTo={['center', 'bottom-left']} />
      
      <AgentNode title="Safety Agent" icon={<Shield className="h-6 w-6 text-white" />} position="top-12 right-1/4" color="bg-guardian-teal" connectedTo={['center', 'bottom-right']} />
      
      <AgentNode title="Reminder Agent" icon={<Bell className="h-6 w-6 text-white" />} position="bottom-12 left-1/4" color="bg-guardian-orange" connectedTo={['center', 'top-left']} />
      
      <AgentNode title="Care Team Agent" icon={<Users className="h-6 w-6 text-white" />} position="bottom-12 right-1/4" color="bg-guardian-red" connectedTo={['center', 'top-right']} />
      
      {/* Data Sources */}
      <DataSource title="Wearables" icon={<Watch className="h-5 w-5" />} position="top-4 left-4" connectedTo={['top-left']} />
      
      <DataSource title="Sensors" icon={<Camera className="h-5 w-5" />} position="top-4 right-4" connectedTo={['top-right']} />
      
      <DataSource title="Database" icon={<Database className="h-5 w-5" />} position="bottom-4 left-4" connectedTo={['bottom-left']} />
      
      <DataSource title="Mobile" icon={<Smartphone className="h-5 w-5" />} position="bottom-4 right-4" connectedTo={['bottom-right']} />

      {/* Legend */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-guardian-blue mr-1"></div>
          <span>Health</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-guardian-teal mr-1"></div>
          <span>Safety</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-guardian-orange mr-1"></div>
          <span>Reminders</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-guardian-red mr-1"></div>
          <span>Care Team</span>
        </div>
      </div>
    </div>;
};
interface AgentNodeProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  color: string;
  connectedTo: Array<'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>;
}
const AgentNode: React.FC<AgentNodeProps> = ({
  title,
  icon,
  position,
  color,
  connectedTo
}) => {
  return <div className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}>
      <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center shadow-lg z-10 relative`}>
        {icon}
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap">
        <span className="text-xs font-medium">{title}</span>
      </div>
      
      {/* Connection lines */}
      {connectedTo.includes('center') && <div className="absolute top-1/2 left-1/2 w-[100px] h-0.5 bg-gray-200 -z-10" style={{
      transform: 'translateY(-50%)',
      transformOrigin: position.includes('left') ? 'right' : 'left',
      width: position.includes('top') || position.includes('bottom') ? '80px' : '100px'
    }}></div>}
    </div>;
};
interface DataSourceProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  connectedTo: Array<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>;
}
const DataSource: React.FC<DataSourceProps> = ({
  title,
  icon,
  position,
  connectedTo
}) => {
  return <div className={`absolute ${position} z-10`}>
      <div className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
        <span className="text-[10px] whitespace-nowrap">{title}</span>
      </div>
      
      {/* Connection lines */}
      {connectedTo.map((target, index) => {
      let lineStyle = {};
      if (target === 'top-left') {
        lineStyle = {
          width: '50px',
          height: '50px',
          transform: 'rotate(-45deg) translateX(35px)'
        };
      } else if (target === 'top-right') {
        lineStyle = {
          width: '50px',
          height: '50px',
          transform: 'rotate(45deg) translateX(-35px)'
        };
      } else if (target === 'bottom-left') {
        lineStyle = {
          width: '50px',
          height: '50px',
          transform: 'rotate(45deg) translateX(35px)'
        };
      } else if (target === 'bottom-right') {
        lineStyle = {
          width: '50px',
          height: '50px',
          transform: 'rotate(-45deg) translateX(-35px)'
        };
      }
      return;
    })}
    </div>;
};
export default SystemArchitecture;