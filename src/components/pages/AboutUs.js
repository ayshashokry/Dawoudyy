import React, { Component } from 'react';
import Headers from '../layout/Headers';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
import IconsSection from '../HomeSections/IconsSection';
import PRINCIPLES from '../HomeSections/PRINCIPLES';
import About from '../aboutSections/About';
import MissionSection from '../aboutSections/MissionSection';
import Pop from "../layout/Pop";

const mycolor = 'rgba(210, 28, 28, 0.58)';

const text = require('../localization/lan.json');

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: text.en
    };
    if (this.props) {
      console.log(this.props);
    }
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

  changeLanguage = e => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="aboutus">
        <Pop/>
        <Headers
          paragraph={this.state.text.aboutheaderanimateparagraph}
          color={mycolor}
        />
        <IconsSection caption={'ABOUT_US'} />
        <About />
        <MissionSection />
        <PRINCIPLES title="TRUSTWORTHY" />
      </section>
    );
  }
}
AboutUs.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(AboutUs));
