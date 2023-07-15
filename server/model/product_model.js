import mongoose, { Schema } from "mongoose"
const { schema } = mongoose

const productSchema = new Schema({
    productName:{
                    type: String,
                    unique: true
                 },
    productPrice: Number,
    quantity: Number
})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel