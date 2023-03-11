import { Box, Stack } from "@mui/material";
import { Route, Routes } from "react-router";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

import "./app.scss";
function App() {
	return (
		<Box bgcolor={"background.default"} color={"text.primary"} className="app">
			<Navbar />
			<Stack direction="row" spacing={2} className="appContainer">
				<Routes path="/">
					<Route index element={<Main />} />
					<Route path="transactions" element={<Main />} />
					<Route path="users" element={<Main />} />
					<Route path="ffa-portal" element={<Main />} />
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
