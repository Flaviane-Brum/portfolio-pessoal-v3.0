import styled from "styled-components";

export const Experience = styled.div`
  img {
    position: absolute;
    left: 0px;
    bottom: -40px;
  }
  p {
    font: var(--roboto-16);
    color: var(--color-5);
    max-width: 55ch;
    a {
      color: var(--color-p5);
      display: inline-block;
      position: relative;
      &:after {
        content: "";
        display: block;
        height: 2px;
        width: 0px;
        background: var(--color-p5);
        margin-top: 2px;
        transition: 0.3s;
        position: absolute;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
`;
