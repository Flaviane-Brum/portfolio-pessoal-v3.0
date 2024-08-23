import styled from "styled-components";
export const Footer = styled.footer`
  color: var(--color-0);
	background:var(--color-11);
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 4fr;
  gap: 2.5rem;
  h3 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.015em;
    font: var(--roboto-24);
    color: var(--color-0);
    @media (max-width: 37.5rem) {
      margin-bottom: 1rem;
    }
  }
  p {
    grid-column: 1/-1;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    font: var(--roboto-18);
    span {
      color: #9071e9;
    }
  }
  @media (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
    img {
      display: none;
    }
  }
  @media (max-width: 37.5rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export const FooterContact = styled.div``;
export const ContactList = styled.ul`
  margin-bottom: 2rem;
  li {
    font: var(--roboto-18);
    color: var(--color-5);
    margin-bottom: 1rem;
    &:nth-child(2):after {
      content: "";
      display: block;
      max-width: 360px;
      height: 2px;
      background: var(--color-10);
      margin-top: 1rem;
    }

    a {
      &:hover {
        color: var(--color-0);
      }
    }
  }
`;
export const SocialList = styled.div`
  display: flex;
  gap: 0.75rem;
  a {
    transition: 0.3s;
    &:hover svg {
      fill: var(--color-p3);
    }
  }
`;
export const FooterSocial = styled.div`
  font: var(--poppins-18);
  color: var(--color-5);
`;
