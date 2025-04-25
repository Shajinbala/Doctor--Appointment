import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 w-full max-w-md">
      <div className="flex items-center gap-4">
        <img 
          src={doctor.imageUrl} 
          alt="Doctor" 
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <h2 className="text-xl font-semibold">{doctor.name}</h2>
          <p className="text-gray-500">{doctor.speciality}</p>
          <p className="text-sm text-gray-400">{doctor.experience} yrs exp.</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-600">{doctor.clinic}</p>
        <p className="text-gray-400 text-sm">{doctor.location}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold text-green-600">₹ {doctor.fee}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
