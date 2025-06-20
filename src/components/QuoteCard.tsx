import React from 'react';
import { Quote, Heart, Bell } from 'lucide-react';

interface QuoteProps {
  text: string;
  tag: 'DBT' | 'ERP' | 'Motivational';
  isFavorite?: boolean;
  hasNotification?: boolean;
}

export function QuoteCard({ text, tag, isFavorite = false, hasNotification = false }: QuoteProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 relative">
      <Quote className="h-8 w-8 text-blue-200 absolute top-4 left-4" />
      <div className="ml-12">
        <p className="text-lg text-gray-800 font-medium italic mb-4">{text}</p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {tag}
          </span>
          <div className="flex gap-2">
            <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}>
              <Heart className="h-5 w-5" />
            </button>
            <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${hasNotification ? 'text-blue-500' : 'text-gray-400'}`}>
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}