import React from 'react';
import { Users, Package2, LineChart, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/network-bg.svg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/25 to-emerald-600/25 dark:from-emerald-950/25 dark:to-emerald-900/25"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Streamline Your Supply Chain
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-100 mb-8 max-w-3xl mx-auto">
            Comprehensive management system for tracking products, managing users, and optimizing your entire supply chain process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-emerald-600 text-white dark:bg-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors">
              Start
            </button>
            <button className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            { icon: Users, title: 'User Management', desc: 'Comprehensive user control and role assignment' },
            { icon: Package2, title: 'Batch Tracking', desc: 'Real-time product and batch monitoring' },
            { icon: LineChart, title: 'Analytics', desc: 'Detailed insights and reporting tools' },
            { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security protocols' }
          ].map((item, index) => (
            <div key={index} className="bg-white/25 dark:bg-gray-900/25 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-colors">
              <item.icon className="h-10 w-10 mb-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-800 dark:text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
