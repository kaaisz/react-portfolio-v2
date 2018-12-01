import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import './Header.scss'

export default class Header extends Component {

	// initialize state to show dropdown menu
	state = {
		showDropdown: false
	}

	// define handleClick to open button in Smartphone view
	handleClick = () =>{
		console.log("Clicked!");
		// ??ここに引数を使った理由は？
		this.setState((prevState) => ({
			showDropdown: !prevState.showDropdown
		}))
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
								<Nav smallSize={false}/>
							</div>
							) : (
								// Dropdown NavLink for mobile view
								<div className="Header-dropdown">
									<button onClick={this.handleClick}>
										<img
											width={30}
											alt="Menu Icon"
											src={require("./../../assets/icons/menuIcons.svg")}
										/>
									</button>
									{/* Dropdownのstateが初期状態から変更されている時に、dropdownmenuを表示させる = ボタンで開閉する */}
									{this.state.showDropdown && 
										<div className="Header-dropdown-menu">
											<Nav smallSize={true} />
										</div>
									}
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
// smallSizeを引数として渡し、smallSizeがtrueの時に'Header-nav-item--dropdown'が表示されるようにclassnamesでわけている
const Nav = ({smallSize}) => {
	return (
		<Fragment>
			{/* replace from above to here */}
			<NavLink
				exact
				to="/"
				className=
				{cx("Header-menu-item", { 'Header-nav-item--dropdown': smallSize})}
				activeClassName="Header-menu-item--active">
				Top
			</NavLink>
			<NavLink
				to="/works/"
				className=
				{cx("Header-menu-item", { 'Header-nav-item--dropdown': smallSize})}
				activeClassName="Header-menu-item--active">
				Works
			</NavLink>
			<NavLink
				to="/biography"
				className=
				{cx("Header-menu-item", { 'Header-nav-item--dropdown': smallSize})}
				activeClassName="Header-menu-item--active">
				Bio
			</NavLink>
			<NavLink to="/contact"
				className=
				{cx("Header-menu-item", { 'Header-nav-item--dropdown': smallSize})}
				activeClassName="Header-menu-item--active">
				Contact
			</NavLink>
			<a href="http://suzydp.net"
				className=
				{cx("Header-menu-item", { 'Header-nav-item--dropdown': smallSize})}
				activeClassName="Header-menu-item--active">
				suzydp.net
			</a>
		</Fragment>
	)
}