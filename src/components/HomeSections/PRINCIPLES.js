import React, { Component } from "react";
import "../../stylesheets/PRIN.css";
import { Row, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
const text = require("../localization/lan.json");

class PRINCIPLES extends Component {
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
    console.log(this.props.title);
  }

  render() {
    return (
      <section className="prin pt-5 mt-5 ">
        <div className="quality1  mb-0  ">
          {this.props.title === "QUALITY" ? (
            <h2 className="text-center py-3 mb-0">
              {this.state.text.QUALITY1}
            </h2>
          ) : this.props.title === "EXCELLENCE" ? (
            <h2 className="text-center py-3 mb-0">
              {this.state.text.EXCELLENCE}
            </h2>
          ) : this.props.title === "TRUSTWORTHY" ? (
            <h2 className="text-center py-3 mb-0">
              {this.state.text.TRUSTWORTHY}
            </h2>
          ) : this.props.title === "PRODUCTIVITY" ? (
            <h2 className="text-center py-3 mb-0">
              {this.state.text.PRODUCTIVITY}
            </h2>
          ) : null}
        </div>
        <div className="sat ">
          <Container>
            <Row className="">
              <Col sm={1}>
              <i class="far fa-smile-beam  fa-4x" style={{color:"#fff"}}></i>

              </Col>
              <Col sm={11} className="satHeader">
                <h3
                  className={
                    this.props.language === "en" ? "" : "withoutletterspace"
                  }
                >
                  {this.state.text.SATISTICS}
                </h3>
                <p
                  className={
                    this.props.language === "en" ? "" : "withoutletterspace"
                  }
                >
                  {this.state.text.SATISTICS2}
                </p>
              </Col>
            </Row>

            <Row className="princnew">
              <Col lg={4} sm={12} className="de ">
                <Row>
                  <div className=" mx-auto">
                    <h4 className="num p-2">35</h4>
                    <p className=" mt-5 pl-2 pr-2 ">
                      {this.state.text.EXPERIENCE1}
                      <br />
                      {this.state.text.EXPERIENCE2} <br />
                      {this.state.text.EXPERIENCE3}
                    </p>
                  </div>
                </Row>
              </Col>

              <Col lg={4} sm={12} className="de ">
                <Row>
                  <div className=" mx-auto">
                    <h4 className="num p-2">200+</h4>
                    <p className=" mt-5 pl-2 pr-2 ">
                      {this.state.text.EXPERIENCED1} <br />
                      {this.state.text.EXPERIENCED2} <br />
                      {this.state.text.EXPERIENCED3}
                    </p>
                  </div>
                </Row>
              </Col>
              <Col lg={4} sm={12} className="de  ">
                <Row>
                  <div className=" mx-auto">
                    <h4 className="num p-2">2MIL</h4>
                    <p className=" mt-5 pl-2 pr-2 ">
                      {this.state.text.SATISFIED1} <br />
                      {this.state.text.SATISFIED2}
                      <br /> {this.state.text.SATISFIED3}
                    </p>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="p-0 m-0">
          <Col md={2} className="quality">
            {this.props.title === "QUALITY" ? (
              <h2 className="qualityh2">{this.state.text.QUALITY1}</h2>
            ) : this.props.title === "EXCELLENCE" ? (
              <h2 className="EXCELLENCEh2">{this.state.text.EXCELLENCE}</h2>
            ) : this.props.title === "TRUSTWORTHY" ? (
              <h2 className="TRUSTWORTHYh2">{this.state.text.TRUSTWORTHY}</h2>
            ) : this.props.title === "PRODUCTIVITY" ? (
              <h2 className="PRODUCTIVITYh2">{this.state.text.PRODUCTIVITY}</h2>
            ) : null}
          </Col>
          <Col md={10} sm={10} className="col10principle p-0 mx-auto ">
            <div className="ourpriciplesIcons">
              <h3
                className={
                  "he pt-5 pb-2 px-4 " +
                  (this.props.language === "en" ? "" : "withoutletterspace")
                }
              >
                {this.state.text.aldawodys}
              </h3>
              <p
                className={
                  "shoose px-5 " +
                  (this.props.language === "en" ? "" : "withoutletterspace")
                }
              >
                {this.state.text.CHOOSE_US}
              </p>
              <Row className="py-5">
                <Col sm={4} className="text-center">
                  <Row >
                  <i class="fas fa-business-time py-3 fa-4x mx-auto" style={{color:"rgb(36, 52, 98)"}}></i>

                  </Row>
                  <p
                    className={
                      this.props.language === "en" ? "" : "withoutletterspace"
                    }
                  >
                    {this.state.text.time_money1}
                    <br />
                    {this.state.text.time_money2}
                  </p>
                </Col>
                <Col sm={4} className="text-center  px-2">
                  <Row>
                  <i class="fas fa-clipboard-list py-3 fa-4x mx-auto" style={{color:"rgb(36, 52, 98)"}}></i>

                  </Row>
                  <p
                    className={
                      this.props.language === "en" ? "" : "withoutletterspace"
                    }
                  >
                    {this.state.text.CLEARENCE}{" "}
                  </p>
                </Col>
                <Col sm={4} className="text-center  px-2">
                  <Row>
                  <i class="fas fa-door-closed py-3 fa-4x mx-auto" style={{color:"rgb(36, 52, 98)"}}></i>

                  </Row>
                  <p
                    className={
                      this.props.language === "en" ? "" : "withoutletterspace"
                    }
                  >
                    {this.state.text.SECRET}
                  </p>
                </Col>
              </Row>
            </div>

            <Container className="PARTNERS par">
              <h2 className="px-5">{this.state.text.PARTNERS1}</h2>
              <p className="px-5">{this.state.text.PARTNERS2}</p>

              <Row>
                <Col md={4}>
                  <Row>
                    <img
                      className="img-fluid mx-auto"
                      alt="logo"
                      src="https://image.shutterstock.com/image-vector/initial-logo-gu-ug-u-260nw-606655898.jpg"
                    />
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <img
                      className="img-fluid mx-auto"
                      alt="logo"
                      src="https://image.shutterstock.com/image-vector/initial-logo-gu-ug-u-260nw-606655898.jpg"
                    />
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <img
                      className="img-fluid mx-auto"
                      alt="logo"
                      src="https://image.shutterstock.com/image-vector/initial-logo-gu-ug-u-260nw-606655898.jpg"
                    />
                  </Row>
                </Col>
                
              </Row>
            </Container>
          </Col>
        </Row>
      </section>
    );
  }
}

PRINCIPLES.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(PRINCIPLES));
