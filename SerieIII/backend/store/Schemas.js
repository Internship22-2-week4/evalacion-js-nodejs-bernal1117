import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _email: { type: String, required: true },
  _password: { type: String, required: true }
})

const PhotoSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _uri: { type: String, required: true },
  _desc: { type: String, required: true },
  // _idArtist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: false },
  // _idAlbum: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: false },
  _idUser: { type: Number, required: true }
})

const CollectionSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _idImage: { type: String, required: true },
  _idUser: { type: String, required: true }
})

const ArtistSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _image: { type: String, required: true }
})
const AuthSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _password: { type: String, required: true }
})

const userModel = mongoose.model('User', UserSchema)
const photoModel = mongoose.model('Photo', PhotoSchema)
const authModel = mongoose.model('Auth', AuthSchema)
const artistModel = mongoose.model('Artist', ArtistSchema)
const collectionModel = mongoose.model('Collection', CollectionSchema)

export const models = {
  users: userModel,
  photos: photoModel,
  auths: authModel,
  artist: artistModel,
  collections: collectionModel
}
