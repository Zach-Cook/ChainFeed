import React from 'react'



import HeaderContainer from './containers/header';
import MainContainer from './containers/main';
import CardContainer from './containers/card';

export default function App() {

  





  if (true){
    return (
      <div>
        <HeaderContainer/>
        <MainContainer>
          <CardContainer/>
        </MainContainer>
        <HeaderContainer/>

      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
  
}
