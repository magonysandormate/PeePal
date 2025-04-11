export default function Bejelentkezes() {
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
  