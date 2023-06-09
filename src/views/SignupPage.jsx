import { Component, useState } from 'react'
import { userService } from '../services/user.service'
import { connect, useDispatch, useSelector } from 'react-redux'
import { signup } from '../store/actions/user.actions';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export function SignupPage() {

    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')

    function handleChange({ target }) {
        let value = target.value
        setName(value)
    }

    function onSignup() {
        dispatch(signup(name))
        navigate('/')
    }

    if (user) return (
        <div className='user-loggedin'>
            Start trading now {user.name}!
            <NavLink to="/"><button className='btn-action'>Start Now</button></NavLink>
        </div>
    )
    return (
        <section className='signup-section'>
            <h1>Sign up to get 100 USD trading fee!</h1>
            <label htmlFor="term">Name</label>
            <input onChange={handleChange} value={name} type="text" name="name" id="name" />
            <button onClick={() => onSignup()}>Create Personal Account</button>
        </section>
    )
}