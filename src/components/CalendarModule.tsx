import React from 'react';
import { Video, Phone, Calendar, FileText } from 'lucide-react';

export function CalendarModule() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Group Sessions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with your support group seamlessly
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <div className="flex items-start space-x-4">
            <Video className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Next Group Session</h3>
              <p className="text-blue-600 hover:text-blue-700 transition-colors">
                <a href="https://meet.google.com/wkx-gsov-znz" target="_blank" rel="noopener noreferrer">
                  meet.google.com/wkx-gsov-znz
                </a>
              </p>
              <div className="mt-2 flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Today at 2:00 PM EST</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-blue-100 pt-6">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <Phone className="h-4 w-4" />
              <span>Dial-in: +1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FileText className="h-4 w-4" />
              <span>Session Topic: Building Resilience Through DBT</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900">Monday, March 25</h4>
            <p className="text-gray-600 mt-2">DBT Skills Group</p>
            <p className="text-sm text-gray-500">2:00 PM - 3:30 PM EST</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900">Wednesday, March 27</h4>
            <p className="text-gray-600 mt-2">ERP Workshop</p>
            <p className="text-sm text-gray-500">2:00 PM - 3:30 PM EST</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900">Friday, March 29</h4>
            <p className="text-gray-600 mt-2">Mindfulness Practice</p>
            <p className="text-sm text-gray-500">2:00 PM - 3:30 PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}