import React from 'react';

import { AboutFrame, TitleFrame, Title, Horizontal, ContentFrame, ContentTitle, ParagraphText } from './styles/about';

export default function About({children, ...restProps}){
    return <AboutFrame {...restProps}>{children}</AboutFrame>
}


About.TitleFrame = function AboutTitleFrame({children, ...restProps}){
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

About.Title = function AboutTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

About.Horizontal = function AboutHorizontal({children, ...restProps}){
    return <Horizontal {...restProps}>{children}</Horizontal>
}

About.ContentFrame = function AboutContentFrame({children, ...restProps}){
    return <ContentFrame {...restProps}>{children}</ContentFrame>
}

About.ContentTitle = function AboutContentTitle({children, ...restProps}){
    return <ContentTitle {...restProps}>{children}</ContentTitle>
}

About.ParagraphText = function AboutParagraphText({children, ...restProps}){
    return <ParagraphText {...restProps}>{children}</ParagraphText>
}

