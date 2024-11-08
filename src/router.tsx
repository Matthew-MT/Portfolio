import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "work",
        element: <App />,
    },
    {
        path: "contact",
        element: <App />,
    },
]);

export default router;
