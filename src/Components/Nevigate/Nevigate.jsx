// "use client";
// import React, { useState } from "react";

// import Home from "../Home/Home";
// import ContactUs from "../ContactUs/ContactUs";
// import AboutUs from "../AboutUs/AboutUs";
// import Login from "../Auth/Login/Login";
// import Register from "../Auth/Register/Register";
// import Plans from "../Plans/Plans";

// export default function Nevigate() {
//   const [currentView, setCurrentView] = useState("Home");

//   const renderPage = () => {
//     switch (currentView) {
//       case "Home":
//         return <Home />;
//       case "Contact":
//         return <ContactUs />;
//       case "About":
//         return <AboutUs />;
//       case "Login":
//         return <Login />;
//       case "Register":
//         return <Register />;
//       case "Plans":
//         return <Plans />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden relative">
//       {/* Page Render */}
//       <main className="flex-1 overflow-y-auto bg-gray-100">{renderPage()}</main>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";

import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Plans from "../Plans/Plans";
import Navbar from "../Navbar/Navbar";

export default function Nevigate() {
  const [currentView, setCurrentView] = useState("Home");

  const renderPage = () => {
    switch (currentView) {
      case "Home":
        return <Home />;
      case "Contact":
        return <ContactUs />;
      case "About":
        return <AboutUs />;
      case "Login":
        return <Login />;
      case "Register":
        return <Register />;
      case "Plans":
        return <Plans />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Navbar setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-y-auto bg-gray-100 mt-16">
        {renderPage()}
      </main>
    </div>
  );
}
