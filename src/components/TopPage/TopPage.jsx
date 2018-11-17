import React, { Component } from 'react';
import ArtWorks from '../ArtWorks/ArtWorks.jsx';
import { artworks } from '../../constants/artworks.js';
import './TopPage.scss';

export default class TopPage extends Component {
    render() {
        return (
            //contents which you want to appear on browser
            <div className="Container">
                <div className="TopPage">
                    {/* artworks.jsから、exportしたartworksを呼び出す*/}
                    {artworks.map((artworks) => (
                        <ArtWorks
                            key={artworks.title}
                            imageUrl={artworks.imageUrl}
                            title={artworks.title}
                            categories={artworks.categories}
                        />
                    ))}
                </div>
            </div>
        )
    }
}