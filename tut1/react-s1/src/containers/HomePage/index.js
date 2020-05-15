import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GoPin} from 'react-icons/go'

export default (props) => {
    return (
        <Hero>
            <GoPinStyled />
            <GoPinStyled right='true'/>
            <h1>Note it!</h1>
            <h2>Do it!</h2>
            {!props.isLoggedIn && <Link to='/login'><Button>Log in</Button></Link>}
        </Hero>
    )
}

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(90%, 760px);
    height: 400px;
    color: gray;
    font-size: 2.5rem;
    background: #e7e7e7;
    text-transform: capitalize;
    margin: 3rem auto;
    text-align: center;
    opacity: 0.75;
    box-shadow: 5px 5px 4px #ec5;
    transform: rotate(3deg);
`

const GoPinStyled = styled(GoPin)`
    position: absolute;
    top: -20px;
    left: ${props => props.right ? "98%" : "-20px"};
    color: red;
    transform: ${props => props.right ? "" : "rotate(-90deg)"};
`

const Button = styled.button`
    background: #ec5;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    transform: rotate(-3deg);
    &:hover {
        background: #ec2;
    };
    &:active {
        transition: 0.3s all;
        transform: translateY(2px);
        border: 1px solid transparent;
        opacity: 0.8;
    };
    &:focus {
        outline: none;
    }
`