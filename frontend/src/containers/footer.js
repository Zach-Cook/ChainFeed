import React from 'react'

import { Nav } from '../components';
import { openInNewTab } from '../helpers/openinnewtab';


export default function FooterContainer(){


     
    return (
        <>

            <Nav background='#34689c'>
                <Nav.NavFrameInner>
                    <Nav.LogoFrame>
                        <Nav.NavText color='#f8f8f8'>ChainFeed</Nav.NavText>
                    </Nav.LogoFrame>
                    <Nav.LogoFrame>

                    </Nav.LogoFrame>
 
                    <Nav.NavText 
                        fontSize='24px'
                        mobileFontSize='14px' 
                        color='#f8f8f8' 
                        onClick={() => openInNewTab('https://chain.link/')}
                        textDecoration='underline'
                        cursor='pointer'
                    >
                        Powered by Chainlink
                    </Nav.NavText>

                    
                </Nav.NavFrameInner>
            </Nav>
        </>
    )
}