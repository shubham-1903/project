import React from "react";
import "./style/Navbar.css";
import { NavLink } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import {HomeIcon} from "./icons/HomeIcon"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<div className='container'>
				<div className='logo'>
					<h3>logo</h3>
					{/* <img src="qq.jpeg" alt="LOGO"/> */}
				</div>
				<nav>
					<ul className='menu_list'>
						<li>
							<HomeIcon/>
							<NavLink exact activeClassName='active_class' to='/'>
								Home
							</NavLink>
						</li>
						<li>Menu</li>
						<li className='search'>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder='Search…'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ "aria-label": "search" }}
								/>
							</div>
							{/* <input type='text' className='search' placeholder='Search' /> */}
						</li>
						<li>
							<NavLink exact activeClassName='active_class' to='/about'>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink exact activeClassName='active_class' to='/contact'>
								Contact Us
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
