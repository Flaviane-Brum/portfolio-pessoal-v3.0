import styled from "styled-components";

export const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: #fff;

  @media (max-width: 480px) {
    justify-content: center;
    gap: 12px;
  }
`;

export const DecY2 = styled.img`
  position: absolute;
  left: -50px;
  top: -20px;
`;
