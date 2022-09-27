import React, { useState , useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Home.css';
import axios from 'axios';




export default function Home() {

  const [data,setData]   = useState([]);
  
  const [reset,setReset] = useState(true);

  const [search,setSearch] = useState("");



  

  const ser  = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/persons`)
    .then(res => {
      const persons = res.data;
      setData(persons)
    })

  }, [reset]);

  function Delete(id){
    axios.delete(`http://localhost:3001/persons/delete/${id}`);
    setReset(!reset)
  }







  
  return (
    <div>

      <input type='text' className='input' placeholder='Search....' ref={ser} onChange={(e)=>setSearch(e.target.value)}></input>



      <table className='table table-striped table-hover table-bordered caption-top'>
      <caption>List of users</caption>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Age</th>
            <th scope='col'>Address</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>

        <tbody>

        
        {
        data.filter((x)=>{
          if(search === ""){
              return x;
          }
          else if(x.name.toLowerCase().startsWith(search.toLowerCase())){
              return x;
      
          }}).map((x)=>(<tr key={x.id}>
          <td>{x.name}</td>
          <td>{x.age}</td>
          <td>{x.address}</td>
          <td>

            <a href={`/update/${x.id}`} className='btn btn-warning button'>Edit</a>
            <button className='btn btn-danger button' onClick={()=> Delete(x.id)} >Delete</button>

          </td>

        </tr>))
      }

        </tbody>

        <tfoot>

        </tfoot>
      </table>




    </div>
  )
}
