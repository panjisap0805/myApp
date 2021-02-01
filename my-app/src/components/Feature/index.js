import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sauced topped with 24carats gold dust</p>
            <FeatureButton>
                Order Now
            </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
