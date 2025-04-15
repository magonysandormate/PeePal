import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HozzaadForm() {
    const [nev, setNev] = useState("");
    const [kerulet_id, setKeruletId] = useState("");
    const [kozeli_megall, setKozeli] = useState("");
    const [akadalym, setAkadalym] = useState(false);
    const [ar, setAr] = useState("");
    const [nyitva, setNyitva] = useState("");
    const [utvonal, setUtvonal] = useState("");
    const [koordinatak, setKoordinatak] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validáció: egyszerű kötelező mező ellenőrzések
        const newErrors = {};
        if (!nev.trim()) newErrors.nev = "A név megadása kötelező.";
        if (!kerulet_id) newErrors.kerulet_id = "Kerület kiválasztása kötelező.";
        if (!kozeli_megall.trim()) newErrors.kozeli_megall = "A megálló megadása kötelező.";
        if (!koordinatak.trim()) newErrors.koordinatak = "A koordináták megadása kötelező.";
        if (!/^-?\d+\.\d+, ?-?\d+\.\d+$/.test(koordinatak)) newErrors.koordinatak = "Helytelen formátum. (pl. 47.1234, 19.1234)";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const wcInfo = {
            nev,
            kerulet_id,
            kozeli_megall,
            akadalym,
            ar,
            nyitva,
            utvonal,
            koordinatak,
            felhasznalo_id: null
        };

        try {
            const response = await fetch("http://localhost:8000/api/hozzaadas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(wcInfo)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Hiba a POST kérésnél:", errorData);
                alert("Hiba történt az adatok mentésekor.");
                return;
            }

            await response.json();
            setNev("");
            setKeruletId("");
            setKozeli("");
            setAkadalym(false);
            setAr("");
            setNyitva("");
            setUtvonal("");
            setKoordinatak("");
            setErrors({});
            navigate("/");

        } catch (error) {
            console.error("Hálózati hiba:", error);
            alert("Nem sikerült csatlakozni a szerverhez.");
        }
    };

    const ToolTip = ({ children, text }) => (
        <div className="relative group">
            {children}
            <div className="absolute left-full transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md py-2 px-3 w-48 z-10 shadow-lg opacity-0 group-hover:opacity-100">
                {text}
            </div>
        </div>
    );

    const convertToRoman = (num) => {
        const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let str = "";
        for (let i in roman) {
            const q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-yellow-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-2xl font-bold text-center">Adjon hozzá nyilvános mosdót, ha nem találja az oldalon</h2>

                <label className="block text-gray-700">Mosdó neve:</label>
                <input
                    type="text"
                    value={nev}
                    onChange={(e) => setNev(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mosdó neve"
                />
                {errors.nev && <p className="text-red-600 text-sm">{errors.nev}</p>}

                <label className="block text-gray-700">Kerület:</label>
                <select
                    value={kerulet_id}
                    onChange={(e) => setKeruletId(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Válassz kerületet</option>
                    {Array.from({ length: 23 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {convertToRoman(i + 1)}. kerület
                        </option>
                    ))}
                </select>
                {errors.kerulet_id && <p className="text-red-600 text-sm">{errors.kerulet_id}</p>}

                <label className="block text-gray-700">Legközelebbi megálló:</label>
                <input
                    type="text"
                    value={kozeli_megall}
                    onChange={(e) => setKozeli(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Legközelebbi megálló"
                />
                {errors.kozeli_megall && <p className="text-red-600 text-sm">{errors.kozeli_megall}</p>}

                <label className="block text-gray-700">Ár:</label>
                <input
                    type="number"
                    value={ar}
                    onChange={(e) => setAr(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ár (HUF)"
                />

                <label className="block text-gray-700">Nyitvatartás:</label>
                <input
                    type="text"
                    value={nyitva}
                    onChange={(e) => setNyitva(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nyitvatartás (Óra:Perc-Óra:Perc)"
                />

                <fieldset className="mt-4">
                    <legend className="block text-gray-700">Akadálymentes:</legend>
                    <div className="flex space-x-4 mt-2">
                        <label className="flex items-center">
                            <input type="radio" checked={akadalym === true} onChange={() => setAkadalym(true)} className="mr-2" /> Igen
                        </label>
                        <label className="flex items-center">
                            <input type="radio" checked={akadalym === false} onChange={() => setAkadalym(false)} className="mr-2" /> Nem
                        </label>
                    </div>
                </fieldset>

                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">Útvonalterv link:</label>
                    <ToolTip text="Az útvonalterv linket a Google Maps-en éri el (Megosztás ➡ Link másolása)">❔</ToolTip>
                </div>
                <input
                    type="text"
                    value={utvonal}
                    onChange={(e) => setUtvonal(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Útvonal link"
                />

                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">Koordináták:</label>
                    <ToolTip text="A koordinátákat a helyre kattintva tudja a vágólapra másolni [Jobbklikk ➡ Koordináták (pl. 41.1212, 21.3213)]">❔</ToolTip>
                </div>
                <input
                    type="text"
                    value={koordinatak}
                    onChange={(e) => setKoordinatak(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Koordináták"
                />
                {errors.koordinatak && <p className="text-red-600 text-sm">{errors.koordinatak}</p>}

                <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">Hozzáadás</button>
            </form>
        </div>
    );
}