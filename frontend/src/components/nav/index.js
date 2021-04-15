import React from 'react'
import { NavFrame, NavFrameInner, LogoFrame, TextLink, NavText } from './styles/nav'

export default function Nav({children, ...restProps}){

    return <NavFrame {...restProps}>{children}</NavFrame>
}

Nav.NavFrameInner = function NavNavFrameInner({children, ...restProps}){
    return <NavFrameInner {...restProps}>{children}</NavFrameInner>
}

Nav.LogoFrame = function NavLogoFrame({children, ...restProps}){
    return <LogoFrame {...restProps}>{children}</LogoFrame>
}

Nav.TextLink = function NavTextLink({children, ...restProps}){
    return <TextLink {...restProps}>{children}</TextLink>
}


Nav.NavText = function NavNavText({children, ...restProps}){
    return <NavText {...restProps}>{children}</NavText>
}