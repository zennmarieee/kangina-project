import { Mail, MapPin, Phone } from "lucide-react";
import WordMark from "../../assets/Wordmark.png"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start">
        
        {/* Left Section - Logo & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center space-x-2">
            <img src={WordMark} alt="Kangina Logo" className="h-12" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 — 2026 <br />
            <a href="#" className="hover:underline">Privacy and Terms</a>
          </p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-lg font-semibold text-gray-700">Get in touch</h3>
          <div className="flex items-center text-gray-600 mt-2">
            <Phone className="h-5 w-5 mr-2 text-grey-500" />
            <span>+63 997 728 9552</span>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <Mail className="h-5 w-5 mr-2 text-grey-500" />
            <span>kangina.ph@domain.com</span>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-5 w-5 mr-2 text-grey-500" />
            <span>45th 21st Bldg. 02 St. Nazareth, CDO</span>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Terms of Use</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Cookies Use</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
