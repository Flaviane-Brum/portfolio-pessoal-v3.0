import { Link } from "react-scroll";
import styled from "styled-components";
import { keyframes } from "styled-components";
const slide = keyframes`
 0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

export const ProjectContainer = styled.article`
  background: var(--color-11);
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;

  @media (max-width: 61.938rem) {
    padding-bottom: 2.75rem;
  }
`;

export const Project = styled.div`
  padding-top: 3.75rem;
  animation: ${slide} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (max-width: 61.938rem) {
    padding-top: 2.75rem;
  }
  h2 {
    color: var(--color-0);
    margin-bottom: 2.5rem;

    @media (max-width: 61.938rem) {
      margin-bottom: 1.5rem;
      text-align: center;
    }
  }
`;

export const ProjectSpan = styled.span`
  color: var(--color-5);
  font: var(--roboto-18);
  font-weight: 500;
  letter-spacing: 0.015em;
  display: block;
  text-transform: uppercase;
  @media (max-width: 61.938rem) {
    text-align: center;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: flex-start;
  justify-items: center;
  h3 {
    color: var(--color-p5);
    font: var(--poppins-24);
    margin-bottom: 1rem;
  }
  @media (max-width: 61.938rem) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProjectContent = styled.div`
  background-color: var(--color-12);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 16px 4px rgb(0 0 0 / 30%);

  p {
    color: var(--color-5);
    font: var(--roboto-16);
    margin-bottom: 1rem;
    max-width: 60ch;
  }

  h4 {
    font: var(--poppins-12);
    color: var(--color-0);
    text-transform: uppercase;
    letter-spacing: 0.015em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 61.938rem) {
    max-width: 600px;
    width: 100%;
  }
`;
export const Up = styled(Link)`
  align-self: flex-end;
`;