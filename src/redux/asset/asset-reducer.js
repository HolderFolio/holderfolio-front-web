import { AssetActionTypes } from './asset-types'

const INITIAL_STATE = {
  coinList: ''
};

const AssetReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case AssetActionTypes.GET_LIST_COINS_SUCCESS:
        return {
            ...state,
            coinList: action.payload
        }
    default:
        return state 
}
}

export default AssetReducer;