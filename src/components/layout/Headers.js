import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
import '../../stylesheets/HeadersStyle.css';
const text = require('../localization/lan.json');
class Headers extends Component {
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
  }
  render() {
    return (
      <div>
        <div className="myheader2">
          <Container className="otherHeaders text-center m-auto">
            <Row>
              <Col sm={12}>
                {' '}
                <h2
                  className={
                    this.props.language === 'en'
                      ? 'withletterspace'
                      : 'withoutletterspace'
                  }
                >
                  {this.state.text.aldawoudy}
                </h2>
              </Col>
              <Col sm={12}>
                <p className="p4"> {this.state.text.headerParagraph}</p>
              </Col>
            </Row>
          </Container>
          <div className="myheader3 mt-2">
            <div
              className="headerRow"
              style={{ backgroundColor: `${this.props.color}` }}
            >
              <p 
                className={  
                                   this.props.language === 'en'
                    ? 'headerRowwithletterspace'
                    : 'headerRowwithoutletterspace mb-0'
                }
              >
                {' '}
                {this.props.paragraph}{' '}
              </p>
              {/* <p
                className={
                  this.props.language === 'en'
                    ? 'headerRowwithletterspace'
                    : 'headerRowwithoutletterspace'
                }
              >
                {' '}
                {this.props.paragraph2}{' '}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Headers.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(Headers));
