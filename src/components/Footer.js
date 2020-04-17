import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <Container component={Box} mt={8} mb={4} maxWidth="xs">
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://chiranjibipoudyal.com/">
          Chiranjibi Poudyal
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
