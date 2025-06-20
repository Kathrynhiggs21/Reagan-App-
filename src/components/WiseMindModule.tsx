import React from 'react';
import { Target, BookOpen, PenTool, Calendar, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'SMART Goals',
    description: 'Create and track specific, measurable, achievable, relevant, and time-bound goals'
  },
  {
    icon: BookOpen,
    title: 'DBT Diary Cards',
    description: 'Log your daily emotions, behaviors, and skills practice'
  },
  {
    icon: PenTool,
    title: 'Reflection Journal',
    description: 'Document your personal insights and progress'
  },
  {
    icon: Shield,
    title: 'Privacy Controls',
    description: 'Customize what you share with your support network'
  }
];

export function WiseMindModule() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">WiseMind Module</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your personal DBT skills companion
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}