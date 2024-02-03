const express=require('express')

const { addItem, getAllItems, viewItem, editItem, deleteItem } = require('../Controller/itemsControl')

//router object
const router=new express.Router()

//add item
router.post('/add-item',addItem)

//get all items
router.get('/getall-item',getAllItems)

//view item
router.get('/view-item/:_id',viewItem)

//edit item
router.put('/edit-item/:_id',editItem)

//delete item
router.delete('/delete-item/:_id',deleteItem)

module.exports=router
