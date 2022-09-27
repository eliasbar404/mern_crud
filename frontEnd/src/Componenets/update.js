import React, { useRef, useState , useEffect} from 'react';
import '../Css/Add.css';
import axios from 'axios';

export default function Update() {

    const id = (window.location.href).slice(29);
    const fname     = useRef(null);
    const fage      = useRef(null);
    const faddress  = useRef(null);

    // const [data,setData] = useState([]);
    const [name,setName]= useState('');
    const [age,setAge]= useState('');
    const [address,setAddress]= useState('');
    


    useEffect(() => {

        axios.get(`http://localhost:3001/persons/${id}`)
        .then(res => {
            const persons = res.data;

            setName(persons[0].name)
            setAge(persons[0].age)
            setAddress(persons[0].address)
            
        })

    }, []);





    




    function update(){

        axios.put('http://localhost:3001/persons/update',{id:id,name:name,age:age,address:address});
        window.location.href = "http://localhost:3000";
        
    }


    return (

        <div className='container'>

                <label>Name:</label>
                <input type='text' ref={fname} value={name} onChange={(e)=> setName(e.target.value)} ></input>
                <label>Age:</label>
                <input type='text' ref={fage}  value={age}  onChange={(e)=> setAge(e.target.value)}></input>
                <label>Address:</label>
                <input type='text' ref={faddress} value={address}  onChange={(e)=> setAddress(e.target.value)}></input>

                <button onClick={()=> update()}>Save</button>

        </div>

    )
}
