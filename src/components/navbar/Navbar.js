import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LOGO from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
const Navbar = () => {
	return (
		<Box className="navbar">
			<AppBar position="static" color="default">
				<Toolbar className="toolbar">
					<Box className="logo">
						<Link to="/">
							<img src={LOGO} alt="Damen" />
						</Link>
					</Box>

					<Box
						sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						className="navContainer"
					>
						<NavLink className="navlink" to={"/transactions"}>
							Transactions
						</NavLink>
						<NavLink className="navlink" to={"/users"}>
							Users
						</NavLink>
						<NavLink className="navlink" to={"/ffa-portal"}>
							FFA Portal
						</NavLink>
					</Box>

					<Box className="extra"></Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
