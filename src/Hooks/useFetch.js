import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        //it is GET method so no needed reqsuet option   
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setData(data);
            setIsPending(false);
        })
        .catch(err => setError(err.message))
    }, []);
    
    return {data, isPending, error};
}
 
export default useFetch;