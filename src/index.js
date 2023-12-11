import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ThemeProvider, createTheme } from "@mui/material/styles"
import './index.css';
import App from './App';

// const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#ccccff",
//       },
//       secondary: {
//         main: '#333333',
//       },
//     },
//   })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ThemeProvider theme={theme}>
        <App />
    // </ThemeProvider>
)