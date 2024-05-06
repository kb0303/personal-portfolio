import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      projLink: "https://lazercrazer.in/",
      title: "Lazer Crazer",
      description: "Full Stack Development",
      imgUrl: projImg1,
    },
    {
      projLink: "https://pixysquare.com/",
      title: "Pixy Square",
      description: "Full Stack Development",
      imgUrl: projImg2,
    },
    {
      projLink: "https://edcater.com/",
      title: "EdCater",
      description: "Front End Development",
      imgUrl: projImg7,
    },
    {
      projLink: "https://pareindia.com/",
      title: "Pare India",
      description: "Full Stack Development",
      imgUrl: projImg8,
    },
    {
      projLink: "https://drpragyapunj.com/",
      title: "Dermatologist",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      projLink: "https://www.northernindiatrips.in/",
      title: "NI Trips",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      projLink: "https://kb0303.github.io/superhero-hunter/",
      title: "Superhero Hunter App",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      projLink: "https://23zyk4.csb.app/",
      title: "Music Player",
      description: "Design & Development",
      imgUrl: projImg6,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I'm thrilled to showcase my full-stack applications, UI/UX designs, and more. Each project reflects my dedication and passion for creating innovative solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
