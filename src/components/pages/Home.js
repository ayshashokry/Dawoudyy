import React, { Component } from "react";
import YourFingertips from "../HomeSections/YourFingertips";
import IconsSection from "../HomeSections/IconsSection";
import HomeCarousel from "../HomeSections/HomeCarousel";
import HomeHeader from "../HomeSections/HomeHeader";
import PRINCIPLES from "../HomeSections/PRINCIPLES";
import "../../stylesheets/HomeCss.css";
import Pop from "../layout/Pop";

// const Caption="ALDAWODY Clearence and logistic is specialist firm.Our business is clearing your goods through customs. We provide our business through"
export default class Home extends Component {
  constructor() {
    super();
    this.state = { popstate: true };
  }

  exit = (e) => {
    this.setState({ popstate: false });
    console.log(this.state);
  };

  pop = (e) => {
    this.setState({ popstate: !this.state.popstate });
    console.log(this.state);
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ popstate: true });
    // }, 3000);
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll2);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll2);
  }
  handleScroll2 = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 5) {
      this.setState({ popstate: false });
    }
  };

  render() {
    return (
      <div className="home">
        <HomeHeader />
        <IconsSection caption={"Home"} className="mt-5" />
        <HomeCarousel />
        <YourFingertips />
        <Pop />

        <PRINCIPLES title="QUALITY" />
      </div>
    );
  }
}
