import { useState,useHistory } from "react";
import useCreate from "../Hooks/useCreate";



const Create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [additional_info, setInfo] = useState("");
    const [short_summary, setSummary] = useState("");
    const book = {
        title,
        author,
        additional_info,
        short_summary
      };
    const { response, error, handleSubmit } = useCreate(book);

    return ( 
        <div className="create">


            <h1>Add a new book</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-area">
                    <label>Book Title: </label>
                    <input required type="text"  onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-area">
                    <label>Author: </label>
                    <input required type="text" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                
                <div className="input-area">
                    <label>Book Information</label>
                    <textarea required onChange={(e) => setInfo(e.target.value)} cols="30" rows="10"></textarea>
                </div>

                <div className="input-area">
                    <label>Book Summary</label>
                    <textarea required onChange={(e) => setSummary(e.target.value)} cols="30" rows="10"></textarea>
                </div>

                <button>Save</button>




            </form>
        </div>
        
     );
}
 
export default Create;