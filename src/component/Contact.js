import React from "react";
import styled from "@emotion/styled";
import drawing2 from "../pic/contact3.png";
function Contact() {
  let Container = styled.div`
    width: 100%;
    padding-right: 30vw;
    display: grid;
    grid-template-columns: 35% 1fr;
  `;
  let TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
  `;
  let Img = styled.img`
    height: 40vw;
    opacity: 70%;
  `;

  let Text2 = styled.p`
    color: #d43109;
    font-size: 2vw;
    line-height: 60%;
  `;
  let Button = styled.button`
    background-color: #4f8a8b;
    margin-left: 30%;
    width: 10vw;
  `;

  return (
    <Container>
      <TextContainer>
        <Text2>Say Hi to Yan?</Text2>
        <Button>Contact</Button>
      </TextContainer>
      <Img src={drawing2} alt="drawing" />
    </Container>
  );
}

export default Contact;
