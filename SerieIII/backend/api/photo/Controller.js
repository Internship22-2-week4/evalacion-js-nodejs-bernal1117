
//  Los controladores se encargan de realizar toda la logica del negocio => ejemplo: calculos de productos, operaciones de aplicacion, etc.

class PhotoController {
  constructor (servicePhoto, photo) {
    this._service = servicePhoto
    this._entity = photo
  }

  async getAllPhoto () { // GET
    const response = await this._service.all('photos')
    return response
  }

  async createNewPhoto (photo) { // POST
    const newSong = await new this._entity(photo)
    const response = this._service.insertData('photos', newSong) // insertData viene de DBMongo.js
    return response
  }

  deletePhoto (id) { //  DELETE
    console.log(id)
    return 'Deleted song'
  }
}

export default PhotoController
