import { ChevronRight } from 'lucide-react';

const FacebookIcon = ({ size = 24, className = "", fill = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ size = 24, className = "", fill = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = ({ size = 24, className = "", fill = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ size = 24, className = "", fill = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-gray-200 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Description */}
          <div className="lg:pr-8">
            <img
              src="/pictures/oxladebiz.png"
              alt="Oxlade Business School Logo"
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-[15px] leading-relaxed text-gray-900 mt-2">
              Oxlade Business School offers over 500 intensive courses that elevate professional skills, enhance career growth, and boost organisational effectiveness.
            </p>
          </div>

          {/* Column 2: About */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-[15px]">About</h4>
            <ul className="space-y-3">
              {['About Us', 'Meet the Team', 'Course Locations', 'Training Consultants', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-[14px] text-gray-900 hover:text-[#002d80] font-medium transition-colors group">
                    <ChevronRight size={14} className="text-[#002d80] transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-[15px]">Quick Links</h4>
            <ul className="space-y-3">
              {['Brochures & Calendars', 'Accommodation', 'Airport Transfers', 'Visas', 'Consultancy Solutions'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-[14px] text-gray-900 hover:text-[#002d80] font-medium transition-colors group">
                    <ChevronRight size={14} className="text-[#002d80] transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Info */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-[15px]">Info</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-[14px] text-gray-900 hover:text-[#002d80] font-medium transition-colors group">
                    <ChevronRight size={14} className="text-[#002d80] transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter — light tint of brand blue */}
        <div className="rounded-xl p-8 mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-[#002d80]/[0.06] border border-[#002d80]/10">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-[#002d80] mb-2">Sign up to our newsletter</h3>
            <p className="text-gray-800 text-[15px]">
              Receive all the latest information about new courses and much more
            </p>
          </div>
          
          <div className="lg:w-[55%] w-full flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2.5 rounded border border-gray-300 bg-black/5 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#002d80] focus:bg-white transition-colors text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2.5 rounded border border-gray-300 bg-black/5 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#002d80] focus:bg-white transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded border border-gray-300 bg-black/5 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#002d80] focus:bg-white transition-colors text-sm"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#002d80] focus:ring-[#002d80] cursor-pointer" />
                <span className="text-[14px] text-gray-700 group-hover:text-gray-900 transition-colors">I agree to receiving newsletters.</span>
              </label>
              <button
                type="button"
                className="bg-[#002d80] text-white px-8 py-2.5 rounded font-medium hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-gray-200/60">
          <div className="flex items-center gap-3">
            <span className="text-gray-900 font-bold mr-2 text-sm uppercase tracking-wider">Follow us:</span>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-[#002d80] hover:text-white transition-all shadow-sm">
              <FacebookIcon size={16} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-[#002d80] hover:text-white transition-all shadow-sm">
              <TwitterIcon size={16} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-[#002d80] hover:text-white transition-all shadow-sm">
              <LinkedinIcon size={16} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-[#002d80] hover:text-white transition-all shadow-sm">
              <YoutubeIcon size={16} />
            </a>
          </div>
          
          <div className="text-right text-[13px] text-gray-900">
            <p className="mb-1">© 2026 All Rights Reserved. Oxlade Business School.</p>
            <p>Built By <span className="font-semibold underline cursor-pointer hover:text-[#002d80]">Oxlade Design</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}