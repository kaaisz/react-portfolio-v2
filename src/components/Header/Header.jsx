import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {

	// define handleClick to open button in Smartphone view
	handleClick = () =>{
		console.log("Clicked!");
	}

	render() {
		return (
			<header className="Header">
				<div className="Header-inner">
					<h1 className="Header-title"><NavLink exact to="/">Artworks by SZDP</NavLink></h1>
					<Media query="(min-width:540px)">
						{/* 540px以上なら以下を表示 (三項演算子を使用して条件分岐している)*/}
						{/* Header.jsx内のNavlinkのpathと、App.jsのPathが一致すること */}
						{(matches) => (matches 
							? (
							<div className="Header-menu">
								<Nav />
							</div>
							) : (
								// Dropdown NavLink for mobile view
								<div className="Header-Dropdown">
									<button onClick={this.handleClick}>
										<img
											width={30}
											alt="Menu Icon"
											src={require("./../../assets/icons/menuIcons.svg")}
										/>
									</button>
									<div className="Header-dropdown-menu">
										{/* Place <Nav /> inside of dropdown-menu class */}
										<Nav />
									</div>
								</div>
							)
						)}
					</Media>
				</div>
			</header>
		)
	}
}

// Make function for appearing Nav with Fragment which defined above.
// *this Nav is replaced to <Nav /> above. 
const Nav = () => {
	return (
		<Fragment>
			{/* replace from above to here */}
			<NavLink
				exact
				to="/"
				className="Header-menu-item"
				activeClassName="Header-menu-item--active">
				Top
			</NavLink>
			<NavLink
				to="/works/"
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
		</Fragment>
	)
}