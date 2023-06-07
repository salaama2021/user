import React from 'react'
import React, { useState } from 'react'
import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams} from 'react-router-dom'


function Read(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:users')
        .then(res => setData(res,data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div className='container'>
                <div className='container p-5'>
                <p>{Data.id}</p>
                <p>{Data.name}</p>
                <p>{Data.surname}</p>
                <p>{Data.email}</p>
                <p>{Data.bio}</p>
                <p>{Data.image}</p>
                <p>{Data.date}</p>
                <p>{Data.employee}</p>
                <p>{Data.phone}</p>
                </div>
                </div>

    )
}

export default Read