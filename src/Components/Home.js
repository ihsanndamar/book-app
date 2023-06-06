import Header from "./Header";
import Navbar from "./Navbar";
import BookList from "./BookList";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";


const Home = () => {
    return ( 
        <div className="home">

            <BookList></BookList>            
        </div>
     );
}
 
export default Home;