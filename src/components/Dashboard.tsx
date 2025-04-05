
import React from 'react';
import { SystemArchitecture } from './SystemArchitecture';
import { AgentCard } from './AgentCard';
import { SimulationControls } from './SimulationControls';
import { AlertsPanel } from './AlertsPanel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Brain, Bell, Users, Settings, Heart, Moon, Clock, ThumbsUp, AlertCircle, MessageCircle, Calendar } from 'lucide-react';
import PatientProfile from './PatientProfile';
import HealthMetricsChart from './HealthMetricsChart';
import MedicationTracker from './MedicationTracker';
import CommunicationPortal from './CommunicationPortal';
import SleepAnalysis from './SleepAnalysis';
import ActivityRecommendations from './ActivityRecommendations';
import EmergencyContactManager from './EmergencyContactManager';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-guardian-blue mr-2">
            <Activity size={28} />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Guardian Angel</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Elder Care Multi-Agent System</span>
          <Settings className="text-gray-500 h-5 w-5" />
        </div>
      </header>

      <main className="flex-1 p-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>
                Real-time monitoring and coordination between AI agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SystemArchitecture />
            </CardContent>
          </Card>

          <div className="lg:col-span-4 space-y-6">
            <PatientProfile />
            
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>
                  Current operation metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">System Health</span>
                    <span className="text-sm text-guardian-teal font-medium">Optimal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-guardian-teal h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm font-medium">1.2s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-guardian-blue h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Alerts (24h)</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-guardian-orange h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid grid-cols-8 w-full">
            <TabsTrigger value="dashboard" className="flex items-center">
              <Activity className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="health" className="flex items-center">
              <Heart className="mr-2 h-4 w-4" />
              Health
            </TabsTrigger>
            <TabsTrigger value="agents" className="flex items-center">
              <Brain className="mr-2 h-4 w-4" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="medication" className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Medication
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Activities
            </TabsTrigger>
            <TabsTrigger value="communication" className="flex items-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              Communication
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center">
              <Bell className="mr-2 h-4 w-4" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="care-team" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Care Team
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <HealthMetricsChart />
              <SleepAnalysis />
              <CommunicationPortal />
              <MedicationTracker />
              <EmergencyContactManager />
              <ActivityRecommendations />
            </div>
          </TabsContent>
          
          <TabsContent value="health" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <HealthMetricsChart />
              <SleepAnalysis />
              <div className="md:col-span-2">
                <ActivityRecommendations />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="agents" className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <AgentCard 
                title="Health Agent" 
                description="Monitors vitals and health metrics"
                status="active"
                icon="activity"
                data={{
                  heartRate: "72 bpm",
                  bloodPressure: "120/80",
                  spO2: "98%",
                  lastUpdate: "2 min ago"
                }}
              />
              <AgentCard 
                title="Safety Agent" 
                description="Detects falls and unusual activity"
                status="active"
                icon="shield"
                data={{
                  location: "Living Room",
                  movement: "Normal",
                  fallRisk: "Low",
                  lastUpdate: "1 min ago"
                }}
              />
              <AgentCard 
                title="Reminder Agent" 
                description="Medication and appointment reminders"
                status="alert"
                icon="bell"
                data={{
                  nextMedication: "Lisinopril",
                  dueTime: "11:00 AM",
                  status: "Not Taken",
                  overdue: "Yes"
                }}
              />
              <AgentCard 
                title="Care Team Agent" 
                description="Coordinates alerts to caregivers"
                status="active"
                icon="users"
                data={{
                  activeAlerts: "1",
                  onCall: "Dr. Johnson",
                  lastContact: "15 min ago",
                  responseTime: "5 min"
                }}
              />
            </div>
            <SimulationControls />
          </TabsContent>
          
          <TabsContent value="medication" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <MedicationTracker />
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-guardian-orange" />
                      Medication Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <h4 className="text-sm font-medium text-amber-800">Low Inventory Alert</h4>
                        <p className="text-xs text-amber-700 mt-1">Simvastatin is running low (7 remaining). Refill needed within 7 days.</p>
                      </div>
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="text-sm font-medium text-red-800">Missed Medication</h4>
                        <p className="text-xs text-red-700 mt-1">Lisinopril (10mg) scheduled for 8:00 AM has not been taken.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-guardian-blue" />
                      Upcoming Prescription Refills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <p className="font-medium">Simvastatin 20mg</p>
                          <p className="text-xs text-muted-foreground">Dr. Sarah Williams</p>
                        </div>
                        <div className="text-sm text-red-600">7 days</div>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <p className="font-medium">Metformin 500mg</p>
                          <p className="text-xs text-muted-foreground">Dr. Sarah Williams</p>
                        </div>
                        <div className="text-sm text-amber-600">15 days</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Lisinopril 10mg</p>
                          <p className="text-xs text-muted-foreground">Dr. Sarah Williams</p>
                        </div>
                        <div className="text-sm text-green-600">23 days</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ActivityRecommendations />
              <SleepAnalysis />
            </div>
          </TabsContent>
          
          <TabsContent value="communication" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <CommunicationPortal />
              <EmergencyContactManager />
            </div>
          </TabsContent>
          
          <TabsContent value="alerts" className="animate-fade-in">
            <AlertsPanel />
          </TabsContent>
          
          <TabsContent value="care-team" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <EmergencyContactManager />
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Care Team Members</h3>
                <div className="divide-y">
                  {[
                    { name: "Dr. Sarah Johnson", role: "Primary Physician", contact: "555-1234", lastContact: "Today, 9:30 AM" },
                    { name: "Michael Chen", role: "Family Caregiver", contact: "555-5678", lastContact: "Yesterday, 6:45 PM" },
                    { name: "Lisa Rodriguez", role: "Home Health Nurse", contact: "555-9101", lastContact: "Today, 11:15 AM" }
                  ].map((member, i) => (
                    <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:text-right">
                        <p className="text-sm">{member.contact}</p>
                        <p className="text-xs text-gray-500">Last Contact: {member.lastContact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
