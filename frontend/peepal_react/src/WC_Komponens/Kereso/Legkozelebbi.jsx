import React, { useState, useEffect } from 'react';
import { mosdokFetch } from '../../apiFetch';

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in kilometers
};

export default function LegkozelebbiMosdo() {
  const [nearestRestroom, setNearestRestroom] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const findNearestRestroom = async (latitude, longitude) => {
    setLoading(true);
    try {
      // Fetch restrooms from the API
      const mosdok = await mosdokFetch();
      
      // Find the nearest restroom
      let nearest = null;
      let minDistance = Infinity;
      
      mosdok.forEach(mosdo => {
        // Use hossz_koord and szel_koord instead of latitude/longitude
        if (mosdo.hossz_koord && mosdo.szel_koord) {
          const distance = calculateDistance(
            latitude, 
            longitude, 
            mosdo.szel_koord, 
            mosdo.hossz_koord
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            nearest = mosdo;
          }
        }
      });
      
      if (nearest) {
        // Add the calculated distance to the nearest restroom object
        nearest.distanceKm = minDistance.toFixed(2);
        setNearestRestroom(nearest);
      } else {
        setError("Nem találtunk elérhető mosdót a közelben.");
      }
    } catch (err) {
      setError("Hiba történt a mosdók lekérésekor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationPermission = () => {
    if ("geolocation" in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          findNearestRestroom(latitude, longitude);
        },
        (error) => {
          setError("Nem sikerült lekérni a tartózkodási helyét: " + error.message);
          setLoading(false);
        }
      );
    } else {
      setError("A helymeghatározás nem elérhető a böngészőben.");
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return <div className="text-center text-red-600 p-4">{error}</div>;
  }

  // Render nearest restroom details
  if (nearestRestroom) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 relative">
        <h1 className="text-xl font-semibold text-gray-800 mb-3">Legközelebbi mosdó</h1>
        <div className="text-gray-600 space-y-2">
          <h2 className="font-medium text-gray-800">{nearestRestroom.nev}</h2>
          <p><span className="font-medium text-gray-800">Kerület:</span> {nearestRestroom.kerulet}</p>
          <p><span className="font-medium text-gray-800">Legközelebbi megálló:</span> {nearestRestroom.kozeli_megall}</p>
          <p><span className="font-medium text-gray-800">Ár:</span> {nearestRestroom.ar} Ft</p>
          <p><span className="font-medium text-gray-800">Nyitvatartás:</span> {nearestRestroom.nyitva}</p>
          
          <a
            href={nearestRestroom.utvonal}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Útvonalterv
          </a>
        </div>
        
        {nearestRestroom.akadalym && (
          <img 
            width="32" 
            height="32" 
            src="https://img.icons8.com/ios-filled/50/wheelchair.png" 
            alt="wheelchair" 
            className="absolute bottom-10 right-10"
          />
        )}
      </div>
      </div>
    );
  }

  // Default render (before location permission)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4 text-center">
        <h2 className="text-xl font-bold">Helyzetmeghatározás</h2>
        <p className="text-gray-700">Engedélyezed a helyzetmeghatározást?</p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleLocationPermission}
            className="px-5 py-2 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Igen
          </button>
          <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition">
            Nem
          </button>
        </div>
      </div>
    </div>
  );
}