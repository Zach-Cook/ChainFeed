import styled from 'styled-components';


export const AboutFrame = styled.div`

    margin: 20px 0;

    width: 90%;
    
    display: flex;
    flex-direction: column;

    // background: #F8F8F8

    @media screen and (min-width: 1280px){
        width: 70%; 
    }
`;

export const TitleFrame = styled.div`

    width: 100%;

`;

export const Title = styled.h3`

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 200;
    font-size: 36px;
    color: #FFFFFF;
    margin-bottom: 0;
`;

export const Horizontal = styled.div`
    border-radius: 2px;
    margin-bottom: 25px;
    background: #f8f8f8;
    
    height: 2px;
    

    @media screen and (min-width: 1280px){
        width: 25%;
    }
`;

export const ContentFrame = styled.div`


    display: flex;
    flex-direction: column;

`;

export const ContentTitle = styled.h6`
    margin: 5px 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 200;
    font-size: 28px;
    color: #FFFFFF;

`;

export const ParagraphText = styled.p`
    
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 1.8;

    text-decoration: ${props => props.textDecoration ? props.textDecoration : null};
    
    cursor: ${props => props.cursor ? props.cursor : null};
    
    @media screen and (min-width: 1280px){
        font-size: 22px;
        margin-left: ${props => props.marginLeft ? props.marginLeft : null};
    }


`;


export const LearnMoreFrame = styled.div`

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1280px){
        flex-direction: row;
    }
`;