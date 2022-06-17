import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderProject = styled.header`
  background: var(--color-12);
  box-shadow: 0 1px 1px var(--color-11);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  justify-content: center;
`;

export const HeaderLogo = styled(Link)`
  padding: 0.5rem 0;
  img {
    height: 28px;
  }
`;
