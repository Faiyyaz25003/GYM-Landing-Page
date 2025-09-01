"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Dumbbell,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Plans", href: "/plans" },
    { name: "Contact", href: "/contact" },
    { name: "Classes", href: "/classes" },
    { name: "Trainers", href: "/trainers" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-400",
      name: "Facebook",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
      name: "Instagram",
    },
    { icon: Twitter, href: "#", color: "hover:text-sky-400", name: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-600 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative group">
                  <Dumbbell
                    size={32}
                    className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  FitLife Gym
                </h2>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Transform your body, transform your life. Join thousands who
                have achieved their fitness goals with us.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm group cursor-pointer">
                  <div className="p-1.5 bg-gray-800 rounded-lg group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Phone size={14} className="text-yellow-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-sm group cursor-pointer">
                  <div className="p-1.5 bg-gray-800 rounded-lg group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Mail size={14} className="text-yellow-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">
                    info@fitlifegym.com
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-sm group cursor-pointer">
                  <div className="p-1.5 bg-gray-800 rounded-lg group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <MapPin size={14} className="text-yellow-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">
                    123 Fitness Street, Gym City
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                      />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Stay Updated
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              </h3>

              <p className="text-gray-400 mb-4 text-sm">
                Get the latest updates on new programs, nutrition tips, and
                exclusive offers.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all duration-300 text-white placeholder-gray-500"
                  />
                  <Mail
                    size={16}
                    className="absolute right-3 top-3.5 text-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? "✓ Subscribed!" : "Subscribe Now"}
                </button>
              </form>
            </div>

            {/* Social & Hours */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Connect & Visit
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              </h3>

              {/* Social Links */}
              <div className="mb-8">
                <p className="text-gray-400 mb-4 text-sm">
                  Follow us on social media
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`group relative p-3 bg-gray-800 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                        title={social.name}
                      >
                        <IconComponent size={20} />
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <ExternalLink
                          size={12}
                          className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Hours */}
              <div>
                <p className="text-gray-400 mb-3 text-sm">Opening Hours</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mon - Fri</span>
                    <span className="text-yellow-400 font-medium">
                      5:00 AM - 11:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weekends</span>
                    <span className="text-yellow-400 font-medium">
                      6:00 AM - 10:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} FitLife Gym. All Rights Reserved.
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Made with{" "}
                  <Heart size={12} className="inline text-red-500 mx-1" /> for
                  fitness enthusiasts
                </p>
              </div>

              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
