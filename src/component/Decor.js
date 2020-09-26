import React from "react";
import landscape from "../pic/city.png";
import styled from "@emotion/styled";

function Decor() {
  let Img = styled.img`
    width: 40%;
    opacity: 10%;
    padding: 0;
  `;
  return (
    <div>
      <Img src={landscape} alt="breaking line" />
      <Img src={landscape} alt="breaking line" />
    </div>
  );
}

export default Decor;
