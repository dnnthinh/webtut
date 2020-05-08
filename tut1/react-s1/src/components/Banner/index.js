import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import {FaTrash} from 'react-icons/fa'

export default (props) => {
    return (
        <Banner {...props}>
            <BannerTilte>
                {props.children}
            </BannerTilte>
            {props.trash && 
            <CustomButton>
                <FaTrash onClick={()=>props.deleteForeverTodo(null)}/>
            </CustomButton>
            }
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
    margin: auto;
`

const CustomButton = styled(Button)`
    margin-right: 4px;
    align-self: center;
    background: transparent;
    color: red;
`