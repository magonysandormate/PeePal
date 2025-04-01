export default function HozzaadForm() {
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

                <label className="block text-gray-700">Útvonalterv link:</label>
                <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">❓</button>
                <input 
                    type="text" 
                    placeholder="Útvonal link"
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