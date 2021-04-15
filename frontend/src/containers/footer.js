import React from 'react'

import { Nav } from '../components';


export default function FooterContainer(){


    return (
        <>

            <Nav>
                <Nav.NavFrameInner>
                    <Nav.LogoFrame>
                        <Nav.NavText>ChainFeed</Nav.NavText>
                    </Nav.LogoFrame>
                    <Nav.LogoFrame>

                    </Nav.LogoFrame>
                    <Nav.NavText fontSize='24px'>Powered by ChainLink</Nav.NavText>
                </Nav.NavFrameInner>
            </Nav>
        </>
    )
}