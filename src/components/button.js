import React from 'react'

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClickHandler} disabled={props.disabled}>
            {props.title}
        </button>
    )
}

export default Button