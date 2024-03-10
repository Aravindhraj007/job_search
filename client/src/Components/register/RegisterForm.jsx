import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SlOptionsVertical } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import axios from 'axios'
import { NotificationContext } from '../../context/NotificationContext';

function RegisterForm({data, setIsDelete}) {
  axios.defaults.withCredentials = true;
  const URL = 'http://localhost:3000/'
  const [view, setView] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const [item, setItem] = useState({})
  const {succesMsg} = useContext(NotificationContext)

  const handleView = () => {
    setView(!view)
  }
  const handleOption = () => {
    setIsOption(!isOption);
  }
  console.log(data)

  const handleDelete = async() => {
    try{
      const res = await axios.post(`${URL}delete`, {postId: data.id})
      setIsDelete(true)
      succesMsg("Deleted successfully")
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    setItem(JSON.parse(data.item))
  }, [])
  console.log(item)
  return (
    <RegisterComponent>
        <div className="header">
          <div className="logo">
          <img src={`images/${item.image}`}/>
          <h2 className='comp'>{item.company}</h2>
        </div>
          <div className="opt" onClick={handleOption}>
            {isOption ? <CancelIcon /> : <SlOptionsVertical />}
            {isOption &&
              <div className="menu">
              <strong className='str1 delete' onClick={handleDelete}>Delete</strong>
            </div>}
          </div>
        </div>
        
        {!view && 
          <div>
            <p><strong>Salary : </strong>&nbsp;&nbsp;{item.salary}</p>
            <p><strong>Type : </strong>&nbsp;&nbsp;{item.type}</p>
            <p><strong>Location : </strong>&nbsp;&nbsp;{item.location}</p>
          </div>
        }
        {view ?
          <div>
            <table>
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td> : </td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td> : </td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td><strong>Mobile Number</strong></td>
              <td> : </td>
              <td>{data.mobile}</td>
            </tr>
            <tr>
              <td><strong>Role</strong></td>
              <td> : </td>
              <td>{item.role}</td>
            </tr>
            <tr>
              <td><strong>Salary</strong></td>
              <td> : </td>
              <td>{item.salary}</td>
            </tr>
            <tr>
              <td><strong>Type</strong></td>
              <td> : </td>
              <td>{item.type}</td>
            </tr>
            <tr>
              <td><strong>Time</strong></td>
              <td> : </td>
              <td>{item.time}</td>
            </tr>
            <tr>
              <td><strong>Location</strong></td>
              <td> : </td>
              <td>{item.location}</td>
            </tr>
          </tbody>
        </table>
        <View className="view" onClick={handleView}>
          <p>View Less</p>
        </View>
          </div>
         :
        <View className="view" onClick={handleView}>
          <p>View more</p>
        </View>
        }

    </RegisterComponent>
  )
}

export default RegisterForm

const RegisterComponent = styled.div`
  background-color: #f1f4f8 ;
  border-radius:10px ;
  padding: 3rem;
  margin-bottom: 3rem;
  cursor: default;

  table td{
    padding-right: 30px;
  }
  h2,strong{
    color: rgb(30, 181, 227);
  }
  strong{
    font-weight: 600;
  }
  .comp{
    font-size: 1.2rem;
  }
  .opt{
    cursor: pointer;
    width: 30px;
    display: flex;
    justify-content: center;
  }
  .logo{
    margin: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    img{
      width: 25px;
      height: auto;
    }
    .comp{
      margin-left: 10px;
    }
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu{
      width: 90px;
      height; 200px;
      background-color: white;
      position: absolute;
      display: flex;
      margin-left: -100px;
      margin-top: 30px;
      flex-direction: column;
      .str1{
        padding: 5px 20px;
        display: inline-block;
        
        &:hover{
          background-color: rgba(30, 181, 227, 0.200);
        }
      }
      .edit{
          border-bottom: 1px solid rgb(30, 181, 227);
        }
    }
  }
`

const CancelIcon = styled(MdCancel)`
  scale: 1.4;
`

const View = styled.div`
  width: 100%;
  p{
    color: white;
    text-align: center;
    font-size: bolder;
    text-shadow: 2px 2px 4px black;
  }
`