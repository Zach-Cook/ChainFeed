import React from 'react'
import { openInNewTab } from '../helpers/openinnewtab';
import { Footer, NavFrameInner, LogoFrame, NavText } from '../components/nav'


interface footerProps {

}

export const FooterContainer: React.FC<footerProps> = ({}) => {
        return (
        <>
            <Footer>
                <NavFrameInner>
                    <LogoFrame>
                        <NavText color='#f8f8f8'>ChainFeed</NavText>
                    </LogoFrame>
                    <LogoFrame>

                    </LogoFrame>
 
                    <NavText 
                        fontSize='24px'
                        mobileFontSize='14px' 
                        color='#f8f8f8' 
                        onClick={() => openInNewTab('https://chain.link/')}
                        textDecoration='underline'
                        cursor='pointer'
                    >
                        Powered by Chainlink
                    </NavText>

                    
                </NavFrameInner>
            </Footer>
        </>);
}