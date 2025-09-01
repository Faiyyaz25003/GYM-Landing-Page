
"use client";
import { useState, useEffect } from "react";
import {
  Dumbbell,
  Menu,
  X,
  Home,
  User,
  Mail,
  CreditCard,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Navbar({ setCurrentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksLeft = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Contact", icon: Mail },
    { name: "Plans", icon: CreditCard },
  ];

  const linksRight = [
    { name: "Login", icon: LogIn },
    { name: "Register", special: true, icon: UserPlus },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg shadow-2xl border-b border-yellow-400/20"
          : "bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo (small screens) */}
          <div className="flex items-center space-x-3 group cursor-pointer sm:block md:hidden">
            <Dumbbell
              size={28}
              className="text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:to-yellow-400 transition-all duration-300">
              FitLife Gym
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {linksLeft.map((link) => {
              const IconComponent = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={() => setCurrentView(link.name)}
                  className="relative group px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent
                      size={18}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span>{link.name}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {linksRight.map((link) => {
              const IconComponent = link.icon;
              return link.special ? (
                <button
                  key={link.name}
                  onClick={() => setCurrentView(link.name)}
                  className="relative group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent
                      size={18}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span>{link.name}</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => setCurrentView(link.name)}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/5"
                >
                  <IconComponent
                    size={18}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
            >
              <Menu
                size={24}
                className={`absolute inset-0 text-white transition-all duration-300 ${
                  isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 text-yellow-400 transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-br from-gray-900 to-black backdrop-blur-lg border-t border-gray-700/50 transition-all duration-500 ease-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-6 space-y-4">
          {linksLeft.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => {
                  setCurrentView(link.name);
                  setIsOpen(false);
                }}
                className={`group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-600/10 text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                  isOpen ? "animate-slideIn" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent
                  size={18}
                  className="group-hover:text-yellow-400 transition-colors duration-300"
                />
                <span className="font-medium">{link.name}</span>
              </button>
            );
          })}

          {/* Auth Links */}
          {linksRight.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => {
                  setCurrentView(link.name);
                  setIsOpen(false);
                }}
                className={`group flex items-center justify-center space-x-2 ${
                  link.special
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-yellow-500/25"
                    : "p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white"
                } transition-all duration-300 transform hover:scale-105 ${
                  isOpen ? "animate-slideIn" : ""
                }`}
                style={{
                  animationDelay: `${(linksLeft.length + index) * 100}ms`,
                }}
              >
                <IconComponent
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>{link.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
