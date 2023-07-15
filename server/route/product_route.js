import express from 'express'
import { getProducts, getProduct, postProduct, editProduct, deleteProduct } from '../controller/product_controller.js'

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:productName', getProduct)
router.post('/products', postProduct)
router.put('/products/:productName', editProduct)
router.delete('/products/:productName', deleteProduct)

export default router