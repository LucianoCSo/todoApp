import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../templat/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = "http://localhost:3331/api/todos"

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMaskAsPeding = this.handleMaskAsPeding.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp =>
                this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone() {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh())
    }

    handleMaskAsPeding() {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastero'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />

                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMaskAsPeding={this.handleMaskAsPeding}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}
