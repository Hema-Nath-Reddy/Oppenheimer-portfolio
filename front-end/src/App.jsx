import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Layout from "./Layout";
import { useEffect } from "react";
import Certifications from "./pages/Certifications";
import Something from "./pages/Something";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/contact-me",
        element: <ContactMe />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
