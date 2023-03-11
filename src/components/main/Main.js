import { CachedRounded, FileDownloadRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import CustomTabs from "../tabs/Tabs";

import "./main.scss";
const Main = () => {
	return (
		<div className="main">
			<Sidebar />
			<Box className="mainContainer">
				<Box className="mainHeader">
					<CustomTabs tabs={["successful", "pending"]} />

					<Box className="actions">
						<Button onClick={() => console.log("Refresh")} startIcon={<CachedRounded />}>
							Refresh
						</Button>
						<Button
							color="success"
							onClick={() => console.log("Export!")}
							startIcon={<FileDownloadRounded />}
						>
							Export
						</Button>
					</Box>
				</Box>
        <Box className="mainBody">
				</Box>
			</Box>
		</div>
	);
};

export default Main;
