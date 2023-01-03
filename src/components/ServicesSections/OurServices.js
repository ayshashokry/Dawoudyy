import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import "../../stylesheets/ServicesCss.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import img1 from '../../images/import.png'
import img2 from '../../images/export.png'
import img3 from '../../images/transit.png'
import img4 from '../../images/re-export.png'

const text = require("../localization/lan.json");

class OurServices extends Component {
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

  changeLanguage = (e) => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }
  render() {
    return (
      <section className="ourservices">
        <hr />

        <Container>
          <Row>
            <Col sm={12}>
              <h4>{this.state.text.ourservices}</h4>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <div className="servicesIcon text-center mt-5">
              <i class="fas fa-hands-helping fa-4x " style={{color:"rgb(36, 52, 98)"}}></i>

              </div>
            </Col>
          </Row>
          <Row>
            <Col className="m-auto" sm={12}>
              <p className="pt-4 text-center">
                {this.state.text.ourservicesTitle}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="offer mt-5">
          <Row>
            <Col sm={12}>
              <h6
                className={
                  this.props.language === "en"
                    ? "text-left"
                    : " text-right withoutletterspace"
                }
              >
                {this.state.text.offer}
              </h6>
            </Col>
          </Row>
          <Row
            className={
              "justify-content-center m-auto text-center pt-4 " +
              (this.props.language === "en" ? "" : " flex-row-reverse")
            }
          >
            <Col md={3} sm={12}>
              {" "}
              <img
                alt="icon1"
                src={img1}
              />
              <p
                className={
                  "pt-3" +
                  (this.props.language === "en" ? "" : "  withoutletterspace")
                }
              >
                {this.state.text.import}
              </p>
            </Col>
            <Col md={3} sm={12}>
              {" "}
              <img
                alt="icon2"
                src={img2}
              />
              <p
                className={
                  "pt-3" +
                  (this.props.language === "en" ? "" : "  withoutletterspace")
                }
              >
                {this.state.text.export}
              </p>
            </Col>
            <Col md={3} sm={12}>
              {" "}
              <img
                alt="icon3"
                src={img3}
              />
              <p
                className={
                  "pt-3" +
                  (this.props.language === "en" ? "" : "  withoutletterspace")
                }
              >
                {this.state.text.transit}
              </p>
            </Col>
            <Col md={3} sm={12}>
              {" "}
              <img
                alt="icon4"
                src={img4}
              />
              <p
                className={
                  "pt-3" +
                  (this.props.language === "en" ? "" : "  withoutletterspace")
                }
              >
                {this.state.text.rexport}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="offer mt-5">
          <Row>
            <Col sm={12}>
              <h6
                className={
                  this.props.language === "en"
                    ? "text-left"
                    : " text-right withoutletterspace"
                }
              >
                {this.state.text.through}
              </h6>
            </Col>
          </Row>
        </Container>

        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="py-5"
        >
          <Row className="py-5 m-0 ">
            <Col sm={10} className="mx-auto ">
              <Nav variant="pills" className="servicestabs">
                {" "}
                <div className="tabsimg">

                </div>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="first" name="SEA FREIGHT">
                    {this.state.text.caru1}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="second" name="AIR FREIGHT">
                    {this.state.text.caru2}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="third" name="CONSOLIDATION">
                    {this.state.text.caru3}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="fourth" name="WAREHOUSING">
                    {this.state.text.caru4}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="fifth" name="EXHIBITIONS">
                    {this.state.text.caru5}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="sixth" name="PROJECT LOGISTICS">
                    {this.state.text.caru6}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} className="mx-auto servicesphotos">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="servImage justify-content-center">
                    <img
                      alt="img1"
                      src={require('../../images/service1.png')}
                    />
                  </div>
                  <Container>
                    <p
                      className={
                        this.props.language === "en"
                          ? "text-left"
                          : "text-right"
                      }
                    >
                      {this.state.text.caru1cap}
                    </p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <div className="servImage justify-content-center">
                    <img
                      alt="img2"
                      src={require('../../images/service2.png')}
                    />
                  </div>
                  <Container>
                    <p
                      className={
                        this.props.language === "en"
                          ? "text-left"
                          : "text-right"
                      }
                    >
                      {this.state.text.caru2cap}
                    </p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="servImage justify-content-center">
                    <img
                      alt="img3"
                      src={require('../../images/service3.png')}
                    />
                  </div>
                  <Container>
                    <p
                      className={
                        this.props.language === "en"
                          ? "text-left"
                          : "text-right"
                      }
                    >
                      {this.state.text.caru3cap}
                    </p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  {" "}
                  <div className="servImage justify-content-center">
                    <img
                      alt="img4"
                      src={require('../../images/service4.png')}
                    />
                  </div>
                  <Container>
                    <p
                      className={
                        this.props.language === "en"
                          ? "text-left"
                          : "text-right"
                      }
                    >
                      {this.state.text.caru4cap}
                    </p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  {" "}
                  <div className="servImage justify-content-center">
                    <img
                      alt="img5"
                      src={require('../../images/service5.png')}
                    />
                  </div>
                  <Container>
                    <p
                      className={
                        this.props.language === "en"
                          ? "text-left"
                          : "text-right"
                      }
                    >
                      {this.state.text.caru5cap}
                    </p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div className="servImage justify-content-center">
                    <img
                      alt="img6"
                      src={require('../../images/service6.png')}
                    />
                  </div>
                  <Container>
                    <p
                      className={
                        this.props.language === "en"
                          ? "text-left"
                          : "text-right"
                      }
                    >
                      {this.state.text.caru6cap}
                    </p>
                    <p
                      className={
                        "pt-4 " +
                        (this.props.language === "en"
                          ? "text-left"
                          : "text-right")
                      }
                    >
                      {this.state.text.caru6cap}
                    </p>
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
    );
  }
}
OurServices.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(
  withRouter(OurServices)
);
