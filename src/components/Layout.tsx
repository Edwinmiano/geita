import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#29235C]">
              Geita Investments
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-[#29235C]">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#29235C]">
                About Us
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-[#29235C]">
                Products
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-[#29235C]">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#29235C]">
                Contact
              </Link>
            </div>

            <button className="bg-[#29235C] text-white px-4 py-2 rounded hover:bg-[#29235C]/90">
              Get Quote
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#29235C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Geita Investments</h3>
              <p className="text-white/80">Your trusted partner in construction materials supply.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/80 hover:text-white">About Us</Link></li>
                <li><Link href="/products" className="text-white/80 hover:text-white">Products</Link></li>
                <li><Link href="/projects" className="text-white/80 hover:text-white">Projects</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-white/80">
                <li>123 Construction Avenue</li>
                <li>Nairobi, Kenya</li>
                <li>Phone: +254 740 935 023</li>
                <li>Email: info@geitainvestments.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white">Facebook</a>
                <a href="#" className="text-white/80 hover:text-white">LinkedIn</a>
                <a href="#" className="text-white/80 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Geita Investments Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/255123456789"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.4 6L0 24l6.2-1.4c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8.8.8-3.8-.2-.4C2.5 15.6 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8 1.8 1.8 2.8 4.2 2.8 6.8 0 5.5-4.5 10-9.6 10z"/>
        </svg>
      </a>
    </div>
  );
}
