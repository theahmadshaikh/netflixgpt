// components/Body.tsx
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import AuthGate from "./auth/AuthGate";
import AppLayout from "./AppLayout";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthGate />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
          children: [
            { index: true, element: <Navigate to="/login" /> },
            { path: "login", element: <Login /> },
            { path: "browse", element: <Browse /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default Body;
