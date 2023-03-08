import React from "react";
import LOGO from "../../assets/images/logo.png";
import "./sidebar.scss";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
const sidebar = () => {
	const top100Films = [
		{ label: "The Shawshank Redemption", year: 1994 },
		{ label: "The Godfather", year: 1972 },
		{ label: "The Godfather: Part II", year: 1974 },
		{ label: "The Dark Knight", year: 2008 },
		{ label: "12 Angry Men", year: 1957 },
		{ label: "Schindler's List", year: 1993 },
		{ label: "Pulp Fiction", year: 1994 },
	];
	return (
		<Box className="sidebar">
			<div className="top">
				<img className="logo" src={LOGO} alt="Damen" />
			</div>

			<Box
				component="form"
				className="filters"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
					margin: "10px",
					backgroundColor: "#eee",
					borderRadius: "5px",
				}}
				noValidate
				autoComplete="off"
				onSubmit={e => e.preventDefault()}
			>
				<TextField
					name="op_number"
					id="outlined-required"
					label="Operation Number"
					size="small"
				/>
				<TextField name="extra_info" id="outlined-required" label="Extra Info" size="small" />
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={top100Films}
					renderInput={params => <TextField {...params} label="Select Provider" />}
					sx={{ width: "25ch" }}
					size="small"
				/>
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={top100Films}
					renderInput={params => <TextField {...params} label="Select Service" />}
					sx={{ width: "25ch" }}
					size="small"
				/>
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={top100Films}
					renderInput={params => <TextField {...params} label="Select Government" />}
					sx={{ width: "25ch" }}
					size="small"
				/>
				<Box className="actions">
					<Button>search</Button>
					<Button color="error">reset</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default sidebar;
