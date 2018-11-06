import React, { Component } from 'react';
import ArtWorks from '../ArtWorks/ArtWorks.jsx';
import './TopPage.scss';

export default class TopPage extends Component {
    render() {
        return (
            //contents which you want to appear on browser
            <div className="TopPage">
                <ArtWorks />{/*replace here*/}
            </div>
        )
    }
}