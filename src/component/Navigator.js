import React from "react";
import styled from "@emotion/styled";
import cv from "../pic/cv.pdf";
function Navigator() {
  let Container = styled.div`
    display: grid;
    grid-template-columns: 50% 1fr;
  `;
  let NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  let Link = styled.a`
    color: #d43109;
  `;
  let H1 = styled.h1`
    opacity: 30%;
    :hover {
      opacity: 1;
    }
  `;

  return (
    <Container>
      <H1>Yan</H1>
      <NavContainer>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
        <Link href={cv}>CV</Link>
      </NavContainer>
    </Container>
  );
}

export default Navigator;
