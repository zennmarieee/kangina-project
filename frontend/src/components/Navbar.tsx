import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex flex-grow justify-center space-x-12">
        {["Home", "About", "Features", "Team"].map((item) => (
            <Link 
                key={item} 
                to={`/${item.toLowerCase()}`} 
                className="text-base font-[600] text-[#ed3f25] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#ed3f25] after:transition-all after:duration-300 hover:after:w-full">
                {item}
            </Link>
                    ))}
        </nav>
  );
};

export default Navbar;
