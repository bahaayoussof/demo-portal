import React from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LogoutRounded } from "@mui/icons-material";

import "./sidebar.scss";
const sidebar = props => {
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
			{/* <Box className="top">
				<img className="logo" src={LOGO} alt="Damen" />
			</Box> */}

			<Box className="filters_container">
				<Box
					component="form"
					className="filters"
					noValidate
					autoComplete="off"
					onSubmit={e => {
						e.preventDefault();
						console.log("submit!");
					}}
				>
					<TextField name="op_number" id="outlined-required" label="Operation Number" />
					<TextField name="extra_info" id="outlined-required" label="Extra Info" />
					<Autocomplete
						disablePortal
						id="provider_name"
						options={top100Films}
						renderInput={params => <TextField {...params} label="Select Provider" />}
					/>
					<Autocomplete
						disablePortal
						id="service_name"
						options={top100Films}
						renderInput={params => <TextField {...params} label="Select Service" />}
					/>
					<Autocomplete
						disablePortal
						id="gov_code"
						options={top100Films}
						renderInput={params => <TextField {...params} label="Select Government" />}
					/>

					<Box>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="From Date"
								minDate={dayjs().subtract(1, "month")}
								onChange={date => console.log(dayjs(date))}
							/>
							<DatePicker label="To Date" onChange={date => console.log(date)} />
						</LocalizationProvider>
					</Box>

					<Box className="actions">
						<Button color="error" onClick={() => console.log("reset!")}>
							reset
						</Button>
						<Button type="submit">search</Button>
					</Box>
				</Box>
			</Box>
			<Box className="bottom">
				<Box className="actions">
					<Button onClick={() => console.log("Change Password!")}>Change Password</Button>
					<Button
						color="error"
						endIcon={<LogoutRounded />}
						onClick={() => console.log("logout!")}
					>
						Logout
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default sidebar;
