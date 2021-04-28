import React from 'react';

import { AboutFrame, TitleFrame, Title, Horizontal, ContentFrame, ContentTitle, ParagraphText, LearnMoreFrame } from './styles/about';

interface Props {
  
    children?: any;
    
}

interface ParagraphProps {
    children?: any;
    textDecoration?: string;
    marginLeft?: string;
    cursor?: string;
    onClick? : ()=> void;
}

export const About: React.FC<Props> = ({children, ...restProps}) => {
    return <AboutFrame {...restProps}>{children}</AboutFrame>
}

export const AboutTitleFrame: React.FC<Props> = ({children, ...restProps}) => {
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

export const AboutTitle: React.FC<Props> = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}

export const AboutHorizontal: React.FC<Props> = ({children, ...restProps})=> {
    return <Horizontal {...restProps}>{children}</Horizontal>
}

export const AboutContentFrame: React.FC<Props> = ({children, ...restProps}) =>{ 
    return <ContentFrame {...restProps}>{children}</ContentFrame>
}

export const AboutContentTitle: React.FC<Props> = ({children, ...restProps}) =>{
    return <ContentTitle {...restProps}>{children}</ContentTitle>
}

export const AboutParagraphText: React.FC<ParagraphProps> = (props) => {

    return <ParagraphText 
                textDecoration={props.textDecoration}
                onClick={props.onClick}
                marginLeft={props.marginLeft}
                cursor={props.cursor} 
            >
                {props.children}
            </ParagraphText>
}

export const AboutLearnMoreFrame: React.FC<Props> = ({children, ...restProps}) => {
    return <LearnMoreFrame {...restProps}>{children}</LearnMoreFrame>
}

