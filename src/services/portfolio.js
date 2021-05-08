import { client } from './AxiosConfig'
import { PORTFOLIO_ENDPOINTS } from "../constants/EndPoints_API";
import axios from "axios";

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
        console.log(err.response.data.message)
        return err.response.data
    })
}
const retrivePortFolio = id => {
    return axios.get(PORTFOLIO_ENDPOINTS.GET_RETRIVE`/${id}`).then(res => {
        return res.data
    }).catch(err => {
        return err.response.data
    })
}

export const Portfolio = {
    creatportfolio: creatportfolio,
    getListPortFolio: getListPortFolio
}