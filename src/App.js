import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          name="email"
          label="Email Address"
          required
          fullWidth
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          name="password"
          label="Password"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remenber" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Tooltip>
              <Link>Forgot password?</Link>
            </Tooltip>
          </Grid>
          <Grid item>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
