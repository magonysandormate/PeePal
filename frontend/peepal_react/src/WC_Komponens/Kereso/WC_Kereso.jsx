export default function Kereso() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4 text-center">
        <h2 className="text-xl font-bold">Helyzetmeghatározás</h2>
        <p className="text-gray-700">Engedélyezed a helyzetmeghatározást?</p>
        <div className="flex justify-center space-x-4">
          <button className="px-5 py-2 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 transition">
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
  