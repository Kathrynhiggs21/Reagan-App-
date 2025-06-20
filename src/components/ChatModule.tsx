import React from 'react';
import { MessageSquare, Upload, Users, Bot, Lock } from 'lucide-react';

export function ChatModule() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Secure Group Chat</h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with your support network in a private, secure environment
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Chat Preview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Group Support</h3>
              </div>
              <Lock className="h-4 w-4 text-gray-400" />
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Share your progress and get support from the group</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Bot className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">AI assistance available when needed</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors">
              Join Chat
            </button>
          </div>

          {/* File Sharing */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">File Sharing</h3>
              </div>
              <Lock className="h-4 w-4 text-gray-400" />
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center mb-6">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">Upload files securely</p>
              <p className="text-xs text-gray-500">Supports PDF, images, and notes</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-blue-600 font-medium">PDF</span>
                  </div>
                  <span className="text-sm text-gray-600">Weekly Progress Notes</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <Upload className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-green-600 font-medium">IMG</span>
                  </div>
                  <span className="text-sm text-gray-600">Mood Tracker Chart</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <Upload className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}