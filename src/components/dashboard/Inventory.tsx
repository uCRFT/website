import React from 'react';

export default function Inventory() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Quantity</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Product A</td>
                <td className="p-2">150</td>
                <td className="p-2">In Stock</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Product B</td>
                <td className="p-2">75</td>
                <td className="p-2">Low Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}