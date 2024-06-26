import

React, { useState, useEffect } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import CustomCircularProgressBar from "./CustomCircularProgressBar";

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
              <h2>Skills</h2>
              <p>I specialize in full-stack development, ensuring seamless experiences from start to finish. With expertise in various technologies, I craft dynamic interfaces with optimal performance and versatility.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  {/* <img src={meter1} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={95} />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  {/* <img src={meter2} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={85} />

                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  {/* <img src={meter3} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={90} />

                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  {/* <img src={meter1} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={95} />

                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  {/* <img src={meter2} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={90} />

                  <h5>Web Deployment</h5>
                </div>
                <div className="item">
                  {/* <img src={meter2} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={85} />

                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  {/* <img src={meter3} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={95} />

                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  {/* <img src={meter1} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={100} />

                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  {/* <img src={meter3} alt="Image" /> */}
                  <CustomCircularProgressBar percentage={90} />

                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}




