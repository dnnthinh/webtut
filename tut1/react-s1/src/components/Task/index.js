import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import {FaCheck, FaUndo, FaTrash} from 'react-icons/fa'

export default class extends React.Component {
    state = {
        editing: false,
        textTodo: this.props.todo.title,
    }

    handleCheckOrUndo = () => {
        this.props.primary ?
            this.props.setCompleted(this.props.todo.id, true)
            :
            this.props.setCompleted(this.props.todo.id, false);
    }

    handleDelete = () => {
        
        if(this.props.todo.isInTrash) {
            this.props.deleteForeverTodo(this.props.todo.id);
        }
        else {
            this.props.deleteTodo(this.props.todo.id);
        }
    }

    textRef = React.createRef();

    handleDblClickTodoLabel = () => {
        this.setState({editing: true});
    }

    handleChange = () => {
        this.setState({textTodo: this.textRef.current.value});
    }

    handleEdit = () => {
        this.setState({editing: false})
        if(this.textRef.current.value !== this.props.todo.title) {
            this.props.editTodo(this.props.todo.id, this.textRef.current.value);
        }
    }

    handleBlur = (event) => {
        this.handleEdit();
    }

    handleKeyUp = (event) => {
        if(event.which === 27) {
            this.setState({editing: false, textTodo: this.props.todo.title})
        }
        if(event.which === 13) {
            this.handleEdit();
        }
    }

    componentDidUpdate() {
        if(this.state.editing && this.textRef.current) {
            this.textRef.current.focus();
            this.textRef.current.setSelectionRange(
                this.textRef.current.value.length, this.textRef.current.value.length
            );
        }
    }
    render() {
        return (
            <TaskWrapper primary={this.props.primary}>
                {!this.state.editing ? 
                    <TodoLabel
                        onDoubleClick={this.handleDblClickTodoLabel}>
                        {this.props.todo.title}
                    </TodoLabel>
                    :
                    <Todo
                        value={this.state.textTodo} 
                        ref={this.textRef}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        onKeyUp={this.handleKeyUp}
                    />
                }
                
                <CustomButton onClick={this.handleCheckOrUndo}>
                    {this.props.primary ? <FaCheck /> : <FaUndo />}
                </CustomButton>
                <CustomButton warning onClick={this.handleDelete}>
                    <FaTrash />
                </CustomButton>
            </TaskWrapper>
        )
    }
}

const TaskWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    background: #DFDFDF;
    width: min(90%, 350px);
    min-height: 50px;
    opacity: 0.7;
    box-shadow: inset 0px 4px 4px ${props => props.primary ? 'rgba(252, 181, 0, 0.6)' : 'rgba(255, 109, 109, 0.4)'};
`

const Todo = styled.textarea`
    color: #3E0000;
    width: 100%;
    margin: 4px 4px;
    padding: 2px 4px;
    line-height: 2rem;
    border: none;
    background:transparent;
    outline: none;
    border: 1px solid;
`

const TodoLabel = styled.label`
    color: #3E0000;
    width: 100%;
    max-width: 80%;
    margin-right: auto;
    margin-left: 4px;
    padding: 2px 4px;
    line-height: 2rem;
    border: none;
    overflow-wrap: break-word;
`

const CustomButton = styled(Button)`
    margin-right: 4px;
    background: transparent;
    color: ${props => props.warning ? 'red' : 'blue'}
`
