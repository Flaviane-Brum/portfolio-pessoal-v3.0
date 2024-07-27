import styled from "styled-components";
import bottomRight from "/dec/bottom-right.svg";
import topRight from "/dec/top-right.svg";
export const About = styled.article`
  background: url(${topRight}) no-repeat top 40px right 40px,
    url(${bottomRight}) no-repeat right 40px bottom 40px, var(--color-11);
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (max-width: 64rem) {
    background: var(--color-11);
  }
  @media (max-width: 50rem) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1.25rem;
  justify-items: center;

  @media (max-width: 64rem) {
    gap: 0;
  }
  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;
export const AboutImg = styled.div`
  position: relative;
  background: transparent;
  @media (max-width: 64rem) {
    max-width: 340px;
    margin-bottom: 20px;
  }
  @media (max-width: 37.5rem) {
    max-width: 260px;
  }

  &::before {
    content: "";
    display: block;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 20px;
    background-color: var(--color-p5);
    @media (max-width: 1024px) {
      width: 280px;
      height: 280px;
      left: 20px;
      top: 10px;
    }
    @media (max-width: 37.5rem) {
      width: 260px;
      height: 250px;
      left: 2px;
      top: 10px;
    }
  }
`;

export const Gif = styled.img`
  position: relative;
  z-index: 2;
`;

export const AboutContent = styled.div`
  align-self: center;
  @media (max-width: 50rem) {
    font: var(--roboto-18);
    text-align: center;
  }
  h2 {
    margin-bottom: 2rem;
    color: var(--color-0);
    @media (max-width: 64rem) {
      margin-bottom: 1rem;
    }
  }
  p {
    max-width: 60ch;
    font: var(--roboto-18);
    color: var(--color-5);
    margin-bottom: 1rem;
    @media (max-width: 64rem) {
      max-width: 40ch;
    }
    @media (max-width: 37.5rem) {
      font: var(--roboto-16);
    }

    &:last-child {
      margin-bottom: 0rem;
    }
    strong {
      color: var(--color-p4);
    }
  }
`;
