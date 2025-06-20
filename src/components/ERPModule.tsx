import React from 'react';
import { BarChart3, Upload, Brain, Activity } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Hierarchy Builder',
    description: 'Create and track your exposure hierarchy with SUDs ratings'
  },
  {
    icon: Activity,
    title: 'Progress Tracking',
    description: 'Log daily exposures and monitor your progress over time'
  },
  {
    icon: Upload,
    title: 'Evidence Collection',
    description: 'Upload photos and audio recordings of your exposure work'
  },
  {
    icon: Brain,
    title: 'AI Guidance',
    description: 'Get smart suggestions for your next exposure exercise'
  }
];

export function ERPModule() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">ERP Mind Module</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your companion for exposure and response prevention therapy
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors">
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}