import { useEffect, useState } from "react"

const TheUseFetch = (url) => {
     const[data, setData] = useState([])
     const[fetchError, setFetchError] = useState(null)

     useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal;

        const fetchData = async () => {
              try{
                const response = await fetch(url,{signal})

                if(!response.ok){
                    throw new Error(`Unable to Fetch API. Status: ${response.status}, Type: ${response.type}`);   
                }

                const data = await response.json();

                setData(data)
              }catch(error) {
                setFetchError(error.message)
              }
        }
        fetchData();

        return () => {
            controller.abort()
        }
     },[])
     return [data , fetchError]
}

export default TheUseFetch