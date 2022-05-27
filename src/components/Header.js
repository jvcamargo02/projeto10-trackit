import styled from "styled-components"
import perfil_img from "../assets/perfil-image.jpg"

export default function Header () {
    return(
        <Container>
            <h2>TrackIt</h2>
            <img src={perfil_img} alt="Perfil" />
        </Container>
    )
}

const Container = styled.div`
    height: 4.375rem;
    background-color: var(--header-color);
    font-family: 'Playball', cursive;
    font-size: 2.5rem;
    box-sizing: border-box;
    padding: 0.625rem 1.25rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0; right: 0; left: 0;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.3);


    img{
        height: 3.18rem;
        clip-path: circle(50% at 50% 50%);
        cursor: pointer;
    }
`