import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import Project from '../components/Projects';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>

      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <Scroll type="id" element="about-section">
        <a href="#about-section" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="about-section" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Ricky Chhoukdean and I have a backgroud in progammatic
            digital marketing and mathematics. I love using code to solve
            meaningful problems, automate processes and visualize data.
          </p>
          <p>
            When I'm not coding you can find me playing video games (anything Riot related) and training
            to one day be able to finally dunk a basketball.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-code major style1 not-clickable">
              <span className="label">Code icon</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-basketball-ball major style2 not-clickable">
              <span className="label">Basketball icon</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-gamepad major style3 not-clickable">
              <span className="label">Gamepad</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="project-section" className="wrapper alt style2">
      <header className="major header-title">
        <h2>Projects</h2>
      </header>

      <Project />
    </section>
    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact me</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
