import { ObjectId } from "mongodb"
import { cartsCollection, productsCollection } from "../database/db.js"

export async function getCart(req, res){

    const user = req.user

    try {
        
        const cart = await cartsCollection.findOne({userId: user._id})

        if(!cart) res.send("Seu carrinho está vazio! Comece a comprar")
        else res.send(cart)

    } catch (error) {
        console.log(error)
    }

}

export async function addProductInCart(req, res){
    const { productId } = req.body
    const user = req.user

    try {
        
        let cart = await cartsCollection.findOne({userId: user._id})

        const product = await productsCollection.findOne({_id: ObjectId(productId)})

        if(!product) return res.status(422).send("Esse produto não existe")

        if(!cart){
            await cartsCollection.insertOne({userId: user._id, products:[product]})
        }else {
            await cartsCollection.updateOne({userId: user._id}, { $push : {products: product}})
        }

        cart = await cartsCollection.findOne({userId: user._id})

        res.send(cart)

    } catch (error) {
        console.log(error)
    }
}


export async function deleteProductInCart(req, res){

    let { product } = req.body

    product = {...product, _id: new ObjectId(product._id)}

    const user = req.user

    try {
        const cart = await cartsCollection.findOne({userId: user._id})

        console.log("cart:", cart, "product:", product)

        if(!cart) return res.sendStatus(422)
        else await cartsCollection.updateOne({userId: user._id}, { $pull : {products: product}})

        return res.send("Produto deletado do carrinho!")

    } catch (error) {
        console.log(error)
    }

}


export async function cleanCart(req, res){

    const user = req.user

    try {

        await cartsCollection.deleteOne({userId: user._id})

        res.send("Carrinho esvaziado!")

    } catch (error) {
     
        console.log(error)
    }
}