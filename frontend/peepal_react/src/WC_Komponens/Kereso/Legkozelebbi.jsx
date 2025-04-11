import React, { useState } from 'react';
import { TfiWheelchair } from "react-icons/tfi";
import { mosdokFetch } from '../../apiFetch';

// Egyszerű koordináta-alapú távolság (nincs konverzió km-re)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const dx = lat1 - lat2;
  const dy = lon1 - lon2;
  return dx * dx + dy * dy; // távolság négyzete (nem baj, hogy nincs gyök alatt)
};

export default function LegkozelebbiMosdo() {
  const [nearestRestroom, setNearestRestroom] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const findNearestRestroom = async (latitude, longitude) => {
    setLoading(true);
    try {
      const mosdok = await mosdokFetch();
      let nearest = null;
      let minDistance = Infinity;

      mosdok.forEach(mosdo => {
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
          console.log(userLocation);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">{error}</div>;
  }

  if (nearestRestroom) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 relative">
          <h1 className="text-xl font-semibold text-gray-800 mb-3">Legközelebbi mosdó</h1>
          <div className="text-gray-600 space-y-2">
            <h2 className="font-medium text-gray-800">{nearestRestroom.nev}</h2>
            <p><span className="font-medium text-gray-800">Kerület:</span> {nearestRestroom.kerulet?.kerulet_nev ?? 'Ismeretlen'}</p>
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

          {nearestRestroom.akadalym === 1 ? (
            <TfiWheelchair className="absolute bottom-10 right-10 w-8 h-8" />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
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
