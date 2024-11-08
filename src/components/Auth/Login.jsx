import React, { useState } from 'react'

function Login({handleLogin}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-4 border-emerald-600 p-20 rounded-xl'>
            <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }} 
                className='flex flex-col items-center justify-center'>
                
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required 
                name='email'
                className='outline-none bg-transparent focus:placeholder:text-black focus:text-black focus:bg-white duration-500 font-semibold placeholder:text-white border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter your Email' 
                />
                
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                name='password'
                className='outline-none bg-transparent focus:placeholder:text-black focus:text-black focus:bg-white duration-500 font-semibold placeholder:text-white border-2 border-emerald-600 mt-3 py-3 px-5 text-xl rounded-full' type="password" placeholder='Enter your Password' 
                />
                
                <button 
                type='submit' 
                className='text-white outline-none duration-500 hover:bg-emerald-600 font-semibold hover:px-9 bg-emerald-700 mt-5 py-3 px-8 text-xl rounded-full'>
                    Log In
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login