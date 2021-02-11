import styled from 'styled-components'

const FlexBetween = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export default FlexBetween
