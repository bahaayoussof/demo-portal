import { AppBar, Box, Link, Toolbar } from "@mui/material";
import React from "react";
import LOGO from "../../assets/images/logo.png";

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
						<Link href="/transactions">transactions</Link>
						<Link href="/users">users</Link>
						<Link href="/ffa-portal">ffa portal</Link>
					</Box>

					<Box className="extra"></Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;