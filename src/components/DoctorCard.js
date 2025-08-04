import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300">
      <img src={doctor.image} alt={doctor.name} className="w-28 h-28 mx-auto rounded-full object-cover" />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{doctor.name}</h2>
      <p className="text-blue-600">{doctor.specialization}</p>
      <p className={`mt-1 font-semibold ${doctor.available ? 'text-green-600' : 'text-red-500'}`}> 
        {doctor.available ? '🟢 Available' : '🔴 Not Available'}
      </p>
      <Link to={`/doctor/${doctor.id}`} className="mt-4 inline-block text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
        View Profile
      </Link>
    </div>
  );
}

export default DoctorCard;
