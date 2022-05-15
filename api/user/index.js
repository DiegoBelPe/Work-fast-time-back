const { Router } = require('express');
const { handlerCreateUser, handlerLoginUser } = require('./user.controller');

const router = Router();

router.post('/', handlerCreateUser);

router.post('/login', handlerLoginUser);

router.get('/');

router.delete('/:id');

router.patch('/:id');

module.exports = router;
