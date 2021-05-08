import { Portfolio } from '../../services/portfolio'
import { PortFolioActionTypes } from './portfolio-types'

const createPortFolioSuccess = portfolio => ({
    type: PortFolioActionTypes.PORTFOLIO_CREATE_SUCCESS,
    payload: portfolio,
})
const RetrivePortFolioSuccess = portfolio => ({
    type: PortFolioActionTypes.PORTFOLIO_RETRIVE,
    payload: portfolio,
})
const createPortFolioError = err => ({
    type: PortFolioActionTypes.PORTFOLIO_CREATE_ERROR,
    payload: err,
})

const createPortFolioAction = name => {
    return dispatch => {
       return  Portfolio.getListPortFolio().then(res => {
            dispatch(createPortFolioSuccess(res))
        }).then(err => {
            dispatch(createPortFolioError(err))
        })
    }
}

const getListPortFolioAction = () => {
    return dispatch => {
       return  Portfolio.getListPortFolio().then(res => {
            dispatch(createPortFolioSuccess(res))
        }).then(err => {
            dispatch(createPortFolioError(err))
        })
    }
}

const retrivePortFolioAction = id => {
    return dispatch => {
       return  Portfolio.retrivePortFolio(id).then(res => {
            dispatch(RetrivePortFolioSuccess(res))
        }).then(err => {
            dispatch(createPortFolioError(err))
        })
    }
}

export const PortfolioAction = {
    createPortFolioAction: createPortFolioAction,
    getListPortFolioAction:  getListPortFolioAction,
    retrivePortFolioAction: retrivePortFolioAction,
}