import styled from "styled-components";

export const Experience = styled.div`
  img {
    position: absolute;
    left: 0px;
    bottom: -40px;
  }
 display: flex;
  gap: 1.25rem;

  @media (max-width: 37.5rem) {
    flex-direction: column;
    max-width: 400px;
  }
`;
