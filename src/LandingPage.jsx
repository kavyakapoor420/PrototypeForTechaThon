export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h1 className="text-5xl font-bold">Track Your Investments in One Place</h1>
          <p className="mt-4 text-lg">Manage mutual funds, stocks, deposits, and gold seamlessly.</p>
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold">
            Get Started
          </button>
        </section>
  
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16">
          {/* Portfolio Summary Card with onClick */}
          <div 
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center cursor-pointer" 
            onClick={() => window.location.href='/portfolio-summary'}
          >
            <h2 className="text-xl font-bold">Portfolio Summary</h2>
            <p className="mt-2">View your total investments and track profit/loss in real-time.</p>
          </div>

          {/* Visual Insights Card */}
          <div 
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center cursor-pointer" 
            onClick={() => window.location.href='/visual-insights'}
          >
            <h2 className="text-xl font-bold">Visual Insights</h2>
            <p className="mt-2">Analyze your investments with bar charts and pie charts.</p>
          </div>

          {/* Secure & Reliable Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-xl font-bold">Secure & Reliable</h2>
            <p className="mt-2">Your data is encrypted and protected with top security measures.</p>
          </div>
        </section>
      </div>
    );
}
