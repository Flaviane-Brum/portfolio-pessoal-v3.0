import styled from "styled-components";
import topRight from "/dec/top-right.svg";
export const Projects = styled.article`
  background: url(${topRight}) no-repeat top 40px right 40px, var(--color-10);
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (max-width: 50rem) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    background: var(--color-10);
  }
  h2 {
    color: var(--color-0);
    margin-bottom: 2rem;
    justify-self: flex-start;
    @media (max-width: 60.938rem) {
      text-align: center;
    }
  }
`;
export const Project = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
  @media (max-width: 69.438rem) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
