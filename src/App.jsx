import React from "react";
import Main from "./Pages/Main/Main";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import "./App.css";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
};

export default App;
