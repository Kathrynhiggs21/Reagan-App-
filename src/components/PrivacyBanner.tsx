import React from 'react';

export function PrivacyBanner() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Your Privacy Matters</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Your data is private by default. You have complete control over what you share and with whom. We prioritize your privacy and security at every step.
          </p>
        </div>
      </div>
    </div>
  );
}