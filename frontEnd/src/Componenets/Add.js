import React, { useRef } from 'react';
import '../Css/Add.css';
import axios from 'axios';

export default function Add() {



    const name     = useRef(null);
    const age      = useRef(null);
    const address  = useRef(null);

    function add(){
        const id = Math.floor(Math.random()*1000)
        axios.post('http://localhost:3001/persons/add',{id:id,name:name.current.value,age:age.current.value,address:address.current.value});
        
        name.current.value="";
        age.current.value="";
        address.current.value="";
    }


    return (

        <div className='container'>

                <label>Name:</label>
                <input type='text' ref={name}></input>
                <label>Age:</label>
                <input type='text' ref={age}></input>
                <label>Address:</label>
                <input type='text' ref={address}></input>

                <button onClick={()=>add()}>Submit</button>

        </div>

    )
}
