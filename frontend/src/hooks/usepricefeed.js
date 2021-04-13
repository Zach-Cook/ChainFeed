import { useState, useEffect} from 'react'


import getPriceFeed, { getPrice } from '../api/pricefeed';

export default function usePriceFeed(){

    const [ feed, setFeed] = useState(null)
    const [ timeStamp, setTimeStamp ] = useState(null)

    useEffect(()=>{

        getPrice().price.then(resp => setFeed(resp))
        getPrice().timeStamp.then(resp => setTimeStamp(resp))
    }, [])

    console.log(feed)
    console.log(timeStamp)

    return { feed, timeStamp }
}