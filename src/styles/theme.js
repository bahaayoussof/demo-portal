import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#343E6E",
			light: "#E7F4F9",
		},
		secondary: {
			main: "#F15931",
			// main: "#8ECCE1",
		},
		error: {
			main: "#DD1C3E",
			light: "#FCE8EC",
		},
		warning: {
			main: "#FFD53A",
			light: "#FFFBEB",
		},
		success: {
			main: "#39BF50",
			light: "#EBF9ED",
		},
		info: {
			main: "#121212",
			light: "#121212",
		},
		text: {
			primary: "#121212dd",
			blue: "#343E6E",
			white: "#FFF",
			orange: "#F15931",
		},
		// action: {
		//   focus: {
		//     borderBlockColor: "#8ECCE1",
		//   },
		// },
		overrides: {
			MuiAppBar: {
				root: {
					"box-shadow": "none",
				},
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
	// direction: "rtl",
	typography: {
		fontFamily: "Roboto, sans-serif",
		h1: {
			fontWeight: 500,
			fontSize: 20,
			lineHeight: "24px",
			letterSpacing: "0.25px",
		},
		h2: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: "20px",
			letterSpacing: "0.1px",
		},
		h3: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: "20px",
			letterSpacing: "0.01em",
		},
		body1: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: "20px",
			letterSpacing: "0.01em",
		},
		h4: {
			fontWeight: 500,
			fontSize: 12,
			lineHeight: "20px",
			letterSpacing: "0.01em",
		},

		subtitle1: {
			fontWeight: 700,
			fontSize: "22px",
			lineHeight: "24px",
		},
	},

	shadows: {
		0: "none",
		1: "0px 2px 16px 0px rgba(18, 18, 18, 0.16)",
		2: "0px 2px 8px 0px rgba(18, 18, 18, 0.08)",
		8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
		16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
	},
	components: {
		MuiTable: {
			styleOverrides: {
				root: {
					borderCollapse: "separate",
					borderSpacing: 0,
				},
			},
		},

		MuiDataGrid: {
			styleOverrides: {
				root: {
					"& .MuiDataGrid-columnHeader:focus": {
						outline: "none",
					},
					"& .MuiDataGrid-cell:focus-within": {
						outline: "none",
					},
				},
			},
		},

		MuiListItemButton: {
			styleOverrides: {
				root: {
					"&.Mui-selected": {
						backgroundColor: "#343E6E",
						borderRadius: "5px",
						color: "#FFF",
					},
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					padding: "7px 20px",
				},
			},
		},

		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					padding: "0 35px",
					borderRadius: "5px",
					minHeight: 35,

					"&.Mui-selected": {
						backgroundColor: "#343E6E",
						color: "#FFF",
						transition: "all 0.3s ease-in-out",
					},
				},
			},
		},

		MuiTextField: {
			styleOverrides: {
				root: {
					width: "27ch",
					margin: "7px",
				},
			},
		},

		MuiAppBar: {
			styleOverrides: {
				root: {
					height: "50px",
				},
			},
		},

		MuiLink: {
			styleOverrides: {
				root: {
					color: "#343E6E",
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					// padding: "16px 0px",

					"&:-webkit-autofill": {
						transition: "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
						transitionDelay: " background-color 5000s, color 5000s ",
						// WebkitBoxShadow: "0 0 0 1000px white inset",
					},
				},
				root: {
					// direction: "rtl",

					"&.css-1csajbb-MuiInputBase-input-MuiOutlinedInput-input": {
						padding: "0",
					},
					"&:-webkit-autofill": {
						color: "red !important",
					},
					maxHeight: "3rem", /// max height
					"&:hover fieldset": {
						borderColor: "#343E6E !important",
					},
					"&.Mui-focused fieldset": {
						borderColor: "#343E6E !important",
					},
				},
			},
		},
	},
});

export default theme;
