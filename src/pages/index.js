import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
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
          <h1 className="mb-0">
            {config.firstName}
            {config.lastName}
          </h1>
          <div className="subheading mb-5">
          <a href={cv}>Resume</a> ·
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


              <p>
                mixedBiz. is an idea to streamline the live music booking process. By creating a specific social platform for live performers to connect with venues, mixedBiz aims to create a simpler and easier booking system, while also creating better relationships between artists and performance spaces.
              </p>
              <ul>
                <li>Front end built with React.js and database with Firebase</li>
                <li>First version includes a realtime messaging platform.</li>
                <li>Hard coded a realtime messaging app with JavaScript through the React framework.</li>
                <li>Implemented Firebase Firestore for secure login and as a more flexible database for a one-week project.</li>
              </ul>
                <img class="project-img" src={mixedbiz} />


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

              <img class="project-img" src={boardfiles} />

            </div>
            <div className="resume-date text-md-right">
              <span className="box"><a href="https://github.com/phunky-phresh/project01">Git Repo</a></span><span className="box"><a href="https://board-reviews.herokuapp.com/">Live Demo</a></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Social Bet</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
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
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Tic Tac Toe</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
              <img class="project-img" src={tictactoe} />

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
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
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
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
