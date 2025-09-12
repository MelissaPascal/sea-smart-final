import { useState } from 'react';
import { CreditCard, Check, Star, Users, GraduationCap, BookOpen } from 'lucide-react';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('annual');

  const plans = {
    monthly: {
      price: 80,
      period: 'month',
      total: 80,
      description: 'Flexible month-to-month access'
    },
    annual: {
      price: 600,
      period: 'year',
      total: 600,
      monthlyEquivalent: 50,
      savings: 360,
      popular: true,
      description: 'Best value - save TTD $360 per year'
    }
  };

  const audienceFeatures = {
    parents: {
      icon: Users,
      title: "For Parents",
      features: [
        "Help your child succeed at home",
        "Track progress with detailed worksheets",
        "Cultural content they'll actually relate to",
        "No more expensive tutoring sessions"
      ]
    },
    teachers: {
      icon: GraduationCap,
      title: "For Teachers",
      features: [
        "Classroom-ready materials in seconds",
        "SEA-aligned curriculum support",
        "Differentiated learning for all students",
        "Save hours on lesson planning"
      ]
    },
    tutors: {
      icon: BookOpen,
      title: "For Tutors",
      features: [
        "Professional-grade practice materials",
        "Multiple subjects and grade levels",
        "Impress parents with quality resources",
        "Scale your tutoring business"
      ]
    }
  };

  const handlePayment = (planType) => {
    const amount = plans[planType].price;
    const description = `SEA-Smart-${planType}-Plan-${amount}TTD`;
    
    // WiPay URL with dynamic parameters
    const wipayUrl = `https://tt.wipayfinancial.com/to_me/pascals_bakery_limited?amount=${amount}&description=${description}&currency=TTD`;
    
    // Open in same window to complete payment
    window.location.href = wipayUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📘 Your Pocket Tutor for Caribbean Success
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Unlock AI-Powered SEA Prep Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for <strong>teachers, parents, and tutors</strong> guiding Caribbean students. 
            Get unlimited practice sheets, study support, and cultural learning tools.
          </p>
        </div>

        {/* Audience-Specific Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(audienceFeatures).map(([key, audience]) => {
            const Icon = audience.icon;
            return (
              <div key={key} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">{audience.title}</h3>
                </div>
                <ul className="space-y-2">
                  {audience.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Annual Plan */}
          <div className="relative rounded-2xl p-8 bg-white shadow-2xl border-2 border-blue-500 transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4" />
                Best Value - Save TTD $360
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Annual Plan
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">
                TTD $600
              </div>
              <div className="text-green-600 font-medium">
                Only TTD $50/month
              </div>
              <div className="text-gray-600 text-sm mt-2">
                Save TTD $360 vs monthly plan
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                Unlimited AI worksheet generation
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                All subjects: Math, English, Science
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                Caribbean cultural context
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                Instant PDF downloads
              </div>
            </div>

            <button
              onClick={() => handlePayment('annual')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              Choose Annual Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="rounded-2xl p-8 bg-white shadow-xl border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Monthly Plan
              </h3>
              <div className="text-4xl font-bold text-gray-700 mb-1">
                TTD $80
              </div>
              <div className="text-gray-600">per month</div>
              <div className="text-gray-500 text-sm mt-2">
                Flexible month-to-month
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                All the same features
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500" />
                No long-term commitment
              </div>
              <div className="h-6"></div> {/* Spacer */}
            </div>

            <button
              onClick={() => handlePayment('monthly')}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              Choose Monthly Plan
            </button>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Whether you're a <strong>parent helping your child at home</strong>, a <strong>teacher looking for classroom-ready support</strong>, 
            or a <strong>tutor guiding multiple students</strong>—SEA Smart™ is your trusted study partner.
          </p>
          
          <div className="flex justify-center items-center gap-8 text-gray-500 text-sm">
            <div>🔒 Secure Payment</div>
            <div>🇹🇹 Trinidad & Tobago</div>
            <div>📚 SEA Aligned</div>
            <div>💰 30-Day Guarantee</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-yellow-400 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 italic mb-2">
              "Finally, worksheets that actually speak to my students' experiences. My SEA prep classes have never been more engaged!"
            </p>
            <p className="text-sm text-gray-500">— Ms. Johnson, Secondary School Teacher, Port of Spain</p>
          </div>
        </div>
      </div>
    </div>
  );
}
