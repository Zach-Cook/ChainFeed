import React from 'react'

import { Nav } from '../components';


export default function FooterContainer(){


     // this is for security purposes
     const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

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
                        color='#f8f8f8' 
                        onClick={() => openInNewTab('https://chain.link/')}
                        textDecoration='underline'
                        cursor='pointer'
                        >Powered by ChainLink</Nav.NavText>

                    
                </Nav.NavFrameInner>
            </Nav>
        </>
    )
}