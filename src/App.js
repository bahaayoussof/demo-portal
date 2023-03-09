import { Box, Stack } from "@mui/material";
import { Route, Routes } from "react-router";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<Box bgcolor={"background.default"} color={"text.primary"}>
			<Navbar />
			<Stack direction="row" spacing={2}>
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</Stack>
		</Box>
	);
}

export default App;
