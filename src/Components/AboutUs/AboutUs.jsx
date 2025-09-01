// import React from "react";
// import {
//   Users,
//   Target,
//   Trophy,
//   Heart,
//   Dumbbell,
//   Star,
//   CheckCircle,
//   Activity,
// } from "lucide-react";
// import Footer from "../Footer/Footer";

// const AboutUs = () => {
//   const stats = [
//     { number: "5000+", label: "Active Members", icon: Users },
//     { number: "10+", label: "Years Experience", icon: Trophy },
//     { number: "50+", label: "Expert Trainers", icon: Target },
//     { number: "99%", label: "Success Rate", icon: Star },
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: "Health First",
//       description:
//         "We prioritize your health and wellness above everything else, ensuring safe and effective workouts.",
//     },
//     {
//       icon: Target,
//       title: "Goal Oriented",
//       description:
//         "Every program is designed to help you achieve your specific fitness goals with measurable results.",
//     },
//     {
//       icon: Users,
//       title: "Community",
//       description:
//         "Building a supportive community where members motivate and inspire each other to succeed.",
//     },
//     {
//       icon: Trophy,
//       title: "Excellence",
//       description:
//         "We strive for excellence in every aspect of our service, from equipment to training programs.",
//     },
//   ];

//   const features = [
//     "State-of-the-art equipment and facilities",
//     "Certified personal trainers and nutritionists",
//     "Flexible membership plans and scheduling",
//     "Real-time progress tracking and analytics",
//     "24/7 gym access with smart security system",
//     "Group classes and specialized training programs",
//   ];

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white  py-20">
//         <div className="absolute inset-0  bg-black/20"></div>
//         {/* Background Image */}
//         <div className="absolute inset-0  opacity-20">
//           <img
//             src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//             alt="Modern gym interior"
//             className="w-full h-full ml-[5px] object-cover"
//           />
//         </div>
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="flex justify-center mb-6">
//               <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
//                 <Dumbbell className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
//               About FitManager Pro
//             </h1>
//             <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
//               Empowering fitness journeys through cutting-edge technology and
//               personalized experiences. Your ultimate companion for achieving
//               health and wellness goals.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                   <div className="flex justify-center mb-4">
//                     <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
//                       <stat.icon className="w-8 h-8 text-white" />
//                     </div>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                     {stat.number}
//                   </h3>
//                   <p className="text-gray-600 font-medium">{stat.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                   Our Mission
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                   To revolutionize the fitness industry by providing
//                   intelligent, user-friendly gym management solutions that
//                   enhance both member experience and business operations.
//                 </p>
//                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                   We believe fitness should be accessible, enjoyable, and
//                   results-driven. Our platform combines advanced technology with
//                   human expertise to create personalized fitness experiences.
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full">
//                     <Activity className="w-6 h-6 text-white" />
//                   </div>
//                   <span className="text-lg font-semibold text-gray-800">
//                     Transforming Lives Through Fitness
//                   </span>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                     <h3 className="text-2xl font-bold text-white mb-4">
//                       Why Choose Us?
//                     </h3>
//                     <div className="space-y-3">
//                       {features.map((feature, index) => (
//                         <div key={index} className="flex items-start space-x-3">
//                           <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
//                           <span className="text-white/90 text-sm">
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Meet Our Team
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Dedicated professionals committed to helping you achieve your
//                 fitness goals
//               </p>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {/* Team Member 1 */}
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Head Trainer"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     Sarah Johnson
//                   </h3>
//                   <p className="text-blue-600 font-semibold mb-3">
//                     Head Trainer & Nutritionist
//                   </p>
//                   <p className="text-gray-600 text-sm">
//                     10+ years of experience in fitness training and nutrition
//                     planning. Specializes in strength training and weight
//                     management.
//                   </p>
//                 </div>
//               </div>

//               {/* Team Member 2 */}
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://www.imageskart.in/fotocrats?imagepath=SU1LMTAwMDAzODQyMTQuanBn"
//                     alt="Yoga Instructor"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     Michael Chen
//                   </h3>
//                   <p className="text-blue-600 font-semibold mb-3">
//                     Yoga & Wellness Coach
//                   </p>
//                   <p className="text-gray-600 text-sm">
//                     Certified yoga instructor with expertise in mindfulness and
//                     holistic wellness. Focuses on flexibility and mental
//                     well-being.
//                   </p>
//                 </div>
//               </div>

//               {/* Team Member 3 */}
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Fitness Coach"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     Emma Rodriguez
//                   </h3>
//                   <p className="text-blue-600 font-semibold mb-3">
//                     HIIT & Cardio Specialist
//                   </p>
//                   <p className="text-gray-600 text-sm">
//                     High-intensity interval training expert with a passion for
//                     helping clients achieve rapid results through efficient
//                     workouts.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Values Section */}
//       <div className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Our Core Values
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 The principles that guide our mission and shape our approach to
//                 fitness management
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
//                     <div className="flex justify-center mb-6">
//                       <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
//                         <value.icon className="w-8 h-8 text-white" />
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Facilities Section */}
//       <div className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Our Facilities
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 State-of-the-art equipment and modern spaces designed for your
//                 fitness journey
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Facility 1 */}
//               <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Weight Training Area"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-2">Weight Training</h3>
//                     <p className="text-sm text-gray-200">
//                       Professional-grade equipment
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Facility 2 */}
//               <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Cardio Zone"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-2">Cardio Zone</h3>
//                     <p className="text-sm text-gray-200">
//                       Latest cardio machines
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Facility 3 */}
//               <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Yoga Studio"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-2">Yoga Studio</h3>
//                     <p className="text-sm text-gray-200">
//                       Peaceful meditation space
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Facility 4 */}
//               <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Group Classes"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-2">Group Classes</h3>
//                     <p className="text-sm text-gray-200">
//                       Interactive fitness sessions
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Facility 5 */}
//               <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Locker Rooms"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-2">Locker Rooms</h3>
//                     <p className="text-sm text-gray-200">
//                       Clean & spacious facilities
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Facility 6 */}
//               <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <img
//                     src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                     alt="Personal Training"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-2">
//                       Personal Training
//                     </h3>
//                     <p className="text-sm text-gray-200">One-on-one coaching</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//      <Footer/>
//     </div>
//   );
// };

// export default AboutUs;



import React from "react";
import {
  Users,
  Target,
  Trophy,
  Heart,
  Dumbbell,
  Star,
  CheckCircle,
  Activity,
} from "lucide-react";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  const stats = [
    { number: "5000+", label: "Active Members", icon: Users },
    { number: "10+", label: "Years Experience", icon: Trophy },
    { number: "50+", label: "Expert Trainers", icon: Target },
    { number: "99%", label: "Success Rate", icon: Star },
  ];

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description:
        "We prioritize your health and wellness above everything else, ensuring safe and effective workouts.",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description:
        "Every program is designed to help you achieve your specific fitness goals with measurable results.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive community where members motivate and inspire each other to succeed.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, from equipment to training programs.",
    },
  ];

  const features = [
    "State-of-the-art equipment and facilities",
    "Certified personal trainers and nutritionists",
    "Flexible membership plans and scheduling",
    "Real-time progress tracking and analytics",
    "24/7 gym access with smart security system",
    "Group classes and specialized training programs",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2070&q=80"
            alt="Modern gym interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About FitManager Pro
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Empowering fitness journeys through cutting-edge technology and
              personalized experiences. Your ultimate companion for achieving
              health and wellness goals.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  To revolutionize the fitness industry by providing
                  intelligent, user-friendly gym management solutions that
                  enhance both member experience and business operations.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  We believe fitness should be accessible, enjoyable, and
                  results-driven. Our platform combines advanced technology with
                  human expertise to create personalized fitness experiences.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    Transforming Lives Through Fitness
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Why Choose Us?
                    </h3>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dedicated professionals committed to helping you achieve your
                fitness goals
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Members (same structure, just text colors changed) */}
              {[
                {
                  name: "Sarah Johnson",
                  role: "Head Trainer & Nutritionist",
                  img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
                  desc: "10+ years of experience in fitness training and nutrition planning. Specializes in strength training and weight management.",
                },
                {
                  name: "Michael Chen",
                  role: "Yoga & Wellness Coach",
                  img: "https://www.imageskart.in/fotocrats?imagepath=SU1LMTAwMDAzODQyMTQuanBn",
                  desc: "Certified yoga instructor with expertise in mindfulness and holistic wellness. Focuses on flexibility and mental well-being.",
                },
                {
                  name: "Emma Rodriguez",
                  role: "HIIT & Cardio Specialist",
                  img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1000&q=80",
                  desc: "High-intensity interval training expert with a passion for helping clients achieve rapid results through efficient workouts.",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our mission and shape our approach to
                fitness management
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Facilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                State-of-the-art equipment and modern spaces designed for your
                fitness journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Weight Training",
                  subtitle: "Professional-grade equipment",
                  img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80",
                },
                {
                  title: "Cardio Zone",
                  subtitle: "Latest cardio machines",
                  img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80",
                },
                {
                  title: "Yoga Studio",
                  subtitle: "Peaceful meditation space",
                  img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1000&q=80",
                },
                {
                  title: "Group Classes",
                  subtitle: "Interactive fitness sessions",
                  img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
                },
                {
                  title: "Locker Rooms",
                  subtitle: "Clean & spacious facilities",
                  img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
                },
                {
                  title: "Personal Training",
                  subtitle: "One-on-one coaching",
                  img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80",
                },
              ].map((facility, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={facility.img}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {facility.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
