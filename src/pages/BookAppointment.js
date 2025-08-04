import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../data/doctors.json';

function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.datetime) {
      setSubmitted(true);
    }
  };

  if (!doctor) {
    return <div className="text-center mt-10 text-red-500 text-xl">❌ Doctor not found</div>;
  }

  if (!doctor.available) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-100">
        <div className="bg-white p-6 rounded shadow-lg text-center text-red-600 font-semibold">
          🚫 Sorry, Dr. {doctor.name} is currently unavailable for appointments.
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center">
          <div className="text-4xl text-green-500 mb-4">✅</div>
          <h2 className="text-xl font-semibold mb-2 text-green-700">Appointment Confirmed!</h2>
          <p className="text-gray-700 mb-1"><strong>Patient:</strong> {form.name}</p>
          <p className="text-gray-700 mb-1"><strong>Email:</strong> {form.email}</p>
          <p className="text-gray-700"><strong>Scheduled:</strong> {new Date(form.datetime).toLocaleString()}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Book Appointment with {doctor?.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="datetime-local"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={form.datetime}
            onChange={(e) => setForm({ ...form, datetime: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
