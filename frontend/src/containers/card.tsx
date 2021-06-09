import React from 'react';
import usePriceData from '../hooks/usepricedata';
import { usdPairs } from '../data/usdpairs';

import { Card, PairType, Horizontal, CardGrid, CardItem, CardItemInner, 
    ItemInnerTop, ItemLogo, ItemPairTitle, ItemInnerBottom, ItemInnerPrice } from '../components/card';


interface cardProps {
    children: JSX.Element;

}

export const CardContainer: React.FC<cardProps> = ({children}) => {
    const { priceData, isLoaded} = usePriceData (usdPairs, 'USD')

    if ( priceData && isLoaded){

        return (
            <>
                <Card>
                    <PairType>USD Pairs</PairType>
                    <Horizontal/>
                    <CardGrid isLoaded={isLoaded}>
                        {
                            priceData ?
                            priceData.map((price: any)=> (
    
                                <CardItem key={price.id}>
                                    <ItemInnerTop>
                                        <ItemLogo src={price.iconPath} alt="Cant"/>
                                        <ItemPairTitle>{price.pair}</ItemPairTitle>
                                    </ItemInnerTop>
                                    <ItemInnerBottom>
                                        <ItemInnerPrice>${price.price}</ItemInnerPrice>
                                    </ItemInnerBottom>
                                </CardItem>
                                
                            ))
                                :
                            null
       
                        }
    
                        
                    </CardGrid>
                </Card>
            </>
        )
    } else {
        return (
            <>
                { children }
            </>
        )
    }
}