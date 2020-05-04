import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import MainPage from '../MainPage'

export default class App extends Component {
    state = {
        todos: [
            {id:1, title: "Dinner with family", isCompleted: true, isInTrash: false},
            {id:2, title: "Do exercies", isCompleted: false, isInTrash: false},
            {id:3, title: "Reading books", isCompleted: false, isInTrash: false}
        ]
    }

    render() {
        return (
            <AppWrapper>
                <Navbar />
                <MainPage todos={this.state.todos} />
            </AppWrapper>
        )
    }
}

const AppWrapper = styled.div`
    width: min(960px, 100%);
    margin: 0 auto;
`;
