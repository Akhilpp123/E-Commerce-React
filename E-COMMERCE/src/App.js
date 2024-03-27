//App.js
<<<<<<< HEAD
<<<<<<< HEAD
import Login from "./auth/login/login";
import Register from "./auth/register/register";

import Header from "./header";
import Home from "./home";

import { AuthProvider } from "./authContext";
=======
import Login from "./components/auth/login";
import Register from "./components/auth/register";
=======
import Login from "./auth/login/login";
import Register from "./auth/register/register";
>>>>>>> 6c72f09 (newcommit)

import Header from "./header";
import Home from "./home";

<<<<<<< HEAD
import { AuthProvider } from "./contexts/authContext";
>>>>>>> 83d012c (newcommit)
=======
import { AuthProvider } from "./authContext";
>>>>>>> 6c72f09 (newcommit)
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
