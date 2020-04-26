import React from 'react'
import IconButton from '../templat/iconButton'

export default props => {

    const renderRors = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButton>

                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.handleMaskAsPeding(todo)}></IconButton>

                    <IconButton style="danger" icon="trash-o" 
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <th>Descrição</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {renderRors()}
            </tbody>
        </table>
    )
}