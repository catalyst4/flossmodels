import React from 'react'
import styled from 'styled-components'

interface TextField {
    value?: unknown,
    placeholder?: String,
    onChange?: Function,
    disabled?: Boolean,
    error?: Boolean,
    helperText?: String,
    valid?: Boolean | Function
}

const TextField = ({ value, placeholder, onChange, error, helperText, valid }: TextField) => {
    return (
        <Input 
            value={value ? value : ''}
            placeholder={placeholder}
            onChange={onChange}
            error={error}
            valid={valid}
        />
    )
}

export default TextField

const Input = styled.input`
    width: 100%;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    padding: 15px;
    border: 1px solid #dfdfdf;
    box-shadow: ${props => props.error ? '0 0 3px 3px rgba(255, 0, 0,0.2)' : props.valid ? '0 0 3px 3px rgba(255, 0, 242,0.1)' : ''};
    border-radius: 5px;
    color: black;
    outline: none;
    margin-bottom: 15px;
`