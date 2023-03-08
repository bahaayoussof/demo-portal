import { Box, Stack } from "@mui/material";
import Main from "./components/main/Main";

function App() {
	return (
		<Box bgcolor={"background.default"} color={"text.primary"}>
			<Stack direction="row" spacing={2}>
				<Main />
			</Stack>
		</Box>
	);
}

export default App;
