import mongoose from 'mongoose'
import { config } from '../config/default.js'
import { models } from './Schemas.js'

export default class DBMongo {
  constructor () {
    this.setConnection()
    this._models = models
  }

  async setConnection () {
    try {
      const db = await mongoose.connect(config.dbMongo.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log(`MongoDB connected: ${db.connection.host}`)
    } catch (error) {
      console.log(error)
    }
  }

  async insertData (model, data) {
    try {
      const modelInstance = this._models[model](data)
      const saved = await modelInstance.save()
      if (Object.keys(saved).length > 0) {
        return `create new item of ${model} successfully`
      }
      return `create new item of ${model} failed`
    } catch (error) {
      console.log(error)
      return `create new item of ${model} failed`
    }
  }

  async all (model) {
    try {
      const all = await this._models[model].find()
      if (Object.keys(all).length > 0) {
        return all
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }

  async findById (model, id) {
    try {
      const findById = await this._models[model].findById(id)
      if (findById) {
        return findById
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }

  async findByAttribute (model, attribute, value) {
    try {
      const findByAttribute = await this._models[model].find({ [attribute]: value })
      if (findByAttribute.length > 0) {
        return findByAttribute[0]
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }

  async update (model, id, data) {
    try {
      const update = await this._models[model].findByIdAndUpdate(id, data)
      if (update) {
        return `update item of ${model} successfully`
      }
      return `update item of ${model} failed`
    } catch (error) {
      console.log(error)
      return `update item of ${model} failed`
    }
  }

  async delete (model, id) {
    try {
      const deleteItem = await this._models[model].findByIdAndDelete(id)
      if (deleteItem) {
        return `delete item of ${model} successfully`
      }
      return `delete item of ${model} failed`
    } catch (error) {
      console.log(error)
      return `delete item of ${model} failed`
    }
  }

  async getByQuery (model, query) {
    try {
      const getByQuery = await this._models[model].find(query).populate('_idArtist').populate('_idAlbum')
      if (getByQuery.length > 0) {
        return getByQuery
      }
      return 'no item of Songs'
    } catch (error) {
      console.log(error)
      return 'no item of Songs'
    }
  }
}
