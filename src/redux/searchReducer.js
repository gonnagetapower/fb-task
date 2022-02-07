const SEARCH = "SEARCH";

if (!localStorage.getItem('prevSearch', '')) {
    localStorage.setItem('prevSearch', '');
}

let initialState = {
    value: ''
}



const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            {
                return {...state, value: action.value }
            }
        default:
            return {...state, value: localStorage.getItem('prevSearch') };
    }
}

export const setValue = (value) => ({ type: SEARCH, value: value });

export default searchReducer;