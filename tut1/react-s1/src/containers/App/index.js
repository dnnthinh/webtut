import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import MainPage from '../MainPage'

export default class App extends Component {
    state = {
        todos: []
    }

    render() {
        return (
            <AppWrapper>
                <Navbar />
                <MainPage />
            </AppWrapper>
        )
    }
}

const AppWrapper = styled.div`
    width: min(960px, 100%);
    margin: 0 auto;
`;
