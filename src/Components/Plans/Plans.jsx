'use client';
import React, { useState } from "react";
import {
  Check,
  Star,
  Users,
  Clock,
  Zap,
  Trophy,
  ArrowRight,
} from "lucide-react";
import Footer from "../Footer/Footer";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "basic",
      name: "Basic",
      subtitle: "Perfect for beginners",
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        "Access to gym equipment",
        "Basic workout plans",
        "Locker room access",
        "Community support",
        "Mobile app access",
      ],
      limitations: [
        "Limited peak hours access",
        "No personal training",
        "No group classes",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      subtitle: "Most popular choice",
      monthlyPrice: 59,
      yearlyPrice: 590,
      popular: true,
      features: [
        "Unlimited gym access",
        "All group fitness classes",
        "Personal training (2 sessions/month)",
        "Nutrition consultation",
        "Premium locker with towel service",
        "Mobile app with workout tracking",
        "Guest passes (2/month)",
      ],
      limitations: [],
    },
    {
      id: "elite",
      name: "Elite",
      subtitle: "Ultimate fitness experience",
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "VIP locker room access",
        "Massage therapy (2 sessions/month)",
        "Nutritionist meal plans",
        "Priority class booking",
        "Unlimited guest passes",
        "Exclusive elite-only areas",
        "Recovery suite access",
      ],
      limitations: [],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      plan: "Pro",
      rating: 5,
      text: "The Pro plan has everything I need. The personal training sessions have been game-changing!",
    },
    {
      name: "Mike Chen",
      plan: "Elite",
      rating: 5,
      text: "Elite membership is worth every penny. The recovery suite and unlimited training are incredible.",
    },
    {
      name: "Emma Davis",
      plan: "Basic",
      rating: 4,
      text: "Great value for money. Perfect for someone just starting their fitness journey.",
    },
  ];

  const getPrice = (plan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Choose Your Path
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock your potential with our premium fitness plans designed for
              every fitness level
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`text-lg ${
                  billingCycle === "monthly" ? "text-white" : "text-gray-400"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly"
                  )
                }
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === "yearly"
                      ? "translate-x-9"
                      : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg ${
                  billingCycle === "yearly" ? "text-white" : "text-gray-400"
                }`}
              >
                Yearly
              </span>
              {billingCycle === "yearly" && (
                <span className="bg-gradient-to-r from-green-400 to-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Save up to 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-900/50 to-blue-900/50 border-2 border-purple-500 shadow-2xl shadow-purple-500/25"
                  : "bg-gray-800/50 border border-gray-700 hover:border-gray-600"
              } ${selectedPlan === plan.id ? "ring-2 ring-purple-400" : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.subtitle}</p>

                <div className="mb-4">
                  <span className="text-5xl font-bold">${getPrice(plan)}</span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                {billingCycle === "yearly" && (
                  <div className="text-green-400 text-sm font-semibold">
                    Save {getSavings(plan)}% annually
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 opacity-60"
                  >
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-gray-500"></div>
                    </div>
                    <span className="text-gray-500 line-through">
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
                    : selectedPlan === plan.id
                    ? "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
              >
                <span>
                  {selectedPlan === plan.id ? "Selected" : "Get Started"}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Plans;
