const { Router } = require('express');
const { handlerCreateUser, handlerGetAllUser, handlerGetAllUserByEmail } = require('./user.controller');

const router = Router();

router.post('/', handlerCreateUser);

router.get('/', handlerGetAllUser);

router.get('/by-email', handlerGetAllUserByEmail);

router.delete('/:id');

router.patch('/:id');

module.exports = router;
