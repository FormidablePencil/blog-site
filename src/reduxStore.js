import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore