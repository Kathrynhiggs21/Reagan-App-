import React from 'react';
import { Brain, UserCircle } from 'lucide-react';
import { useAuthStore } from '../store/auth';

export function Header() {
  const { user, signOut, isConfigured } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">theCenter</span>
          </div>
          
          {!isConfigured ? (
            <div className="flex items-center">
              <span className="text-amber-600 mr-2">Supabase not configured</span>
              <button 
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => alert('Please connect to Supabase to enable authentication')}
              >
                <UserCircle className="h-5 w-5" />
                <span>Connect</span>
              </button>
            </div>
          ) : user ? (
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <UserCircle className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          ) : (
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <UserCircle className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}