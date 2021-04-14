import React from 'react';

import { MainFrame, MainText } from './styles/main';

export default function Main({children, ...restProps}){

    return <MainFrame {...restProps}>{children}</MainFrame>
}

Main.MainText = function MainMainText({children, ...restProps}){
    return <MainText {...restProps}>{children}</MainText>
}