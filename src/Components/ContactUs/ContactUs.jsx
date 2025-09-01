
"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Dumbbell,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Failed to send message");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "bg-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@fitnessgym.com", "support@fitnessgym.com"],
      color: "bg-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Fitness Street", "Mumbai, Maharashtra 400001"],
      color: "bg-red-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon-Fri: 5AM - 11PM", "Sat-Sun: 6AM - 10PM"],
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Dumbbell className="w-12 h-12 text-orange-500 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help you on your fitness journey. Connect with us
            anytime.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Send Message
              </h2>
              <p className="text-gray-400">
                We'll get back to you within 24 hours
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="group-classes">Group Classes</option>
                    <option value="nutrition">Nutrition Consultation</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Your Message..."
                  className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-8">
                Connect with us for membership details, training programs, and
                more.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition"
                >
                  <div className={`${item.color} p-3 rounded-lg text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Follow us on Social Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl shadow-lg bg-gray-900">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9090487817156!2d90.39115797510737!3d23.750885988949926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85f63ea6cd3%3A0xc726ba187b90c7c0!2sGymnasium!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
