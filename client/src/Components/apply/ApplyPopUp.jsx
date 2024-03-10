import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdCancel } from "react-icons/md";
import axios from 'axios';
import { NotificationContext } from '../../context/NotificationContext';

function ApplyPopUp({handlePopUp, item}) {
    axios.defaults.withCredentials = true;
    const [values, setValues] = useState({});
    const URL = 'http://localhost:3000/';
    const [exp, setExp] = useState('fresher');
    const [expYear, setExpYear] = useState('0')
    const {succesMsg} = useContext(NotificationContext)

    const handleSubmitEvent = (e) => {
        e.preventDefault()
        handlePopUp()
        succesMsg("Applied successfully")
        handleData();
    }

    const handleData = async() => {
        try{
            const res = await axios.post(`${URL}user_data`, {values, status: exp, experience: expYear, item: JSON.stringify(item)})
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    
    
  return (
    <ApplyPopUPDiv>
        <form className="apply-page" onSubmit={handleSubmitEvent}>
            <div className="apply-header">
                <div className='title'><strong>Register</strong>Page</div>
                <CancelIcon onClick={handlePopUp}/>
            </div>

            <div className="all-fields">
                <div className="inp-field">
                    <label htmlFor="name">Name : </label><br />
                    <input type="text" name="name" id='name' placeholder='Enter your name' onChange={handleChange} required/>
                </div>

                <div className="inp-field">
                    <label htmlFor="email">E-mail : </label><br />
                    <input type="email" name="email" id='email' placeholder='Enter your e-mail' onChange={handleChange} required/>
                </div>

                <div className="inp-field">
                    <label htmlFor="phone">Mobile Number : </label> <br />
                    <input type="tel" name="phone" id='phone' placeholder='Mobile number' onChange={handleChange} required/>
                </div>

                <div className="inp-field">
                    <label htmlFor="status">Work Status : </label> <br />
                    <select onChange={e=>setExp(e.target.value)}>
                        <option value="fresher" defaultChecked>Fresher</option>
                        <option value="experienced">Experienced</option>
                    </select>
                </div>

                {exp=='experienced' &&
                    <div className="inp-field">
                        <label htmlFor="experienced">Experience : </label><br />
                        <input type="number" id='experienced' name="experienced" min={1} defaultValue={1} onChange={e=>setExpYear(e.target.value)}/>
                    </div>
                }
            </div>

            <div className="submit-btn">
                <button type='submit'>Submit</button>
            </div>
            
        </form>
    </ApplyPopUPDiv>
  )
}

export default ApplyPopUp

const ApplyPopUPDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(30, 181, 227, 0.200);
    top: 0;
    left: 0;
    z-index: 11;

    strong{
        color: rgb(30, 181, 227);
    }

    .title{
        font-size: 1.7rem;
        color: rgb(30, 181, 227);
    }
    
    .apply-page{
        width: 540px;
        height: auto;
        background-color: white;
        border-radius: 20px;
        padding: 2.5rem;

        .apply-header{
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .all-fields{
            padding: 0 2rem;
        }

        input,
        select{
            margin: 5px;
            border: 1px solid rgb(30, 181, 227);
            width: 100%;
            padding: 5px 15px;
            font-size: 1rem;
            color: black;

            &:focus,&:active{
                outline: none;
                border: 1.5px solid rgb(30, 181, 227);
            }
        }

        label{
            color: rgb(30, 181, 227);
            font-size: 1.2rem;
        }

        .inp-field{
            margin-top: 20px;
        }
        
        .submit-btn{
            margin-top: 5px;
            width: 100%;
            display: flex;
            justify-content: center;
            button{
                margin-top: 18px;
                border-radius: 10px;
                border-width: 2px;
                display: block;
                padding: 10px 40px;
                font-size: 14px;
                font-weight: 600;
                color: white;
                border: none;
                cursor: pointer;
                background-color: rgb(19, 159, 241);
                border: 1px solid rgb(19, 159, 241);

                &:hover{
                    background: white;
                    color: rgb(19, 159, 241);
                    border: 1px solid rgb(19, 159, 241);
                }
            }}
        
    }

`

const CancelIcon = styled(MdCancel)`
    color: rgb(30, 181, 227);
    scale: 1.3;
    cursor: pointer;
`