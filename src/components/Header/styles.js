import styled from "styled-components";

export const Header = styled.header`
  background: var(--color-12);
  box-shadow: 0 1px 1px var(--color-11);
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  nav {
    position: relative;
    display: flex;
    align-items: center;
  }
  @media (max-width: 50rem) {
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 30rem) {
    gap: 0.188rem;
  }
`;

export const HeaderLogo = styled.div`
  padding: 0.5rem 0;
  img {
    height: 28px;
  }
  @media (max-width: 30rem) {
    display: none;
  }
`;
