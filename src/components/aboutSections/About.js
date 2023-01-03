import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../../stylesheets/AboutCss.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import logo from "../../images/aboutLogo.png";

const text = require("../localization/lan.json");

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: text.en,
    };
    if (this.props) {
      console.log(this.props);
    }
  }
  checklang = () => {
    if (this.props.language === "en") {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === "ar") {
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }

  changeLanguage = (e) => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }
  render() {
    return (
      <section className="about-section mt-5 px-3">
        <Container fluid>
          <Row>
            <Col className="text-center" sm={12}>
              <h4>{this.state.text.navbarabout}</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <div className="aboutlogo mt-2s">
                <img alt="Dawoudy logo" src={logo} />
              </div>
            </Col>
            <Col className="mt-5 px-5" sm={9}>
              <p
                className={
                  this.props.language === "en" ? "text-left" : " text-right "
                }
              >
                {this.state.text.aboutcap}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

About.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(About));
