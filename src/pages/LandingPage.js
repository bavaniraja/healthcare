import React, { useState, useEffect } from 'react';
import doctors from '../data/doctors.json';
import DoctorCard from '../components/DoctorCard';

function LandingPage() {
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    const result = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDoctors(result);
  }, [search]);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080')",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm p-6 overflow-y-auto">
        <div className="max-w-5xl mx-auto text-center py-10">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 drop-shadow">
            Your Health, Our Priority
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-8 px-4">
            Find the best doctors and book your appointments easily with our trusted platform.
          </p>

          <input
            type="text"
            placeholder="🔍 Search by name or specialization"
            className="w-full border border-blue-200 rounded-lg px-4 py-3 mb-10 focus:outline-none focus:border-blue-500 shadow-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center text-red-500 mt-10 text-lg">No doctors match your search. Please try again.</p>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
