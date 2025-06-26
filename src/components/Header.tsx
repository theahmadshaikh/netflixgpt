import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";

const Header = ({ showLogout = true }: { showLogout?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <header className={`fixed top-0 w-full z-50 px-4 sm:px-40 py-4 transition-colors duration-300
        ${scrolled
        ? "sm:bg-black"
        : "bg-gradient-to-b from-black/80 to-transparent"
      }`}>
      <div className="flex items-center justify-between w-full">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="h-10 sm:h-16 w-auto"
        />
        {showLogout && (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>

  );
};

export default Header;
