// import { useState, useEffect, useRef } from "react";
// import { useNavigate } f
import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          MasterDashboard
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          {/* <li className="hover:text-blue-600 cursor-pointer">Health</li>
          <li className="hover:text-blue-600 cursor-pointer">Education</li>
          <li className="hover:text-blue-600 cursor-pointer">MNREGA</li> */}
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact
        </button>
      </nav>
    </div>
  )
}

export default Navbar
