import React from "react";
import styled from "@emotion/styled";
function Form() {
  let Iframe = styled.iframe`
    width: 70vw;
    height: 50vw;
  `;
  return (
    <div>
      <Iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc2tz74zJwsT-e8gziiFsWDpLsqNyhfNySL4mwb3SOzLlplzg/viewform?embedded=true"
        width="640"
        height="504"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="myform"
      >
        Loading…
      </Iframe>
    </div>
  );
}

export default Form;
