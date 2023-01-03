import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../stylesheets/HomeCss.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import logo from '../../images/aboutLogo.png'

const text = require("../localization/lan.json");

class Pop extends Component {
  constructor() {
    super();
    this.state = { popstate: true, text: text.en };
  }

  exit = (e) => {
    this.setState({ popstate: false });
    console.log(this.state);
  };
  pop = (e) => {
    this.setState({ popstate: !this.state.popstate });
    console.log(this.state);
  };
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll2);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll2);
  }
  handleScroll2 = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 5) {
      this.setState({ popstate: false });
    }
  };

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
      <div>
        <div className="phoneButton" onClick={this.pop}>
          {" "}
          <i class="fas fa-4x fa-phone-square"></i>{" "}
        </div>

        <div
          className={
            " poptest pop  " + (this.state.popstate ? "openPop" : "closePop")
          }
        >
          {" "}
          <Row className={this.state.popstate ? "opc0 opc3" : "opc1 opc2"}>
            <Col sm={1}>
              <i
                className={
                  " far fa-4x fa-times-circle exit  " +
                  (this.state.popstate ? "opc3" : "opc2")
                }
                onClick={this.exit}
              ></i>
            </Col>

            <Col sm={12} md={2}>
              <p className="pt-2 ">
                {" "}
                {this.state.text.question}
                <br />
                {this.state.text.question2}{" "}
              </p>
            </Col>
            <Col sm={12} md={5} className="phonenumberpop  ">
              <p> +20 5 7 2 3 5 7 8 0 0</p>
            </Col>
            <Col sm={12} md={2}>
              <p className="pt-2 ">
                {this.state.text.week} <br />
                {this.state.text.week1}{" "}
              </p>
            </Col>
            <Col sm={12} md={2}>
              <img
                className="img-fluid "
                alt=" Dawoudy-logo"
                src={logo}
              />
            </Col>
          </Row>{" "}
        </div>
      </div>
    );
  }
}

Pop.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(Pop));
