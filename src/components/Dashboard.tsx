import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { User, Package, FileText, Settings as SettingsIcon, LogOut } from 'lucide-react';
import Profile from './dashboard/Profile';
import Inventory from './dashboard/Inventory';
import Offers from './dashboard/Offers';
import Settings from './dashboard/Settings';
import Footer from './Footer';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: User, label: 'Profile', path: 'profile' },
  { icon: Package, label: 'Inventory', path: 'inventory' },
  { icon: FileText, label: 'Offers & Proposals', path: 'offers' },
  { icon: SettingsIcon, label: 'Settings', path: 'settings' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`${isMenuOpen ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 shadow-md transition-all duration-300`}>
        <div className="p-4">
          <h1 className={`text-xl font-bold ${!isMenuOpen && 'hidden'}`}>Dashboard</h1>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <item.icon className="h-5 w-5" />
              {isMenuOpen && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
          <button
            onClick={() => navigate('/')}
            className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5" />
            {isMenuOpen && <span className="ml-3">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex-1">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="offers" element={<Offers />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}