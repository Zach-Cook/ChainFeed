import React from 'react';
import { useHistory } from 'react-router-dom'

import { ROUTES } from '../services/config'
import CoverImage from '../images/covercrop.png'
import { Header, NavFrameInner, LogoFrame, Logo, NavText } from '../components/nav'


interface headerProps {
    toPage: string;
}

export const HeaderContainer: React.FC<headerProps> = (props) => {
    
    const history = useHistory()

    const switchPage = () => {

        switch(props.toPage){
            case "Home":
                history.push(ROUTES.HOME)
                break
            
            case "About":
                history.push(ROUTES.ABOUT)
                break
            default:
                return null
        }
    }


        return (
            <>
                <Header>
                    <NavFrameInner>
                        <LogoFrame>
                            <Logo src={CoverImage}/>
                        </LogoFrame>
                        <NavText onClick={switchPage} cursor='pointer'>{props.toPage}</NavText>
                    </NavFrameInner>
                </Header>

            </>
        );
}