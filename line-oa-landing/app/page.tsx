import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-line-green to-line-dark text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Protect Yourself from Scams
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Real-time fraud detection powered by intelligent threat analysis.
              Stay one step ahead of scammers.
            </p>
            <a
              href="#add-line"
              className="inline-block bg-white text-line-green font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Add LINE Official Account Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          How We Protect You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-t-4 border-line-green">
            <div className="w-16 h-16 bg-line-green rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Personalized Scam Alerts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Receive customized threat intelligence delivered in real-time. We
              transform complex global fraud trends into timely,
              easy-to-understand alerts that help you identify emerging scam
              patterns before you encounter them.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-t-4 border-blue-500">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Real-Time Verification
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Submit suspicious content for instant analysis:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Screenshots (Chats, Bank Slips, SMS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Files (APKs, PDFs, Invoices)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Audio/Video Recordings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Bank Accounts, Phone Numbers, URLs</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Verified Intelligence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every risk score comes with detailed sources and explanations. We
              leverage global databases and fraud patterns to provide
              transparent, trustworthy assessments you can rely on.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-t-4 border-red-500">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Instant Action
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get immediate recommendations with automated enforcement tools.
              Generate legal evidence packs with one click and connect directly
              with Royal Thai Police and AOC 1441 to report fraud quickly and
              effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Placeholders Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            See It In Action
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ad Placeholder 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-w-sm">
              {/* 1. Added flex, items-center, and justify-center to center the image */}
              <div className="relative w-full aspect-[2/3] flex items-center justify-center bg-white">
                <Image
                  src="/ad-image-1.png"
                  alt="Scam Protection Features"
                  // width={300}
                  // height={500}
                  fill
                  // Use object-contain so the tall image doesn't get cut off
                  // if the container ratio differs from the image ratio
                  className="object-contain"
                />
              </div>

              {/* 2. The Text Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Personality Quizzes</h3>
                <p className="text-gray-600 text-sm">
                  Get to know yourself better for better scam risk avoidance
                </p>
              </div>
            </div>

            {/* Ad Placeholder 2 - QR Code */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-4 border-line-green max-w-sm">
              {/* Added max-w-sm to keep the whole card from getting too huge */}

              <div
                className="aspect-square bg-gradient-to-br from-line-green/10 to-line-dark/10 flex flex-col items-center justify-center relative p-8"
                id="add-line"
              >
                {/* 1. The container for the Image needs a defined size and position: relative */}
                <div className="relative w-48 h-48 mb-4">
                  <Image
                    src="/qr-code.png"
                    alt="Scam Protection Features"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-line-green font-bold text-lg mb-1">
                    Scan QR Code
                  </p>
                  <p className="text-gray-600 text-sm">
                    Add LINE Official Account
                  </p>
                </div>
                <div className="relative w-48 h-48 mb-4">
                  <Image
                    src="/hongyok-mascot.png"
                    alt="Scam Protection Features"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 bg-line-green text-white text-center">
                <h3 className="font-bold text-lg mb-2">Add Our LINE OA</h3>
                <p className="text-sm opacity-90">
                  Scan to start protecting yourself today!
                </p>
              </div>
            </div>

            {/* Ad Placeholder 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-w-sm">
              {/* 1. Added flex, items-center, and justify-center to center the image */}
              <div className="relative w-full aspect-[2/3] flex items-center justify-center bg-white">
                <Image
                  src="/ad-image-3.png"
                  alt="Scam Protection Features"
                  // width={300}
                  // height={500}
                  fill
                  // Use object-contain so the tall image doesn't get cut off
                  // if the container ratio differs from the image ratio
                  className="object-contain"
                />
              </div>

              {/* 2. The Text Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Validate your doubts</h3>
                <p className="text-gray-600 text-sm">
                  When unsure whether certain text or pattern is scam or not,
                  you can ask Hong Yok
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-line-green to-line-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Stay Protected?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of users who trust our intelligent fraud detection
            system
          </p>
          <a
            href="#add-line"
            className="inline-block bg-white text-line-green font-bold px-10 py-5 rounded-full text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Add LINE Official Account
          </a>
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm opacity-90">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Real-time Protection
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              100% Free
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Verified Sources
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                About Our Service
              </h3>
              <p className="text-sm leading-relaxed">
                Protecting users across Thailand with intelligent fraud
                detection and real-time scam alerts.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-line-green transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-line-green transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-line-green transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Partners</h3>
              <ul className="space-y-2 text-sm">
                <li>Royal Thai Police</li>
                <li>AOC 1441</li>
                <li>Anti-Online Crime Division</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 Scam Protection LINE OA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
