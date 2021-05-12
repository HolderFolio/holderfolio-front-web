import { API_COINCAP } from "../constants/EndPoints_API";
import { client } from './AxiosConfig'

const GetAsset = () => {
    return client().get(API_COINCAP).then(res => {
        return res
    })
}


export const CoinList = {
    GetAsset: GetAsset,
}