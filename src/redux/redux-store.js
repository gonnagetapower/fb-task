import {combineReducers, createStore , applyMiddleware} from 'redux';
import competitionsReducer from './competitionsReducer';
import teamsReducer from './teamReducer';
import selectedTeamReducer from './selectedTeamReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


let reducers = combineReducers({
    competitionPage: competitionsReducer,
    teamsPage: teamsReducer,
    currentTeamPage: selectedTeamReducer,
});


let store = createStore(reducers , composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;