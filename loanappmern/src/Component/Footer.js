import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SIGMA from "../image/1553666896199.jpeg";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "100px",
        position: "static",
        bottom: 0,
      }}
      component="Footer"
      square
      variant="outlined"
      
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <img src={SIGMA} width={80} height={70} alt="Logo" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" >
            Copyright ©2023. Sigma Infosolutions. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
