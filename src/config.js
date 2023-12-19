import {config} from "dotenv"

config()

export const PORT=process.env.PORT

export const DB_USER=process.env.DB_USER
export const DB_PASS=process.env.DG_PASS
export const DB_HOST=process.env.DG_HOST
export const DB_DATABASE=process.env.DG_DATABASE
export const DB_PORT=process.env.DB_PORT