// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleMenuClick = (menu) => {
//     setOpen(false); // close dropdown
//     if (menu === "menrega") {
//       navigate("/menrega"); // navigate to MGNREGA data page
//     } else if (menu === "health") {
//       navigate("/health"); // you can create other pages
//     } else if (menu === "education") {
//       navigate("/education");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between p-4 bg-blue-800 text-white shadow-md">
//         <div className="text-2xl font-bold cursor-pointer">MyLogo</div>

//         {/* Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setOpen(!open)}
//             className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600 transition"
//           >
//             Menu ▼
//           </button>

//           {open && (
//             <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
//               <button
//                 className="w-full text-left px-4 py-2 hover:bg-gray-200"
//                 onClick={() => handleMenuClick("health")}
//               >
//                 Health
//               </button>
//               <button
//                 className="w-full text-left px-4 py-2 hover:bg-gray-200"
//                 onClick={() => handleMenuClick("education")}
//               >
//                 Education
//               </button>
//               <button
//                 className="w-full text-left px-4 py-2 hover:bg-gray-200"
//                 onClick={() => handleMenuClick("menrega")}
//               >
//                 Menrega
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import axios from "axios"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../componensts/common/Footer";

// import LoginPage from "./loginPage";

function LandingPage() {
  
  // const [started, getStarted] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () =>{
    try {
      navigate("/login")
    } catch (error) {
      console.log(error)
      
    }


  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-50 to-white-100 " style={{ backgroundImage:"url('/backroundImage.png')"}}>
    
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          MasterDashboard
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer"></li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to <span className="text-blue-600">MasterDashboard</span>
          </h2>

          <p className="text-lg text-gray-600">
            Explore key insights in Health, Education and MNREGA
            through powerful data visualizations and interactive charts.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition" onClick={handleSubmit}>
              Get Started
            </button>

            <button className="bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE / ILLUSTRATION */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/sideImage.png"
            alt="Dashboard Illustration"
            className="w-full"
          />
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Health Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3 text-red-500">
              ❤️ Health Analytics
            </h3>
            <img src="/health.png" alt="" />
            <p className="text-gray-600 mb-4">
              Visualize hospital data, disease trends, and medical statistics.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Dashboard →
            </button>
          </div>

          {/* Education Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-500">
              🎓 Education Insights
            </h3>
            <img src="/education.png" alt="" />
            <p className="text-gray-600 mb-4">
              Track student performance, school data and literacy rates.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Dashboard →
            </button>
          </div>

          {/* MNREGA Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              ⚙️ MNREGA Stats
            </h3>
            <img src="health.png" alt="" />
            <p className="text-gray-600 mb-4">
              Analyze fund allocation, employment data and rural development.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Dashboard →
            </button>
          </div>

        </div>
      </section>
      <Footer/>

    </div>
  );
}

export default LandingPage;
