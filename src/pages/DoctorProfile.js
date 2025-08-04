import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctors from '../data/doctors.json';

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) return <p className="text-center p-6 text-red-500 font-semibold">Doctor not found.</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100 py-10"  style={{
        backgroundImage: `url(${doctor.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl shadow-lg">
        <img src={doctor.image} alt={doctor.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
        <h2 className="text-3xl text-center font-bold mt-4 text-blue-800">{doctor.name}</h2>
        <p className="text-center text-gray-600 italic">{doctor.specialization}</p>
        <p className="text-center mt-3 text-sm text-gray-700">{doctor.bio}</p>
        <div className="text-center mt-6">
          <Link
            to={`/book/${doctor.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
