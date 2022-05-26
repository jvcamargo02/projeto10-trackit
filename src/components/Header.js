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
    font-size: 40px;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0; right: 0; left: 0;

    img{
        height: 51px;
        clip-path: circle(50% at 50% 50%);
    }
`