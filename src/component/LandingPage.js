import React from "react";
import styled from "@emotion/styled";
import drawing from "../pic/coding.png";
function LandingPage() {
  let Container = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    padding: 2vw 0;
  `;
  let TextContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  let Img = styled.img`
    height: 30vw;
    opacity: 70%;
  `;
  let Text1 = styled.p`
    color: #4f8a8b;
  `;
  let Text2 = styled.p`
    color: #d43109;
    font-size: 3vw;
    line-height: 60%;
  `;
  let Button = styled.button`
    background-color: #d43109;
    margin-left: 50%;
  `;

  return (
    <Container>
      <TextContainer>
        <Text1>Hi, my name is</Text1>
        <Text2>Yan Jiang</Text2>
        <Text2>I am a software developer</Text2>
        <Text1>
          I am a software developer based in Oslo, specializing in building and
          occasionally designing websites, apps.
        </Text1>
        <Button>Get in Touch</Button>
      </TextContainer>
      <Img src={drawing} alt="drawing" />
    </Container>
  );
}

export default LandingPage;
