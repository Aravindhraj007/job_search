import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Info({item}) {
    const [skill, setSkill] = useState([])
  return (
    <InfoComponent>
        <div className="abt-com">
            <strong>About Company</strong>
            <p>{item.about}</p>
        </div>        
        <div className="job-detail">
            <p><strong>Role :</strong> {item.role}</p>
            <p><strong>Industry Type :</strong> {item.industry_type}</p>
            <p><strong>Department :</strong> {item.department}</p>
            <p><strong>Job Type :</strong> {item.type}</p>
        </div>
        <div className="key">
            <strong>Key :</strong>
            <p>{item.key_skills}</p>
        </div>
        <div className="comp-com">
            <strong>Company Info</strong>
            <p>{item.company_info}</p>
        </div>
    </InfoComponent>
  )
}

export default Info

const InfoComponent = styled.div`
    margin: 2.5rem 0;
    padding: 2.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 

    strong{
        color: rgb(19, 159, 241);
        font-size: 1.1rem;
        font-weight: 500;
    }
    .comp-com{
        margin-top: 10px;
    }
    .comp-com,
    .abt-com{
        h3{
            color: rgb(19, 159, 241);
        }
        p{
            margin: 10px 0;
        }
    }

    .job-detail{
        margin: 10px 0;
        p{
            margin-top: 5px;
        }
    }
    .key p{
        margin-top: 5px;
    }
`