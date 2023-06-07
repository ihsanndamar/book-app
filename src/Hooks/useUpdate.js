import { useEffect, useState } from "react";



const useUpdate = (body,id) => {
    const [error, setError] = useState();
    const [response, setResponse] = useState();
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestParameter = {
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:8000/books/'+id,requestParameter)
        //.then(res => setResponse(res.json())) //this is a wrong usage
        .then(res => res.json())
        .then(data => {
            setResponse(data);
            setIsDone(true);
        })
        .catch(err => setError(err))
        
    };
    return {response, error, isDone, handleSubmit};
}
 
export default useUpdate;