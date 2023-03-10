import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LOGO from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

import "./navbar.scss";
const Navbar = () => {
	return (
		<Box className="navbar">
			<AppBar position="static" color="default">
				<Toolbar className="toolbar">
					<Box className="logo">
						<img src={LOGO} alt="Damen" />
					</Box>

					<Box
						sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						className="navContainer"
					>
						<NavLink className="navlink" to={"/"}>
							Transactions
						</NavLink>
						<NavLink className="navlink" to={"/"}>
							Users
						</NavLink>
						<NavLink className="navlink" to={"/"}>
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
