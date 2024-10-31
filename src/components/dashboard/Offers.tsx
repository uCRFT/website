import React from 'react';

export default function Offers() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Offers & Proposals</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Offer #1234</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Status: Pending</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Proposal #5678</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Status: Accepted</p>
          </div>
        </div>
      </div>
    </div>
  );
}