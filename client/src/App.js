import React from "react";
import Card from "./components/Card";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

const theme = createTheme({});

export default function App() {
  const [values, setValues] = React.useState({});
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    axios
      .post("api/auth/signin", {
        email: "test@tbo.com",
        password: "1234",
      })
      .then((res) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      })
      .catch((err) => {
        alert("Server is not running yet.");
      });
  }, []);

  const handleInput = (e) => {
    axios
      .post("api/calculate", {
        data: e.target.value,
      })
      .then((res) => {
        setValues(res.data);
        setIsError(false);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setIsError(true);
          setValues({ sum: 0, average: 0, stdev: 0 });
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card>
            <Typography variant="h6" gutterBottom component="div">
              Calculator
            </Typography>
            <TextField
              error={isError}
              id="outlined-multiline-static"
              label="Input numbers"
              fullWidth
              multiline
              rows={4}
              placeholder="1,2,3,4"
              sx={{ m: 2 }}
              onChange={handleInput}
              helperText={isError && "invalid input data."}
            />
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0.5 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-required"
                label="sum"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                value={
                  values && values.sum && values.sum !== null ? values.sum : 0
                }
              />
              <TextField
                id="outlined-required"
                label="average"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                value={
                  values && values.average && values.average !== null
                    ? values.average
                    : 0
                }
              />
              <TextField
                id="outlined-required"
                label="standard deviation"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                value={
                  values && values.stdev && values.stdev !== null
                    ? values.stdev
                    : 0
                }
              />
            </Box>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
