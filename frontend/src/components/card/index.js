import React from 'react'

import { CardFrame, PairType, Horizontal, CardGrid, CardItem, CardItemInner, 
    ItemInnerTop, ItemLogo, ItemPairTitle, ItemInnerBottom, ItemInnerPrice } from './styles/card';

export default function Card({children, ...restProps}){

    return <CardFrame {...restProps}>{children}</CardFrame>
}

Card.PairType = function CardPairType({children, ...restProps}){
    return <PairType {...restProps}>{children}</PairType>
}

Card.Horizontal = function CardHorizontal({children, ...restProps}){
    return <Horizontal {...restProps}>{children}</Horizontal>
}

Card.CardGrid = function CardCardGrid({children, ...restProps}){
    return <CardGrid {...restProps}>{children}</CardGrid>
}


Card.CardItem = function CardCardItem({children, ...restProps}){
    return <CardItem {...restProps}>{children}</CardItem>
}

Card.CardItemInner = function CardCardItemInner({children, ...restProps}){
    return <CardItemInner {...restProps}>{children}</CardItemInner>
}


Card.ItemInnerTop = function CardItemInnerTop({children, ...restProps}){
    return <ItemInnerTop {...restProps}>{children}</ItemInnerTop>
}

Card.ItemLogo = function CardItemLogo({children, ...restProps}){
    return <ItemLogo {...restProps}>{children}</ItemLogo>
}


Card.ItemPairTitle = function CardItemPairTitle({children, ...restProps}){
    return <ItemPairTitle {...restProps}>{children}</ItemPairTitle>
}

Card.ItemInnerBottom = function CardItemInnerBottom({children, ...restProps}){
    return <ItemInnerBottom {...restProps}>{children}</ItemInnerBottom>
}

Card.ItemInnerPrice = function CardItemInnerPrice({children, ...restProps}){
    return <ItemInnerPrice {...restProps}>{children}</ItemInnerPrice>
}
