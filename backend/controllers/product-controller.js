const Category = require('../models/category-model')
const Product = require('../models/product-model')
const Tag = require('../models/tag-model')

const mongoose = require('mongoose')

let productController = {
  getProducts: async (req, res) => {
    try {
      let _id = req.params._id
      Category.findOne({ _id })
        .populate({ path: 'PRODUCTS', populate: { path: 'TAGS' } })
        .populate({ path: 'PRODUCTS', populate: { path: 'CATEGORIES' } })
        .populate('SUB_CATEGORIES')
        .exec((err, category) => {
          if (err) return res.status(400).send(null)

          if (!category) return res.status(202).send(null)
          return res.status(200).send(category)
        })
    } catch (error) {
      return res.status(400).send(null)
    }
  },

  getProduct: async (req, res) => {
    try {
      const _id = req.params._id
      Product.findById(_id, (err, product) => {
        if (err || !product) {
          res.status(400).send(null)
        } else {
          res.status(200).send(product)
        }
      })
    } catch (error) {
      res.status(400).send(null)
    }
  },

  saveProduct: async (req, res) => {
    try {
      const _id = req.params._id
      console.log(_id)
      const data = req.body.data
      Product.findOne({ NAME: data.NAME }, async (err, product) => {
        console.log(product)
        if (err) {
          return res.send({
            status: 400,
            data: null,
            message: 'Error en buscar nombre repetido.',
          })
        }
        if (product) {
          return res.send({
            status: 202,
            data: null,
            message: 'Ya existe producto con el mismo nombre.',
          })
        } else {
          const session = await mongoose.startSession()
          session.startTransaction()
          try {
            const product = await Product.create([data], { session })
            console.log(product)
            const cat = await Category.findByIdAndUpdate(
              _id,
              {
                $push: { PRODUCTS: product[0]._id },
              },
              { new: true }
            ).session(session)
            if (cat) {
              await session.commitTransaction()
              session.endSession()
              return res.send({
                status: 200,
                data: product[0],
                message: 'Guardado correctamente.',
              })
            } else {
              await session.abortTransaction()
              session.endSession()
              return res.send({
                status: 400,
                data: null,
                message: 'Verifique Id de categoria.',
              })
            }
          } catch (error) {
            await session.abortTransaction()
            session.endSession()
            return res.send({
              status: 400,
              data: null,
              message: error,
            })
          }
        }
      })
    } catch (error) {
      return res.send({
        status: 400,
        data: null,
        message: error,
      })
    }
  },
}

module.exports = productController
