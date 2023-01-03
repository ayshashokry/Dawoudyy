import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";

const text = require("../localization/lan.json");
class IconsSection extends Component {
  constructor(props) {
    super(props);
    if (this.props) {
      console.log(this.props);
    }
    this.state = {
      text: text.en,
    };
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
      <div>
        <Container>
          <Row className="title1 px-2 pt-5 m-auto text-center justify-content-center">
            <h3>{this.state.text.giveourbest}</h3>
          </Row>
          <Row className="title1  px-3 pt-1">
            {this.props.caption === "Home" ? (
              <p> {this.state.text.caption1}</p>
            ) : this.props.caption === "SERVICES" ? (
              <p> {this.state.text.caption2}</p>
            ) : this.props.caption === "ABOUT_US" ? (
              <p> {this.state.text.caption2}</p>
            ) : this.props.caption === "CONTACT_US" ? (
              <p> {this.state.text.caption2}</p>
            ) : null}
          </Row>

          <Row className="title2   m-auto text-center justify-content-center pt-5">
            <Col sm={12} md={4}>
            <i class="fas fa-search fa-3x" style={{color:"rgb(36, 52, 98)"}}></i>
              <p
                className={
                  "py-4 " +
                  (this.props.language === "en" ? "" : "withoutletterspace")
                }
              >
                {" "}
                {this.state.text.QUALITY_ASSURANCE}
              </p>
            </Col>
            <Col sm={12} md={4}>
            <i class="fas fa-cogs fa-3x" style={{color:"rgb(36, 52, 98)"}}></i>

              <p
                className={
                  "py-4 " +
                  (this.props.language === "en" ? "" : "withoutletterspace")
                }
              >
                {" "}
                {this.state.text.EXCELLENCEE}
              </p>
            </Col>
            <Col sm={12} md={3}>
            <i class="fas fa-shipping-fast fa-3x" style={{color:"rgb(36, 52, 98)"}}></i>

              <p
                className={
                  "py-4 " +
                  (this.props.language === "en" ? "" : "withoutletterspace")
                }
              >
                {" "}
                {this.state.text.QUICK_SERVICE}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
IconsSection.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(
  withRouter(IconsSection)
);
