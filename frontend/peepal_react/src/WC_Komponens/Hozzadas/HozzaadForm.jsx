export default function HozzaadForm() {
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-2xl font-bold text-center">Adjon hozzá nyilvános mosdót, ha nem találja az oldalon</h2>
                
                <label className="block text-gray-700">Mosdó neve:</label>
                <input 
                    type="text" 
                    placeholder="Mosdó neve"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Kerület:</label>
                <input 
                    type="text" 
                    placeholder="Kerület"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Legközelebbi megálló:</label>
                <input 
                    type="text" 
                    placeholder="Legközelebbi megálló"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Ár:</label>
                <input 
                    type="text" 
                    placeholder="Ár"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-700">Nyitvatartás:</label>
                <input 
                    type="text" 
                    placeholder="Nyitvatartás (Óra:Perc-Óra:Perc)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <fieldset className="mt-4">
                    <legend className="block text-gray-700">Akadálymentes:</legend>
                    <div className="flex space-x-4 mt-2">
                        <label className="flex items-center">
                            <input type="radio" id="igen" name="akadalymentes" value="igen" className="mr-2" />
                            Igen
                        </label>
                        <label className="flex items-center">
                            <input type="radio" id="nem" name="akadalymentes" value="nem" className="mr-2" />
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
                    placeholder="Útvonal link"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                

                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">Koordináták:</label>
                    <ToolTip children={"❔"} text={"A koordinátákat a helyre kattintva tudja a vágólapra másolni [Jobbklikk ➡ Koordináták (pl. 41.1212, 21.3213)]"} />
                </div>
                <input 
                    type="text" 
                    placeholder="Koordináták"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button 
                    type="submit" 
                    className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                    Hozzáadás
                </button>
            </form>
        </div>
    );
}