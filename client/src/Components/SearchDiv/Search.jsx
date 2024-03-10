import React, { useContext } from "react";
import "./Search.css";
import { AiOutlineSearch , AiOutlineCloseCircle} from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { NotificationContext } from "../../context/NotificationContext";

const Search = ({
  search,
  setSearch,
  company,
  setCompany,
  location,
  setLocation,
  handleOnClickEvent
}) => {

  const {succesMsg} = useContext(NotificationContext)

  const handleClearAll = () => {
    if(search=='' && company=='' && location==''){
      return
    }
    succesMsg("Cleared all")
    setSearch('')
    setCompany('')
    setLocation('')
  }
  return (
    <div className="search">
      <form onSubmit={handleOnClickEvent}>
        <div className="firstDiv">
          <div className="icons">
            <AiOutlineSearch className="icon"  />
            <input type='text' className="search-input" placeholder="Search Job here ..."
              onChange={e=>setSearch(e.target.value)}
              value={search}
            />
            <AiOutlineCloseCircle className="icon1"  onClick={()=>setSearch('')}/>
          </div>
          <div className="icons">
            <BsHouseDoor className="icon"  />
            <input type='text' className="search-input" placeholder="Search Job by Company ..."
              onChange={e=>setCompany(e.target.value)}
              value={company}
            />
            <AiOutlineCloseCircle className="icon1"  onClick={()=>setCompany('')}/>
          </div>
          <div className="icons">
            <CiLocationOn className="icon"  />
            <input type='text' className="search-input" placeholder="Search Job by Location ..."
              onChange={e=>setLocation(e.target.value)}
              value={location}
            />
            <AiOutlineCloseCircle className="icon1"  onClick={()=>setLocation('')}/>
          </div>
          <button className='btn' type="submit">Search</button>
        </div>
      </form>

      <div className="search2">
        <div className='singleSearch'>
          <label htmlFor='relevance' className='sort-label' >Sort by :</label>
          <select name='' id='relevance' className='sort-select'>
            <option value=''>Relevance</option>
            <option value=''>Inclusive</option>
            <option value=''>Start With</option>
            <option value=''>Contains</option>
          </select>
        </div>
        <div className='singleSearch'>
          <label htmlFor='level' className='sort-label' >Level :</label>
          <select name='' id='relevance' className='sort-select'>
            <option value=''>Senior</option>
            <option value=''>Beginner</option>
            <option value=''>Intermediate</option>
            <option value=''>Advocate</option>
          </select>
        </div>
        <div className='singleSearch'>
          <label htmlFor='type' className='sort-label' >Type :</label>
          <select name='' id='relevance' className='sort-select'>
            <option value=''>Full-Time</option>
            <option value=''>Remote</option>
            <option value=''>Contract</option>
            <option value=''>Part-Time</option>
          </select>
        </div>
        <span onClick={handleClearAll}>Clear All</span>
      </div>
    </div>
  );
};

export default Search;
