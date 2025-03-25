export default function Regisztracio() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center">Regisztráció</h2>
  
          <label className="block text-gray-700">Név:</label>
          <input
            type="text"
            placeholder="Név"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <label className="block text-gray-700">E-mail cím:</label>
          <input
            type="email"
            placeholder="E-mail cím"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <label className="block text-gray-700">Felhasználónév:</label>
          <input
            type="text"
            placeholder="Felhasználónév"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <label className="block text-gray-700">Jelszó:</label>
          <input
            type="password"
            placeholder="Jelszó"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <label className="block text-gray-700">Jelszó újra:</label>
          <input
            type="password"
            placeholder="Jelszó újra"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Regisztráció
          </button>
        </form>
      </div>
    );
  }
  