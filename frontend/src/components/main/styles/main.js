import styled from 'styled-components'

export const MainFrame = styled.main`

    background: #0C162C;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    

    @media screen and (min-width: 1280px){
        min-height: 1000px;
    }
`;

export const MainText = styled.h4`
    
    color: #FFFFFF;
    font-size: 32px;
    margin-bottom: 0;
`;