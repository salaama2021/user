import axios from 'axios'
import React from 'react'
import { useState} from 'react'

function Make() {
    const[inputData, setInputData] = useState
              
    
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(inputData)
        .then(res => {
            alert("Data Posted Successful")
            navigate ('/')
        }
        )}

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='id'>Id</label>
                        <input type='text' name='id' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='surname'>Surname:</label>
                        <input type='text' name='surname' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address:</label>
                        <input type='text' name='email' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='bio'>Bio:</label>
                        <input type='text' name='bio' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='image'>Image:</label>
                        <input type='url' name='image' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='date'>Date of birth:</label>
                        <input type='numbers' name='date' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='employee'>Employee Position:</label>
                        <input type='text' name='employee' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='numbers' name='phone' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>

                </form>
            </div>
        </div>
    )


