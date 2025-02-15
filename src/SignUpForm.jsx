import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import './style.css'

export const SignUpForm = () => {

    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            console.log("Account Created")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <h2>Sign up</h2>
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
            <button type='submit'>Sign Up</button><br/>
            <p>Already Registered? <Link to="/login"> Login </Link></p>
        </form>
    </div>
  )
}
