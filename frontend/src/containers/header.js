import React from 'react';

import { Nav } from '../components';


export default function HeaderContainer(){


    return (
        <>
            <Nav>
                <Nav.NavFrameInner>
                    <Nav.LogoFrame>
                        <Nav.NavText>ChainFeed</Nav.NavText>
                    </Nav.LogoFrame>
                    <Nav.NavText>About</Nav.NavText>
                </Nav.NavFrameInner>
            </Nav>

        </>
    )
}