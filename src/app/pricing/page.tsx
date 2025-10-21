'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Check, ArrowRight, Calculator, TrendingUp } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 499,
    description: 'Perfect for small teams getting started with SaaS management',
    features: [
      'Up to 25 applications',
      'Basic spend tracking',
      'Renewal alerts',
      'Email support',
      'Monthly reports',
      'Single user account',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 1299,
    description: 'For growing businesses with complex SaaS ecosystems',
    features: [
      'Up to 100 applications',
      'Advanced analytics & insights',
      'Automated renewal management',
      'Duplicate detection',
      'Priority support',
      'Up to 5 user accounts',
      'Custom integrations',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete SaaS management for large organizations',
    features: [
      'Unlimited applications',
      'AI-powered optimization',
      'Vendor negotiation support',
      'Dedicated account manager',
      'Custom workflows',
      'Unlimited users',
      'Advanced security & compliance',
      'White-glove onboarding',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [employees, setEmployees] = useState(250);
  const [currentSpend, setCurrentSpend] = useState(25000);
  const [subscriptions, setSubscriptions] = useState(50);

  const savings = Math.round(currentSpend * 0.3);
  const annualSavings = savings * 12;
  const roiPercentage = Math.round((annualSavings / (1299 * 12)) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100">
              Choose the plan that fits your organization's needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-blue-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <div>
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                    ) : (
                      <div className="text-5xl font-bold text-gray-900">{plan.price}</div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                <Calculator size={16} className="mr-2" />
                Calculate Your ROI
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                See How Much You Could Save
              </h2>
              <p className="text-lg text-gray-600">
                Adjust the sliders below to estimate your potential savings with Zylo
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Input Side */}
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Number of Employees
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="50"
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>50</span>
                      <span className="font-bold text-blue-600">{employees}</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Current Monthly SaaS Spend
                    </label>
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="1000"
                      value={currentSpend}
                      onChange={(e) => setCurrentSpend(Number(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>$5k</span>
                      <span className="font-bold text-blue-600">${(currentSpend / 1000).toFixed(0)}k</span>
                      <span>$100k</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Number of Subscriptions
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="5"
                      value={subscriptions}
                      onChange={(e) => setSubscriptions(Number(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>10</span>
                      <span className="font-bold text-blue-600">{subscriptions}</span>
                      <span>500</span>
                    </div>
                  </div>
                </div>

                {/* Results Side */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="text-green-600 mr-2" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Your Potential Savings</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-sm text-gray-600 mb-1">Monthly Savings</p>
                      <p className="text-4xl font-bold text-green-600">
                        ${savings.toLocaleString()}
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
                      <p className="text-3xl font-bold text-gray-900">
                        ${annualSavings.toLocaleString()}
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-sm text-gray-600 mb-1">ROI in First Year</p>
                      <p className="text-3xl font-bold text-blue-600">{roiPercentage}%</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-green-800 font-medium">
                        Based on average 30% cost reduction from our customers
                      </p>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-md flex items-center justify-center">
                    Get Your Custom Quote
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quick & Easy Implementation
              </h2>
              <p className="text-lg text-gray-600">
                Get started in weeks, not months
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Discovery Call</h3>
                <p className="text-sm text-gray-600">30-minute consultation</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Integration</h3>
                <p className="text-sm text-gray-600">1-2 weeks setup</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Team Training</h3>
                <p className="text-sm text-gray-600">1 week onboarding</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Go Live</h3>
                <p className="text-sm text-gray-600">Start saving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Free 14-Day Trial
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
