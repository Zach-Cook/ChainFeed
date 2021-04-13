import React from 'react'
import usePriceFeed from './hooks/usepricefeed'

import usdPairs from './data/usdpairs.json'


export default function App() {

  const priceData = usePriceFeed(usdPairs)

  
  console.log(priceData)

  if (priceData){
    return (
      <div>
        
        {
          priceData.map((price)=>(
            <p>${price}</p>
            
            ))
        }
        
        
      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
  
}
