import { getUser, getOneUser, createUser, deleteUser, updateUser } from '../controllers/UserController'

const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/authorization')

// /user/
router.get('/', verifyToken, getUser)
// /user/cadastro
router.post('/cadastro', createUser)
// /user/userId
router.get('/:id', verifyToken, getOneUser)
// /user/delete/userId
router.delete('/delete/:id', verifyToken, deleteUser)
// /user/update/userId
router.put('/update/:id', verifyToken, updateUser)

module.exports = router
