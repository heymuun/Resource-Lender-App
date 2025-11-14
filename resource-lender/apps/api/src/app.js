import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import listingsRoutes from './routes/listings.js'
import loansRoutes from './routes/loans.js'
import userRoutes from './routes/user.js'

const app = express()
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL ?? 'http://localhost:5173', credentials: true }))
app.use(express.urlencoded({extended: false})); //for the id maybe??

app.use('/auth', authRoutes)
app.use('/listings', listingsRoutes)
app.use('/loans', loansRoutes)
app.use('/users', userRoutes)

app.get('/', (_req, res) => res.json({ status: 'ok' }))

export default app
