import React from 'react';

import Layout from '../components/Layout';
import Skills from '../components/skills';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import cv from '../assets/images/CV.pdf';
import mixedbiz from '../assets/img/mixedBiz.png'
import boardfiles from '../assets/img/boardFiles.png'
import tictactoe from '../assets/img/ticTacToe.png'

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-3">
            {config.firstName}
            {config.lastName}
          </h1>
          <div className="subheading mb-5">
          <span className="box">
          <a href={cv}>Resume</a>
          </span>
          <span> · </span>
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I’m a recent Software Engineering Immersive Graduate from General Assembly, Sydney. After completing my Bachelor of Creative Arts: Graphic Design degree, i’ve spent time working in a range of industries both in Australia and abroad.
          I consistently aim to improve on my own ability and skills while maintaining effective communication with colleagues and clients. I take pride in delivering my best and being a reliable employee. I’m excited to see what new opportunities become available in Software Engineering as i do enjoy designing, but to deliver a finished, interactive product is my true passion.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">mixedBiz.</h3>
              <div className="subheading mb-3">React.js | Firebase</div>
              <h4 style={{color: '#f76550'}} className="mb-3">*Currently refining messaging component</h4>
              <p>
                mixedBiz. is an idea to streamline the live music booking process. By creating a specific social platform for live performers to connect with venues, mixedBiz aims to create a simpler and easier booking system, while also creating better relationships between artists and performance spaces.
              </p>
              <ul>
                <li>Front end built with React.js and database with Firebase</li>
                <li>First version includes a realtime messaging platform.</li>
                <li>Hard coded a realtime messaging app with JavaScript through the React framework.</li>
                <li>Implemented Firebase Firestore for secure login and as a more flexible database for a one-week project.</li>
              </ul>
                <img alt="screen-shot-mixedBiz" className="project-img" src={mixedbiz} />


            </div>
            <div className="resume-date text-md-right">
              <span className="box"><a href="https://github.com/phunky-phresh/mixedBiz.">Git Repo</a></span><span className="box"><a href="https://musos-8f0c3.firebaseapp.com/#/">Live Demo</a></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Board Files</h3>
              <div className="subheading mb-3">Ruby on Rails</div>
              <p>
                Board Files is my first project using a database to store, create, update and delete data. Board files is a platform to add and review snowboards. It would also include educational content to give better understanding of the technology involved with snowboard design, technology that can have significant influence over a snowboards compatibility with a rider based off their experience, where they're using it and how they're using it.
              </p>
              <ul>
                <li>Built front and back end with Ruby on Rails.</li>
                <li>First individual project involving the use of a database. Used Postgresql and deployed on Heroku</li>
                <li>Individual user sign up and login. User reviews and content contribution.</li>
              </ul>

              <img alt="screenshot-of-boardFiles" className="project-img" src={boardfiles} />

            </div>
            <div className="resume-date text-md-right">
              <span className="box"><a href="https://github.com/phunky-phresh/project01">Git Repo</a></span><span className="box"><a href="https://board-reviews.herokuapp.com/">Live Demo</a></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Social Bet</h3>
              <div className="subheading mb-3">React | Ruby on Rails</div>
              <p>
                An app desgined to facilitate and uphold the gentleman's agreement.
              </p>
              <ul>
                <li>Focused on front-end React aspect of this group project. </li>
                <li>Experienced working as a group, communicating through stand-ups and problem solving as a team</li>
                <li>Worked on delegated tasks and main user functionality of application (the betting process)</li>
                <li>Linking up front-end client with back end database to create and save new data, update and delete.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">* Repo and Demo are currently private</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Tic Tac Toe</h3>
              <div className="subheading mb-3">JavaScript | HTML5/CSS3 | jQuery</div>
              <p>
                Tic Tac Toe - Project0. This was my first major project involving JavaScript, jQuery and HTML5/CSS3 to build the classic game tic tac toe. The main learning curve was definitely the implenetation of my our logic to determine wins, losses and draws in a two player game.
              </p>
              <img alt="screenshot-of-ticTacToe" className="project-img" src={tictactoe} />

            </div>
            <div className="resume-date text-md-right">
              <span className="box"><a href="https://github.com/phunky-phresh/mixedBiz.">Git Repo</a></span><span className="box"><a href="https://github.com/phunky-phresh/mixedBiz.">Live Demo</a></span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineering Immersive</h3>
              <div className="subheading mb-3">General Assembly, Sydney</div>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2019 - December 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front-end Web Development</h3>
              <div className="subheading mb-3">General Assembly, Sydney</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2016 - August 2016</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bachelor of Creative Arts: Graphic Design</h3>
              <div className="subheading mb-3">University of Wollongong</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2012 - November 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <Skills />


        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Get in Touch</h2>



          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
            <a href={`mailto:${config.email}`}>

                <i className=" fa fa-envelope"></i>

            </a>
            <a href={cv}>

                <i className=" fa fa-address-card"></i>
            </a>

          </div>

        </div>
      </section>
    </div>
  </Layout>
);
// <div className="subheading mb-3">Workflow</div>
// <ul className="fa-ul mb-0">
//   <li>
//     <i className="fa-li fa fa-check"></i>
//     Effective Communication
//   </li>
//   <li>
//     <i className="fa-li fa fa-check"></i>
//     Reliable
//   </li>
//   <li>
//     <i className="fa-li fa fa-check"></i>
//     Willing to conri
//   </li>
//   <li>
//     <i className="fa-li fa fa-check"></i>
//     Agile Development &amp; Scrum
//   </li>
// </ul>

export default IndexPage;
