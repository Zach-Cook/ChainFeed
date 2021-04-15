import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom';

export const NavFrame = styled.header`

    background: ${props => props.background ? props.background : '#f8f8f8'};
    // height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;

`;

export const NavFrameInner = styled.div`

    width: 90%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
`;


export const LogoFrame = styled.div`

    margin: 10px 0;
    width: 25%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
        
`;

export const CreditFrame = styled.div`



`;


export const TextLink = styled(ReactRouterLink)`

    text-decoration: underline;

`

export const NavText = styled.h1`

    color: ${props => props.color ? props.color: '#375BD2'};
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2.5px;
    font-size: ${props => props.fontSize ? props.fontSize : null};

    text-decoration: ${props => props.textDecoration ? props.textDecoration : null};
    cursor: ${props => props.cursor ? props.cursor : null};
        
`