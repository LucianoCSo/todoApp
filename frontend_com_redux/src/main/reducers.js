import { combineReducers } from 'redux'
import todoReducer from '../todo/toduReducers'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer