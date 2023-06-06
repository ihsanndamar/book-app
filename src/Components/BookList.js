import {Link}  from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import ErrorBar from "./ErrorBar";
import { useEffect } from "react";
import { useState } from "react";


const BookList = () => {
    const {data: books, isPending, error} = useFetch("http://localhost:8000/books");
    const [displayList, setDisplayList] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
          setDisplayList(false);
        }, 3500);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);



    return ( 
        <div className="book-list">
            
            <h1>Book List</h1>
            {isPending && !error && <p>Loading...</p>}
            {error && displayList  && <ErrorBar error = {error}/>}

            
            {books && books.map((book) => (
                
                <div className="book-preview" key={book.id}>
                    <Link to={`/book/${book.id}`}><h3>{book.title}</h3></Link>
                    {/* <h4>{book.additional_info}</h4> */}
                    {/* <p>{book.short_summary}</p> */}
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BookList;