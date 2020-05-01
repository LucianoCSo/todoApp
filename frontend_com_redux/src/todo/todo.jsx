import React from 'react'

import PageHeader from '../templat/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastero'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
