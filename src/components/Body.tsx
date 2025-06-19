import { createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider } from "react-router-dom"
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/browse",
      element:<Browse/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}


export default App
