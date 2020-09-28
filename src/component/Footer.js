import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  let P = styled.p`
    text-shadow: 0 1px rgba(255, 255, 255, 0.1);
    text-align: center;
  `;
  return (
    <div>
      <P>© Copyright 2020 Yan. All rights reserved.</P>
    </div>
  );
};

export default Footer;
