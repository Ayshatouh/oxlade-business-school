import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';


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
  const w3FormsAccessKey = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY;

  return (
    <footer className="bg-[#002d80] border-t border-gray-200 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Description */}
          <div className="lg:pr-8">
            <img
              src="/pictures/logofooter.png"
              alt={`${siteConfig.name} Logo`}
              className="h-10 w-auto object-contain mb-6"
            />

            <p className="text-[15px] leading-relaxed text-white mt-2">
              {siteConfig.name} offers over 500 intensive courses that elevate professional skills, enhance career growth, and boost organisational effectiveness.
            </p>

          </div>

          {/* Column 2: About */}
          <div>
            <h4 className="font-bold text-white mb-5 text-[15px]">About</h4>
            <ul className="space-y-3">
              {['About Us', 'Meet the Team', 'Course Locations', 'Training Consultants', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-[14px] text-white hover:text-[#facc15] font-medium transition-colors group">
                    <ChevronRight size={14} className="text-[#facc15] transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-[15px]">Quick Links</h4>
            <ul className="space-y-3">
              {['Brochures & Calendars', 'Accommodation', 'Airport Transfers', 'Visas', 'Consultancy Solutions'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-[14px] text-white hover:text-[#facc15] font-medium transition-colors group">
                    <ChevronRight size={14} className="text-[#facc15] transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Info */}
          <div>
            <h4 className="font-bold text-white mb-5 text-[15px]">Info</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', path: '/info/privacy-policy' },
                { label: 'Terms', path: '/info/terms-and-conditions' },
                { label: 'FAQs', path: '/info/faqs' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.path} className="flex items-center gap-2 text-[14px] text-white hover:text-[#facc15] font-medium transition-colors group">
                    <ChevronRight size={14} className="text-[#facc15] transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-[14px] text-white">
              <p className="font-semibold">{siteConfig.address}</p>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="block hover:text-[#facc15] transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-[#facc15] transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>


        {/* Newsletter Section Removed */}

        {/* Bottom Bar: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-gray-200/60">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold mr-2 text-sm uppercase tracking-wider">Follow us:</span>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-white hover:text-[#002d80] transition-all shadow-sm">
              <FacebookIcon size={16} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-white hover:text-[#002d80] transition-all shadow-sm">
              <TwitterIcon size={16} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-white hover:text-[#002d80] transition-all shadow-sm">
              <LinkedinIcon size={16} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#facc15] text-[#002d80] rounded hover:bg-white hover:text-[#002d80] transition-all shadow-sm">
              <YoutubeIcon size={16} />
            </a>
          </div>
          
          <div className="text-right text-[13px] text-white">
            <p className="mb-1">© {new Date().getFullYear()} All Rights Reserved. {siteConfig.name}.</p>

            <p>Built By <span className="font-semibold underline cursor-pointer hover:text-[#facc15]">{siteConfig.name}</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}