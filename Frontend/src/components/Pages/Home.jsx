import React from 'react'
import Card from './Card'
import Example from './Animate'
import { DragCards } from './AnimatedCards'
import Promo from './Promo'
import TermsAndPolicies from './TermsAndPolicies'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import CTA from './CTA'
function Home() {
    return (
        <>
            <Promo />
            <CTA/>
            <Example />
            <DragCards />
            <Card />
            {/* <Testimonials/> */}
            <FAQ/>
            <TermsAndPolicies/>
        </>
    )
}

export default Home