import React, { Component } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
import '../../stylesheets/Navb.css';
import logo from '../../images/logo.png'
const text = require('../localization/lan.json');
class Navb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text.en,
      position: 'absolute'
    };
  }
  checklang = () => {
    if (this.props.language === 'en') {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === 'ar') {
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }

  onChange = e => {
    return this.changeLanguage(e);
  };
  changeLanguage = e => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      this.setState({ bgColor: '#243462', position: 'fixed' });
    } else {
      this.setState({ bgColor: 'transparent', position: 'absolute' });
    }
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={' Navb '}
        style={{
          background: `${this.state.bgColor}`,
          position: `${this.state.position}`
        }}
      >
        <Navbar.Brand href="/">
          {' '}
          <img
            className="mylogo"
            alt="dawoudyLogo"
            src={logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link>
              <NavLink
                exact
                to="/"
                activeStyle={{
                  borderBottom: 'solid 2px white'
                }}
              >
                {this.state.text.navbarhome}
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <NavLink
                exact
                to="services"
                activeStyle={{
                  borderBottom: 'solid 2px white'
                }}
              >
                {this.state.text.navbarservice}
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <NavLink
                exact
                to="about"
                activeStyle={{
                  borderBottom: 'solid 2px white'
                }}
              >
                {this.state.text.navbarabout}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <NavLink
                exact
                to="contact"
                activeStyle={{
                  borderBottom: 'solid 2px white',
                  borderWidth: 'thick'
                }}
              >
                {this.state.text.navbarcontact}
              </NavLink>
            </Nav.Link>
          </Nav>

          <Nav.Link >
            <Link
               style={{ fontSize: '12px', marginTop: '5px' ,
              //  borderTopRightRadius:"100px", borderTopLeftRadius:"100px" ,
               position:"relative", top:"10px"
            
            }}
            className={"px-2 " + (this.props.language === 'ar' ? 'lanStyle' : '')}
              id="ar"
              onClick={this.onChange}
            >
              عربي
            </Link>

            <Link
              style={{ fontSize: '12px', marginTop: '5px' ,
              //  borderTopRightRadius:"100px", borderTopLeftRadius:"100px" ,
               position:"relative", top:"10px"
            
            }}


            className={"px-2 " + (this.props.language === 'en' ? 'lanStyle' : '')}

              onClick={this.onChange}
              id="en"
            >
              ENG
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navb.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(Navb));
