import React from 'react'
import usePriceFeed from './hooks/usepricefeed'




export default function App() {

  const feed = usePriceFeed()

  
  if (feed){
    return (
      <div>

        <p>Price: {feed.feed}</p>
        <p>Price: {feed.timeStamp}</p>
      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
  
}
