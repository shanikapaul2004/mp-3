import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Experiences from "./pages/Experiences";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";
import References from "./pages/References";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/education",
                element: <Education/>,
            },
            {
                path: "/experiences",
                element: <Experiences/>,
            },
            {
                path: "/interests",
                element: <Interests/>,
            },
            {
                path: "/projects",
                element: <Projects/>,
            },
            {
                path: "/references",
                element: <References/>,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
