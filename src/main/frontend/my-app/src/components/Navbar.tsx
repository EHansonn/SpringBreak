import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-0 w-full left-0 bg-inherit flex justify-start bg-red-900 p-4   ">
        {/* <h1 className="text-lg select-none "> */}
        <div className="mr-10 font-bold text-white">Title</div>
        <div className="flex">
          <Link
            to="/"
            className="text-white mr-10 no-underline transition duration-300 hover:scale-125"
          >
            Home
          </Link>
          <Link
            to="/things"
            className="text-white mr-10 no-underline transition duration-300 hover:scale-125"
          >
            Things
          </Link>
        </div>

        <i className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
      </div>
    </>
  );
};

export default Navbar;
