import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
const text = require('../localization/lan.json');


export default class HomeCarousel extends Component {
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
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../images/carouselImg.png')}
              alt="First slide"
            />
            <Carousel.Caption >
              <h3             
>
              {this.state.text.homecaru1}

              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../images/pic2.png')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>
              {this.state.text.homecaru2}

              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src="https://dawoudy.s3.eu-central-1.amazonaws.com/pic3.png"
              src={require('../../images/pic3.png')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> 
              {this.state.text.homecaru3}

              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
