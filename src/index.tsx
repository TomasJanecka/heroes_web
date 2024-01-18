import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { LandingPage } from "./containers/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./errors/ErrorPage";
import { Rules } from "./components/rules/Rules";
import App from "./App";
import { Heroes } from "./containers/Heroes";


const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  white: "#fff",
  black: "#000",
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        // {
        //   path: "/home",
        //   element: <LandingPage />,
        // },
        {
          path: "/rules",
          element: <Rules />,
        },
        { path: "/heroes", element: <Heroes />, errorElement: <ErrorPage /> },
      ],
    },
  ],
  { basename: "/heroes_web" },
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
