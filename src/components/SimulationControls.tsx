
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Play, Pause, AlertTriangle } from 'lucide-react';

export const SimulationControls: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState([1]);
  const [shouldTriggerAlert, setShouldTriggerAlert] = useState(false);

  const handleToggleSimulation = () => {
    setIsRunning(!isRunning);
  };

  const handleTriggerAlert = () => {
    // In a real app, this would trigger an alert in the system
    console.log('Alert triggered manually');
    setShouldTriggerAlert(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShouldTriggerAlert(false);
    }, 3000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Controls</CardTitle>
        <CardDescription>
          Simulation settings for demonstration purposes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="simulation-status">System Status</Label>
              <div className="text-sm text-muted-foreground">
                {isRunning ? 'Running' : 'Paused'}
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleToggleSimulation}
              className={isRunning ? 'bg-red-50 hover:bg-red-100 text-red-600' : 'bg-green-50 hover:bg-green-100 text-green-600'}
            >
              {isRunning ? (
                <><Pause className="mr-2 h-4 w-4" /> Pause</>
              ) : (
                <><Play className="mr-2 h-4 w-4" /> Resume</>
              )}
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="simulation-speed">Simulation Speed</Label>
              <span className="text-sm">{speed[0]}x</span>
            </div>
            <Slider
              id="simulation-speed"
              min={0.25}
              max={2}
              step={0.25}
              value={speed}
              onValueChange={setSpeed}
              disabled={!isRunning}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="fall-detection">Fall Detection Scenario</Label>
                <div className="text-sm text-muted-foreground">
                  Simulate a fall event
                </div>
              </div>
              <Button 
                onClick={handleTriggerAlert}
                variant="outline"
                className={`${shouldTriggerAlert ? 'bg-amber-100 text-amber-600' : 'bg-amber-50 hover:bg-amber-100 text-amber-600'}`}
                disabled={shouldTriggerAlert || !isRunning}
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                {shouldTriggerAlert ? 'Alerting...' : 'Trigger Alert'}
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="advanced-mode" />
              <Label htmlFor="advanced-mode">Advanced Monitoring Mode</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimulationControls;
