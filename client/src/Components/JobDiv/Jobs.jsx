import React from 'react'
import "./Jobs.css"
import { BiTimeFive } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Jobs({
    item
}
){
  const navigate = useNavigate();
  const handleApplyEvent = () => {
    navigate(`/apply/${item.id}`, {state: item})
  }
  return (
    <>
      <JobComponenet id="groupDiv">
          <span className="groupSpan">
          <h1 className="textH1">{item.title}</h1>
          <span className="SpanDiv">
              <BiTimeFive />
              {item.time}
          </span>
          </span>
          <h6 className="textH6">{item.location}</h6>
          <hr className="line" />
          <p className="textP">{item.desc}</p>
          <div className="company">
          <img src={`./images/${item.image}`} alt="" className="logo" />
          <span className="SpanDiv1">{item.company}</span>
          </div>
          <button className='btn1' onClick={handleApplyEvent}>View</button>
      </JobComponenet>
    </>
  )
}

export default Jobs

const JobComponenet = styled.div`
  width: 250px;
	padding: 20px;
	background-color: white;
	border-radius:10px ;
	border: none;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
	box-shadow: #f1f4f8;

    &:hover {
    background-color: rgb(19, 159, 241);
    .btn1{
      background-color: white;
    }
      
    }
    &:hover h1{
      color: white	
    }
    &:hover h6{
      color: white	
    }&:hover p{
      color: white	
    }
    &:hover span{
      color: white	
    }
    &:hover hr{
      color: white	
    }
    &:hover button{
      color: black
    }
    &:hover hr{
      color: white;
    }

    .groupSpan{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem; 
    }
    .textH1{
      font-size: 15px;
      font-weight: 600;
      color: black;
    }
    .textH6{
      color: #ccc;
    }
    .textP{
      font-size: 10px;
      color: #959595;
      padding-top: 20px;
      border-top: 2px;
      margin-top: 20px;
    }
    .SpanDiv{
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #ccc;
    }
    .line{
      margin-top: 15px;
      color: #ccc;
    }
    .company{
      display: flex;
      align-items: center;
      gap: 0.5rem; 
    }
    .logo{
      width: 10%;
    }
    .SpanDiv1{
      font-size: 13px;
      display: block;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .btn1{
      border-radius: 10px;
      border-width: 2px;
      display: block;
      padding: 10px;
      width: 100%;
      font-size: 14px;
      font-weight: 600;
      color: white;
      border: none;
      cursor: pointer;
      background-color: rgb(19, 159, 241);
    }
`