import { client } from './AxiosConfig'
import { PORTFOLIO_ENDPOINTS } from "../constants/EndPoints_API";



const creatportfolio = name => {
    const data = {
        "name": name
    }
    return client().post(PORTFOLIO_ENDPOINTS.POST_CREATE, JSON.stringify(data)).then(res => {
        return res.data
    }).catch(err => {
        return err.response.data
    })
}

const getListPortFolio = () => {
    return client().get(PORTFOLIO_ENDPOINTS.GET_LIST).then(res => {
        return res.data
    }).catch(err => {
        return err.response.data
    })
}

export const Asset = {
    creatportfolio: creatportfolio,
    getListPortFolio: getListPortFolio
}