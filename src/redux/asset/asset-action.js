import { CoinList } from '../../services/coinCap'
import { AssetActionTypes } from './asset-types'

const getListCoinsSuccess = assets => ({
    type: AssetActionTypes.GET_LIST_COINS_SUCCESS,
    payload: assets,
})

const getListCoinsError = err => ({
    type: AssetActionTypes.GET_LIST_COINS_ERROR,
    payload: err,
})


const getListCoins = () => {
    return dispatch => {
       return  CoinList.GetAsset().then(res => {
            dispatch(getListCoinsSuccess(res))
        }).then(err => {
            dispatch(getListCoinsError(err))
        })
    }
}

export const AssetAction = {
    getListCoins: getListCoins,
}