import React from 'react';

export default function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Notifications</h3>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email notifications
            </label>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Privacy</h3>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Public profile
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}