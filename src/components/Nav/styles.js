import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav``;
export const Menu = styled.ul`
  flex-wrap: wrap;
  display: flex;
  gap: 2.5rem;
  list-style: none;
  @media (max-width: 50rem) {
    gap: 1.25rem;
  }

  @media (max-width: 30rem) {
    display: none;
  }
`;

export const Anchor = styled(Link)`
  font: var(--poppins-18);
  color: var(--color-0);
  display: inline-block;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0px;
    background: var(--color-0);
    margin-top: 2px;
    transition: 0.3s;
    position: absolute;
  }
  &:hover:after,
  &.active:after {
    width: 100%;
  }
  @media (max-width: 50rem) {
    background: var(--color-11);
    padding: 0.75rem 1rem;
    border-radius: 4px;
    &:hover {
      background-color: var(--color-10);
    }
    &.active {
      background-color: var(--color-p3);
      color: var(--color-p10);
    }
    &::after {
      display: none;
    }
  }
  @media (max-width: 40.063rem) {
    padding: 0.5rem 0.75rem;
    font: var(--poppins-16);
  }
`;
