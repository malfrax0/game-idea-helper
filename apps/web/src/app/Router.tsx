import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import CreationSpaceNew from "./pages/CreationSpaceNew";
import CreationSpace from "./pages/CreationSpace";

const Routes: RouteObject[] = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/creation-space/:creationSpaceId",
        element: <CreationSpace />
    },
    {
        path: "/creation-space/new",
        element: <CreationSpaceNew />
    },
    {
        path: "/game-space/:gameSpaceId",
        element: <></>
    }
]

export default Routes;