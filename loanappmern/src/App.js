import { Box, Container, CssBaseline, Switch, ThemeProvider, Typography, createTheme } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { useState } from "react";

import UserDetail from "./Component/UserDetail";
import Home from "./Component/Home";
import Form from "./Component/form";
import Homebtn from "./Component/Homebtn";
import Successful from "./Component/Successful";

const light = {
  palette: {
    mode: "light",
  },
};
const dark = {
  palette: {
    mode: "dark",
  },
};
 
    
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

    const changeTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };
  return (
    
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
    <CssBaseline />
      <br/>
      <Box>
      <Switch checked={isDarkTheme} onChange={changeTheme} align="left" />
      <Typography variant="body1" align="left">
      Dark Mode is {isDarkTheme ? "On" : "Off"}
    </Typography>
        <Routes>
          {/* <Route path="btn" element={<Homebtn/>}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="user" element={<UserDetail />}></Route>
          <Route path="formSubmitted" element={<Successful />}></Route>
        </Routes>
      </Box>

    
    </ThemeProvider>

   
  );
}

export default App;
