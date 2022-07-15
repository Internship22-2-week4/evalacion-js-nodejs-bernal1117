import express from 'express'
import PhotoController from './Controller.js'
import PhotoRouter from './Router.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { checkToken } from './secure.js'
import DBMongo from '../../store/DBMongo.js'
import Photo from '../../entity/Photo.js'

export const photoModule = () => {
  const servicesPhoto = new DBMongo()
  const photoControllers = new PhotoController(servicesPhoto, Photo)
  const photoRouter = new PhotoRouter(express.Router, photoControllers, HttpCode, response, checkToken)
  return photoRouter._router
}
