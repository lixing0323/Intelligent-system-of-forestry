import { cityRouter } from './city'
import { countryRouter } from './country'
import { plotRouter } from './plot'
import dataRouter from './data'

const asyncRoutes = [
  cityRouter,
  countryRouter,
  plotRouter,
  dataRouter
]

export default asyncRoutes
