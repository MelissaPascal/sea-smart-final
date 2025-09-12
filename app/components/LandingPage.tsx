import React from 'react';
import { CheckCircle, Play, Star, ArrowRight, Users, BookOpen, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              From $200 Build to Ministry Demo
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Pocket Tutor
              <br />
              <span className="text-blue-600">12 Months of SEA Prep</span>
              <br />for $600 TTD
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              For less than the cost of ONE extra lesson, get a full year of personalized SEA prep support. That's just $50/month with no hidden fees or subscription worries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://tt.wipayfinancial.com/to_me/pascals_bakery_limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Pay $600 TTD with WiPay
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo First
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>200+ families trust us</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>$50/month, no subscriptions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>Ministry validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Problem Every Caribbean Parent Knows
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="font-semibold text-gray-900 mb-2">SEA Stress</h3>
              <p className="text-gray-600">Parents googling past papers at 11pm, kids crying over homework</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Expensive Tutoring</h3>
              <p className="text-gray-600">$200/month per subject, still no personalized help</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-semibold text-gray-900 mb-2">Generic AI</h3>
              <p className="text-gray-600">ChatGPT doesn't understand Caribbean curriculum or culture</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/20 backdrop-blur rounded-2xl p-8 border border-white/30">
            <h2 className="text-3xl font-bold text-white mb-6">Watch SEA Smart in Action</h2>
            <div className="relative bg-gradient-to-br from-cyan-500 to-orange-500 rounded-xl p-8 cursor-pointer hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Watch the Demo</h3>
                <p className="text-white/90 text-lg">Experience SEA Smart in Action</p>
                <p className="text-white/70 text-sm mt-2">(Click to Play)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                So I Built SEA Smart™
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                An AI assistant that actually understands Caribbean students, curriculum, and culture. Built for $200 using no-code tools and pure determination.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Culturally-rooted and neurodivergent-friendly</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personalized worksheets for grammar, math, comprehension</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Emotional support and confidence building</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Used by parents, teachers, and students</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Demo Interface */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="bg-gray-900 rounded-t-lg p-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">Parent:</p>
                    <p className="font-medium">"My son hates studying. Can you help me create a worksheet on fractions but with cricket examples?"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">SEA Smart:</p>
                    <p className="font-medium">"Absolutely! I'll create a cricket-themed fractions worksheet that makes math fun. Let me design something with batting averages and run rates..."</p>
                  </div>
                  
                  <div className="text-center py-4">
                    <span className="text-xs text-gray-500">✨ Generated in 30 seconds</span>
                  </div>
                </div>
              </div>

              {/* Teacher Testimonials */}
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border border-yellow-200">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">What Teachers Say</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="italic text-gray-800 mb-2">"The way they were being taught didn't match how they learned best."</p>
                    <p className="text-sm font-medium text-gray-600">— POS / Diego Martin School Teacher, Ms. Thomas</p>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="italic text-gray-800 mb-2">"The SEA SMART demo stood out for its focus on personalized learning and emotional support—two areas often missing in traditional EdTech."</p>
                    <p className="text-sm font-medium text-gray-600">— Grenada Ministry of Education Officer</p>
                  </div>
                </div>
              </div>

              {/* Pricing Call-out */}
              <div className="bg-blue-900 text-white rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Your Pocket Tutor</h3>
                <div className="text-3xl font-bold mb-1">$600 TTD</div>
                <p className="text-blue-200 mb-2">One payment • 12 months of support</p>
                <p className="text-sm text-blue-300">vs $3,600+ for traditional tutoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">The Results Speak</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">$600</div>
              <p className="text-blue-200">One-time payment for 12 months</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50</div>
              <p className="text-blue-200">Per month equivalent</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">vs $300+</div>
              <p className="text-blue-200">Monthly tutoring costs</p>
            </div>
          </div>
          
          <blockquote className="text-xl italic mb-8 max-w-3xl mx-auto">
            "The way they were being taught didn't match how they learned best."
            <footer className="text-blue-200 mt-4">— POS / Diego Martin School Teacher, Ms. Thomas</footer>
          </blockquote>
          
          <div className="mt-8 p-6 bg-white/10 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">
              "The SEA SMART demo stood out for its focus on personalized learning and emotional support—two areas often missing in traditional EdTech."
            </p>
            <footer className="text-blue-200">— Grenada MoE Officer</footer>
          </div>
        </div>
      </div>

      {/* Single Offer Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Your Pocket Tutor for 12 Months
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stop paying $300+ per month for extra lessons. Get unlimited SEA prep support for your child at just $50/month equivalent.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-blue-200 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                No Subscriptions • One Payment • 12 Months
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$600 TTD</div>
                <div className="text-lg text-gray-600 mb-1">One-time payment</div>
                <div className="text-sm text-blue-600 font-medium">That's just $50/month • No hidden fees</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Unlimited personalized worksheets for 12 months</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Caribbean curriculum aligned (Std 4 & 5)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Emotional support & confidence building</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Parent guidance & study plans included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Works on any device - phone, tablet, computer</span>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://tt.wipayfinancial.com/to_me/pascals_bakery_limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center text-lg mb-4 inline-block"
              >
                Pay Securely with WiPay - $600 TTD
              </a>
              <p className="text-xs text-gray-500">Secure Caribbean payment • Trusted by thousands</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stop Stressing. Start Supporting.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your child deserves personalized SEA prep that actually works. For less than one month of traditional tutoring, get a full year of support.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-2xl font-bold mb-2">$600 TTD = 12 Months</div>
            <div className="text-gray-300">vs $3,600+ for traditional tutoring</div>
          </div>
          
          <a 
            href="https://tt.wipayfinancial.com/to_me/pascals_bakery_limited" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg inline-block"
          >
            Get SEA Smart Today - $600 TTD
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Built with passion in Trinidad & Tobago 🇹🇹 | Melissa Pascal, Conscious Leader & AI Builder
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
