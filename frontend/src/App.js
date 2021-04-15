import React from 'react'



import HeaderContainer from './containers/header';
import MainContainer from './containers/main';
import CardContainer from './containers/card';
import FooterContainer from './containers/footer';

export default function App() {

  return (
      <>
        <HeaderContainer/>
        <MainContainer>
          <CardContainer/>
        </MainContainer>
        <FooterContainer/>
      </>
    );
  
}
