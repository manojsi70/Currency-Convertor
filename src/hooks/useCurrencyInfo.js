import {useEffect, useState} from "react"
import axios from "axios"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    const fetchCurrencyInfo = async () => {
        axios.get(`https://latest.currency-api.pages.dev/v1/currencies/inr.json`)
        .then((res) => setData(res.data.inr))
        
        // .then((res) => setData(res[currency]))
        // console.log(data);
    }

    useEffect(() => {
        fetchCurrencyInfo()
    }, [currency])
    console.log("snajfkhgdkgjfh",data);
    return data
}

export default useCurrencyInfo;