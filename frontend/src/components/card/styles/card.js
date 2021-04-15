import styled from 'styled-components';

export const CardFrame = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 20px;

    @media screen and (min-width: 1920px){

        width: 70%;

    }
`;

export const PairType = styled.h3`

    font-family: Bokor;
    font-size: 36px;
    color: #FFFFFF;

`;



export const CardGrid = styled.div`

    display: grid;
    grid-template-columns: 90%;
    width: 100%;
    grid-gap: 5%;
    justify-content: space-between;

    @media screen and (min-width: 1280px){

        grid-template-columns: 20% 20% 20% 20%;

    }
`

export const CardItem = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.25);
    border-radius: 5px;

`

export const CardItemInner = styled.div`

    width: 90%;

    border: 2px solid purple;

`;

export const ItemInnerTop = styled.div`

    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;


    margin: 30px 0;
`;

export const ItemLogo = styled.img`

    width: 40px;
    height: 40px;
    margin: 0;
`;

export const ItemPairTitle = styled.h6`

    margin: 0;
    margin-left: 10px;

    font-family: Bokor;
    font-size: 20px;
    text-align: center;

    font-family: Arial, Helvetica, sans-serif;
    color: #494F55;
    
`;

export const ItemInnerBottom = styled.div`
    
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 30px;

`;

export const ItemInnerPrice = styled.p`
    margin: 0;
    
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #494F55;

`
