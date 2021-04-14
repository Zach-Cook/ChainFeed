import React from 'react'
import { NavFrame, NavFrameInner, LogoFrame, NavText } from './styles/nav'

export default function Nav({children, ...restProps}){

    return <NavFrame {...restProps}>{children}</NavFrame>
}

Nav.NavFrameInner = function NavNavFrameInner({children, ...restProps}){
    return <NavFrameInner {...restProps}>{children}</NavFrameInner>
}

Nav.LogoFrame = function NavLogoFrame({children, ...restProps}){
    return <LogoFrame {...restProps}>{children}</LogoFrame>
}

Nav.NavText = function NavNavText({children, ...restProps}){
    return <NavText {...restProps}>{children}</NavText>
}