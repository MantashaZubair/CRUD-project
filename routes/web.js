import express from 'express'
const router =express.Router()
import StudentControllers from "../controllers/StudentControllers.js"


router.get('/', StudentControllers.getAllDoc)
router.post('/', StudentControllers.createDoc)
router.get('/edit/:id', StudentControllers.editDoc)
router.post('/update/:id', StudentControllers.updateDocById)
router.post('/delete/:id', StudentControllers.deleteDocById)

export default router