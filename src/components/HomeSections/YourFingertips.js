import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
const text = require("../localization/lan.json");
class YourFingertips extends Component {
  constructor(props) {
    super(props);
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

  onChange = (e) => {
    return this.changeLanguage(e);
  };
  changeLanguage = (e) => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }

  render() {
    return (
      <section className="fingertips mt-5">
        <div className="fingertipsHeader text-center">
          <h6
            className={this.props.language === "en" ? "" : "withoutletterspace"}
          >
            {this.state.text.homegingertips}
          </h6>
          <p
            className={this.props.language === "en" ? "" : "withoutletterspace"}
          >
            {this.state.text.homeourbusiness}
          </p>{" "}
          <Link to="/services">
            {" "}
            <Button> {this.state.text.OUR_SERVICES} </Button>{" "}
          </Link>
        </div>
        <Container fluid className="fingertips-grid">
          <Row>
            <Col sm="12" md="4" className="mission">
              <h5
                className={
                  this.props.language === "en" ? "" : "withoutletterspace"
                }
              >
                {this.state.text.homemissionheader}
              </h5>
              <div className="missionicon  text-center">
              <i class="fas fa-bullseye fa-4x py-3" style={{color:"#fff"}}></i>

              </div>
              <p
                className={
                  this.props.language === "en" ? "" : "withoutletterspace"
                }
              >
                {this.state.text.homemissionheader2}
              </p>
              <div class="d-flex justify-content-center missionbtn">
                <Button className="readbtn ">
                  {this.state.text.readmorebtn}
                </Button>
              </div>
            </Col>
            <Col sm="12" md="4" className="about">
              <h5
                className={
                  this.props.language === "en" ? "" : "withoutletterspace"
                }
              >
                {this.state.text.homeaboutheader}
              </h5>
              <div className="text-center">
              <i class="far fa-handshake fa-4x py-3" style={{color:"rgb(36, 52, 98)"}}></i>

              </div>
              <Container>
                {" "}
                <p
                  className={
                    this.props.language === "en" ? "" : "withoutletterspace"
                  }
                >
                  {this.state.text.homeaboutheader2}
                </p>
              </Container>
              <div class="d-flex justify-content-center aboutbtn">
                <Button className="aboutusbtn ">
                  <Link
                    to="/about"
                    className={
                      this.props.language === "en" ? "" : "withoutletterspace"
                    }
                  >
                    {" "}
                    {this.state.text.ABOUT_US}{" "}
                  </Link>
                </Button>
              </div>
            </Col>

            <Col sm="12" md="4" className="vision">
              <h5
                className={
                  this.props.language === "en" ? "" : "withoutletterspace"
                }
              >
                {this.state.text.homevisionheader}
              </h5>
              <div className="missionicon  text-center">
              <i class="far fa-eye fa-4x py-3" style={{color:"#fff"}}></i>

              </div>

              <p
                className={
                  this.props.language === "en" ? "" : "withoutletterspace"
                }
              >
                {this.state.text.homevisionheader2}
              </p>
              <div class="d-flex justify-content-center visionbtn">
                <Button className="readbtn ">
                  {this.state.text.readmorebtn}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

YourFingertips.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(
  withRouter(YourFingertips)
);
