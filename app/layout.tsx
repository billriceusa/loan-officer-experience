import type { Metadata } from 'next';
import './globals.css';
import { LoanOfficerProvider } from '@/lib/LoanOfficerContext';
import Navigation from '@/components/Navigation';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'HomeLend - Find Your Perfect Loan Officer',
  description:
    'Connect with experienced loan officers to help you with your mortgage needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoanOfficerProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <ChatWidget />
          <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">HomeLend</h3>
                  <p className="text-gray-400 text-sm">
                    Your trusted partner in home financing
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <a href="/" className="hover:text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/find-loan-officer" className="hover:text-white">
                        Find a Loan Officer
                      </a>
                    </li>
                    <li>
                      <a href="/branches" className="hover:text-white">
                        Branches
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white">
                        Mortgage Calculator
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Learning Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>(555) 000-0000</li>
                    <li>info@homelend.com</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>
                  &copy; {new Date().getFullYear()} HomeLend. All rights
                  reserved.
                </p>
                <p className="mt-2">NMLS #123456 | Equal Housing Lender</p>
              </div>
            </div>
          </footer>
        </LoanOfficerProvider>
      </body>
    </html>
  );
}
