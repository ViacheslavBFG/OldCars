import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonStyles = css`
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;

  border-radius: 15px;

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: orange;
    transition: all 0.65s;
    border-radius: 15px;
  }

  &:hover {
    color: #fff;

    &:after {
      width: 100%;
    }
  }
`;

export const StyledLink = styled.a`
  ${ButtonStyles}
`;

export default StyledLink;
