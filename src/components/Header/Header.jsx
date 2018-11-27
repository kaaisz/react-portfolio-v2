import React, { Component } from 'react';
import Media from 'react-media';
import './Header.scss';

export default class Header extends Component {
	render() {
		return (
			<header className="Header">
				<div className="Header-inner">
					<h1 className="Header-title">Artworks by SZDP</h1>
					<Media query="(min-width:540px)">
						{/* 540px以上なら以下を表示 (三項演算子を使用して条件分岐している)*/}
						{(matches) => (matches 
						? 
						<ul className="Header-menu">
							<li>Top</li>
							<li>Works</li>
							<li>Bio</li>
							<li>Contact</li>
							<li><a href="http://suzydp.net">suzydp.net</a></li>
						</ul>
						:
						<img 
							width={30}
							alt="Menu Icon"
							src={require("./../../assets/icons/menuIcons.svg")}
						/>
						)}
					</Media>
				</div>
			</header>
		)
	}
}

