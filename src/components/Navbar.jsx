import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import useAppContext from "../contex/AppContex";
import DropDown from "./Dropdown";

export default function Navbar({ children }) {
  const { username } = useAppContext();
  return (
    <>
      <nav>
        <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center px-8 py-4 absolute top-0 left-0 right-0 bg-transparent z-50">
          <div className="w-64 font">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img className="w-[50%]" src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className="flex items-center list-none gap-8">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/listcars"}>List Cars</Link>
            </li>
            <li>
              <Link to={"/ordercar"}>Book Cars</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-10">
            {!username ? (
              <>
                {/* <Link
                  to={"/login"}
                  className="text-black font-medium transition-colors duration-300 hover:text-blue-600"
                >
                  Sign In
                </Link> */}
                <Link
                  to={"/Login"}
                  className="bg-blue-600 text-white font-medium py-2 px-8 rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-500"
                >
                  Sign In
                </Link>
              </>
            ) : (
              <DropDown value={username} />
            )}
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
