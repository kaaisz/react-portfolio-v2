import React, { Component } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
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
						<div className="Header-menu">
							<NavLink 
								exact
								to="/" 
								className="Header-menu-item"
								activeClassName="Header-menu-item--active">
								Top
							</NavLink>
							<NavLink 
								to="/" 
								className="Header-menu-item"
								activeClassName="Header-menu-item--active">
								Works
							</NavLink>
							<NavLink 
								to="/biography" 
								className="Header-menu-item"
								activeClassName="Header-menu-item--active">
								Bio
							</NavLink>
							<NavLink to="/contact" 
								className="Header-menu-item"
								activeClassName="Header-menu-item--active">
								Contact
							</NavLink>
							<a href="http://suzydp.net" 
								className="Header-menu-item"
								activeClassName="Header-menu-item--active">
								suzydp.net
							</a>
						</div>
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

