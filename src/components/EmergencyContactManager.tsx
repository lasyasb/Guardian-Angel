
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Plus, MapPin, AlertCircle } from 'lucide-react';

export const EmergencyContactManager: React.FC = () => {
  // Sample emergency contacts
  const emergencyContacts = [
    { id: 1, name: "Michael Johnson", relation: "Son", phone: "(555) 987-6543", address: "456 Oak Lane, Pleasantville, CA", priority: "Primary" },
    { id: 2, name: "Sarah Williams", relation: "Doctor", phone: "(555) 234-5678", address: "123 Medical Center, Pleasantville, CA", priority: "Medical" },
    { id: 3, name: "Jennifer Chen", relation: "Neighbor", phone: "(555) 345-6789", address: "125 Maple Street, Pleasantville, CA", priority: "Secondary" }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-guardian-red" />
            Emergency Contacts
          </CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Add Contact
          </Button>
        </div>
        <CardDescription>
          Quick access to important contacts in case of emergency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium flex items-center">
                    {contact.name}
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      contact.priority === "Primary" ? "bg-red-100 text-red-700" : 
                      contact.priority === "Medical" ? "bg-blue-100 text-blue-700" : 
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {contact.priority}
                    </span>
                  </h4>
                  <p className="text-xs text-muted-foreground">{contact.relation}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="h-7 w-7 text-guardian-blue">
                    <Phone className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-7 w-7 text-guardian-blue">
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-muted-foreground mb-1">
                <Phone className="h-3 w-3 mr-1" />
                <span>{contact.phone}</span>
              </div>
              
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{contact.address}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContactManager;
