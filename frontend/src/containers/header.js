import React from 'react';
import { useHistory } from 'react-router-dom'


import { Nav } from '../components';
import { ROUTES } from '../services/config'
import CoverImage from '../images/covercrop.png'

export default function HeaderContainer(props){

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
            <Nav>
                <Nav.NavFrameInner>
                    <Nav.LogoFrame>
                        <Nav.Logo src={CoverImage}/>
                    </Nav.LogoFrame>
                    <Nav.NavText onClick={switchPage} cursor='pointer'>{props.toPage}</Nav.NavText>
                </Nav.NavFrameInner>
            </Nav>

        </>
    )
}