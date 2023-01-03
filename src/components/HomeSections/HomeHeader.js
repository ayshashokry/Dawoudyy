import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';

const text = require('../localization/lan.json');

class HomeHeader extends Component {
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
      <div className="firstSection">
        <Container className="myheader text-center m-auto">
          <Row>
            <Col sm={12}>
              {' '}
              <p
              
              
              // className={` p2 px-5 mx-auto ` +
              //   this.props.language === 'en'
              //     ? 'text-left'
              //     : 'text-right'
              // }

              className={"p2 px-5 mx-auto " + (this.props.language === 'en' ? 'text-left' : 'text-right')}
              
             > {this.state.text.welcome}</p>

              <h2
               
              >
                {this.state.text.aldawoudy}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p className="p1"> {this.state.text.headerParagraph}</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>

              <p className="p2"> {this.state.text.easyforpartener}</p>
              <p 
              
              className={"p2 px-5 mx-auto " + (this.props.language === 'en' ? 'text-right' : 'text-left')}

              
              >{this.state.text.from1984} </p>

            </Col>
          </Row>
            {/* <div className="myheaderr mt-2">
            <div
              className="headerRow"
              style={{ backgroundColor: `#243462` }}
            >
              <p 
                className={  
                                   this.props.language === 'en'
                    ? 'headerRowwithletterspace'
                    : 'headerRowwithoutletterspace'
                }
              >
                {' '}
                {this.state.text.easyforpartener}{' '}
              </p>
          
            </div>
          </div> */}
        
        
        </Container>
      </div>
    );
  }
}
HomeHeader.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(HomeHeader));
