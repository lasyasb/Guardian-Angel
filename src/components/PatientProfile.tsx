
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Phone, Mail, MapPin, AlertTriangle, Heart } from 'lucide-react';

export const PatientProfile: React.FC = () => {
  const patientInfo = {
    name: "Eleanor Johnson",
    age: 78,
    dob: "January 15, 1947",
    address: "123 Maple Street, Pleasantville, CA",
    phone: "(555) 123-4567",
    email: "eleanor.j@example.com",
    emergencyContact: "Michael Johnson (Son) - (555) 987-6543",
    medicalConditions: ["Hypertension", "Type 2 Diabetes", "Mild Arthritis"],
    allergies: ["Penicillin", "Shellfish"],
    bloodType: "A+",
    primaryPhysician: "Dr. Sarah Williams",
    lastCheckup: "March 10, 2025"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-guardian-red" />
          Patient Profile
        </CardTitle>
        <CardDescription>
          Comprehensive profile information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">{patientInfo.name}</h3>
                <p className="text-sm text-muted-foreground">Age: {patientInfo.age}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>DOB: {patientInfo.dob}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{patientInfo.address}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>{patientInfo.phone}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>{patientInfo.email}</span>
            </div>
          </TabsContent>
          
          <TabsContent value="medical" className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Medical Conditions</h4>
              <ul className="list-disc list-inside text-sm">
                {patientInfo.medicalConditions.map((condition, i) => (
                  <li key={i}>{condition}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-1">Allergies</h4>
              <div className="flex flex-wrap gap-2">
                {patientInfo.allergies.map((allergy, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Blood Type</h4>
                <p className="text-sm">{patientInfo.bloodType}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Last Checkup</h4>
                <p className="text-sm">{patientInfo.lastCheckup}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contacts" className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Emergency Contact</h4>
              <p className="text-sm">{patientInfo.emergencyContact}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-1">Primary Physician</h4>
              <p className="text-sm">{patientInfo.primaryPhysician}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PatientProfile;
