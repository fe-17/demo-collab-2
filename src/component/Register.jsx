import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,Navigate,Link } from 'react-router-dom'
import { actions } from '../store'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import img from '../assets/logo.png'

export default function Register() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector((state)=>state)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // input name Validation
        if(!userName.match(/^[a-zA-Z0-9_ ]*$/) ){
            toast('Invalid Name',{
                position:toast.POSITION.TOP_CENTER,
                autoClose:1000
              })
        }
        // input email validation
        else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            toast('Invalid Email address',{
                position:toast.POSITION.TOP_CENTER,
                autoClose:1000
              })
        }
        // input phone number validation
        else if(!phoneNumber.match(/^[0-9]+$/) ){
            toast('Invalid phone number',{
                position:toast.POSITION.TOP_CENTER,
                autoClose:1000
              })
        }
        else {
        toast('Registering User',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1000
          })
          // setting in local stroage
        localStorage.setItem("Email", JSON.stringify(email))
        localStorage.setItem("Password", JSON.stringify(password))
        dispatch(actions.addUser({
            userName: userName,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        }))
        setTimeout(navigateTo,2000)
    }

    }
    const navigateTo =()=>{
        navigate('/login')
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
    if(!flag){
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
                        <h1 className="text-2xl md:text-2xl font-bold leading-tight mt-8 text-center">REGISTER</h1>

                        <form role="form" onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input type="text" name="" id="name" placeholder="Masukan Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={userName} onChange={(e) => setUserName(e.target.value)} autoFocus required></input>
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="email" placeholder="Masukan Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input type="number" name="" id="phonenumber" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required></input>
                            </div>
                            <div className="mt-2">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" id="password" placeholder="Masukan Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                    focus:bg-white focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            </div>

                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6" value="Register">Daftar</button>
                        </form>
                        <p className="mt-8">
                            Sudah punya akun? 
                            <Link to={"/login"} className="text-blue-500 hover:text-blue-700 font-semibold">
                            Login Disini
                            </Link>
                        </p>
                    </div>
                    <ToastContainer />
                </div>
                {console.log(user)}
            </section>
        )
    }
    else {
        return (
          <Navigate to='/login' />
        )
      }
}