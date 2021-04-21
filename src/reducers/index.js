// Import all reducers here and assign them to combineReducers({ })
import loggedReducer from "./isLogged"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
  logged: loggedReducer
})

export default rootReducer