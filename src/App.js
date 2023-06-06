import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import BookDetail from './Components/BookDetail';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Create from './Components/Create';
import NotFound from './Components/NotFound';
import Update from './Components/Update';



function App() {
  return (
    <div className="App">
      
      

      <Router  basename={process.env.PUBLIC_URL}> {/* Router bileşenini kullanarak Routes ve Route bileşenlerini sarmalayın */}
      
      <Header/>
      <Navbar/>

        <Routes>
          <Route exact  path="/" element={
            <Home/>
          } />
          <Route path="/home" element={
            <Home/>
          } />

          <Route path="/about" element={
            <About/>
          } />

          <Route path="/book/:id" element={
            <BookDetail/>
          } />

          <Route path="/create" element={
            <Create/>
          } />

          <Route path="/*" element={
            <NotFound/>
          } />

          <Route path="/update/:id" element={
            <Update/>
          } />

          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
