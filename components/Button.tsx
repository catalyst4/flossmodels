import styled from 'styled-components'

const Button = styled.button`
    cursor: pointer;
    outline: none;
    font-weight: 600;
    text-transform: uppercase;
    padding: ${props => props.padding ? props.padding : '8px 15px'};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    background: ${props => props.outlined ? 'none' : props.bg ? props.bg : 'black'};
    border: ${props => props.border ? props.border : '2px solid'};
    border-color: ${props => props.borderColor ? props.borderColor : 'white'};
    border-radius: ${props => props.radius ? props.radius : '50px'};
    color: ${props => props.color ? props.color : 'white'};
    font-family: 'Poppins', sans-serif;
    margin-left: 10px;
    transition: ease-in-out 0.1s;
    opacity: ${props => props.disabled ? '0.1' : ''};
    cursor: ${props => props.disabled ? 'not-allowed' : ''};
    &:first-child {
        margin-left: 0;
    }
    &:hover {
        background: ${props => props.disabled ? '' : props.hoverBg ? props.hoverBg : 'black'};
        color: ${props => props.disabled ? '' : props.hoverColor ? props.hoverColor : 'white'};
        border-color: ${props => props.disabled ? '' : props.hoverBg ? props.hoverBg : 'black'};
    }
`

export default Button