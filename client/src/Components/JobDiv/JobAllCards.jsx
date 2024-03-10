import React from "react";
import "./Jobs.css";
import Jobs from "./Jobs";

const JobAllCards = ({jobs}) => {
  return (
    <div>
      <div className="job">
        {jobs.length > 0 ?
            jobs.map((item, index) => {
                return(
                    <Jobs 
                        key={index}
                        item={item}
                    />
                )
            }) : <p>No match</p>
        }
      </div>
    </div>
  );
};

export default JobAllCards;
