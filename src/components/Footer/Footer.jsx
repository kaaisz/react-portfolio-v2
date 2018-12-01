import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      //contents which you want to appear on browser
      <footer className="Footer">
        <div className="footer-social">
          <ul>
            <li><a href="http://"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></li>
            <li><a href="http://facebook.com/suzydp"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
            <li><a href="http://instagram.com/suzydp"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
            <li><a href="http://dribbble.com/suzydp"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a></li>
          </ul>
        </div>
        <p className="copyright">Copyright&copy; SZDP All rights reserved.</p>
      </footer>
    )
  }
}