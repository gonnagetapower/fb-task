const SET_COMPETITION = "SET_COMPETITION";
const CHOISE_COMPETTITON = 'CHOISE_COMPETTITON';
const CANCEL_COMPETTITION = 'CANCEL_COMPETTITION';

let initialState = {
    competitions: [],
    checked: false,
}


const competitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPETITION:
            {
                return { ...state, competitions: action.competitions }
            }
        case CHOISE_COMPETTITON: {
            return {
                competitions: state.competitions.map( com => {
                    if ( com.id === action.id) {
                        return {
                            ...com,
                            checked: true
                        }
                    } return com;
                })
            }
        }
        case CANCEL_COMPETTITION: {
            return {
                competitions: state.competitions.map( com => {
                    if ( com.id === action.id) {
                        return {
                            ...com,
                            checked: false
                        }
                    } return com;
                })
            }
        }
        default:
            return state;
    }
}

export const setCompetition = (competitions) => ({ type: SET_COMPETITION, competitions });
export const choiseCompettition = (id) => ({ type: CHOISE_COMPETTITON, id });
export const cancelCompettition = (id) => ({ type: CANCEL_COMPETTITION, id })

export default competitionsReducer;