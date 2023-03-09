import { Box, Stack } from "@mui/material";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<Box bgcolor={"background.default"} color={"text.primary"}>
			<Navbar />
			<Stack direction="row" spacing={2}>
				<Main />
			</Stack>
		</Box>
	);
}

export default App;
