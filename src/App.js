// Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Styling
import './App.css';
// Components
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/layout/Footer';
import Navb from './components/layout/Navb';
import { changeLang } from './globalState/actions/langActions';
import { connect } from 'react-redux';
import store from './globalState/store';

if (localStorage.chosenLanguage) {
  store.dispatch(changeLang(localStorage.chosenLanguage));
  console.log('heree');
}

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { dir:"ltr" };
   }
 
  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === 'ar') {
        this.setState({ dir: "rtl" });
      } else {
        this.setState({ dir: "ltr" });
      }
    }
  }



  render() {
    console.log("this.props")

    console.log(this.props)

    return (
      <Router>
        <div 
        
        className={" App " + (this.props.language === 'en' ? '' : 'arabicFont')}

        >



        <Helmet  >
           <html
            // dir={this.state.dir} 
           lang={this.props.Language}/>

        
        </Helmet>
          <Navb />
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Footer />
        </div>
      </Router>
    );
  }
}
App.propTypes = {
  changeLang: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(App);
