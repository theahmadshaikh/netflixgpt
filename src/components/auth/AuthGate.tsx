import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, Outlet } from "react-router-dom";
import {  useRemoveAuthUser, useSetAuthUser } from "../../stores/authStore";
import { auth } from "../../utils/firebase";

const AuthGate = () => {
  const setUser = useSetAuthUser();
  const removeUser = useRemoveAuthUser();
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/browse");
      } else {
        removeUser();
        navigate("/login");
      }
    });

    return () => unsub();
  }, []);

  return <Outlet />; // renders nested routes
};

export default AuthGate;
