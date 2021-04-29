import React from 'react'

import { HeaderContainer } from '../containers/header';
import { MainContainer } from '../containers/main';
import { AboutContainer } from '../containers/about';
import { FooterContainer } from '../containers/footer';


interface aboutProps {
    exact: boolean;
    path: string;
}

export const About: React.FC<aboutProps> = ({}) => {
        return (

            <>
                <HeaderContainer toPage='Home'/>
                <MainContainer>
                    <AboutContainer/>
                </MainContainer>
                <FooterContainer/>
            </>
        );
}