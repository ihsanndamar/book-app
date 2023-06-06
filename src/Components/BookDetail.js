import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Header from "./Header";
import Navbar from "./Navbar";
import Update from "./Update";



const BookDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: book, isPending, error, setError} = useFetch("http://localhost:8000/books/"+id);


    const handleDelete = () => {
        const requsetOption = {
            method: 'DELETE'
        };
        fetch("http://localhost:8000/books/"+id,requsetOption)
        .catch(err => setError(err))
        .then(navigate('/'));
    };

    const handleUpdate = () => {
        navigate('/update/'+id, {params: book})
    };

    return (
        <div className="book-list">
            {error && <p>something is wrong...</p>}

            
            {book && 
                <div className="book-detail">
                    <h1>{book.title}</h1>
                    <p>{book.additional_info}</p>
                    <p>{book.short_summary}</p>
                    <p>{book.author}</p>
                    <button onClick={handleDelete}>Delete </button>
                    <button onClick={handleUpdate}>Update </button>

                </div> 
            }
        </div>

        

    
        
     );
}
 
export default BookDetail;