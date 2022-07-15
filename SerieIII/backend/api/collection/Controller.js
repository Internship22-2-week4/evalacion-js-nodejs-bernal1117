
class CollectionController {
  constructor (servicePlaylist, collection) {
    this._service = servicePlaylist
    this._entity = collection
  }

  getAllPlaylist () { // GET
    const response = this._service.all('collections')
    return response
  }

  createNewPlaylist (collection) { // POST
    const newPlaylist = new this._entity(collection)
    const response = this._service.save('collections', newPlaylist)
    return response
  }

  updateSong (song) { //  PUT
    console.log(song)
    return 'Updated song'
  }

  deleteSong (id) { //  DELETE
    console.log(id)
    return 'Deleted song'
  }
}

export default CollectionController
