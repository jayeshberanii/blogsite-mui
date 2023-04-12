import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"#121212"}}>
        <Header/>
        <Outlet />
    </div>
  )
}

export default Home