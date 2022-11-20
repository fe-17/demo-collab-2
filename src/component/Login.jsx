import React, { useState, useEffect } from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import img from '../assets/logo.png'

export default function Login() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // fetching from local storage
    var l_email = localStorage.getItem("Email").replace(/"/g, "")
    var l_password = localStorage.getItem("Password").replace(/"/g, "")
    // login validation
    if (l_email == email && l_password == password) {
      toast('Loging in', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
      localStorage.setItem('loginFlag', true)
      setTimeout(navigateTo, 1500)
    }
    else {
      toast('Invalid Credential', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
    }
  }
  const navigateTo = () => {
    navigate('/sync')
  }
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
  if (!flag){
        return (
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-gray-200 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <h1><Link to={"/homepage"} className="text-lg font-bold">Kembali ke Homepage</Link></h1>
                    <img src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80" alt="" className="w-full h-full object-cover"/>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
                    <div className="w-full h-100">
                        <img className="mt-2" src={img} alt=""/>
                        <h1 className="text-2xl md:text-2xl font-bold leading-tight mt-12 text-center">LOGIN</h1>

                        <form role="form" onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" name="" id="email" placeholder="Masukan Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required></input>
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" id="pwd" placeholder="Masukan Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                    focus:bg-white focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            </div>
                            {/* <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Lupa Password?</a>
                            </div> */}
                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6" value="Login">Log In</button>
                        </form>
                        <p className="mt-8">
                          Belum punya akun? 
                          <Link to={"/register"} className="text-blue-500 hover:text-blue-700 font-semibold">
                            Daftar Disini
                          </Link>
                        </p>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        )
    }
    else {
    return (
      <Navigate to='/login' />
    )
  }
}