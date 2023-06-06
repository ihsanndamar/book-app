import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <Link to='home' className="header">
            <h1>Bookify</h1>
            <h2>Bookify: Embrace the World of Words</h2>
        </Link>
        
     );
}
 
export default Header;