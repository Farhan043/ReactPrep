import React, { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';

// Pricing plan data
const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for getting started with React',
    price: {
      monthly: 0,
      yearly: 0
    },
    features: [
      { name: 'Access to basic React tutorials', included: true },
      { name: '10 practice questions per month', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Basic coding playground', included: true },
      { name: 'Weekly live events', included: false },
      { name: 'Interview preparation kit', included: false },
      { name: 'Performance analytics', included: false },
      { name: 'Custom learning paths', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For serious developers preparing for interviews',
    badge: 'Popular',
    price: {
      monthly: 19,
      yearly: 199
    },
    features: [
      { name: 'Full access to all tutorials', included: true },
      { name: 'Unlimited practice questions', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Advanced coding playground', included: true },
      { name: 'Weekly live events', included: true },
      { name: 'Interview preparation kit', included: true },
      { name: 'Performance analytics', included: true },
      { name: 'Custom learning paths', included: false }
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Complete React mastery with personalized features',
    price: {
      monthly: 39,
      yearly: 399
    },
    features: [
      { name: 'Full access to all tutorials', included: true },
      { name: 'Unlimited practice questions', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Advanced coding playground', included: true },
      { name: 'Weekly live events', included: true },
      { name: 'Interview preparation kit', included: true },
      { name: 'Performance analytics', included: true },
      { name: 'Custom learning paths', included: true },
      { name: 'One-on-one mentoring sessions', included: true },
      { name: 'Job opportunity referrals', included: true }
    ]
  }
];

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[150px] animate-float1" />
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[140px] animate-float2" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Choose the perfect plan to accelerate your React journey
        </p>
      </div>
      
      {/* Billing Toggle */}
      <div className="relative z-10 flex justify-center items-center mb-12">
        <span className={`mr-3 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
        <button 
          onClick={() => setIsYearly(!isYearly)} 
          className="relative inline-flex h-6 w-12 items-center rounded-full bg-[#1a1a2e] p-1 transition-colors"
          aria-pressed={isYearly}
        >
          <span 
            className={`inline-block h-4 w-4 transform rounded-full bg-purple-600 transition-transform ${
              isYearly ? 'translate-x-6' : 'translate-x-0'
            }`} 
          />
        </button>
        <span className={`ml-3 flex items-center gap-1 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
          Yearly <span className="text-xs font-semibold py-0.5 px-1.5 bg-green-600 text-white rounded">Save 15%</span>
        </span>
      </div>
      
      {/* Pricing Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id}
            className={`bg-[#0f0f1a] border rounded-xl overflow-hidden h-full flex flex-col relative ${
              plan.id === 'pro' 
                ? 'border-purple-500 shadow-[0_0_30px_rgba(128,0,255,0.3)]' 
                : 'border-purple-900/30'
            }`}
          >
            {/* Popular Badge */}
            {plan.badge && (
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-purple-600 px-4 py-1 rounded-full text-xs font-semibold">
                {plan.badge}
              </div>
            )}
            
            {/* Plan Header */}
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{plan.description}</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-extrabold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-400 ml-1 text-sm">
                  {plan.price.monthly > 0 ? (isYearly ? '/year' : '/month') : ''}
                </span>
              </div>
            </div>
            
            {/* Features List */}
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className="p-6 mt-auto">
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.id === 'pro'
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/20'
                }`}
              >
                {plan.price.monthly === 0 ? 'Get Started' : 'Subscribe Now'}
                {plan.id === 'pro' && <Sparkles className="inline ml-2" size={16} />}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enterprise Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 bg-[#0f0f1a] border border-purple-900/30 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-400 mb-6">
              Custom React training for your team or organization. Tailored learning paths, dedicated support, and organization-specific content.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Team progress analytics',
                'Custom learning paths',
                'Dedicated account manager',
                'Private team community',
                'Custom integration options'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Check size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#1a1a2e] p-6 rounded-xl">
            <h4 className="font-semibold mb-4">Contact us for a custom quote</h4>
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full p-3 bg-[#0f0f1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full p-3 bg-[#0f0f1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <input 
                type="text" 
                placeholder="Team Size" 
                className="w-full p-3 bg-[#0f0f1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg font-medium bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Money Back Guarantee */}
      <div className="relative z-10 text-center mt-12">
        <p className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <span>🔒 30-day money-back guarantee</span>
          <span className="mx-2">•</span>
          <span>No credit card required for Free plan</span>
          <span className="mx-2">•</span>
          <span>Cancel anytime</span>
        </p>
      </div>
    </div>
  );
} 