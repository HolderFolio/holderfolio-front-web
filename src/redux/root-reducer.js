import { combineReducers } from 'redux'
import systemReducer from './system/system-reducer'
import authReducer from './auth/auth-reducer'
import portfolioReducer from './portfolio/portfolio-reducer'
import exchangeReducer from './exchange/exchange-reducer'
import assetReducer from './asset/asset-reducer'

export default combineReducers({
  auth: authReducer,
  layout: systemReducer,
  portfolio: portfolioReducer,
  exchange: exchangeReducer,
  asset: assetReducer
})