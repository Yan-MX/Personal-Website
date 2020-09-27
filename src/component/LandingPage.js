import React from "react";
import styled from "@emotion/styled";
import drawing from "../pic/coding.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
function LandingPage() {
  let Container = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    padding: 2vw 0;
  `;
  let TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
  `;
  let IconContainer = styled.div`
    margin: 0;
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
  `;
  let Button = styled.button`
    background-color: #d43109;
    margin: 3vw 0 3vw 50%;
  `;

  return (
    <Container>
      <TextContainer>
        <Text1>Hi, my name is</Text1>
        <Text2>
          Yan Jiang <br />I am a software developer
        </Text2>
        <Text1>
          I am a software developer based in Oslo, specializing in building and
          occasionally designing websites, apps.
        </Text1>
        <Button>Get in Touch</Button>
        <IconContainer>
          <a href="https://github.com/Yan-MX" target="_blank">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jiang-yan-19a71a53/"
            target="_blank"
          >
            <IconContext.Provider value={{ margin: 0, padding: 0 }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>

          <a href="https://www.instagram.com/yanjiangpom/" target="_blank">
            <FaInstagram />
          </a>
        </IconContainer>
      </TextContainer>
      <Img src={drawing} alt="drawing" />
    </Container>
  );
}

export default LandingPage;
