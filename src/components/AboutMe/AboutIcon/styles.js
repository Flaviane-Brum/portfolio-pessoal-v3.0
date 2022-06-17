import styled from "styled-components";
import { keyframes } from "styled-components";
const iconMove = keyframes`
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(10px, -30px, 0);
  }
`;

export const Icons = styled.div`
  position: absolute;
  background-color: transparent;
  z-index: 2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-10);
  box-sizing: border-box;
  max-height: 70px;
  padding: 0.5rem;
  max-width: 70px;
  box-shadow: 0 2px 3px 0 rgb(0 0 0/50%);

  @media (max-width: 64rem) {
    max-width: 50px;
    max-height: 50px;
  }
  @media (max-width: 50rem) {
    font-size: 2.5rem;
    max-width: 40px;
    max-height: 40px;
    padding: 0.2rem;
  }
  svg {
    color: var(--color-p5);
    font-size: 4.375rem;
    filter: drop-shadow(2px 2px 1px #000);
    @media (max-width: 64rem) {
      font-size: 3.125rem;
    }
    @media (max-width: 50rem) {
      font-size: 2.5rem;
    }
  }

  &.iconJs {
    top: 0px;
    left: 50px;
    animation: ${iconMove} ease 2.6s infinite alternate;

    @media (max-width: 1024px) {
      top: 20px;
      left: 0px;
    }
  }
  &.iconCss {
    top: 20px;
    left: 390px;
    animation: ${iconMove} ease 3.2s infinite alternate;
    @media (max-width: 64rem) {
      top: 20px;
      left: 230px;
    }
    @media (max-width: 37.5rem) {
      left: 170px;
    }
  }
  &.iconHTML {
    bottom: 0;
    left: 0px;
    animation: ${iconMove} 3s ease 1.6s infinite alternate;
    @media (max-width: 64rem) {
      bottom: 10px;
      left: 0px;
    }
  }
`;
