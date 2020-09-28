import React from "react";
import styled from "@emotion/styled";
import cv from "../pic/cv.pdf";
function Navigator({ setScreen }) {
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
  const ClickHandler = (e) => {
    setScreen("main");
  };
  const ClickHandler1 = (e) => {
    setScreen("about");
  };
  const ClickHandler2 = (e) => {
    setScreen("project");
  };
  const ClickHandler3 = (e) => {
    setScreen("contact");
  };

  return (
    <Container>
      <H1 onClick={ClickHandler}>Yan</H1>
      <NavContainer>
        <Link onClick={ClickHandler1}>About</Link>
        <Link onClick={ClickHandler2}>Projects</Link>
        <Link onClick={ClickHandler3}>Contact</Link>
        <Link href={cv}>CV</Link>
      </NavContainer>
    </Container>
  );
}

export default Navigator;
