
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Heart } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, Tooltip } from 'recharts';

export const HealthMetricsChart: React.FC = () => {
  // Sample health metrics data for the past week
  const weeklyData = [
    { day: 'Mon', heartRate: 72, bloodPressureSys: 122, bloodPressureDia: 81, spO2: 96 },
    { day: 'Tue', heartRate: 75, bloodPressureSys: 124, bloodPressureDia: 80, spO2: 97 },
    { day: 'Wed', heartRate: 71, bloodPressureSys: 120, bloodPressureDia: 79, spO2: 98 },
    { day: 'Thu', heartRate: 73, bloodPressureSys: 121, bloodPressureDia: 80, spO2: 97 },
    { day: 'Fri', heartRate: 74, bloodPressureSys: 123, bloodPressureDia: 82, spO2: 96 },
    { day: 'Sat', heartRate: 70, bloodPressureSys: 119, bloodPressureDia: 78, spO2: 97 },
    { day: 'Sun', heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, spO2: 98 },
  ];
  
  // Sample health metrics data for the past month
  const monthlyData = [
    { week: 'Week 1', heartRate: 73, bloodPressureSys: 121, bloodPressureDia: 80, spO2: 97 },
    { week: 'Week 2', heartRate: 72, bloodPressureSys: 122, bloodPressureDia: 81, spO2: 96 },
    { week: 'Week 3', heartRate: 71, bloodPressureSys: 120, bloodPressureDia: 79, spO2: 98 },
    { week: 'Week 4', heartRate: 72, bloodPressureSys: 121, bloodPressureDia: 80, spO2: 97 },
  ];

  const chartConfig = {
    heartRate: { label: "Heart Rate", color: "#ef4444" },  // Red
    bloodPressureSys: { label: "Systolic BP", color: "#3b82f6" },  // Blue
    bloodPressureDia: { label: "Diastolic BP", color: "#8b5cf6" },  // Purple
    spO2: { label: "SpO2", color: "#10b981" }  // Green
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-guardian-blue" />
          Health Metrics History
        </CardTitle>
        <CardDescription>
          Track changes in vital signs over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly">
            <ChartContainer className="h-[300px]" config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="spO2Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area type="monotone" dataKey="heartRate" name="Heart Rate (bpm)" stroke="#ef4444" fillOpacity={1} fill="url(#heartRateGradient)" />
                  <Area type="monotone" dataKey="spO2" name="SpO2 (%)" stroke="#10b981" fillOpacity={1} fill="url(#spO2Gradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          
          <TabsContent value="monthly">
            <ChartContainer className="h-[300px]" config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="heartRateGradientMonthly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="spO2GradientMonthly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area type="monotone" dataKey="heartRate" name="Heart Rate (bpm)" stroke="#ef4444" fillOpacity={1} fill="url(#heartRateGradientMonthly)" />
                  <Area type="monotone" dataKey="spO2" name="SpO2 (%)" stroke="#10b981" fillOpacity={1} fill="url(#spO2GradientMonthly)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HealthMetricsChart;
