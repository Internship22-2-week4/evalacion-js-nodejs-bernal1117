import { HttpCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'

class PhotoRouter {
  constructor (router, controller, checkToken) {
    this._router = router() //  instancia del enrutador de express
    this._ctrl = controller
    this._httpcode = HttpCode
    this._response = response
    this._checkToken = checkToken
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/getphotos', /* this._checkToken, */ this.handleGetPhoto.bind(this)) // bind para cambiar el contexto del this y que lea el handleGetSong y usar controllers
    this._router.post('/newphoto', this.handlePostPhoto.bind(this))
    this._router.delete('/deletephoto', this.handleDeletePhoto.bind(this))
  }

  //  METODOS PARA REFACTORIZAR
  async handleGetPhoto (req, res) {
    try {
      const result = await this._ctrl.getAllPhoto('photos')
      this._response.succes(req, res, result, this._httpcode.OK)
    } catch (error) {
      this._response.error(req, res, this._httpcode.INTERNAL_SERVER_ERROR)
    }
  }

  async handlePostPhoto (req, res) {
    const photo = req.body
    const result = await this._ctrl.createNewPhoto(photo)
    this._response.succes(req, res, result, this._httpcode.ACCEPTED)
  }

  handleDeletePhoto (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta delete/Song')
  }
}

export default PhotoRouter
