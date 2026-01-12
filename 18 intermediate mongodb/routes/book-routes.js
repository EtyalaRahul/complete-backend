const express=require("express")
const router=express.Router() 
const {createAuthor,createBook,getBookWithAurhor}=require('../controllers/book-controller')

router.post('/author',createAuthor)
router.post('/book',createBook)
router.get('/book/:id',getBookWithAurhor)





module.exports=router