import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeSection from "../components/Home/HomeSection"
import { AppContext } from "../context/app-context"

function App() {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('_urlogin')

    // if(!token) {
    //   navigate('/login')
    // }
  })

  return (
    <>
      <Header />
      <HomeSection />
      <Footer />
    </>
  )
}

export default App
