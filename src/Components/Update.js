import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import useUpdate from "../Hooks/useUpdate";
import ErrorBar from "./ErrorBar";

const Update = () => {
  let { id } = useParams();
  const { data: book, isPending, error } = useFetch("http://localhost:8000/books/" + id);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [additional_info, setInfo] = useState("");
  const [short_summary, setSummary] = useState("");

  const { response, error: errorUpdate, handleSubmit } = useUpdate({title,author,additional_info,short_summary},id);
  
  useEffect(() => {
    if (book) {
      setTitle(book.title || "");
      setAuthor(book.author || "");
      setInfo(book.additional_info || "");
      setSummary(book.short_summary || "");
    }
  }, [book]);



  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


console.log(additional_info)
  return (
    <div className="update">



      <h1>Update The Book</h1>
      {book && (
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-area">
            <label>Book Title: </label>
            <input value={title} required type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input-area">
            <label>Author: </label>
            <input value={author} required type="text" onChange={(e) => setAuthor(e.target.value)} />
          </div>

          <div className="input-area">
            <label>Book Information</label>
            <textarea value={additional_info} required onChange={(e) => setInfo(e.target.value)} cols="30" rows="10"></textarea>
          </div>

          <div className="input-area">
            <label>Book Summary</label>
            <textarea value={short_summary} required onChange={(e) => setSummary(e.target.value)} cols="30" rows="10"></textarea>
          </div>

          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Update;
