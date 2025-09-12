import { useState, useEffect } from 'react';
import { CheckCircle, Mail, Download, ArrowRight } from 'lucide-react';

export default function PaymentSuccessPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [accessCode] = useState(() => {
    return 'SEA' + Math.random().toString(36).substr(2, 8).toUpperCase();
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || 'annual';
    const amount = urlParams.get('amount') || '600';
    console.log('Payment completed:', { plan, amount });
  }, []);

  const handleEmailSubmit = async () => {
    if (!email) return;
    
    try {
      console.log('Customer email:', email, 'Access Code:', accessCode);
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAccessChat = () => {
    window.location.href = '/chat';
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to SEA Smart™!
          </h1>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your Access Code:</p>
            <div className="text-xl font-mono font-bold text-blue-600 bg-white rounded px-3 py-2 border-2 border-blue-200">
              {accessCode}
            </div>
            <p className="text-xs text-gray-500 mt-2">Save this code - you'll need it to log in</p>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-yellow-800 mb-2">📧 Check Your Email</h3>
              <p className="text-sm text-yellow-700">
                We've sent your access details to <strong>{email}</strong>. 
                If you don't see it, check your spam folder.
              </p>
            </div>

            <button
              onClick={handleAccessChat}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Access Your AI Tutor Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help? Email us at{' '}
              <a href="mailto:support@seasmart.tt" className="text-blue-600 hover:underline">
                support@seasmart.tt
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful! 🎉
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for choosing SEA Smart™. To complete your setup and access your AI tutor, 
          please provide your email address.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            onClick={handleEmailSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send My Access Details
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-3">
            <Download className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-left">
              <h4 className="font-medium text-blue-900 text-sm">What's Next?</h4>
              <p className="text-xs text-blue-700 mt-1">
                You'll receive your login details via email, plus a quick start guide 
                to help you create your first SEA practice worksheet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
