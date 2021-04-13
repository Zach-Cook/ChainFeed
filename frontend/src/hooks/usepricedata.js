import { useState, useEffect} from 'react'
import BigNumber from 'bignumber.js'

import getPrice  from '../api/getprice';


// BEWARE WET CODE IN THIS
// WILL REFACTOR LATER



export default function usePriceData(usdPairs, type){

    const [ price, setPrice] = useState(null)


    useEffect(()=>{

        let priceArr = []

        switch(type){

            case "USD":
                // loops over the json file and passes the contract address to the function
                // function returns promise of price
                for(let i = 0; i < usdPairs.length; i++){
                    getPrice(usdPairs[i].contractAddress).price.then(resp => {

                        
                        let adjustedPrice = new BigNumber(resp).shiftedBy(-8)
                        const price = adjustedPrice.toString()
                        priceArr.push(price)
                        usdPairs[i].price = price
                        if (priceArr.length === usdPairs.length){
                            setPrice(usdPairs)
                        }
                    })
                    
                }
                break
            
            case "ETH":
                for(let i = 0; i < usdPairs.length; i++){
                    getPrice(usdPairs[i].contractAddress).price.then(resp => {

                        
                        let adjustedPrice = new BigNumber(resp).shiftedBy(-8)
                        const price = adjustedPrice.toString()
                        priceArr.push(price)
                        usdPairs[i].price = price
                        if (priceArr.length === usdPairs.length){
                            setPrice(usdPairs)
                        }
                    })
                    
                }
                break

            default:
                return null

        }
        
     


    }, [])

    return price
}
