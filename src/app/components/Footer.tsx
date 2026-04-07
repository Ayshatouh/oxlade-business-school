import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const globalOffices = [
  { city: 'London', address: '123 Canary Wharf' },
  { city: 'New York', address: '456 Wall Street' },
  { city: 'Singapore', address: '789 Marina Bay' },
  { city: 'Dubai', address: '321 Business Bay' },
  { city: 'Sydney', address: '654 Circular Quay' },
  { city: 'Hong Kong', address: '987 Central' },
];

export function Footer() {
  return (
    <footer className="bg-[#0b3d91] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Stay Informed</h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest course updates, industry insights, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-[#facc15] transition-colors"
              />
              <button className="bg-[#facc15] text-[#0b3d91] px-8 py-3 rounded-lg hover:bg-[#e5b805] transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">OXLADE</h3>
            <p className="text-white/80 mb-4">
              Leading the way in professional development and corporate training since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#0b3d91] transition-colors">
                <ExternalLink size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#0b3d91] transition-colors">
                <ExternalLink size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#0b3d91] transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-[#facc15] transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#facc15] transition-colors">All Courses</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#facc15] transition-colors">Corporate Training</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#facc15] transition-colors">Accreditation</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#facc15] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h4 className="font-semibold mb-4">Global Offices</h4>
            <ul className="space-y-2">
              {globalOffices.map((office) => (
                <li key={office.city}>
                  <a href="#" className="text-white/80 hover:text-[#facc15] transition-colors flex items-start gap-2">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <div>
                      <div>{office.city}</div>
                      <div className="text-sm text-white/60">{office.address}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+442071234567" className="text-white/80 hover:text-[#facc15] transition-colors flex items-center gap-2">
                  <Phone size={18} />
                  <span>+44 (0)20 7123 4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@oxlade.com" className="text-white/80 hover:text-[#facc15] transition-colors flex items-center gap-2">
                  <Mail size={18} />
                  <span>info@oxlade.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-white/80 text-sm">
                Monday - Friday: 9:00 - 18:00<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Oxlade Business Training School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-[#facc15] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-[#facc15] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-[#facc15] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}