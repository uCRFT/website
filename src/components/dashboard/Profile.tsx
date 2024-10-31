import React, { useState } from 'react';

interface Company {
  id: string;
  name: string;
  role: string;
}

export default function Profile() {
  const [companies, setCompanies] = useState<Company[]>([
    { id: '1', name: 'TechCorp Inc.', role: 'Admin' },
    { id: '2', name: 'Global Solutions Ltd.', role: 'Member' }
  ]);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [newCompany, setNewCompany] = useState({ name: '', role: 'Member' });

  const handleAddCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCompany.name) {
      setCompanies([...companies, { ...newCompany, id: Date.now().toString() }]);
      setNewCompany({ name: '', role: 'Member' });
      setShowAddCompany(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
              Save Changes
            </button>
          </form>
        </div>

        {/* Company Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Linked Companies</h3>
            <button
              onClick={() => setShowAddCompany(true)}
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-sm"
            >
              Link New Company
            </button>
          </div>

          {/* Company List */}
          <div className="space-y-4">
            {companies.map((company) => (
              <div 
                key={company.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <h4 className="font-medium">{company.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Role: {company.role}</p>
                </div>
                <button 
                  onClick={() => setCompanies(companies.filter(c => c.id !== company.id))}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Add Company Form */}
          {showAddCompany && (
            <div className="mt-4 p-4 border rounded-lg dark:border-gray-700">
              <form onSubmit={handleAddCompany} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    value={newCompany.name}
                    onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <select
                    value={newCompany.role}
                    onChange={(e) => setNewCompany({ ...newCompany, role: e.target.value })}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  >
                    <option value="Member">Member</option>
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  >
                    Add Company
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddCompany(false)}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}