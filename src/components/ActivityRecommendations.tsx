
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Heart, ThumbsUp, Dumbbell, Brain, Coffee, Moon } from 'lucide-react';

export const ActivityRecommendations: React.FC = () => {
  // Sample activity recommendations based on health data
  const recommendations = [
    { 
      id: 1, 
      title: "Light stretching exercises", 
      description: "Based on your joint mobility data, gentle stretching would be beneficial", 
      benefit: "Improves flexibility and reduces joint pain", 
      timeOfDay: "Morning",
      icon: Dumbbell
    },
    { 
      id: 2, 
      title: "10-minute morning walk", 
      description: "Low intensity walking to improve circulation", 
      benefit: "Boosts metabolism and cardiovascular health", 
      timeOfDay: "Morning",
      icon: Sun
    },
    { 
      id: 3, 
      title: "Brain puzzles", 
      description: "Mental exercises to maintain cognitive function", 
      benefit: "Supports memory and mental acuity", 
      timeOfDay: "Afternoon",
      icon: Brain
    },
    { 
      id: 4, 
      title: "Social video call", 
      description: "Connect with family members or friends", 
      benefit: "Reduces feelings of isolation and improves mood", 
      timeOfDay: "Afternoon",
      icon: ThumbsUp
    },
    { 
      id: 5, 
      title: "Relaxation breathing", 
      description: "Simple breathing exercises before bed", 
      benefit: "Promotes better sleep and reduces stress", 
      timeOfDay: "Evening",
      icon: Heart
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ThumbsUp className="h-5 w-5 text-guardian-teal" />
          Daily Activity Recommendations
        </CardTitle>
        <CardDescription>
          Personalized activities based on health status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-x-4 mb-2">
            <div className="text-center">
              <div className="p-2 rounded-full bg-amber-100 w-8 h-8 flex items-center justify-center mx-auto mb-1">
                <Sun className="text-amber-600 h-4 w-4" />
              </div>
              <span className="text-xs font-medium">Morning</span>
            </div>
            <div className="text-center">
              <div className="p-2 rounded-full bg-blue-100 w-8 h-8 flex items-center justify-center mx-auto mb-1">
                <Coffee className="text-blue-600 h-4 w-4" />
              </div>
              <span className="text-xs font-medium">Afternoon</span>
            </div>
            <div className="text-center">
              <div className="p-2 rounded-full bg-indigo-100 w-8 h-8 flex items-center justify-center mx-auto mb-1">
                <Moon className="text-indigo-600 h-4 w-4" />
              </div>
              <span className="text-xs font-medium">Evening</span>
            </div>
          </div>
          
          {recommendations.map((rec) => (
            <div key={rec.id} className={`p-3 border rounded-lg ${
              rec.timeOfDay === "Morning" ? "border-l-4 border-l-amber-400" : 
              rec.timeOfDay === "Afternoon" ? "border-l-4 border-l-blue-400" : 
              "border-l-4 border-l-indigo-400"
            }`}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${
                  rec.timeOfDay === "Morning" ? "bg-amber-100 text-amber-600" : 
                  rec.timeOfDay === "Afternoon" ? "bg-blue-100 text-blue-600" : 
                  "bg-indigo-100 text-indigo-600"
                }`}>
                  <rec.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">{rec.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {rec.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityRecommendations;
