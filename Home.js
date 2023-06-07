import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
useNavigate

function Home() {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:users')
        .then(res => setData(res,data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div className='container'>
            <h1>EMPLOYEE LOGGING SYSTEM</h1>
            <Link to ="/make" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                         <th>Surname</th>
                         <th>Email Address</th>
                         <th>Bio</th>
                         <th>Image</th>
                         <th>Date of birth</th>
                         <th>Employee position</th>
                         <th>Phone number</th>  
                         <th>ID</th>
                         <th>Course</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i)=> (
                        <tr key={i}>
                            <td>{d.name}</td>
                            <td>{d.surname}</td>
                            <td>{d.emailaddress}</td>    
                            <td>{d.bio}</td>
                            <td>{d.image}</td>
                            <td>{d.dateofbirth}</td>
                            <td>{d.employeeposition}</td>
                            <td>{d.phonenumber}</td>
                            <td>
                                <Link className='text-decoration-none btn btn-sm btn-success'to={'/update/${d.id}'}>Update</Link>
                                <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handledelete(d.id)}>Update</button>
                                  <Link className='text-decoration-none btn btn-sm btn-primary' to={'/read/$'(d.id)}>Read</Link>
                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

    function handledelete(id) {
        window.confirm("Would you like to delete?");
        if(confirm) {
        axios.delte('http://localhost:profile/'+id)
        .then(res => {
            window
        }
        )
    }
}
}

export default Home