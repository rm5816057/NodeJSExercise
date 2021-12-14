const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {

    res.send('The animal is successfully')
})
router.post('/:id', (req, res) => {

    res.send('The animal is create successfully')
})
router.delete('/:id', (req, res) => {

    res.send('Animal '+ req.params.id +' is delete successfully')
})
router.put('/:id', (req, res) => {

    res.send('The animal  is update successfully')
})

module.exports=router;