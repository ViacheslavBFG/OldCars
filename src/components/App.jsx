import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyle';
import Homepage from 'components/Homepage/homepage';
import Galery from '../components/Galery/galery';
export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route  path='/'  element={<Homepage />} />
        <Route  path='/galery' element={<Galery />} />
      </Routes>
    </>
  );
};
