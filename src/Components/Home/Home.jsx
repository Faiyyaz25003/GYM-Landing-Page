"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Play,
  Star,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Dumbbell,
  Heart,
  Target,
  Zap,
  Calendar,
  CheckCircle,
  ArrowRight,
  Trophy,
  Flame,
  Activity,
  TrendingUp,
  Shield,
  Smile,
  Camera,
} from "lucide-react";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Expert Trainers",
      desc: "Certified professionals to guide your journey",
    },
    {
      icon: Award,
      title: "Modern Equipment",
      desc: "State-of-the-art fitness technology",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      desc: "Train anytime that suits your schedule",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Transformed my life completely! Best gym experience ever.",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Amazing trainers and incredible atmosphere. Highly recommend!",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "Perfect blend of community and professional training.",
    },
  ];

  const programs = [
    {
      icon: Flame,
      title: "Fat Loss Program",
      duration: "12 weeks",
      description: "Intensive cardio and strength training to burn fat fast",
      features: ["Custom meal plans", "Daily workouts", "Progress tracking"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Dumbbell,
      title: "Muscle Building",
      duration: "16 weeks",
      description: "Build lean muscle mass with progressive overload",
      features: ["Weight training", "Protein guidance", "Form correction"],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Endurance Training",
      duration: "8 weeks",
      description: "Improve cardiovascular health and stamina",
      features: ["Cardio circuits", "Heart rate zones", "Recovery protocols"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Athletic Performance",
      duration: "20 weeks",
      description: "Sport-specific training for peak performance",
      features: ["Speed & agility", "Power development", "Injury prevention"],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const transformationImages = [
    {
      title: "6 Month Transformation",
      subtitle: "Weight Loss Journey",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Strength Gains",
      subtitle: "Muscle Building Success",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Athletic Performance",
      subtitle: "Speed & Endurance",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven Results",
      desc: "Track your progress with data-driven insights",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      desc: "Clean, secure, and well-maintained facilities",
    },
    {
      icon: Smile,
      title: "Community Support",
      desc: "Join a motivating network of fitness enthusiasts",
    },
    {
      icon: Zap,
      title: "High Energy",
      desc: "Dynamic atmosphere that keeps you motivated",
    },
  ];

  const facilities = [
    "Olympic Weightlifting Platform",
    "Cardio Theatre with 50+ Machines",
    "Functional Training Zone",
    "Group Exercise Studios",
    "Recovery & Wellness Center",
    "Nutrition Bar & Smoothies",
    "Personal Training Suites",
    "Locker Rooms with Saunas",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            UNLEASH YOUR
            <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              POTENTIAL
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your body, mind, and life with our world-class fitness
            programs and expert guidance
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/plans"
              className="group bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Start Your Journey
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
           
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-orange-500/20 rounded-full animate-bounce"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Why Choose <span className="text-red-500">PowerFit</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience fitness like never before with our cutting-edge
              facilities and personalized approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gray-800/50 rounded-2xl hover:bg-gradient-to-br hover:from-red-900/20 hover:to-orange-900/20 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <feature.icon
                    size={48}
                    className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Training <span className="text-orange-500">Programs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized programs designed to help you achieve your specific
              fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <program.icon
                    size={40}
                    className={`mb-4 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
                  />
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {program.duration}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm">
                    {program.description}
                  </p>
                  <ul className="space-y-1">
                    {program.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Active Members" },
              { number: "50+", label: "Expert Trainers" },
              { number: "100+", label: "Group Classes" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Gallery */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Amazing <span className="text-red-500">Transformations</span>
            </h2>
            <p className="text-xl text-gray-400">
              See the incredible results our members have achieved
            </p>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden">
            {transformationImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${image.gradient} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <Camera size={64} className="mx-auto mb-4 text-white/80" />
                    <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                    <p className="text-lg text-white/90">{image.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {transformationImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Member <span className="text-orange-500">Benefits</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need for your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gray-900 p-6 rounded-xl hover:bg-gradient-to-br hover:from-red-900/20 hover:to-orange-900/20 transition-all duration-300 hover:scale-105"
              >
                <benefit.icon
                  size={32}
                  className="text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Popular <span className="text-orange-500">Classes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Choose from our diverse range of fitness programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "HIIT Training",
                time: "45 min",
                intensity: "High",
                image: "bg-gradient-to-br from-red-600 to-red-800",
              },
              {
                name: "Yoga Flow",
                time: "60 min",
                intensity: "Low",
                image: "bg-gradient-to-br from-orange-600 to-yellow-600",
              },
              {
                name: "Strength Training",
                time: "50 min",
                intensity: "Medium",
                image: "bg-gradient-to-br from-gray-700 to-gray-900",
              },
            ].map((cls, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 ${cls.image} transition-transform duration-500 group-hover:scale-110`}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-md">
                    {cls.intensity} Intensity
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">{cls.name}</h3>
                  <p className="text-gray-300">{cls.time}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="text-white" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-red-900/10 via-black to-orange-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Success <span className="text-red-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real people, real results, real inspiration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  name: "Jessica",
                  achievement: "Lost 40 lbs in 6 months",
                  icon: Trophy,
                },
                {
                  name: "David",
                  achievement: "Deadlifted 400 lbs personal record",
                  icon: Award,
                },
                {
                  name: "Maria",
                  achievement: "Completed first marathon",
                  icon: Target,
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-900/50 p-6 rounded-xl"
                >
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full">
                    <story.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {story.name}
                    </h3>
                    <p className="text-gray-300">{story.achievement}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-3xl backdrop-blur-sm">
                <div className="text-center">
                  <Activity size={64} className="mx-auto mb-6 text-red-500" />
                  <h3 className="text-2xl font-bold mb-4">
                    Join 5000+ Success Stories
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Every month, hundreds of members achieve their fitness goals
                    with our proven methods
                  </p>
                  {/* <button className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center mx-auto">
                    Start Your Story
                    <ArrowRight size={20} className="ml-2" />
                  </button> */}

                  <Link
                    href="/plans"
                    className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center mx-auto"
                  >
                    Start Your Story
                    <ChevronRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Member <span className="text-red-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real transformations from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-red-500">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-red-500">PowerFit</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in 2010, PowerFit has been Mumbai's premier fitness
                destination. We believe that fitness is not just about physical
                strength—it's about building confidence, discipline, and a
                community that supports your goals.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our state-of-the-art facility combines cutting-edge equipment
                with personalized training approaches, ensuring every member
                gets the attention and support they need to succeed.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Years of Excellence", value: "15+" },
                  { label: "Success Rate", value: "94%" },
                  { label: "Locations", value: "3" },
                  { label: "Awards Won", value: "12" },
                ].map((item, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      {item.value}
                    </div>
                    <div className="text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-3xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/30 p-6 rounded-2xl text-center">
                    <Users size={32} className="mx-auto mb-3 text-red-500" />
                    <h4 className="font-bold">Community</h4>
                    <p className="text-sm text-gray-400">
                      Holistic health focus
                    </p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-2xl text-center">
                    <Target size={32} className="mx-auto mb-3 text-blue-500" />
                    <h4 className="font-bold">Results</h4>
                    <p className="text-sm text-gray-400">Goal achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Spotlight */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Meet Our <span className="text-orange-500">Trainers</span>
            </h2>
            <p className="text-xl text-gray-400">
              Expert guidance from certified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rodriguez",
                specialty: "Strength & Conditioning",
                experience: "8 years",
                certifications: "NASM-CPT, CSCS",
                gradient: "from-red-500 to-pink-500",
              },
              {
                name: "Priya Sharma",
                specialty: "Yoga & Flexibility",
                experience: "10 years",
                certifications: "RYT-500, E-RYT",
                gradient: "from-orange-500 to-yellow-500",
              },
              {
                name: "James Wilson",
                specialty: "CrossFit & HIIT",
                experience: "6 years",
                certifications: "CrossFit L2, CPR",
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((trainer, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${trainer.gradient} flex items-center justify-center`}
                >
                  <Users size={48} className="text-white/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-red-500 font-semibold mb-2">
                    {trainer.specialty}
                  </p>
                  <p className="text-gray-400 text-sm mb-1">
                    {trainer.experience} experience
                  </p>
                  <p className="text-gray-400 text-sm">
                    {trainer.certifications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
