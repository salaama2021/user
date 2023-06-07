import axios from 'axios';
import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Update() {

    const{id} =useParams();

    const[inputData, setInputData] = useState
              
    const navigate = useNavigate();
    }

    useEffect(() => {
        axios.get('http://localhost:/users/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:/users/'+id,inputData)
        .then(res => {
            alert("Data Posted Successful")
            navigate ('/')
        }
        )}

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}></form>
                <div>
                        <label htmlFor='id'>id:</label>
                        <input type='number' name='id' className='form-control' value={InputData.name}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' value={InputData.name}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='surname'>Surname:</label>
                        <input type='text' name='surname' className='form-control' value={InputData.surname}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address:</label>
                        <input type='text' name='email' className='form-control' value={InputData.email}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='bio'>Bio:</label>
                        <input type='text' name='bio' className='form-control' value={InputData.bio}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='image'>Image:</label>
                        <input type='url' name='image' className='form-control' value={InputData.image}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='date'>Date of birth:</label>
                        <input type='numbers' name='date' className='form-control' value={InputData.date}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='employeeposition'>Employee Position:</label>
                        <input type='text' name='employeeposition' className='form-control' value={InputData.employee}
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                        </div>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type='numbers' name='phone' className='form-control' value={InputData.phone}
                        onChange={e => setInputData({...inputData,name: e.target.value})}/>
                    </div>
            </div>
        
        
    )
    



