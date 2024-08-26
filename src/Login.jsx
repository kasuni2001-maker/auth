import { signInWithEmailAndPassword } from 'firebase/auth'  
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import './style.css'

export const Login = () => {

    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth,email,password)
            console.log("Login Successfully")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor='email'>
                Email :
                <input type='email'
                onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <label htmlFor='password'>
                Password :
                <input type='text'
                onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Login</button><br/>
            <p>Not Have Account? <Link to="/signup"> Register </Link></p>
        </form>
    </div>
  )
}
