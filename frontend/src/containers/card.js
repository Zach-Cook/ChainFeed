import React from 'react';
import usePriceData from '../hooks/usepricedata';
import { usdPairs } from '../data/usdpairs.js';

import { Card } from '../components';


export default function CardContainer({children, ...restProps}){

    const { priceData, isLoaded} = usePriceData(usdPairs, 'USD')



    if ( priceData && isLoaded){
        return (
            <>
                <Card>
                    <Card.PairType>USD Pairs</Card.PairType>
                    <Card.Horizontal/>
                    <Card.CardGrid isLoaded={isLoaded}>
                        {
                            priceData ?
                            priceData.map((price)=> (
    
                                <Card.CardItem key={price.id}>
                                    <Card.ItemInnerTop>
                                        <Card.ItemLogo src={price.iconPath} alt="Cant"/>
                                        <Card.ItemPairTitle>{price.pair}</Card.ItemPairTitle>
                                    </Card.ItemInnerTop>
                                    <Card.ItemInnerBottom>
                                        <Card.ItemInnerPrice>${price.price}</Card.ItemInnerPrice>
                                    </Card.ItemInnerBottom>
                                </Card.CardItem>
                                
                            ))
                                :
                            null
       
                        }
    
                        
                    </Card.CardGrid>
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