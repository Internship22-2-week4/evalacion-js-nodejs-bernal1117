import { response } from '../../response/response.js'
import expressValidation from 'express-validator'

const check = expressValidation.check
const validationResult = expressValidation.validationResult
export const validateCreteUser = [
  check('username')
    .isLength({ min: 3 })
    .exists()
    .withMessage('Name should be atleast 3 characters'),
  check('email')
    .exists()
    .isEmail()
    .withMessage('Please enter a valid email'),
  check('password')
    .exists()
    .isStrongPassword()
    .withMessage('Password should be atleast 8 characters, have a capital letter and a special character '),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (error) {
      response.error(req, res, error.array()[0].msg, 400)
    }
  }
]
