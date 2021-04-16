import styled from 'styled-components';

export const CardFrame = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 20px;

    // overflow: scroll;

    @media screen and (min-width: 1280px){
        margin-bottom: 50px;

    }
    
    @media screen and (min-width: 1920px){
        margin-bottom: 100px;
        width: 70%;

    }
`;

export const PairType = styled.h3`

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



export const CardGrid = styled.div`

    display: flex;
    flex-direction: column;
    
    
    min-height: auto;
    

    @media screen and (min-width: 1280px){
        
        display: ${props => props.isLoaded ? 'grid' : 'flex'};
        grid-template-columns: 90%;
        width: 100%;
        // grid-gap: 5%;
        grid-row-gap: 35px;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        min-width: 0px;
    }
`

export const CardItem = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    border-color: rgb(231, 232, 234);
    background: #FFFFFF;
    


    @media screen and (min-width: 1280px){
        width: 90%;
        margin: 0;
        

    }
    
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
    font-weight: 100;
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
    
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #494F55;

`
