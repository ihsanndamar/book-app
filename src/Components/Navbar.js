import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/links">Links</Link>
            <Link to="/create">New Book</Link>
        </div>
     );
}
 
export default Navbar;