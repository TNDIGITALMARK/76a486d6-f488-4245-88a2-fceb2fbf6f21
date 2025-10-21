'use client';

import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { ArrowRight, DollarSign, BarChart3, Shield, Clock, CheckCircle, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Zap size={16} className="mr-2" />
              Trusted by 500+ companies worldwide
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Take Control of Your
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> SaaS Spending</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Zylo provides complete visibility into your software subscriptions, helping you discover, manage, and optimize SaaS spending by up to 30%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                Request a Demo
              </button>
              <Link
                href="/demo"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-md flex items-center justify-center"
              >
                Explore Product
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Animated Dashboard Preview */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-700">Total Spend</span>
                      <DollarSign className="text-blue-600" size={20} />
                    </div>
                    <p className="text-3xl font-bold text-blue-900">$23,450</p>
                    <p className="text-xs text-blue-600 mt-1">Monthly</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-700">Active Subscriptions</span>
                      <BarChart3 className="text-green-600" size={20} />
                    </div>
                    <p className="text-3xl font-bold text-green-900">47</p>
                    <p className="text-xs text-green-600 mt-1">Applications</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-700">Potential Savings</span>
                      <Shield className="text-purple-600" size={20} />
                    </div>
                    <p className="text-3xl font-bold text-purple-900">$7,035</p>
                    <p className="text-xs text-purple-600 mt-1">30% reduction</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Recent Activity</span>
                    <Clock size={16} />
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Salesforce Enterprise renewed</span>
                      <span className="text-green-600 font-medium">$8,900/mo</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Duplicate Zoom licenses detected</span>
                      <span className="text-orange-600 font-medium">Save $450</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Companies Choose Zylo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete visibility and control over your SaaS ecosystem in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduce Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify duplicate subscriptions, unused licenses, and optimization opportunities to reduce SaaS spending by up to 30%.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Visibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover all SaaS applications across your organization, track usage metrics, and understand spending patterns in real-time.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automate Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline renewal workflows, automate vendor negotiations, and manage the entire subscription lifecycle from one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-3xl font-bold text-gray-400">Acme Corp</div>
              <div className="text-3xl font-bold text-gray-400">TechFlow</div>
              <div className="text-3xl font-bold text-gray-400">DataSync</div>
              <div className="text-3xl font-bold text-gray-400">CloudWave</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">JD</span>
                  </div>
                </div>
                <div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    "Zylo has been transformational for our IT operations. We discovered over $200K in wasted spend and gained complete visibility into our SaaS ecosystem within the first month."
                  </p>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-500">VP of IT, Acme Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your SaaS Spending?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies saving millions with Zylo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
                Schedule a Demo
              </button>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2" />
                <span className="text-sm">Free 14-day trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
