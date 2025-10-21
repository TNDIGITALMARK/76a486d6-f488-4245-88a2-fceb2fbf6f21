'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { DollarSign, BarChart3, TrendingUp, AlertCircle, Calendar, Users, Building2, Filter } from 'lucide-react';

const mockSubscriptions = [
  { id: 1, name: 'Salesforce Enterprise', category: 'CRM', cost: 8900, users: 120, renewal: '2025-03-15', status: 'active' },
  { id: 2, name: 'Slack Business Plus', category: 'Communication', cost: 1200, users: 250, renewal: '2025-04-22', status: 'active' },
  { id: 3, name: 'Zoom Pro', category: 'Video Conferencing', cost: 890, users: 200, renewal: '2025-03-28', status: 'active' },
  { id: 4, name: 'Dropbox Business', category: 'Storage', cost: 1500, users: 180, renewal: '2025-05-10', status: 'active' },
  { id: 5, name: 'Adobe Creative Cloud', category: 'Design', cost: 3200, users: 45, renewal: '2025-04-05', status: 'duplicate' },
  { id: 6, name: 'Microsoft 365', category: 'Productivity', cost: 4200, users: 250, renewal: '2025-06-01', status: 'active' },
];

const mockAlerts = [
  { id: 1, type: 'duplicate', message: 'Duplicate subscription detected: Adobe Creative Cloud', severity: 'high', savings: 1200 },
  { id: 2, type: 'renewal', message: 'Salesforce Enterprise renewal in 30 days', severity: 'medium', savings: 0 },
  { id: 3, type: 'unused', message: '15 unused Zoom licenses detected', severity: 'medium', savings: 450 },
  { id: 4, type: 'optimization', message: 'Switch to annual billing for 12% savings', severity: 'low', savings: 2800 },
];

export default function Demo() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubscription, setSelectedSubscription] = useState<number | null>(null);

  const totalSpend = mockSubscriptions.reduce((acc, sub) => acc + sub.cost, 0);
  const potentialSavings = mockAlerts.reduce((acc, alert) => acc + alert.savings, 0);

  const filteredSubscriptions = selectedCategory === 'all'
    ? mockSubscriptions
    : mockSubscriptions.filter(sub => sub.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Interactive Product Demo
            </h1>
            <p className="text-xl text-blue-100">
              Explore Zylo's powerful dashboard with real mock data from Acme Corp
            </p>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Monthly Spend</span>
                <DollarSign className="text-blue-600" size={20} />
              </div>
              <p className="text-3xl font-bold text-gray-900">${totalSpend.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp size={12} className="mr-1" />
                Tracking 47 apps
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Active Subscriptions</span>
                <BarChart3 className="text-green-600" size={20} />
              </div>
              <p className="text-3xl font-bold text-gray-900">47</p>
              <p className="text-xs text-gray-500 mt-1">Across 12 departments</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Potential Savings</span>
                <TrendingUp className="text-purple-600" size={20} />
              </div>
              <p className="text-3xl font-bold text-gray-900">${potentialSavings.toLocaleString()}</p>
              <p className="text-xs text-purple-600 mt-1">30% cost reduction</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Upcoming Renewals</span>
                <Calendar className="text-orange-600" size={20} />
              </div>
              <p className="text-3xl font-bold text-gray-900">12</p>
              <p className="text-xs text-orange-600 mt-1">Next 90 days</p>
            </div>
          </div>

          {/* Alerts Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <AlertCircle className="mr-2 text-orange-500" size={24} />
                Smart Alerts & Recommendations
              </h2>
              <span className="text-sm text-gray-500">{mockAlerts.length} active alerts</span>
            </div>
            <div className="space-y-3">
              {mockAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.severity === 'high'
                      ? 'bg-red-50 border-red-500'
                      : alert.severity === 'medium'
                      ? 'bg-orange-50 border-orange-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <AlertCircle
                        size={20}
                        className={
                          alert.severity === 'high'
                            ? 'text-red-600'
                            : alert.severity === 'medium'
                            ? 'text-orange-600'
                            : 'text-blue-600'
                        }
                      />
                      <span className="text-gray-800 font-medium">{alert.message}</span>
                    </div>
                    {alert.savings > 0 && (
                      <span className="text-green-700 font-semibold text-sm">
                        Save ${alert.savings}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriptions Table */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Subscription Overview</h2>
              <div className="flex items-center space-x-3">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="CRM">CRM</option>
                  <option value="Communication">Communication</option>
                  <option value="Video Conferencing">Video Conferencing</option>
                  <option value="Storage">Storage</option>
                  <option value="Design">Design</option>
                  <option value="Productivity">Productivity</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-3 text-sm font-semibold text-gray-700">Application</th>
                    <th className="pb-3 text-sm font-semibold text-gray-700">Category</th>
                    <th className="pb-3 text-sm font-semibold text-gray-700">Monthly Cost</th>
                    <th className="pb-3 text-sm font-semibold text-gray-700">Users</th>
                    <th className="pb-3 text-sm font-semibold text-gray-700">Renewal Date</th>
                    <th className="pb-3 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubscriptions.map((sub) => (
                    <tr
                      key={sub.id}
                      onClick={() => setSelectedSubscription(sub.id === selectedSubscription ? null : sub.id)}
                      className={`border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors ${
                        selectedSubscription === sub.id ? 'bg-blue-50' : ''
                      }`}
                    >
                      <td className="py-4 text-gray-900 font-medium">{sub.name}</td>
                      <td className="py-4 text-gray-600">{sub.category}</td>
                      <td className="py-4 text-gray-900 font-semibold">${sub.cost.toLocaleString()}</td>
                      <td className="py-4 text-gray-600 flex items-center">
                        <Users size={16} className="mr-1" />
                        {sub.users}
                      </td>
                      <td className="py-4 text-gray-600">{sub.renewal}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            sub.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedSubscription && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Subscription Details</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Click on rows to explore detailed insights, usage metrics, and optimization recommendations.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Contract Length</p>
                    <p className="font-semibold text-gray-900">12 months</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Department</p>
                    <p className="font-semibold text-gray-900">Sales</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Active Usage</p>
                    <p className="font-semibold text-green-600">87%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Cost per User</p>
                    <p className="font-semibold text-gray-900">$74.17</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See Your Own Data?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Request a personalized demo with your actual SaaS spending data
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
              Schedule Your Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
