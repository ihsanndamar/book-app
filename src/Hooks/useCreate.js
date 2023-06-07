import { useEffect, useState } from "react";


const useCreate = (body) => {
    const [error, setError] = useState();
    const [response, setResponse] = useState(); 
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const requestParameter = {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:8000/books/',requestParameter)
        .then(res => res.json())//.then(res => setResponse(res.json())) //this is a wrong usage
        .then(data => {
            setResponse(data);
            setIsDone(true);
        })
        .catch(err => setError(err))  
    };





    return {response, error, handleSubmit, isDone};
}
 
export default useCreate;