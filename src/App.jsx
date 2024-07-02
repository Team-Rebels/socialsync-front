import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import Hero from "./pages/home/components/hero";
import Home from "./pages/home";
import Upcoming from "./pages/home/components/upcoming";
import Occasions from "./pages/home/components/occasions";

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
          {
            index:true,
            element: <Home />,
          },
          {
            path: "hero",
            element: <Hero/>
          },
          {
            path: "occasions",
            element: <Occasions/>
          },
          {
            path: "upcoming",
            element: <Upcoming/>
          },
      ]
    }







  ]);
  
 

  return <RouterProvider router={router} />;

}

export default App
