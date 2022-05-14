const { Router } = require('express');
const {
  handlerAllReport,
  handlerOneReport,
  handlerDeleteReport,
  handlerCreateReport,
  handlerUpdateReport,
} = require('./reports.controller');

const router = Router();

router.get('/', handlerAllReport);
router.get('/:id', handlerOneReport);
router.delete('/:id', handlerDeleteReport);
router.post('/', handlerCreateReport);
router.patch('/:id', handlerUpdateReport);

module.exports = router;
