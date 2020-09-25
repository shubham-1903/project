import React from "react";
import "./style/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<>
			<div className='container'>
				<div className='logo'>
					<h3>logo</h3>
				</div>
				<div className='navbar'>
					<ul className='menu_list'>
						<li>Home</li>
						<li>Menu</li>
						<li className='search'>
							<input type='text' className='search' placeholder='Search' />
						</li>
						<li>
							<NavLink exact activeClassName='active_class' to='/'>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink exact activeClassName='active_class' to='/contact'>
								Contact Us
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
