import styled from "styled-components";
import { Link } from "react-scroll";

export const Icon = styled.span`
  position: relative;
  display: block;
  line-height: 70px;
  font-size: 1.5rem;
  text-align: center;
  color: var(--color-p5);
  transition: transform 0.5s, color 0.5s;
`;

export const Text = styled.span`
  position: absolute;
  font: var(--poppins-12);
  font-weight: 400;
  color: var(--color-5);
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
`;

export const Indicater = styled.li`
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: var(--color-p5);
  border-radius: 50%;
  border: 6px solid var(--color-12);
  transition: transform 0.5s;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 var(--color-12);
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 var(--color-12);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: var(--color-11);
  color: var(--color-0);
  position: relative;
  border-radius: 10px;
  margin-top: 2rem;

  ul {
    display: flex;
  }
`;

export const NavigationItem = styled.li.attrs({
  tabIndex: 0,
})`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
  color: var(--color-0);

  &:nth-child(1).active ~ ${Indicater} {
    transform: translateX(calc(70px * 0));
  }
  &:nth-child(2).active ~ ${Indicater} {
    transform: translateX(calc(70px * 1));
  }
  &:nth-child(3).active ~ ${Indicater} {
    transform: translateX(calc(70px * 2));
  }
  &:nth-child(4).active ~ ${Indicater} {
    transform: translateX(calc(70px * 3));
  }
  &:nth-child(5).active ~ ${Indicater} {
    transform: translateX(calc(70px * 4));
  }
`;

export const Anchor = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
  -webkit-tap-highlight-color: transparent;

  &.active ${Icon} {
    transform: translateY(-32px);
    color: var(--color-p9);
    font-size: 1.5rem;
  }

  &.active ${Text} {
    opacity: 1;
    transform: translateY(10px);
  }
`;
