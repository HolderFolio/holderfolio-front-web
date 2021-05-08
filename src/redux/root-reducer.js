import { combineReducers } from 'redux'
import assetReducer from './asset/asset-reducer'
import authReducer from './auth/auth-reducer'
import exchangeReducer from './exchange/exchange-reducer'
import portfolioReducer from './portfolio/portfolio-reducer'
import systemReducer from './system/system-reducer'

export default combineReducers({
  asset: assetReducer,
  auth: authReducer,
  exchange: exchangeReducer,
  portfolio: portfolioReducer,
  system: systemReducer,
})