import { red } from '@mui/material/colors';
import {combineReducers} from 'redux';
import { clientReducer } from './clientReducer';
const reducers = combineReducers({
    allClients:clientReducer,
});
export default reducers;