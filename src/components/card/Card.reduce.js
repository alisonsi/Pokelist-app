import React, { useReducer } from 'react';

// definir o estado inicial
const initialState = { animated: false };

// definir as ações possíveis
const ACTIONS = {
    ANIMATED: 'animated',
};

// definir o reducer
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ANIMATED:
            return { animated: action.payload };
        default:
            return initialState;
    }
}
export default reducer;