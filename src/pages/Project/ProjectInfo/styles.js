import styled from "styled-components";
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
    margin-bottom: 1rem;
  }
`;

export const ProjectLink = styled.ul`
  color: var(--color-6);
  font: var(--poppins-12);
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

export const LinkItem = styled.li`
  border-radius: 4px;
  background: var(--color-11);
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    color: var(--color-5);

    svg {
      font-size: 1.4rem;
      color: var(--color-p5);
    }
    &:hover {
      color: var(--color-0);
    }
  }
`;
