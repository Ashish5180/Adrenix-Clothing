import React from 'react'
import Card from './Card'
import Example from './Animate'
import { DragCards } from './AnimatedCards'
import Promo from './Promo'
import HorizontalScroll from './HorizontalScroll'
function Home() {
    return (
        <>
            <Promo />
            <Example />
            <DragCards />
            <Card />
            <HorizontalScroll />
        </>
    )
}

export default Home