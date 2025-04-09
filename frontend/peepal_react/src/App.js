import Bejelentkezes from './WC_Komponens/Bejel_Regisz/Bejelentkezes';
import Regisztracio from './WC_Komponens/Bejel_Regisz/Regisztracio';
import Menusor from './WC_Komponens/NavBar/Menusor';
import { Route, Routes } from 'react-router-dom';
import Kezdolap from './WC_Komponens/Kezdolap/Kezdolap';
import LegkozelebbiMosdo from './WC_Komponens/Kereso/Legkozelebbi';
import HozzaadForm from './WC_Komponens/Hozzadas/HozzaadForm';
import Lablec from './WC_Komponens/Lablec/Lablec';

export default function App() {
  return (
    <>
      <Menusor />
      <div className=''>
        <Routes>
          <Route index element={<Kezdolap />}/>
          <Route path="/kereso" element={<LegkozelebbiMosdo />}/>
          <Route path="/bejelentkezes" element={<Bejelentkezes />}/>
          <Route path="/regisztracio" element={<Regisztracio />} />
          <Route path="/hozzaadas" element={<HozzaadForm />}/>
        </Routes>
      </div>
      <Lablec />
    </>
  );
}
