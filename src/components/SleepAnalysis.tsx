
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Sun, ArrowUp, ArrowDown, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export const SleepAnalysis: React.FC = () => {
  // Sample sleep data for the past week
  const sleepData = [
    { day: 'Mon', hours: 7.2, quality: 80, deepSleep: 2.5, lightSleep: 3.8, rem: 0.9 },
    { day: 'Tue', hours: 6.5, quality: 65, deepSleep: 1.8, lightSleep: 3.9, rem: 0.8 },
    { day: 'Wed', hours: 7.8, quality: 85, deepSleep: 2.7, lightSleep: 4.1, rem: 1.0 },
    { day: 'Thu', hours: 7.1, quality: 75, deepSleep: 2.3, lightSleep: 3.9, rem: 0.9 },
    { day: 'Fri', hours: 6.9, quality: 70, deepSleep: 2.1, lightSleep: 3.8, rem: 1.0 },
    { day: 'Sat', hours: 8.2, quality: 90, deepSleep: 3.0, lightSleep: 4.2, rem: 1.0 },
    { day: 'Sun', hours: 7.5, quality: 80, deepSleep: 2.6, lightSleep: 4.0, rem: 0.9 },
  ];

  const weeklyAverage = {
    hours: sleepData.reduce((acc, curr) => acc + curr.hours, 0) / sleepData.length,
    quality: sleepData.reduce((acc, curr) => acc + curr.quality, 0) / sleepData.length,
    deepSleep: sleepData.reduce((acc, curr) => acc + curr.deepSleep, 0) / sleepData.length,
  };

  const chartConfig = {
    deepSleep: { label: "Deep Sleep", color: "#3b82f6" },
    lightSleep: { label: "Light Sleep", color: "#93c5fd" },
    rem: { label: "REM", color: "#6366f1" }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Moon className="h-5 w-5 text-guardian-blue" />
          Sleep Analysis
        </CardTitle>
        <CardDescription>
          Track sleep patterns and quality
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-blue-600">Avg. Sleep</span>
              <span className="text-xs flex items-center text-green-600">
                <ArrowUp className="h-3 w-3" />
                3%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">{weeklyAverage.hours.toFixed(1)}</span>
              <span className="text-sm">hours</span>
            </div>
          </div>
          
          <div className="p-3 bg-indigo-50 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-indigo-600">Sleep Quality</span>
              <span className="text-xs flex items-center text-yellow-600">
                <ArrowDown className="h-3 w-3" />
                5%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">{weeklyAverage.quality.toFixed(0)}%</span>
              <span className="text-sm">good</span>
            </div>
          </div>
          
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-purple-600">Deep Sleep</span>
              <span className="text-xs flex items-center text-green-600">
                <ArrowUp className="h-3 w-3" />
                8%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">{weeklyAverage.deepSleep.toFixed(1)}</span>
              <span className="text-sm">hours</span>
            </div>
          </div>
        </div>
        
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-sm font-medium">Weekly Sleep Distribution</h4>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Info className="h-3 w-3" />
            <span>Recommended: 7-9 hours</span>
          </div>
        </div>
        
        <ChartContainer className="h-[220px]" config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sleepData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="deepSleep" name="Deep Sleep" stackId="a" fill="#3b82f6" />
              <Bar dataKey="lightSleep" name="Light Sleep" stackId="a" fill="#93c5fd" />
              <Bar dataKey="rem" name="REM" stackId="a" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start gap-2">
            <div className="p-1 bg-blue-100 rounded text-blue-600">
              <Moon className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-sm font-medium">Sleep Recommendation</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Your sleep schedule is consistent, but consider going to bed 30 minutes earlier to increase total sleep time. 
                Your deep sleep has improved this week.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepAnalysis;
