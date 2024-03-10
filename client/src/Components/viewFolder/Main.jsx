import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosStar } from "react-icons/io";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import ApplyPopUp from '../apply/ApplyPopUp';

function Main({item}) {
    const [popUp, setPopUp] = useState(false);
    const handlePopUp = () => {
        setPopUp(!popUp);
    }
  return (
    <ApplyDiv>
            <h2>{item.role}</h2>
            <div className="company-info">
                <div className="com-detail">
                    <div className="company-name">
                        <span className='left'>{item.company}</span>
                        <span className='right'><StartIcon /> {item.rating}</span>
                    </div>

                    <div className="detail">
                        <div className="exp">
                            <span className='bag'><PiHandbagSimpleFill />&nbsp;  {item.experience}</span>
                            <span className='mid'> | </span>
                            <span><FaIndianRupeeSign />&nbsp; {item.salary}</span>
                        </div>
                        <div className="loc">
                            <span><FaLocationDot />&nbsp; {item.location}</span>
                        </div>
                    </div>
                </div>
                <div className="com-logo">
                    <img src={`/images/${item.image}`} alt="" width={100} height={100} />
                </div>
            </div>
            <button className='btn' onClick={handlePopUp}>Apply</button>

            {popUp && 
            <ApplyPopUp
                item={item}
                handlePopUp={handlePopUp}
            />}
            
        </ApplyDiv>
  )
}

export default Main

const ApplyDiv = styled.div`
    background-color: #f1f4f8 ;
	border-radius:10px ;
	padding: 3rem;

    h2{
        color: rgb(19, 159, 241);
    }

    .company-info{
        display: flex;
        justify-content: space-between;
    }

    .company-name{
        display: flex;
        .left{
            font-weight: 600;
            font-size: 1.1rem;
        }
        .right{
            margin-left: 30px;
        }
    }

    .detail{
        margin-top: 18px;
        .exp{
            .mid{
                margin: 0 20px;
            }
        }
    }

    .com-logo img{
        width: 100px;
        height: auto;
    }

    .btn{
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
    }
`

const StartIcon = styled(IoIosStar)`
    color: #ffbf1c;
`