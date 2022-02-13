import { combineReducers, createStore, applyMiddleware } from 'redux';
import competitionsReducer from './competitionsReducer';
import teamsReducer from './teamReducer';
import selectedTeamReducer from './selectedTeamReducer';
import selectedLeagueReducer from './selectedLeagueReducer';
import searchReducer from './searchReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

let reducers = combineReducers({
    competitionPage: competitionsReducer,
    teamsPage: teamsReducer,
    currentTeamPage: selectedTeamReducer,
    currentLeaguePage: selectedLeagueReducer,
    searchClass: searchReducer,
});


let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;