import React, { Component } from 'react';
import ArtWorks from '../ArtWorks/ArtWorks.jsx';
import lipstick from './../../assets/img/lipstick.png';
import './TopPage.scss';

export default class TopPage extends Component {
    render() {
        return (
            //contents which you want to appear on browser
            <div className="TopPage">
                <ArtWorks imageUrl={lipstick} title="Project Name" categories="Categories" />
            </div>
        )
    }
}