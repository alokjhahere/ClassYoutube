import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <Body/>,
      children: [
         {
            path: "/",
            element: <MainContainer/>
         },
         {
            path: "/watch",
            element: <WatchPage/>
         }
      ]
   }
])

const App = () =>{
return( 
    <Provider store={store}>
       <div>
          <Header/>
          <RouterProvider router={appRouter}/>
       </div>
</Provider>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);