import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom';



export const Header = styled.header`

    background: #f8f8f8;
    width: 100%;
    display: flex;
    justify-content: center;

`;

export const Footer = styled.footer`
    background: #34689c;
    width: 100%;
    display: flex;
    justify-content: center;

`

export const NavFrameInner = styled.div`

    width: 90%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    

`;


export const LogoFrame = styled.div`

    margin: 10px 0;
    width: 35%;
    display: flex;
    justify-content: flex-start;
    border-radius: 10px;
    height: 65px;

    @media screen and (min-width: 1280px){
        height: 140px;
        margin:0;
        width: 15%;
        justify-content: center;
        align-items: center;
    }
`;

export const Logo = styled.img`

    width: 100%;

`;



export const TextLink = styled(ReactRouterLink)`

    text-decoration: underline;

`

interface TextProps {
    fontSize?: string;
    mobileFontSize?: string;
    color?: string;
    textDecoration?: string;
    cursor?: string;
    children?: any;
    onClick?: ()=> void;
}


export const Text = styled.h1<TextProps>`

    color: ${props => props.color ? props.color: '#375BD2'};
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2.5px;
    font-size: ${props => props.mobileFontSize ? props.mobileFontSize : '20px'};
    font-weight: 100;
    text-decoration: ${props => props.textDecoration ? props.textDecoration : null};
    cursor: ${props => props.cursor ? props.cursor : null};
    

    @media screen and (min-width: 1280px){
        font-size: ${props => props.fontSize ? props.fontSize : '2rem'};
    }
`

export const NavText: React.FC<TextProps> = (props) => {
        return (
            <Text 
                onClick={props.onClick} 
                color={props.color}
                cursor={props.cursor}
                fontSize={props.fontSize}
                textDecoration={props.textDecoration}
                mobileFontSize={props.mobileFontSize}
            >
                {props.children}
            </Text>
        );
}


