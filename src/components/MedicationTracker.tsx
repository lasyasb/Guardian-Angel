
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Plus, Check, X, AlertCircle } from 'lucide-react';

export const MedicationTracker: React.FC = () => {
  // Sample medication data
  const [medications, setMedications] = useState([
    { id: 1, name: "Lisinopril", dosage: "10mg", schedule: "Daily, 8:00 AM", nextDue: "8:00 AM", taken: false, inventory: 23 },
    { id: 2, name: "Metformin", dosage: "500mg", schedule: "Twice daily", nextDue: "11:00 AM", taken: true, inventory: 15 },
    { id: 3, name: "Simvastatin", dosage: "20mg", schedule: "Daily, evening", nextDue: "8:00 PM", taken: false, inventory: 7 },
    { id: 4, name: "Aspirin", dosage: "81mg", schedule: "Daily, morning", nextDue: "8:00 AM", taken: true, inventory: 30 }
  ]);

  const handleMedicationTaken = (id: number) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-guardian-orange" />
            Medication Tracker
          </CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Add Medication
          </Button>
        </div>
        <CardDescription>
          Track and manage medications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medications.map((med) => (
            <div 
              key={med.id} 
              className={`p-3 rounded-lg border flex justify-between items-center ${
                med.taken ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{med.name}</h4>
                  <Badge variant={med.inventory < 10 ? "destructive" : "outline"} className="text-xs">
                    {med.inventory} left
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{med.dosage} • {med.schedule}</p>
                <div className="flex items-center text-xs gap-1">
                  <Clock className="h-3 w-3" />
                  <span className={med.taken ? 'text-gray-500' : 'text-guardian-orange font-medium'}>
                    {med.taken ? 'Taken' : `Due at ${med.nextDue}`}
                  </span>
                </div>
              </div>
              <div>
                <Button 
                  variant={med.taken ? "outline" : "default"} 
                  size="sm"
                  className={med.taken ? "bg-green-50 hover:bg-green-100 text-green-600 border-green-200" : ""}
                  onClick={() => handleMedicationTaken(med.id)}
                >
                  {med.taken ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      Taken
                    </>
                  ) : (
                    <>
                      Mark as Taken
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationTracker;
