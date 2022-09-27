const User  = require('../Models/user');


const getPersons = (req,res) =>{

    User.FetchAll().then((x)=>res.send(x))

}

const getPerson  = (req,res)=>{

    const id = req.params.id
    User.FetchOne(id).then((x)=>res.send(x))

}

const addPerson  = (req,res)=>{
    
    const id      = req.body.id;
    const name    = req.body.name;
    const age     = req.body.age;
    const address = req.body.address;

    User.Add(id,name,age,address);
    res.send('we seccess in add');

}

const updatePerson  = (req,res)=>{
    const id       = req.body.id;
    const name     = req.body.name;
    const age      = req.body.age;
    const address  = req.body.address;

    User.Update(id,name,age,address);


}

const deletePerson  = (req,res)=>{

    const id = req.params.id
    User.Delete(id);
    res.send('we success')

}


module.exports = {getPersons,getPerson,addPerson,updatePerson,deletePerson};