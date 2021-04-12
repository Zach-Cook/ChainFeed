import { useState, useEffect} from 'react'


import getPriceFeed from '../api/pricefeed';

export default function usePriceFeed(){

    const [ feed, setFeed] = useState(null)


    useEffect(()=>{

        setFeed(getPriceFeed)


    }, [])


    return { feed }

}