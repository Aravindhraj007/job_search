import React, { useEffect, useState } from 'react'
import RegisterForm from './RegisterForm'
import axios from 'axios';
import styled from 'styled-components';

function RegisterAllCard() {
    axios.defaults.withCredentials = true;
    const URL = 'http://localhost:3000/'
    const [allData, setAllData] = useState([])
    const [isDelete, setIsDelete] = useState(false);

    const apiCall = async() => {
        try{
            const res = await axios.get(`${URL}getRegisteredData`)
            setAllData([...res.data])
            setIsDelete(false)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        apiCall();
    }, [isDelete])
  return (
    <AllRecord>
        {allData.length>0 ?
        allData.map((data, index) => {
            return <RegisterForm 
                key={index}
                data={data}
                setIsDelete={setIsDelete}
            />
        }) :
        <p className='no-found'>No register record 😔!</p>   
    }
    </ AllRecord>
  )
}

export default RegisterAllCard

const AllRecord = styled.div`
    .no-found{
        padding: 3rem;
        text-align: center;
    }
`