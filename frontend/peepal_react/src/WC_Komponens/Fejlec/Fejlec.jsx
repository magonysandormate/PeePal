export default function Fejlec() {
    return (
      <header
        className="fixed top-0 left-0 w-full h-[60vh] bg-no-repeat bg-cover bg-top z-10"
        style={{ backgroundImage: "url('/fejlec_hatter.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-3xl font-bold mb-2 bg-black/50 p-3 rounded-lg inline-block">
            Üdvözöljük a PeePal weboldalán!
          </h1>
          <h2 className="text-lg font-medium max-w-md bg-black/40 p-3 rounded-lg">
            Találja meg a hozzá legközelebb eső nyilvános mosdót egy kattintással (vagy kettővel)
          </h2>
        </div>
      </header>
    );
  }
  