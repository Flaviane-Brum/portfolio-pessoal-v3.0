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
  &.active {
    color: var(--color-p5);
  }
  &:hover {
    color: var(--color-p2);
  }
  @media (max-width: 50rem) {
    background: var(--color-11);
    padding: 0.75rem 1rem;
    border-radius: 4px;
    &:hover {
      background-color: var(--color-10);
    }
  }
  @media (max-width: 40.063rem) {
    padding: 0.5rem 0.75rem;
    font: var(--poppins-16);
  }
`;
