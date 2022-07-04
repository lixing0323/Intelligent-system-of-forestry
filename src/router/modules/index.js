import { cityRouter } from './city'
import { countryRouter } from './country'
import dataRouter from './data'

const asyncRoutes = [
  cityRouter,
  countryRouter,
  dataRouter
]

export default asyncRoutes
