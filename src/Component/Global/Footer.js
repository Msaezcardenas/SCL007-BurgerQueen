import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    copyrigth: PropTypes.string
  };
    render() {
      const { copyrigth = '&copy, React'} = this.props;
      return (
        <div className="Footer">
        <p> {copyrigth} </p>
        </div>
      );
    }
  }
  
  export default Footer;