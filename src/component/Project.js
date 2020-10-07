import React from "react";
import data from "./Data";
import styled from "@emotion/styled";
function Project() {
  // styling
  let Button = styled.button`
    background-color: #d43109;
    padding: 0.5vw;
    width: 8vw;
    margin-right: 1vw;
  `;
  let Title = styled.p`
    margin: 5vw 0;
  `;
  let Button2 = styled.button`
    background-color: #4f8a8b;
    padding: 0.5vw;
    width: 8vw;
  `;
  let Figure = styled.figure`
    position: relative;
    float: left;
    cursor: pointer;
    :before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(79, 138, 139, 0.5);
      transition: background 0.3s linear;
    }
    :hover:before {
      background: none;
    }
  `;
  let Img = styled.img`
    width: 30vw;
    max-height: 60vw;
    padding: 0;
    margin: 0;
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
  // use data from data.js to display each project
  return (
    <div>
      <Title>My Projects</Title>
      <div>
        {data.map((project) => {
          return (
            <Container key={project.id}>
              <FlexContainer>
                <Figure>
                  <Img src={project.pic} alt="Website preview" />
                </Figure>
                <div>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <FlexContainer>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        project.website
                          ? window.open(project.website)
                          : window.open(project.page);
                      }}
                    >
                      {project.website ? "Website" : "Page"}
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
