import React, { Component } from 'react';
import lipstick from './../../assets/img/lipstick.png';
import './ArtWorks.scss';

export default class ArtWorks extends Component {

    // Initialize(初期化)
    state = {
        isHovered: false,
    }

    // handle each state(hoverしている状態としていない状態を定義)
    handleHoverIn = () => {
        this.setState({
            isHovered: true
        });
    }

    handleHoverOut = () => {
        this.setState({
            isHovered: false
        });
    }

    // rendering(描画)
    render() {
        // 上記で定義したそれぞれのケースをisHoveredに割り当てる
        const { isHovered } = this.state;
        /*
        ?? ここの{ isHovered }で定義し直しているのはstateを関数化して割り当てやすくするためと想定している
        でも、この{ isHovered }がcurlybraceで囲まれているのはなぜ？
        */

        return (
            // contents which you want to appear on browser
            // ?? 下記のonMouseOver, onMouseLeaveはDOM Eventで定義できるonmouseover, onmouseleaveと同じもの？
            <div className="ArtWorks" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>
                <div className="ArtWorks-img">
                    <img src={lipstick} alt="lipstick" />
                    {
                        //if isHovered was true, "see details" will also appear
                        isHovered && (
                            <button className="ArtWorks-btn">See details</button>
                        )
                    }
                </div>
                <div className="Artworks-details">
                    <h3>Title</h3>
                    <p>Categories</p>
                </div>
            </div>
        )
    }
}