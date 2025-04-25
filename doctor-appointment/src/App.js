import React from "react";
import DoctorListing from "./DoctorListing";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <input
            type="text"
            placeholder="Search Symptoms, Doctors, Specialists, Clinics"
            className="w-full p-3 rounded-md focus:outline-none"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 flex space-x-6">
        
        {/* Sidebar Filters */}
        <div className="w-1/4 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <label className="block font-medium mb-2">Speciality</label>
            <input
              type="text"
              placeholder="Search Speciality"
              className="w-full p-2 border rounded-md focus:outline-none"
            />
            <div className="mt-3 space-y-2">
              <div><input type="checkbox" /> Neurologist</div>
              <div><input type="checkbox" /> Oncologist</div>
              <div><input type="checkbox" /> Ayurveda</div>
              <div><input type="checkbox" /> Homeopath</div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Mode of consultation</label>
            <div className="space-y-2">
              <div><input type="radio" name="mode" /> Video Consultation</div>
              <div><input type="radio" name="mode" /> In-clinic Consultation</div>
              <div><input type="radio" name="mode" /> All</div>
            </div>
          </div>
        </div>

        {/* Doctor Listings */}
        <div className="w-3/4">
          <DoctorListing />
        </div>

      </div>
    </div>
  );
}

export default App;
