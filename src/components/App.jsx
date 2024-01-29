import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyle';
import Homepage from 'components/Homepage/homepage';
import Gallery from './Gallery/gallery';
import AmcRebel from './Cars/amcrebelmachine/AmcRebel';
import ChevroletCamaro from './Cars/chevroletcamaro/ChevroletCamaro';
import DodgeCharger from './Cars/dodgecharger/DodgeCharger';
import FordMustang from './Cars/fordmustang/FordMustang';
import MercuryCougar from './Cars/mercurycougar/MercuryCougar';
import PontiacFirebird from './Cars/pontiacfirebird/PontiacFirebird';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Chevrolet-Camaro" element={<ChevroletCamaro />} />
        <Route path="/Dodge-Charger" element={<DodgeCharger />} />
        <Route path="/Ford-Mustang" element={<FordMustang />} />
        <Route path="/MercuryCougar" element={<MercuryCougar />} />
        <Route path="/AmcRebel" element={<AmcRebel />} />
        <Route path="/PontiacFirebird" element={<PontiacFirebird />} />
      </Routes>
    </>
  );
};
