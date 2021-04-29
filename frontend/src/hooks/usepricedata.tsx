import { useState, useEffect, SetStateAction} from 'react'
import BigNumber from 'bignumber.js'

import getPrice  from '../api/getprice';



interface pairsProps {
    [index: number]: {id: string | null; pair: string | null; contractAddress: string; iconPath: string | null; price: string; }
    length: number;
    setPriceData: React.SetStateAction<pairsProps[] | null>
}


export default function usePriceData(usdPairs: pairsProps, type: string) : {
        priceData: pairsProps[] | null; 
        isLoaded: boolean;
    } {

    const [ priceData, setPriceData] = useState <pairsProps[] | null | SetStateAction<any>>(null)
    const [ isLoaded, setIsLoaded ] = useState (false)

    useEffect(()=>{

        let priceArr = []

        switch(type){

            case "USD":
                // loops over the json file and passes the contract address to the function
                // function returns promise of price
                for(let i = 0; i < usdPairs.length; i++){
                    getPrice(usdPairs[i].contractAddress).price
                    .then(resp => {

                        
                        let adjustedPrice = new BigNumber(resp).shiftedBy(-8)
                        const price = adjustedPrice.toFixed(2)
                        priceArr.push(price)

                        usdPairs[i].price = price

                        if (priceArr.length === usdPairs.length){
                            setPriceData(usdPairs)
                            setIsLoaded(true)
                        }
                    })
                    
                }
                
                break

            default:
                break

        }
        
     
        return ()=> {
            setPriceData(null)
            setIsLoaded(false)
        }

    }, [])

    return { priceData, isLoaded }
}
