import { Tabs, Tab, Box } from "@mui/material";
import React, { useState } from "react";
import "./tabs.scss";

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={event => {
				event.preventDefault();
			}}
			value={props.value}
			sx={{ backgroundColor: "343E6E" }}
			{...props}
		/>
	);
}

const CustomTabs = props => {
	const [value, setValue] = useState("successful");

	const handleChange = (_, newValue) => {
		console.log({ newValue });
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Tabs
				className="tabs"
				value={value}
				onChange={handleChange}
				TabIndicatorProps={{ style: { display: "none" } }}
			>
				<LinkTab value={props.tabs[0]} label={props.tabs[0]} href={`/${props.tabs[0]}`} />
				<LinkTab value={props.tabs[1]} label={props.tabs[1]} href={`/${props.tabs[1]}`} />
			</Tabs>
		</Box>
	);
};

export default CustomTabs;
