import React, { Component } from "react";
import "../../stylesheets/ContactCss.css";
import IconsSection from "../HomeSections/IconsSection";

import { Container, Form, Col, Row, Button, Modal } from "react-bootstrap";
import { NameErrors, EmailErrors, numberErrors } from "../layout/FormErrors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import Headers from "../layout/Headers";
import axios from "axios";
import PRINCIPLES from "../HomeSections/PRINCIPLES";
import Pop from "../layout/Pop";

const mycolor = "rgba(18, 136, 44, 0.5)";
const text = require("../localization/lan.json");
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.submit = this.submit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      name: "",
      nameError: "",
      number: "",
      numberError: "",
      email: "",
      message: "",
      nameErrors: { name: "" },
      emailErrors: { email: "" },
      numberErrors: { number: "" },

      emailValid: false,
      nameValid: false,
      numberValid: false,

      formValid: false,
      show2: false,
      text: text.en,
    };
  }
  handleShow() {
    this.setState({ show: true });
  }

  submit(e) {
    e.preventDefault();
    const request = {
      email: this.state.email,
      name: this.state.name,
      number: this.state.number,
      message: this.state.message,
    };
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.number === ""
    ) {
      this.setState({ show2: true });
    } else {
      axios
        .post("api/requests/contact", request)
        .then(
          this.setState({
            show: true,
            name: "",
            number: "",

            email: "",
            message: "",
            show2: false,
            valid: true,
          })
        )
        .then(
          setTimeout(() => {
            this.setState({ show: false });
          }, 1300)
        )
        .catch((err) => console.log(err));
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  handlemessage = (e) => {
    this.setState({ message: e.target.value });
  };
  validateField(fieldName, value) {
    let nameValidationErrors = this.state.nameErrors;
    let emailValidationErrors = this.state.emailErrors;
    let numberValidationErrors = this.state.numberErrors;

    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let numberValid = this.state.numberValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.length > 2;
        nameValidationErrors.name = nameValid ? "" : " is too short";
        break;
      case "number":
        numberValid = value.length > 2;
        numberValidationErrors.number = numberValid ? "" : " is too short";
        break;

      default:
        break;
    }
    this.setState(
      {
        nameErrors: nameValidationErrors,
        emailErrors: emailValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        numberErrors: numberValidationErrors,
        numberValid: numberValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid && this.state.nameValid && this.state.numberValid,
    });
  }
  errorClass(error) {
    if (error) {
      return error.length === 0 ? "" : "has-error";
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.checklang();
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
  render() {
    return (
      <section className="contactus">
        <Pop />
        <Headers
          paragraph={this.state.text.contactheaderanimateparagraph}
          color={mycolor}
          alt="header img"
        />

        <IconsSection caption={"CONTACT_US"} className="mt-5" />

        {/* <ContactIconsSection /> */}
        <Container>
          <hr />
        </Container>
        <div className="contactinfo">
          <h6 className="contacth6">{this.state.text.navbarcontact}</h6>
          <div style={{ display: "flex" }}>
            <Row className="contacticonsrow">
              <Col sm="12" md="6" lg="4" className="icondivcontacthome">
                <Row>
                  <Col sm="2">
                    <img
                      src={require("../../images/phoneicon.png")}
                      style={{
                        width: "55px",
                        height: "55px",
                        marginTop: "15px",
                      }}
                      alt="icon"
                    />
                  </Col>
                  <Col
                    sm="10"
                    style={{ paddingTop: "15px" }}
                    className="iconinfo"
                  >
                    <h6
                      className={
                        this.props.language === "en" ? "" : "withoutletterspace"
                      }
                    >
                      {this.state.text.phone}
                    </h6>
                    <p>
                      <span className="mr-4">+20 572357800</span>+20 572359905
                      <span></span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm="12" md="6" lg="4" className="icondivcontacthome">
                <Row>
                  <Col sm="2">
                    <img
                      src={require("../../images/locationicon.png")}
                      style={{ width: "45px", height: "90px" }}
                      alt="icon"
                    />
                  </Col>
                  <Col
                    sm="10"
                    style={{ paddingTop: "15px" }}
                    className="iconinfo"
                  >
                    <h6
                      className={
                        this.props.language === "en" ? "" : "withoutletterspace"
                      }
                    >
                      {this.state.text.location}
                    </h6>
                    <p>{this.state.text.location2}</p>
                  </Col>
                </Row>
              </Col>

              <Col sm="12" md="6" lg="4" className="icondivcontacthome">
                <Row>
                  <Col sm="2">
                    <img
                      src={require("../../images/msgicon.png")}
                      style={{
                        width: "55px",
                        height: "45px",
                        marginTop: "15px",
                      }}
                      alt="icon"
                    />
                  </Col>
                  <Col
                    sm="10"
                    style={{ paddingTop: "15px" }}
                    className="iconinfo"
                  >
                    <h6
                      className={
                        this.props.language === "en" ? "" : "withoutletterspace"
                      }
                    >
                      {this.state.text.mail}
                    </h6>
                    <p>Info@dawody.com </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Container className="formamp">
          <Row>
            <Col md="12" lg="5" className="reachform">
              <h5>{this.state.text.reach}</h5>
              <p className="reachus-paragraph">{this.state.text.reach2} </p>
              <Form onSubmit={this.handleSubmit} noValidate>
                <Form.Group>
                  <Form.Control
                    noValidate
                    required
                    type="text"
                    onChange={this.handleUserInput}
                    value={this.state.name}
                    name="name"
                    placeholder="Full Name*"
                    className="contactForm my-4"
                  />
                  <h6 className="panel panel-default" style={{ color: "red" }}>
                    <NameErrors nameErrors={this.state.nameErrors} />
                  </h6>{" "}
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    noValidate
                    required
                    type="number"
                    onChange={this.handleUserInput}
                    value={this.state.number}
                    name="number"
                    placeholder="Phone Number*"
                    className="contactForm my-4"
                  />
                  <h6 className="panel panel-default" style={{ color: "red" }}>
                    <numberErrors numberErrors={this.state.numberErrors} />
                  </h6>{" "}
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    noValidate
                    required
                    type="email"
                    value={this.state.email}
                    onChange={this.handleUserInput}
                    name="email"
                    placeholder="Your Email*"
                    className="contactForm my-4"
                  />{" "}
                  <h6 className="panel panel-default" style={{ color: "red" }}>
                    <EmailErrors emailErrors={this.state.emailErrors} />
                  </h6>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    placeholder="Message..."
                    as="textarea"
                    rows="4"
                    onChange={this.handlemessage}
                    value={this.state.message}
                    name="message"
                    type="text"
                    className="contactForm my-4"
                  />
                </Form.Group>
                <div className=" text-center ">
                  <Button
                    type="submit "
                    className="subscribebtn"
                    onClick={this.submit}
                  >
                    {this.state.text.SUBSCRIBE}
                  </Button>
                </div>
              </Form>
              <Modal className="mt-2" show={this.state.show}>
                <div id="snackbar">Sent Successfully</div>
              </Modal>
            </Col>
            <Col lg="2"></Col>
            <Col md="12" lg="5" className="map-div">
              {" "}
              <div className="  text-center mymap  mb-5 ">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27223.50556875613!2d31.744776839781153!3d31.470886258686487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e52bbb2cbf19%3A0xf35f1c8f3eb71804!2sDamietta%20Port!5e0!3m2!1sen!2seg!4v1576585844850!5m2!1sen!2seg"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <PRINCIPLES title="PRODUCTIVITY" />
      </section>
    );
  }
}

ContactUs.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(ContactUs));
