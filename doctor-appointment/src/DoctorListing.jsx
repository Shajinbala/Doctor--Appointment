import React from "react";

const doctors = [
  {
    name: "Dr. Munaf Inamdar",
    specialization: "General Physician",
    experience: "27 yrs exp.",
    clinic: "Apex Multispeciality and Mater...",
    location: "Kondhawa Khurd",
    fee: "₹ 600",
    image: "https://randomuser.me/api/portraits/men/1.jpg",  // doctor image url
  },
  {
    name: "Dr. Subhash Bajaj",
    specialization: "General Physician",
    experience: "11 yrs exp.",
    clinic: "Dr. Bajaj Wellness Clinic",
    location: "Wanowarie",
    fee: "₹ 600",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Dr. Muffaddal Zakir",
    specialization: "General Physician",
    experience: "27 yrs exp.",
    clinic: "Sparsh Polyclinic",
    location: "Wanwadi",
    fee: "₹ 600",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Dr. Ajay Gangoli",
    specialization: "General Physician",
    experience: "34 yrs exp.",
    clinic: "Niramaya Clinic",
    location: "Wanowarie",
    fee: "₹ 400",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

function DoctorListing() {
  return (
    <div className="space-y-4">
      {doctors.map((doc, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialization}</p>
              <p className="text-sm text-gray-500">{doc.experience}</p>
              <p className="text-sm text-gray-500">{doc.clinic}</p>
              <p className="text-sm text-gray-500">{doc.location}</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-lg font-bold text-blue-700">{doc.fee}</p>
            <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorListing;
