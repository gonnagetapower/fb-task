const SET_COMPETITION = "SET_COMPETITION";


let initialState = {
    competitions: [],
}


const competitionsReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_COMPETITION: {
            return { ...state , competitions: action.competitions }
        }
        default:
            return state;
    }
}

export const setCompetition = (competitions) => ({type: SET_COMPETITION, competitions});
export default competitionsReducer;