import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const getData = async () => {
            try {
                const result = (await axios.get(url)).data;
                setData(result)
                setLoading(false);
            }
            catch (error) {
                setError(true)
                console.log(error)
            }
        }
        getData();
    }, [url])
    return { data, loading, error }
}

export default useFetch