import React from "react";
import data from "./Data";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
function Project() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x / 10}deg) rotateY(${
      y / 10
    }deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 30, friction: 40 },
  }));
  // styling
  let Button = styled.button`
    background-color: #d43109;
    padding: 0.5vw;
    width: 7vw;
    margin-right: 1vw;
    font-size: 1vw;
    border-radius: 0.5vw;
    cursor: pointer;
    :hover {
      color: black;
      font-weight: bold;
    }
  `;
  let Title = styled.p`
    margin: 5vw 4vw;
  `;
  let P = styled.p`
    font-size: 1vw;
  `;
  let Button2 = styled.button`
    background-color: #4f8a8b;
    padding: 0.5vw;
    width: 6vw;
    margin-right: 1vw;
    font-size: 1vw;
    border-radius: 0.5vw;
    cursor: pointer;
    :hover {
      color: black;
      font-weight: bold;
    }
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
    margin: 0;
    cursor: pointer;
  `;
  let Div = styled.div`
    padding: 0;
    margin: 0;
  `;
  let FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
  `;
  // use data from data.js to display each project
  return (
    <Div>
      <Title>My Projects</Title>
      <Div>
        {data.map((project) => {
          return (
            <div key={project.id} style={{ marginBottom: "10vw" }}>
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              >
                <Container>
                  <FlexContainer>
                    <Figure>
                      <Img src={project.pic} alt="Website preview" />
                    </Figure>
                    <div>
                      <p>{project.name}</p>
                      <P>{project.description}</P>
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
                          {project.website ? "Vist Website" : "Visit Page"}
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
                        <Button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.demo);
                          }}
                        >
                          Watch demo
                        </Button>
                      </FlexContainer>
                    </div>
                  </FlexContainer>
                </Container>
              </animated.div>
            </div>
          );
        })}
      </Div>
    </Div>
  );
}

export default Project;
