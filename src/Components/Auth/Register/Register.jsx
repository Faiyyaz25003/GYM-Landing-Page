
"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Phone,
  Calendar,
  MapPin,
  UserCheck,
  Eye,
  EyeOff,
} from "lucide-react";
import Footer from "@/Components/Footer/Footer";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess("Registered successfully! Redirecting to login...");
      setTimeout(() => {
        console.log("Redirecting to login...");
      }, 1500);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Background Section */}
      <div className="relative flex-1 flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2070&q=80"
            alt="Gym background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-lg px-6 mt-[50px]  mb-[50px]">
          <div className="bg-gray-900/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 border border-white/10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Create Account
              </h1>
              <p className="text-gray-400">
                Join us today and start your journey
              </p>
            </div>

            {/* Error/Success */}
            {error && (
              <div className="bg-red-600/20 border border-red-500 p-3 rounded-lg mb-4 text-red-300 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-600/20 border border-green-500 p-3 rounded-lg mb-4 text-green-300 text-sm">
                {success}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile & DOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Your mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male" className="text-black">
                    Male
                  </option>
                  <option value="female" className="text-black">
                    Female
                  </option>
                  <option value="other" className="text-black">
                    Other
                  </option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="address"
                    placeholder="Enter your address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Account Type
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="user" className="text-black">
                    User
                  </option>
                  <option value="admin" className="text-black">
                    Admin
                  </option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Sign In
                </a>
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6 text-center text-xs text-gray-500">
            By creating an account, you agree to our{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
