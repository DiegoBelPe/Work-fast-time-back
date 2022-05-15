const { Router } = require('express');
const { handlerCreateUser } = require('./user.controller');

const router = Router();

router.post('/', handlerCreateUser);

router.get('/');

router.delete('/:id');

router.patch('/:id');

module.exports = router;
