import Bejelentkezes from './WC_Komponens/Bejel_Regisz/Bejelentkezes';
import Regisztracio from './WC_Komponens/Bejel_Regisz/Regisztracio';
import Kereso from './WC_Komponens/Kereso/WC_Kereso';
import Menusor from './NavBar/Menusor';
import { Route, Routes } from 'react-router-dom';
import Kezdolap from './WC_Komponens/Kezdolap/Kezdolap';
import Fejlec from './WC_Komponens/Fejlec/Fejlec';

export default function App() {
  return (
    <>
      <Menusor />
      <Fejlec />
      <div>
        <Routes>
          <Route index element={<Kezdolap />}/>
          <Route path="/kereso" element={<Kereso />}/>
          <Route path="/bejelentkezes" element={<Bejelentkezes />}/>
          <Route path="/regisztracio" element={<Regisztracio />} />
        </Routes>
      </div>
    </>
  );
}
