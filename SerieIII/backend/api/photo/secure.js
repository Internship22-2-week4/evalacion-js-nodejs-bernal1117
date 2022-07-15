import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
// import { HttpCode } from '../../response/httpcode.js'

export const checkToken = async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'] || ''
  if (token) {
    const verify = await helpers.verifyToken(token)
    if (verify) {
      console.log('Token valid')
      next()
    } else {
      console.log('Token invalid')
      return response.error(req, res, 'Token invalid', 200) // response.httpCode.OK
    }
  } else {
    return response.error(req, res, 'Token not found', 404) // response.httpCode.ERROR
  }
}

// jwt.verify(token, config.jwt.secret, (err, decoded) => {
// if (err) {
// return res.status(401).json({})
// }
// })
// }
