import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/NavBar/NavBar'
import Main from '../Components/viewFolder/Main'
import Info from '../Components/viewFolder/Info'
import axios from 'axios'

function Apply() {
    axios.defaults.withCredentials = true;
    const location = useLocation()
    const [item, setItem] = useState({})
    useEffect(() => {
        setItem(location.state)
    }, [])

  return (
    <>
        <Navbar />
        <Main 
            item={item}
        />
        <Info 
            item={item}
        />
    </>
  )
}

export default Apply

