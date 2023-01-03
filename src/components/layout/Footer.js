import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import logo from "../../images/aboutLogo.png";

const text = require("../localization/lan.json");
class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      text: text.en,
      show2: false,
    };
  }
  handleShow() {
    this.setState({ show: true });
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
  submit = (e) => {
    e.preventDefault();
    const request = {
      email: this.state.email,
    };
    if (this.state.email === "") {
      this.setState({ show2: true });
    } else {
      axios
        .post("api/requests/subscribe", request)
        .then(
          this.setState({
            show: true,
            email: "",
            show2: false,
          })
        )
        .then(
          setTimeout(() => {
            this.setState({ show: false });
          }, 1300)
        )
        .catch((err) => console.log(err));
    }
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
    console.log(e.target.value);
  };
  render() {
    return (
      <section className="footer">

        <div className="footerbg pt-3 pb-5">
          <Container>
            <Row className="footerTxt pt-5 px-3">
              <p
                className={
                  "m-auto text-center " +
                  (this.props.language === "en" ? "" : "withoutletterspace")
                }
              >
                {this.state.text.SUB}
              </p>
            </Row>
            <Row>
              <Col sm={12}>
                {" "}
                <Form onSubmit={this.handleSubmit} noValidate>
                  <Form.Group>
                    <Form.Control
                      noValidate
                      required
                      type="text"
                      onChange={this.handleEmail}
                      value={this.state.email}
                      name="email"
                      placeholder="Email adress"
                      className="contactForm mt-4 py-2"
                    />{" "}
                  </Form.Group>
                </Form>{" "}
                <Modal className="mt-2" show={this.state.show}>
                  <div id="snackbar">Sent Successfully</div>
                </Modal>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <Row>
                  {" "}
                  <Button
                    onClick={this.submit}
                    type="submit"
                    className={
                      "footerBtn mt-4  mb-5 py-2  " +
                      (this.props.language === "en" ? "" : "withoutletterspace")
                    }
                  >
                    {this.state.text.SUBSCRIBE}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
          <div>
            <ul className=" scoialicons">
              <Row className="footerTxt2 pb-2">
                <p
                  className={
                    "m-auto  right  " +
                    (this.props.language === "en" ? "text-left" : "text-right")
                  }
                >
                  {this.state.text.followers1}

                  <br />
                  {this.state.text.followers2}
                </p>
                <br />
              </Row>
              <li>
                <Link to="/">
                  <i class="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i class="fab fa-instagram"></i>
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i class="fab fa-google-plus-g"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerLinks">
          <Container>
            <Row className="justify-content-center py-2">
              <img
                // className="mylogo2"
                alt="DawoudyLogo"
                src={logo}
                style={{width:"120px"}}
              />
            </Row>
            <p
              className={
                "cpyRight py-3 " +
                (this.props.language === "en" ? "" : "withoutletterspace")
              }
            >
              {this.state.text.footerRights}
            </p>
          </Container>
        </div>
      </section>
    );
  }
}

Footer.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(Footer));
