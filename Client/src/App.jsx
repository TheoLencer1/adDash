import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import { Layout, General } from "./views";
import { Admin } from "./views";

function App() {
	const mode = useSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route
								path="/"
								element={<Navigate to="/general" replace />}
							/>
							<Route path="/dashboard" element={<General />} />
							<Route path="/general" element={<General />} />
							<Route path="/admin" element={<Admin />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
