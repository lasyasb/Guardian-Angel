
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Phone, Video, Send, Image, Paperclip, Users } from 'lucide-react';

export const CommunicationPortal: React.FC = () => {
  const [message, setMessage] = useState('');
  
  // Sample messages
  const messages = [
    { id: 1, sender: 'Michael (Son)', content: 'Hi Mom, how are you feeling today?', time: '10:30 AM', isUser: false },
    { id: 2, sender: 'You', content: 'I\'m doing well, just took my morning medication.', time: '10:45 AM', isUser: true },
    { id: 3, sender: 'Lisa (Nurse)', content: 'Remember to drink plenty of water today, it\'s going to be hot.', time: '11:15 AM', isUser: false },
    { id: 4, sender: 'You', content: 'Thank you for the reminder, Lisa!', time: '11:20 AM', isUser: true },
  ];

  const careTeam = [
    { name: 'Dr. Sarah Johnson', role: 'Primary Physician', status: 'Available', lastContact: 'Today' },
    { name: 'Michael Chen', role: 'Family Caregiver', status: 'Away', lastContact: 'Yesterday' },
    { name: 'Lisa Rodriguez', role: 'Home Health Nurse', status: 'Available', lastContact: 'Today' }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here we would typically add the message to the messages array
      // For now, just clear the input
      setMessage('');
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-guardian-blue" />
          Communication Portal
        </CardTitle>
        <CardDescription>
          Stay connected with care team and family
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="messages">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="contacts">Care Team</TabsTrigger>
          </TabsList>
          
          <TabsContent value="messages" className="space-y-4">
            <div className="flex space-x-2 mb-4">
              <Button variant="outline" className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button variant="outline" className="flex-1">
                <Video className="h-4 w-4 mr-2" />
                Video
              </Button>
            </div>
            
            <div className="border rounded-lg h-[300px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser ? 'bg-guardian-blue text-white rounded-tr-none' : 'bg-gray-100 rounded-tl-none'
                  }`}>
                    {!msg.isUser && (
                      <p className="text-xs font-medium mb-1">{msg.sender}</p>
                    )}
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.isUser ? 'text-blue-100' : 'text-gray-500'}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Image className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input 
                placeholder="Type a message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" className="h-10 w-10" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="contacts">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">Care Team Members</h4>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Manage
                </Button>
              </div>
              
              {careTeam.map((member, index) => (
                <div key={index} className="p-3 border rounded-lg flex justify-between items-center">
                  <div>
                    <h5 className="font-medium">{member.name}</h5>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <div className="flex items-center mt-1">
                      <span className={`w-2 h-2 rounded-full mr-2 ${member.status === 'Available' ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                      <span className="text-xs">{member.status}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CommunicationPortal;
