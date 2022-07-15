import express from 'express'
import CollectionController from './Controller.js'
import CollectionRouter from './Router.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import DBMongo from '../../store/DBMongo.js'
import Playlist from '../../entity/Collection.js'

export const collectionModule = () => {
  const servicesCollection = new DBMongo()
  const collectionControllers = new CollectionController(servicesCollection, Playlist)
  const collectionRouter = new CollectionRouter(express.Router, collectionControllers, HttpCode, response)
  return collectionRouter._router
}
