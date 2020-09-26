import React from "react";
import landscape from "../pic/city.png";
import styled from "@emotion/styled";

function Decor() {
  let Img = styled.img`
    width: 100%;
    opacity: 10%;
  `;
  return (
    <div>
      <Img src={landscape} alt="breaking line" />
    </div>
  );
}

export default Decor;
