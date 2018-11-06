import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            //contents which you want to appear on browser
            <footer className="Footer">
                <div className="footer-social">
                    <ul>
                        <li><a href="http://">(LinkedIn)</a></li>
                        <li><a href="http://facebook.com/suzydp">(facebook)</a></li>
                        <li><a href="http://instagram.com/suzydp">(Instagram)</a></li>
                        <li><a href="http://dribbble.com/suzydp">(dribbble)</a></li>
                    </ul>
                </div>
                <p className="copyright">Copyright&copy; SZDP All rights reserved.</p>
            </footer>
        )
    }
}