import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/NavBar/NavBar'
import Search from '../Components/SearchDiv/Search'
import Value from '../Components/ValueDiv/Value'
import data from '../data/data.json'
import datatable2 from '../data/datatable2.json'
import JobAllCards from '../Components/JobDiv/JobAllCards'
import { NotificationContext } from '../context/NotificationContext'

function Home() {
  const [search, setSearch] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const {succesMsg, errorMsg, warnMsg} = useContext(NotificationContext);

  const handleFilterJobs = () => {
    if(search=='' && company=='' && location==''){
      warnMsg("Enter any field")
    }
    if(search && company && location){
      const listener = jobs.filter(job => {
        return (job.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && job.company.toLocaleLowerCase().includes(company.toLocaleLowerCase()) && job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No match')
      }
    }
    else if(search && location){
      const listener = jobs.filter(job => {
        return (job.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No match')
      }

    }else if(search && company){
      const listener = jobs.filter(job => {
        return (job.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && job.company.toLocaleLowerCase().includes(company.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No match')
      }
    }else if(location && company){
      const listener = jobs.filter(job => {
        return (job.company.toLocaleLowerCase().includes(company.toLocaleLowerCase()) && job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No match')
      }
    }else if(search){
      const listener = jobs.filter(job => {
        return (job.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No job match')
      }

    }else if(location){
      const listener = jobs.filter(job => {
        return (job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No location match')
      }

    }else if(company){
      const listener = jobs.filter(job => {
        return (job.company.toLocaleLowerCase().includes(company.toLocaleLowerCase())) ? {...job} : null
      })
      setJobs(listener)
      if(listener.length==0){
        succesMsg('No company match')
      }
    }
  }


  const handleOnClickEvent = (e) => {
    e.preventDefault();
    console.log(search, location, company)
    handleFilterJobs()
  }

  useEffect(() => {
    // setJobs([...data.job])
    setJobs([...datatable2.jobs])
  }, [search, location, company])
  return (
    <>
      <Navbar />
      <Search 
        search = {search}
        setSearch = {setSearch}
        company = {company}
        setCompany = {setCompany}
        location = {location}
        setLocation = {setLocation}
        handleOnClickEvent={handleOnClickEvent}
      />
      <JobAllCards
        jobs={jobs}
      />
      <Value/>
    </>
  )
}

export default Home