import { ExchangeActionTypes } from './exchange-types'

const INITIAL_STATE = {
    postFolioList: null,
    error: {}
  };

const ExchangeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state 
    }
}

export default ExchangeReducer;