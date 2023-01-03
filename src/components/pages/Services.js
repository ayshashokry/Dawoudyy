import React, { Component } from "react";
import OurServices from "../ServicesSections/OurServices";
import Headers from "../layout/Headers";

import IconsSection from "../HomeSections/IconsSection";
import PRINCIPLES from "../HomeSections/PRINCIPLES";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import Pop from "../layout/Pop";
// const bg = require('../../images/serviceHeader.png');
const mycolor = "rgba(34, 51, 98, 0.55)";
const text = require("../localization/lan.json");

class Services extends Component {
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
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="services">
        <Pop />
        <Headers
          paragraph={this.state.text.servicesheaderanimateparagraph1}
          paragraph2={this.state.text.servicesheaderanimateparagraph2}
          color={mycolor}
        />
        {/* <ContactIconsSection /> */}
        <IconsSection caption={"SERVICES"} className="mt-5" />

        <OurServices />
        <PRINCIPLES title="EXCELLENCE" />
      </section>
    );
  }
}
Services.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(Services));
