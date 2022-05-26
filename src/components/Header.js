import styled from "styled-components"

export default function Header () {
    return(
        <Container>
            <h2>TrackIt</h2>
        </Container>
    )
}

const Container = styled.div`
    height: 4.375rem;
    background-color: var(--header-color);
    font-family: 'Playball', cursive;
    font-size: 40px;
    box-sizing: border-box;
    padding: 20px;
`