import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					background: "#002D74",
					margin: "auto",
					boxShadow: "none",
				},
			},
		},
	},
});
