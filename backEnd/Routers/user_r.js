const express = require('express')
const router  = express.Router()

const {getPersons,getPerson,addPerson,updatePerson,deletePerson}  = require('../Controllers/userController');


router.get('/',getPersons);
router.get('/:id',getPerson)
router.post('/add',addPerson);
router.put('/update',updatePerson);
router.delete('/delete/:id',deletePerson);




module.exports = router;