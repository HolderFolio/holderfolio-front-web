import { PortFolioActionTypes } from './portfolio-types'

const INITIAL_STATE = {
    postFolioList: null,
    currentFolio: null,
    error: {}
  };

const PortFolioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PortFolioActionTypes.PORTFOLIO_CREATE_SUCCESS:
            return {
                ...state,
                postFolioList: action.payload
            }
        case PortFolioActionTypes.PORTFOLIO_RETRIVE :
            return {
                ...state,
                currentFolio: action.payload
            }
        case PortFolioActionTypes.PORTFOLIO_CREATE_ERROR :
            return {
                ...state,
                error: {portfolio: action.payload}
            }
        default:
            return state 
    }
}

export default PortFolioReducer;