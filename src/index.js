import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
