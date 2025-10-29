import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Home/Home";

import { Suspense } from "react";
import Details from "../Pages/Details";
import Spiner from "../Spninner/Spiner";
import ErrorPage from "../Error/ErrorPage";
import Apps from "../Pages/apps";
import Install from "../Pages/Install";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        errorElement: <ErrorPage />
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/details/:id",
        loader: () => fetch('appData.json'),
        element: <Suspense fallback={<Spiner />}>
          <Details />
        </Suspense>
      },
      {
        path: "/install",
        Component: Install
      }
    ]
  },
]);