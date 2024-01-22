import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyle';
import Homepage from 'components/Homepage/homepage';


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Homepage />
      
      <Routes></Routes>
    </>
  );
};
