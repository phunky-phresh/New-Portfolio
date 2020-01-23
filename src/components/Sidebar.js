import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import { Navbar, Nav } from 'react-bootstrap';
import avatar from '../assets/images/avatar.png';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Skills', href: 'skills' },
        { content: 'Projects', href: 'projects' },
        { content: 'Education', href: 'education' },
        { content: 'Contact', href: 'awards' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <Navbar expand='lg'
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <Nav.Link href={`#${href}`}>
                      {content}
                    </Nav.Link>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Sidebar;
