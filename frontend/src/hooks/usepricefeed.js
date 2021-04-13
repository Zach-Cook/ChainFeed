import { useState, useEffect} from 'react'
import BigNumber from 'bignumber.js'

import getPrice  from '../api/pricefeed';

export default function usePriceFeed(usdPairs){

    const [ price, setPrice] = useState([])


    useEffect(()=>{

        let priceArr = []
        for(let i = 0; i < usdPairs.length; i++){
            getPrice(usdPairs[i].contractAddress).price.then(resp => {

                let adjustedPrice = new BigNumber(resp).shiftedBy(-8)
                const price = adjustedPrice.toString()
                priceArr.push(price)
                if (priceArr.length === usdPairs.length){
                    setPrice(priceArr)
                }
            })
            
        }
     


    }, [])

    return price
}