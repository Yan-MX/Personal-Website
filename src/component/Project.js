import React from "react";
import data from "./Data";
import styled from "@emotion/styled";
function Project() {
  let Button = styled.button`
    background-color: #d43109;
    padding: 0.5vw;
    width: 10vw;
  `;
  let Title = styled.p`
    margin: 5vw 0;
  `;
  let Button2 = styled.button`
    background-color: #4f8a8b;
    padding: 0.5vw;
    width: 10vw;
  `;
  let Img = styled.img`
    max-width: 40vw;
    width: 100%;
    padding: 0;
    margin: 0;
    opacity: 70%;
  `;
  let Container = styled.div`
    box-shadow: 0 4px 8px 0 #4f8a8b;
    padding: 0;
    margin: 6vw 0;
  `;
  let FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
  `;

  return (
    <div>
      <Title>My Projects</Title>
      <div>
        {data.map((project) => {
          return (
            <Container key={project.id}>
              <FlexContainer>
                <Img src={project.pic} alt="Website preview" />
                <div>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <FlexContainer>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.website);
                      }}
                    >
                      Website
                    </Button>
                    <Button2
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.git);
                      }}
                    >
                      Code
                    </Button2>
                  </FlexContainer>
                </div>
              </FlexContainer>
            </Container>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
