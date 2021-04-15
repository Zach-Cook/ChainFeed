import React from 'react'

import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import FooterContainer from '../containers/footer';


export default function About(){

    

    return (
            
            <>
                <HeaderContainer toPage='Home'/>
                <MainContainer>
                   <h1>test</h1>
                </MainContainer>
                <FooterContainer/>
            </>
    )
}