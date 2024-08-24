
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import AddCart from "./components/Cart/Addcart";
import Home from "./components/home/Home";
import Kids from "./components/home/Kids";
import Mens from "./components/home/Mens";
import Womens from "./components/home/Womens";


import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login/>,
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
      element: <Home/>,
    },
    {
      path: "/addcart",
      element: <AddCart/>,
    },
    {
      path: "/womens",
      element: <Womens/>,
    },
    {
      path: "/mens",
      element: <Mens/>,
    },
    {
      path: "/kids",
      element: <Kids/>,
    }
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
    
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
