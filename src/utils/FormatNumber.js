import React from 'react'
import ReactDOM from 'react-dom'

const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)}</span>
}

export default FormatNumber;