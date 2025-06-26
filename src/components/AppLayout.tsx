// components/AppLayout.tsx
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  return (
    <>
      <Header showLogout={!isLoginPage} />
      <main >
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
