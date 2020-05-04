import React from 'react'
import styled from 'styled-components'

export default (props) => {
    return (
        <Banner {...props}>
            <BannerTilte>
                {props.children}
            </BannerTilte>
        </Banner>
    )
}

const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 1.2rem;
    background: ${props => props.primary ? '#FCB500' : '#FF6D6D'};
    width: min(90%, 350px);
    height: 50px;
    opacity: 0.7;
`

const BannerTilte = styled.p`
    font-size: 1.5rem;
`
