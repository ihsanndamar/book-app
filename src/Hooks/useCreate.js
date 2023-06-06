import { useEffect, useState } from "react";


const useCreate = (body) => {
    const [error, setError] = useState();
    const [response, setResponse] = useState(); 


    const handleSubmit = () => {

        
        const requestParameter = {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:8000/books/',requestParameter)
        //.then(res => setResponse(res.json())) //this is a wrong usage
        .then(res => res.json())
        .then(data => setResponse(data))
        .catch(err => setError(err));
    };



    

    return {response, error, handleSubmit};
}
 
export default useCreate;