import React, { Component } from 'react';
import lipstick from './../../assets/img/lipstick.png';
import './ArtWorks.scss';

export default class ArtWorks extends Component {
    render() {
        return (
            //contents which you want to appear on browser
            <div className="ArtWorks">
                <div className="ArtWorks-img">
                    <img src={lipstick} alt="lipstick" />
                    <button className="ArtWorks-btn">See details</button>
                </div>
                <div className="Artworks-details">
                    <h3>Title</h3>
                    <p>Categories</p>
                </div>
            </div>
        )
    }
}