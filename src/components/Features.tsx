import React from 'react';
import { Brain, Calendar, CheckCircle, FileText, Share2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'DBT Skills Suggestions',
    description: 'Get personalized DBT skill recommendations based on your current mood and situation.'
  },
  {
    icon: CheckCircle,
    title: 'Daily Check-ins',
    description: 'Track your progress with automated daily mood and activity check-ins.'
  },
  {
    icon: FileText,
    title: 'Smart Notes',
    description: 'Keep searchable therapy notes and summaries all in one place.'
  },
  {
    icon: Calendar,
    title: 'Goal Tracking',
    description: 'Set SMART goals and get regular reminders to stay motivated.'
  },
  {
    icon: Share2,
    title: 'Optional Sharing',
    description: 'Share progress with your support network when you choose to.'
  }
];

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}