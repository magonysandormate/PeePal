import React, { useState, useEffect } from 'react';

export default function Bejelentkezes() {

  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch('/users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // Include the CSRF token for Laravel if your API is protected
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
        },
        credentials: 'include', // Includes cookies in the request
      });
      console.log(response)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
      console.log(users)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  

    return (
      <div className="flex justify-center items-center min-h-screen bg-yellow-100">
        <form className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4">
          <h2 className="text-2xl font-bold text-center">Bejelentkezés</h2>
  
          <input
            type="text"
            placeholder="Felhasználónév"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <input
            type="password"
            placeholder="Jelszó"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Bejelentkezés
          </button>
        </form>
      </div>
    );
  }
  