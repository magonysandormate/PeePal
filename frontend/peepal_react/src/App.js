import Bejelentkezes from './WC_Komponens/Bejel_Regisz/Bejelentkezes';
import Regisztracio from './WC_Komponens/Bejel_Regisz/Regisztracio';
import Kereso from './WC_Komponens/Kereso/WC_Kereso';
import Menusor from './NavBar/Menusor';
import { Route, Routes } from 'react-router-dom';
import Kezdolap from './WC_Komponens/Kezdolap/Kezdolap';
import Fejlec from './WC_Komponens/Fejlec/Fejlec';
import HozzaadGomb from './WC_Komponens/Hozzadas/HozzaadGomb';

export default function App() {
  return (
    <>
      <Menusor />
      <Fejlec />
      <HozzaadGomb />
      <div className=''>
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
