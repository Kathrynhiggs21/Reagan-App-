import React from 'react';
import { QuoteCard } from './QuoteCard';

const quotes = [
  {
    text: "Support for every journey.",
    tag: "Motivational" as const,
    isFavorite: true
  },
  {
    text: "Healing isn't linear — it's lived.",
    tag: "DBT" as const,
    hasNotification: true
  },
  {
    text: "You're allowed to go slow. Just don't stop.",
    tag: "ERP" as const
  }
];

export function QuotesSection() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Daily Inspiration</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote) => (
            <QuoteCard key={quote.text} {...quote} />
          ))}
        </div>
      </div>
    </div>
  );
}