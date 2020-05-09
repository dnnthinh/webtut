import React, {useRef} from 'react'
import {
    useHistory,
    useLocation
} from "react-router-dom";

import styled from 'styled-components'

export default (props) => {
    let textRef = useRef(null);
    let history = useHistory();
    let location = useLocation();
    let handleSubmit = (event) => {
        event.preventDefault();

        let { from } = location.state || { from: { pathname: "/dashboard" } };
        if(textRef.current.value && textRef.current.value !== '') {
            props.login({ email: textRef.current.value })
            history.replace(from);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label>Email</Label>
            <Text type="text" ref={textRef}/>
            <Button type="submit">Submit</Button>
        </Form>
    )

}

const Form = styled.form`
    max-width: 500px;
    margin: 0 auto;
`

const Label = styled.label`
    line-height: 1.5rem;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 1.5rem;
    font-weight: 200;
`

const Text = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
`

const Button = styled.button`
    background: #ec5;
    color: white;
    width: 100%;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
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
