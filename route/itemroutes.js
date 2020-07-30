const express = require('express');
const { item } = require('../controller/item');
const router = express.Router();

router.get('/list', item.getItems);

router.post('/add', item.addItem);

router.put('/done', item.markItemAsDone);

router.delete('/delete', item.deleteItem);

module.exports = router;