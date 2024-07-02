import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import Home from "./pages/home";
import UpcomingEvents from "../src/pages/upcomingEvents";
import EventListing from "./pages/explore";
import EventCreation from "./pages/eventCreation";
import EventManagement from "./pages/eventManagement";
import SignIn from "./pages/signin";
import SignUp from "./pages/signOut";

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
          // {
          //   path: "hero",
          //   element: <Hero/>
          // },
          // {
          //   path: "occasions",
          //   element: <Occasions/>
          // },
          {
            path: "upcoming",
            element: <UpcomingEvents/>
          },
          {
            path: "explore",
            element: <EventListing/>
          },
          {
            path: "createEvent",
            element: <EventCreation/>
          },
          {
            path: "manage",
            element: <EventManagement/>
          },
          {
            path: "signin",
            element: <SignIn/>
          },
          {
            path: "signup",
            element: <SignUp/>
          },
      ]
    }







  ]);
  
 

  return <RouterProvider router={router} />;

}

export default App
