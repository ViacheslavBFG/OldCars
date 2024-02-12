import styled from 'styled-components';

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`;

export const ModalWindowStyle = styled.div`
  border: 2px solid black;
  font-size: 15px;
  color: black;
  width: 450px;
  height: 338px;
  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: orange;

  position: relative;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: calc(20 * (100vw / 480));
    min-width: 900px;
    min-height: 650px;
  }

  @media screen and (max-width: 900px) {
    width: 550px;
    height: 600px;
    font-size: 11px;
    border-radius: 15px;
  }

  @media screen and (max-width: 520px) {
    width: 450px;
    height: 600px;
    font-size: 9px;
    border-radius: 15px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 15px;
    padding: calc(20 * (100vw / 480));
    width: 420px;
    height: 318px;
  }
`;

export const ButtonCloseStyle = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  /* display: none; */
  display: block;

  @media screen and (min-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
`;
// ---------------------------

export const Modalul = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  text-align: justify;
`;

export const Span = styled.span`
  font-weight: bold;
`;
