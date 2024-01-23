import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyle';
import Homepage from 'components/Homepage/homepage';
import Gallery from './Gallery/gallery';
export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route  path='/'  element={<Homepage />} />
        <Route  path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  );
};
