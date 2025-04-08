import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HozzaadForm() {
    const [nev, setNev] = useState("");
    const [kerulet, setKerulet] = useState("");
    const [kozeli_megall, setKozeli] = useState("");
    const [akadalym, setAkadalym] = useState(false);
    const [ar, setAr] = useState("");
    const [nyitva, setNyitva] = useState("");
    const [utvonal, setUtvonal] = useState("");
    const [koordinatak, setKoordinatak] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const wcInfo = {
            nev: nev,
            kerulet: kerulet,
            kozeli_megall: kozeli_megall,
            akadalym: akadalym,
            ar: ar,
            nyitva: nyitva,
            utvonal: utvonal,
            koordinatak: koordinatak
        }

        fetch("http://localhost:8000/api/hozzaadas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wcInfo)
        })
            .then((response) => response.json())
            .then((newWC) => {
                setNev("");
                setKerulet("");
                setKozeli("");
                setAkadalym(false);
                setAr("");
                setNyitva("");
                setUtvonal("");
                setKoordinatak("");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    const ToolTip = ({children, text}) => {
        return(
            <div className="relative group">
                {children}
                <div className="absolute left-full transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md py-2 px-3 w-48 z-10 shadow-lg opacity-0 group-hover:opacity-100">
                    {text}
                </div>
            </div>


        )
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-yellow-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">Adjon hozzá nyilvános mosdót, ha nem találja az oldalon</h2>
                
                <label className="block text-gray-700">Mosdó neve:</label>
                <input 
                    type="text"
                    name="nev"
                    value={nev} 
                    onChange={(event) => setNev(event.target.value)}
                    placeholder="Mosdó neve"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Kerület:</label>
                <input 
                    type="text"
                    name="kerulet"
                    value={kerulet} 
                    onChange={(event) => setKerulet(event.target.value)}
                    placeholder="Kerület"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Legközelebbi megálló:</label>
                <input 
                    type="text"
                    name="kozeli_megall"
                    value={kozeli_megall}  
                    onChange={(event) => setKozeli(event.target.value)}
                    placeholder="Legközelebbi megálló"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Ár:</label>
                <input 
                    type="number" 
                    name="ar"
                    value={ar} 
                    onChange={(event) => setAr(event.target.value)}
                    placeholder="Ár (HUF)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Nyitvatartás:</label>
                <input 
                    type="text" 
                    name="nyitva"
                    value={nyitva} 
                    onChange={(event) => setNyitva(event.target.value)}
                    placeholder="Nyitvatartás (Óra:Perc-Óra:Perc)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <fieldset className="mt-4">
                    <legend className="block text-gray-700">Akadálymentes:</legend>
                    <div className="flex space-x-4 mt-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                id="igen"
                                name="akadalym"
                                value="igen"
                                checked={akadalym === true}
                                onChange={() => setAkadalym(true)}
                                className="mr-2"
                            />
                            Igen
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                id="nem"
                                name="akadalym"
                                value="nem"
                                checked={akadalym === false}
                                onChange={() => setAkadalym(false)}
                                className="mr-2"
                            />
                            Nem
                        </label>
                    </div>
                </fieldset>

                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">Útvonalterv link:</label>
                    <ToolTip children={"❔"} text={"Az útvonalterv linket a Google Maps-en éri el (Megosztás ➡ Link másolása)"} />
                </div>
                <input 
                    type="text" 
                    name="utvonal"
                    value={utvonal} 
                    onChange={(event) => setUtvonal(event.target.value)}
                    placeholder="Útvonal link"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                

                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">Koordináták:</label>
                    <ToolTip children={"❔"} text={"A koordinátákat a helyre kattintva tudja a vágólapra másolni [Jobbklikk ➡ Koordináták (pl. 41.1212, 21.3213)]"} />
                </div>
                <input 
                    type="text" 
                    name="koordinatak"
                    value={koordinatak} 
                    onChange={(event) => setKoordinatak(event.target.value)}
                    placeholder="Koordináták"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button 
                    className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                    Hozzáadás
                </button>
            </form>
        </div>
    );
}