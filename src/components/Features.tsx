import React from 'react';
import { Users, Package2, FileText, Activity, Network, Settings } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user control with role-based access and activity tracking',
      details: ['User listing and profiles', 'Role management', 'Activity timeline', 'ProfilType assignments']
    },
    {
      icon: Package2,
      title: 'Products & Batches',
      description: 'Complete product lifecycle management and batch tracking system',
      details: ['Product cataloging', 'Batch tracking', 'Property management', 'Location tracking']
    },
    {
      icon: FileText,
      title: 'Offers & Proposals',
      description: 'Streamlined offer management and proposal tracking',
      details: ['Offer dashboard', 'Proposal pipeline', 'Visibility controls', 'Price management']
    },
    {
      icon: Activity,
      title: 'Transactions',
      description: 'Secure transaction handling and comprehensive audit trails',
      details: ['Transaction logging', 'Chain hash tracking', 'Commentary system', 'Audit history']
    },
    {
      icon: Network,
      title: 'Supply Chain View',
      description: 'Visual supply chain mapping and company relationship tracking',
      details: ['Flow visualization', 'Company tracking', 'Type filtering', 'Relationship mapping']
    },
    {
      icon: Settings,
      title: 'System Settings',
      description: 'Flexible configuration options and system management tools',
      details: ['ProfilType management', 'Permission settings', 'System configuration', 'Audit logging']
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Supply Chain Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform provides all the tools you need to manage your entire supply chain process efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all p-6">
              <feature.icon className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-500 dark:text-gray-400">
                    <span className="h-1.5 w-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}