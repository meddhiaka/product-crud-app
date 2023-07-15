import asyncHandler from 'express-async-handler'
import ProductModel from '../model/product_model.js'

export const getProducts = asyncHandler(async function(request, response) {
    try {
        const res = await ProductModel.find()
        response.status(200).json({ res })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
})

export const getProduct = asyncHandler(async function(request, response) {
    try {
        const { productName } = request.params
        const res = await ProductModel.findOne({ productName: productName })

        if(!res)
            return response.status(404).json({ message: "Product not found :("})
        
        response.status(200).json({ res })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
})

export const postProduct = asyncHandler(async function(request, response) {
    try {
        const { productName, productPrice, quantity} = request.body
        const newProduct = new ProductModel({ productName, productPrice, quantity })
        await newProduct.save()
        response.status(201).json({ message: "new product added", newProduct})
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
})

export const editProduct = asyncHandler(async function(request, response) {
    try {
        const { productName, productPrice, quantity} = request.body
        const productToUpdate = await ProductModel.findOneAndUpdate(
            {
                productName: productName
            },
            {
                productName: productName,
                productPrice: productPrice,
                quantity: quantity
            },
            {
                new: true
            }
        )

        if(!productToUpdate)
            return response.status(404).json({ message: "Product not found to update at least ... :("})
        
        response.status(200).json({ message: "product updated", productToUpdate})
    } 
    catch (error) {
    }
})

export const deleteProduct = asyncHandler(async function(request, response) {
    try {
        const { productName } = request.params
        const productToDelete = await ProductModel.findOneAndDelete({ productName: productName })
        if(!productToDelete)
            return response.status(404).json({ message: "Product not found to delete ... :("})
        response.status(204).json({ message: "product updated", productToDelete})
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
})