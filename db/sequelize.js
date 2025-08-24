import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
import dbconfig from './config.cjs'
const dbconf = dbconfig['development']

const sequelize = new Sequelize(dbconf)

export default sequelize