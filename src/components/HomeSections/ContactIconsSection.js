import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';

const text = require('../localization/lan.json');

class ContactIconsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text.en
    };
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
  }
  render() {
    return (
      <div className="contacticonsection">
        <div className="contactheader">
          <h6>{this.state.text.giveourbest} </h6>
          <p>{this.state.text.providethrough}</p>
        </div>
        <div className="contacticons">
          <Container>
            <Row className=" m-auto text-center justify-content-center">
              <Col sm="12" md="3" className="contacticon text-center">
                <img src='https://dawoudy.s3.eu-central-1.amazonaws.com/icon3.png' />
                <p>{this.state.text.qualityassurance}</p>
              </Col>{' '}
              <Col sm="12" md="3" className="contacticon text-center">
                <img alt="icon" src='https://dawoudy.s3.eu-central-1.amazonaws.com/icon1.png' />
                <p>EXCELLENCE</p>
              </Col>{' '}
              <Col sm="12" md="3" className="contacticon text-center">
                <img alt="icon" src='https://dawoudy.s3.eu-central-1.amazonaws.com/icon2.png' />
                <p>QUICK SERVICE</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
ContactIconsSection.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(
  withRouter(ContactIconsSection)
);
