import Bejelentkezes from './WC_Komponens/Bejel_Regisz/Bejelentkezes';
import Regisztracio from './WC_Komponens/Bejel_Regisz/Regisztracio';
import Menusor from './WC_Komponens/NavBar/Menusor';
import { Route, Routes } from 'react-router-dom';
import Kezdolap from './WC_Komponens/Kezdolap/Kezdolap';
import LegkozelebbiMosdo from './WC_Komponens/Kereso/Legkozelebbi';

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
        </Routes>
      </div>
    </>
  );
}
