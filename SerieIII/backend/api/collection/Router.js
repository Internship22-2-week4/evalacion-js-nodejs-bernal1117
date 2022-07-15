import { HttpCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'

class CollectionRouter {
  constructor (router, controller) {
    this._router = router() //  instancia del enrutador de express
    this._ctrl = controller
    this._httpcode = HttpCode
    this._response = response
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/getcollection', this.handleGetPlaylist.bind(this)) // bind para cambiar el contexto del this y que lea el handleGetSong y usar controllers
    this._router.post('/createcollection', this.handlePostPlaylist.bind(this))
    this._router.delete('/deletecollection', this.handleDeleteSong.bind(this))
    this._router.put('/addnewphoto', this.handlePutSong.bind(this))
  }

  //  METODOS PARA REFACTORIZAR
  handleGetPlaylist (req, res) {
    const result = this._ctrl.getAllPlaylist()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handlePostPlaylist (req, res) {
    const collection = req.body
    const result = this._ctrl.createNewPlaylist(collection)
    this._response.succes(req, res, result, this._httpcode.ACCEPTED)
  }

  handleDeleteSong (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta delete/Playlist')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta put/Playlist')
  }
}

export default CollectionRouter
