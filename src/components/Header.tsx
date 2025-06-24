import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = ({ showLogout = true }: { showLogout?: boolean }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <header className="flex items-center px-4 sm:px-40 py-4 absolute w-full bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center justify-between w-full">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        className="h-10 sm:h-16 w-auto"
      />
      {showLogout && (<button onClick={handleLogout} className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
        Sign Out
      </button>)}
      
      </div>
    </header>
  );
};

export default Header;
