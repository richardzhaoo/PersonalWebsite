import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work Experiences</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div class="center">
                        <h3>Software QA/Web Developer</h3>
                        <h5>Polaris Intelligence | May 2023 - August 2023</h5>
                        <p></p>
                      </div>
                      <ul><li>Implemented UI and regression testing to ensure the quality and user experience of the Polaris Intelligence web application product</li></ul>
                      <ul><li>Developed unit test suites and scripts for over 100 controller functions using PHP and custom testing framework in PhpStorm</li></ul>
                      <ul><li>Improved and maintained the consistency of the web application user interface using HTML/CSS, JavaScript, PHP, and twig files</li></ul>
                      <ul><li>Collected and managed data for the new Polaris embedding project and developed 30+ report files for embed pages using Python</li></ul>
                      <ul><li>Collaborated with software development team, and participated in daily stand-up meetings and weekly code reviews and codebase architecture meetings</li></ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div class="center">
                        <h3>Junior QA Analyst</h3>
                        <h5>Greenbridge Consulting Services | May 2022 - August 2022</h5>
                        <p></p>
                      </div>
                      <ul><li>Built and executed front-end manual UI testing cases and reported test results for the Walmart Workforce Management project</li></ul>
                      <ul><li>Prepared testing data in Azure Studio using SQL Server</li></ul>
                      <ul><li>Developed and updated API BDD Testing feature files using Cucumber, JUnit and Java, improving the efficiency of functional, regression and smoke testing</li></ul>
                      <ul><li>Built scripts for API load testing with JMeter</li></ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div class="center">
                        <h3>Coding Tutor</h3>
                        <h5>Triway Education/Maxfield Academy | May 2022 - August 2022</h5>
                        <p></p>
                      </div>
                      <ul><li>Taught and led Python classes to elementary school students and fostered an engaging learning environment</li></ul>
                      <ul><li>Designed and implemented lesson plans and activities</li></ul>
                      <ul><li>Communicated effectively with the students, teachers, and parents in-person and online, grasping their needs and goals in the class</li></ul>
                    </Tab.Pane>
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
