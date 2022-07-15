class Photo {
  constructor (photo) {
    this._id = null
    this._title = photo.title
    this._uri = photo.uri
    this._desc = photo.desc
    this._idUser = photo.idUser

    // this._album = song.album;
  }

  get id () {
    return this._id
  }

  set id (id) {
    return this._id
  }

  returnNumber () {
    return 5
  }
}
export default Photo
