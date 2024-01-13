import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createTheme, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css'
import {LandingPage} from "./containers/LandingPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./errors/ErrorPage";
import {Rules} from "./components/rules/Rules";
import {HeroesPage} from "./containers/HeroesPage";
import App from "./App";

const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
    white: '#fff',
    black: '#000',
});

const router = createBrowserRouter([{
    path: '/', element: <App/>, errorElement: <ErrorPage/>, children: [{
        path: '/home',
        element: <LandingPage/>,
        errorElement: <ErrorPage/>
    },{
        path: '/rules',
        element: <Rules/>,
        errorElement: <ErrorPage/>
    }, {path: '/heroes', element: <HeroesPage/>, errorElement: <ErrorPage/>}]
}])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MantineProvider>
            <RouterProvider router={router}/>
        </MantineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
