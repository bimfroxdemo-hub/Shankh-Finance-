import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, AlertTriangle } from "lucide-react";
import logo from "../Images/company logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company */}
          <div>
             {/* LOGO */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="PurvSarpanch Chai Logo"
                  className="h-10 md:h-12"
                />
              </Link>

            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Helping Indians find the right loan with transparent guidance.
              We work with over 50 trusted banks and NBFCs to get you the best deal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/loans">Loans</Link></li>
              <li><Link to="/documents">Documents</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4" />
                +91 96878 43104
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4" />
                info@sankhfinance.com
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4" />
                Surat, Gujarat, India
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="font-semibold mb-4">Trust & Safety</h3>
            <p className="text-sm text-primary-foreground/80">
              <Shield className="inline w-4 h-4 mr-1" />
              Your data is safe and encrypted with us.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/20 px-4 py-6">
        <div className="container mx-auto flex gap-3 text-xs text-primary-foreground/80">
          <AlertTriangle className="w-4 h-4 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> LoanEase is a loan advisory service.
            We are not a bank or NBFC. Loan approval depends on partner lenders.
          </p>
        </div>
      </div>

      {/* Copyright */}
      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/10 py-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Sankh Finance. All rights reserved.
        <br className="sm:hidden" />
        <span className="ml-1">
          Made by{" "}
          <a
            href="https://www.bimfrox.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#C68A2A] hover:underline"
          >
            Bimfrox
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
