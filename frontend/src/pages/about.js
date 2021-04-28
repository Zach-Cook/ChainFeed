import React from 'react'

import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import { AboutContainer } from '../containers/about';
import FooterContainer from '../containers/footer';


export default function About(){

    

    return (
            
            <>
                <HeaderContainer toPage='Home'/>
                <MainContainer>
                    <AboutContainer/>
                </MainContainer>
                <FooterContainer/>
            </>
    )
}