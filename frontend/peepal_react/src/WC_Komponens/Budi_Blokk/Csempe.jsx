import React, { useState, useEffect } from "react";
import { mosdokFetch } from "../../apiFetch";

export default function Csempe() {
    const [mosdok, setMosdok] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            const data = await mosdokFetch();
            if (data) {
                setMosdok(data);
            } else {
                setError("Nem sikerült betölteni az adatokat.");
            }
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) {
        return(
          <div className="flex justify-center items-center h-32">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
          </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-600 p-4">{error}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {mosdok.map((mosdo, index) => (
                <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 relative">
                    <h1 className="text-xl font-semibold text-gray-800 mb-3">{mosdo.nev}</h1>
                    <div className="text-gray-600 space-y-1">
                        <p><span className="font-medium text-gray-800">Kerület:</span> {mosdo.kerulet}</p>
                        <p><span className="font-medium text-gray-800">Legközelebbi megálló:</span> {mosdo.kozeli_megall}</p>
                        <p><span className="font-medium text-gray-800">Ár:</span> {mosdo.ar} Ft</p>
                        <p><span className="font-medium text-gray-800">Nyitvatartás:</span> {mosdo.nyitva}</p>
                    </div>
                    {mosdo.akadalym && (
                        <img 
                            width="32" 
                            height="32" 
                            src="https://img.icons8.com/ios-filled/50/wheelchair.png" 
                            alt="wheelchair" 
                            className="absolute bottom-10 right-10"
                        />
                    )}
                    <a
                        href={mosdo.utvonal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition"
                    >
                        Útvonalterv
                    </a>
                </div>
            ))}
        </div>
    );
}

