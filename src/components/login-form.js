import React from 'react'
import Button from './button'

const LoginForm = (props) => {

    return (
        <form className='login' onSubmit={props.login}>
            <input className='login__input input' id='email' type='email' placeholder='e-mail' autofocus='true' />
            <input className='login__input input' id='password' type='password' placeholder='password' />
            <Button className='login__submit' title='-->' />
        </form>
    )
}

export default LoginForm