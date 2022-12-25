import React from 'react'
import { Link } from 'react-router-dom'
import Create from './Create'
import List from './List'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Create/>
      <List/>
    </>
  )
}

export default Home;
