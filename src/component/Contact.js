import React from "react";
import styled from "@emotion/styled";
import drawing2 from "../pic/contact3.png";
function Contact({ setScreen }) {
  let Container = styled.div`
    width: 100%;
    padding-right: 60vw;
    display: grid;
    grid-template-columns: 50% 1fr;
  `;
  let TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 20vw;
  `;
  let Img = styled.img`
    height: 40vw;
    opacity: 70%;
  `;

  let Text2 = styled.p`
    color: #d43109;
    font-size: 1.8vw;
    z-index: 1;
  `;
  let Button = styled.button`
    background-color: #4f8a8b;
    margin-left: 20%;
    width: 18vw;
    z-index: 1;
  `;
  const ClickHandler = (e) => {
    setScreen("contact");
  };
  return (
    <Container>
      <TextContainer>
        <Text2>Say Hi to Yan?</Text2>
        <Button onClick={ClickHandler}>Leave a message</Button>
      </TextContainer>
      <Img src={drawing2} alt="drawing" />
    </Container>
  );
}

export default Contact;
