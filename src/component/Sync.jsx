import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Home from './Home'
import Login from './Login'

export default function Sync() {
  const user = useSelector((user) => user)
  const navigateTo = useNavigate()
  const [flag, setFlag] = useState(false)
  
  useEffect(() => {
    const loginFlag = localStorage.getItem('loginFlag')
    if (loginFlag == 'true') {
      setFlag(true)
    }
    else {
      setFlag(false)
    }
  }, [flag])
  return (
    <>{flag ?
      <>
        <Home />
      </>
      :
      <>
        <Login />
      </>
    }
    </>
  )
}
