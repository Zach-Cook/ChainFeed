import React from 'react'
import usePriceData from './hooks/usepricedata'

import usdPairs from './data/usdpairs.json'
import ethPairs from './data/ethpairs.json'

export default function App() {

  const usdPriceData = usePriceData(usdPairs, 'USD')
  // const ethPriceData = usePriceData(ethPairs, 'ETH')




  if (usdPriceData){
    return (
      <div>
        
        {
          usdPriceData ?
            usdPriceData.map((price)=>(
                <div key={price.id}>
                  <p>{`$${price.pair}`}</p>
                  <p>{`$${price.price}`}</p>
                </div>
              ))
            :
            null
        }

      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
  
}
