import { combineReducers } from 'redux';
import auth from './auth'
import errors from "./error"
import nutrition from './nutrition'

export default combineReducers({
    auth,
    errors,
    nutrition
});