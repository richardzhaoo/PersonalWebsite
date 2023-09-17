import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import HTMLImg from "../assets/img/html5.png";
import CSSImg from "../assets/img/css3.png";
import cppImg from "../assets/img/C++.svg";
import CImg from "../assets/img/C.png";
import JavaScriptImg from "../assets/img/JavaScript.png";
import PythonImg from "../assets/img/python.webp";
import SQLImg from "../assets/img/SQL.png";
import WordPressImg from "../assets/img/WordPress.png";
import ReactImg from "../assets/img/React.png";
import jQueryImg from "../assets/img/jQuery.png";
import GitImg from "../assets/img/Git.png";
import VSCodeImg from "../assets/img/VSCode.png";
import PhpStormImg from "../assets/img/PhpStorm.png";
import SourceTreeImg from "../assets/img/SourceTree.png";
import JiraImg from "../assets/img/Jira.webp";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Me</h2>
                        <p>I'm a CS Student and an entry-level software developer with experience in QA and full stack/web development and strong interest in learning new skills and applications. I am always always up for new oppotunities and challenges to to broaden my skill set.</p>
                        <h3>Programming Languages</h3>
                            <div class="skill-box">
                              <div class="skill-title">
                              <div class="flexbox-container2">
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={HTMLImg} class="skill-icon"></img>
                                    </div>
                                    <h5>HTML</h5>
                                  </div>
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={CSSImg} class="skill-icon"></img>
                                    </div>
                                    <h5>CSS</h5>
                                  </div>
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={JavaScriptImg} class="skill-icon"></img>
                                    </div>
                                    <h5>JavaScript</h5>
                                  </div>
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={cppImg} class="skill-icon"></img>
                                    </div>
                                    <h5>C++</h5>
                                  </div>
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={CImg} class="skill-icon"></img>
                                    </div>
                                    <h5>C</h5>
                                  </div>
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={PythonImg} class="skill-icon"></img>
                                    </div>
                                    <h5>Python</h5>
                                  </div>
                                  <div class="flexbox-container">
                                    <div class="img">
                                      <img src={SQLImg} class="skill-icon"></img>
                                    </div>
                                    <h5>SQL</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                        <h3>Frameworks & Libraries</h3>
                          <div class="skill-box">
                            <div class="skill-title">
                            <div class="flexbox-container2">
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={WordPressImg} class="skill-icon"></img>
                                  </div>
                                  <h5>WordPress</h5>
                                </div>
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={ReactImg} class="skill-icon"></img>
                                  </div>
                                  <h5>React</h5>
                                </div>
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={jQueryImg} class="skill-icon"></img>
                                  </div>
                                  <h5>jQuery</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        <h3>Developer Tools</h3>
                          <div class="skill-box">
                            <div class="skill-title">
                              <div class="flexbox-container2">
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={GitImg} class="skill-icon"></img>
                                  </div>
                                  <h5>Git</h5>
                                </div>
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={VSCodeImg} class="skill-icon"></img>
                                  </div>
                                  <h5>VS Code</h5>
                                </div>
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={PhpStormImg} class="skill-icon"></img>
                                  </div>
                                  <h5>PhpStorm</h5>
                                </div>
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={JiraImg} class="skill-icon"></img>
                                  </div>
                                  <h5>Jira</h5>
                                </div>
                                <div class="flexbox-container">
                                  <div class="img">
                                    <img src={SourceTreeImg} class="skill-icon"></img>
                                  </div>
                                  <h5>SourceTree</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
          </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
