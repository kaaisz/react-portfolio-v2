import React, { Component } from 'react'
import './Header.scss';

export default class Header extends Component{
    render(){
        return(
            //contents which you want to appear on browser
            <header className="App-header">
                <h1 className="Title">Artworks by SZDP</h1>
                <ul className="Menu">
                    <li>Top</li>
                    <li>Works</li>
                    <li>Bio</li>
                    <li>Contact</li>
                    <li><a href="http://suzydp.net">suzydp.net</a></li>
                </ul>
            </header>
        )
    }
}

