import express from 'express'
import { getOneRequest, getRequests, createRequest } from '#controllers/request_controller'

const router = express.Router()

router.use(express.json())
router.get('/', getRequests)
router.get('/:id', getOneRequest)
router.post('/', createRequest)

export default router