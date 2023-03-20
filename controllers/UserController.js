const { User } = require('../models')
const middleware = require('../middleware')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserDetails = async (req, res) => {
  try {
    const userDetails = await User.findByPk(req.params.user_id)
    res.send(userDetails)
  } catch (error) {
    throw error
  }
}

const RegisterUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      password,
      email,
      height,
      weight,
      age,
      activity
    } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      username,
      passwordDigest,
      email,
      height,
      weight,
      age,
      activity
    })
    res.send(patient)
  } catch (error) {
    throw error
  }
}

const LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({
      where: { username: username },
      raw: true
    })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on Login!' })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      let payload = {
        id: user.id,
        username: user.username
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleted User with ID number ${userId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  UpdatePassword,
  UpdateUser,
  DeleteUser,
  CheckSession,
  LoginUser,
  RegisterUser,
  GetAllUsers,
  GetUserDetails
}
